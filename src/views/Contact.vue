<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-text class="ion-text-center" color="light" mode="ios">
        <h1 class="ion-margin-bottom">Contact</h1>
      </ion-text>
      <div class="block"></div>
      <div class="place">
        <IonText color="light">
          <h1>Paris</h1>
          <h4>19 rue Yves Toudic, 75010, Paris</h4>
          <h4>contact@ecole-webstart.com</h4>
          <h4>01 42 41 97 76</h4>
        </IonText>
      </div>
      <div class="block">google maps</div>
      <IonText color="light">
        <h4>Formulaire de contact</h4>
      </IonText>
      <IonInput type="text" class="mb-5" placeholder="Nom entier">
        <IonIcon :icon="personCircleOutline" size="large"></IonIcon>
      </IonInput>
      <IonInput class="mb-10" type="email" placeholder="Adresse mail">
        <IonIcon :icon="mailOutline" size="large"></IonIcon>
      </IonInput>
      <div class="inputs">
        <IonInput
          class="ml"
          type="text"
          placeholder="Objet du message"
        ></IonInput>
        <IonInput
          class="ml"
          type="text"
          placeholder="Corps du message"
        ></IonInput>
      </div>
      <IonButton color="dark" expand="block">Envoyer</IonButton>
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
};
</script>

<style scoped>
.block {
  width: 300px;
  height: 200px;
  border-radius: 15px;
  margin: auto;
  background-color: white;
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
ion-text * {
  margin-left: 10%;
}
</style>
