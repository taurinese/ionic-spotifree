<template>
  <ion-header>
    <ion-toolbar>
      <ion-title color="primary">{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding" color="light">
    <!-- <p v-html="getPlan[0].content"></p> -->
    <IonGrid v-if="!paymentProcessed">
      <IonRow>
        <IonCol>
          <IonItem color="light">
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput type="text" v-model="name"></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem color="light">
            <IonLabel position="stacked">Code promo</IonLabel>
            <IonInput type="text" v-model="coupon"></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <div id="card-element"></div>
        </IonCol>
      </IonRow>
      <IonRow
        ><IonButton
          color="primary"
          @click="submit"
          :disabled="payment_processing"
          >Payer</IonButton
        ></IonRow
      >
    </IonGrid>
    <IonGrid v-else>
      <IonRow>
        <IonCol>{{ messageProcessed }}</IonCol>
      </IonRow>
      <IonRow>
        <IonCol
          ><p>Prix de l'abonnement</p>
          <p>{{ getPlan[0].price / 100 }}€</p></IonCol
        >
      </IonRow>
      <IonRow>
        <IonCol
          ><p>Date de l'abonnement</p>
          <p>{{ result[0].created_at }}</p></IonCol
        >
      </IonRow>
      <IonRow>
        <IonCol
          ><p>4 derniers chiffres de la CB</p>
          <p>**** **** **** {{ result.user.card_last_four }}</p></IonCol
        >
      </IonRow>
      <IonRow>
        <IonCol
          ><p>Date du renouvellement</p>
          <p>01/01/2000</p></IonCol
        >
      </IonRow>
    </IonGrid>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonToolbar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default defineComponent({
  name: "StripeModal",
  props: ["id", "title"],
  data() {
    return {
      content: "Content",
      secret: null,
      stripe: null,
      card: null,
      name: "",
      coupon: "",
      payment_method: "",
      payment_processing: false,
      requiresAction: false,
      paymentProcessed: false,
      messageProcessed: "",
      result: null,
    };
  },
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
  },
  computed: {
    ...mapGetters(["plans", "token"]),
    getPlan() {
      return this.plans.filter((element) => {
        return element.stripe_id == this.id;
      });
    },
  },
  mounted() {
    console.log(this.id);
    this.stripe = window.Stripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY);
    const elements = this.stripe.elements();
    this.card = elements.create("card");
    this.card.mount("#card-element");
    axios
      .post(
        `${process.env.VUE_APP_API_URL}/api/stripe/intent`,
        {},
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        this.secret = response.data.client_secret;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    resetForm() {
      this.name = "";
      this.payment_method = "";
      this.payment_processing = false;
      this.coupon = "";
    },
    async submit() {
      this.payment_processing = true;
      const { setupIntent, error } = await this.stripe.confirmCardSetup(
        this.secret,
        {
          payment_method: {
            card: this.card,
            billing_details: { name: this.name },
          },
        }
      );
      if (error) {
        console.log(error);
      } else {
        console.log(setupIntent);
        this.payment_method = setupIntent.payment_method;
        await axios
          .post(
            `${process.env.VUE_APP_API_URL}/api/stripe/subscribe`,
            {
              plan: this.getPlan[0].id,
              name: this.name,
              payment_method: this.payment_method,
              coupon: this.coupon,
            },
            {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
            }
          )
          .then((response) => {
            this.result = response.data;
            console.log(response.data);
            if (
              response.data.status &&
              response.data.status == "requires_action"
            ) {
              // Confirmation
              this.requiresAction = true;
            } else {
              this.paymentProcessed = true;
              this.messageProcessed = "Merci de votre abonnement ! 🤑";
              console.log("emit 2");
              this.resetForm();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
});
</script>
