<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-text class="ion-text-center" color="light" mode="ios">
        <h1 class="ion-margin-bottom">Contact</h1>
      </ion-text>
      <div class="block">
        <img
          src="https://res.cloudinary.com/hyi9bajzn/image/upload/v1624444639/spotifree_osu0dq.png"
          alt=""
        />
      </div>
      <div class="place">
        <IonText class="text-ml" color="light">
          <h1>Paris</h1>
          <h4>19 rue Yves Toudic, 75010, Paris</h4>
          <h4>contact@ecole-webstart.com</h4>
          <h4>01 42 41 97 76</h4>
        </IonText>
      </div>
      <div class="block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2624.35245957368!2d2.3625182656748254!3d48.8705571292887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1swebstart%20paris!5e0!3m2!1sfr!2sfr!4v1621329510848!5m2!1sfr!2sfr"
          width="300"
          height="200"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        >
        </iframe>
      </div>
      <IonText class="text-ml" color="light">
        <h4>Formulaire de contact</h4>
      </IonText>
      <IonInput
        type="text"
        class="mb-5"
        placeholder="Nom entier"
        v-model="form.name"
      >
        <IonIcon :icon="personCircleOutline" size="large"></IonIcon>
      </IonInput>
      <IonInput
        class="mb-10"
        type="email"
        placeholder="Adresse mail"
        v-model="form.email"
      >
        <IonIcon :icon="mailOutline" size="large"></IonIcon>
      </IonInput>
      <div class="inputs">
        <IonInput
          class="ml"
          type="text"
          placeholder="Objet du message"
          v-model="form.subject"
        ></IonInput>
        <IonInput
          class="ml"
          type="text"
          placeholder="Corps du message"
          v-model="form.body"
        ></IonInput>
      </div>
      <IonButton color="dark" expand="block" @click="contact(form)"
        >Envoyer</IonButton
      >
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonText,
  IonInput,
  IonIcon,
  IonButton,
} from "@ionic/vue";
import { personCircleOutline, mailOutline } from "ionicons/icons";
import { mapGetters } from "vuex";
export default {
  name: "Contact",
  components: {
    IonPage,
    IonContent,
    IonText,
    IonInput,
    IonIcon,
    IonButton,
  },
  setup() {
    return {
      personCircleOutline,
      mailOutline,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        body: "",
      },
    };
  },
  updated() {
    if (this.$store.getters.user) {
      this.form.name = this.$store.getters.user.name;
      this.form.email = this.$store.getters.user.email;
      // console.log("user");
    }
  },
  methods: {
    contact(form) {
      if (
        this.validateEmail(form.email) &&
        form.name.trim() &&
        form.subject.trim() &&
        form.body.trim()
      ) {
        this.$store.dispatch("contact", form);
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
};
</script>

<style scoped>
.block {
  width: 300px;
  height: 200px;
  border-radius: 15px;
  margin: auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.block img {
  margin: auto;
  width: 80%;
}
ion-input {
  --background: white;
  border-radius: 12px;
  width: 80%;
  margin: auto;
}
.mb-5 {
  margin-bottom: 5%;
}
.mb-10 {
  margin-bottom: 10%;
}
ion-icon {
  margin-left: 8px;
  margin-right: 8px;
}
.ml {
  --padding-start: 16px;
}
.inputs ion-input:first-child {
  border-radius: 12px 12px 0 0;
  border-bottom: 1px solid black;
}
.inputs ion-input:last-child {
  border-radius: 0 0 12px 12px;
}
ion-button {
  width: 80%;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
}
ion-text.text-ml * {
  margin-left: 10%;
}
</style>
