<template>
  <ion-header>
    <ion-toolbar>
      <ion-title color="primary">{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding" color="light">
    <p v-html="getPlan[0].content"></p>
    <div id="card-element"></div>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
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
    };
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
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
});
</script>
