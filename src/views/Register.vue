<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-text class="ion-text-center" color="light" mode="ios">
        <h1 class="ion-margin-bottom">Register</h1>
      </ion-text>
      <div class="block">
        <IonItem lines="none" color="light">
          <div @click="$router.push({ path: '/login' })">Login</div>
          <div class="active">Register</div>
        </IonItem>
        <IonItem lines="none" color="light">
          <IonLabel>
            Nom entier
          </IonLabel>
          <IonInput type="text" placeholder="Nom entier"></IonInput>
        </IonItem>
        <IonItem lines="none" color="light">
          <IonLabel>
            Nom d'utilisateur
          </IonLabel>
          <IonInput type="text" placeholder="Nom d'utilisateur"></IonInput>
        </IonItem>
        <IonItem lines="none" color="light">
          <IonLabel>
            Adresse mail
          </IonLabel>
          <IonInput type="email" placeholder="Adresse mail"></IonInput>
        </IonItem>
        <IonItem lines="none" color="light">
          <IonLabel>Mot de passe</IonLabel>
          <IonInput type="password" placeholder="Mot de passe"></IonInput>
        </IonItem>
        <IonItem color="light">
          <IonText>
            <p>Forgot your password?</p>
          </IonText>
          <IonButton slot="end" expand="block" color="dark">Log in</IonButton>
        </IonItem>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonInput,
  IonText,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/vue";
export default {
  name: "Register",
  components: {
    IonPage,
    IonContent,
    IonInput,
    IonText,
    IonItem,
    IonLabel,
    IonButton,
  },
};
</script>

<style scoped>
ion-text p {
  text-decoration: underline;
  color: gray;
  font-size: 14px;
}
.block {
  background-color: #f4f5f8;
  border-radius: 10px;
  width: 80%;
  margin: auto;
  /* margin-top: 10%; */
}
ion-item:first-child {
  border-radius: 10px 10px 0 0;
  --padding-start: 0;
  --inner-padding-end: 0;
}
ion-item:first-child div {
  margin: auto;
  width: calc(100% + 20px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
ion-item:first-child div.active {
  background-color: #5260ff;
  color: white;
}
ion-item:nth-child(2) {
  margin-top: 10%;
}
ion-item:last-child {
  border-radius: 0 0 10px 10px;
}
ion-input {
  border-bottom: 1px solid black;
  --padding-bottom: 0;
  margin-bottom: 10px;
}
</style>
