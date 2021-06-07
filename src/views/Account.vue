<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-text class="ion-text-center" color="light" mode="ios">
        <h1 class="ion-margin-bottom">Account</h1>
      </ion-text>
      <IonList color="light">
        <IonListHeader
          lines="full"
          color="light"
          class="ion-justify-content-center"
        >
          <div :class="{ active: isAccount }" @click="switchTab(0)">
            <img src="assets/icon/account.svg" alt="" />
          </div>
          <div :class="{ active: isPassword }" @click="switchTab(1)">
            <img src="assets/icon/padlock.svg" alt="" />
          </div>
          <div :class="{ active: isSubscribe }" @click="switchTab(2)">
            <img src="assets/icon/subscribe.svg" alt="" />
          </div>
        </IonListHeader>
        <div v-if="currentTab == 'infos'" class="account-content">
          <IonItem lines="none" color="light">
            <IonLabel position="stacked">Prénom</IonLabel>
            <IonItem class="inputs" lines="none" color="light">
              <IonInput type="text"></IonInput>
              <IonButton color="dark">Modifier</IonButton>
            </IonItem>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonLabel position="stacked">Nom</IonLabel>
            <IonItem class="inputs" lines="none" color="light">
              <IonInput type="text"></IonInput>
              <IonButton color="dark">Modifier</IonButton>
            </IonItem>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonLabel position="stacked">Adresse mail</IonLabel>
            <IonItem class="inputs" lines="none" color="light">
              <IonInput type="text"></IonInput>
              <IonButton color="dark">Modifier</IonButton>
            </IonItem>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonLabel position="stacked">Nom d'utilisateur</IonLabel>
            <IonItem class="inputs" lines="none" color="light">
              <IonInput type="text"></IonInput>
              <IonButton color="dark">Modifier</IonButton>
            </IonItem>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonLabel position="stacked">Avatar</IonLabel>
            <IonItem class="inputs" lines="none" color="light">
              <IonLabel class="file-label"
                >Aucun fichier sélectionné...</IonLabel
              >
              <IonButton color="dark">Modifier</IonButton>
            </IonItem>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonGrid>
              <IonRow>
                <IonText class="text-full-width">
                  <h2>Se déconnecter de tous les appareils</h2>
                </IonText>
              </IonRow>
              <IonRow>
                <IonText class="text-full-width">
                  <p>
                    Cette opération vous déconnecte de Spotify sur tous les
                    services sur lesquels vous êtes connecté. Remarque : un
                    certain délai peut s'écouler avant que la déconnexion soit
                    prise en compte sur le lecteur web.
                  </p>
                </IonText>
              </IonRow>
              <IonRow>
                <IonButton color="dark" id="disconnect-button" expand="block"
                  >Se déconnecter de tous les appareils</IonButton
                >
              </IonRow>
            </IonGrid>
          </IonItem>
        </div>
        <div v-if="currentTab == 'password'" class="password-content">
          <IonItem lines="none" color="light">
            <IonLabel position="stacked">Mot de passe actuel</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonLabel position="stacked">Nouveau mot de passe</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonLabel position="stacked"
              >Confirmer le nouveau mot de passe</IonLabel
            >
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem class="ion-margin-top" lines="none" color="light">
            <IonButton id="password-button" color="dark" expand="block">
              Définir un nouveau mot de passe
            </IonButton>
          </IonItem>
        </div>
        <div v-if="currentTab == 'subscribe'" class="subscribe-content">
          <IonItem lines="none" color="light">
            <div class="subscribe-card">
              <IonLabel color="dark">Abonnement gratuit</IonLabel>
              <h2>GRATUIT</h2>
              <ul>
                <li>Pubs entre chaque musique</li>
                <li>Playlist en aléatoire</li>
              </ul>
              <IonButton color="tertiary">Modifier</IonButton>
            </div>
          </IonItem>
          <IonItem lines="none" color="light">
            <div class="subscribe-card">
              <IonLabel color="dark">Abonnement mensuel</IonLabel>
              <h2>4.99€</h2>
              <ul>
                <li>Aucune publicité</li>
                <li>Écoutez la musique que vous souhaitez</li>
              </ul>
              <IonButton color="tertiary">Modifier</IonButton>
            </div>
          </IonItem>
          <IonItem lines="none" color="light">
            <div class="subscribe-card">
              <IonLabel color="dark">Abonnement annuel</IonLabel>
              <h2>49.99€</h2>
              <ul>
                <li>Aucune publicité</li>
                <li>Écoutez la musique que vous souhaitez</li>
              </ul>
              <IonButton color="tertiary">Modifier</IonButton>
            </div>
          </IonItem>
        </div>
      </IonList>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonText,
  IonList,
  IonListHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
} from "@ionic/vue";
export default {
  name: "Account",
  components: {
    IonPage,
    IonContent,
    IonText,
    IonList,
    IonListHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    IonGrid,
    IonRow,
  },
  data() {
    return {
      tabs: ["infos", "password", "subscribe"],
      currentTab: null,
    };
  },
  mounted() {
    this.currentTab = this.tabs[0];
  },
  methods: {
    switchTab(index) {
      this.currentTab = this.tabs[index];
    },
  },
  computed: {
    isAccount() {
      return this.currentTab == "infos";
    },
    isPassword() {
      return this.currentTab == "password";
    },
    isSubscribe() {
      return this.currentTab == "subscribe";
    },
  },
};
</script>

<style scoped>
ion-list-header {
  --border-color: black;
  padding: 0;
  justify-content: space-evenly;
}
ion-list-header div {
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
}
ion-list ion-list-header img {
  width: 50px;
}
ion-list ion-list-header .active img {
  filter: invert(100%) sepia(88%) saturate(214%) hue-rotate(167deg)
    brightness(116%) contrast(101%);
}
ion-list ion-list-header .active {
  background-color: #34495e;
}
ion-list {
  background-color: #f4f5f8;
  width: 90%;
  margin: auto;
  border-radius: 12px;
  margin-bottom: 48px;
}
ion-input {
  border-bottom: 1px #666666 solid;
  --padding-bottom: 0 !important;
}
.inputs {
  --padding-start: 0;
  justify-content: space-around;
  width: 100%;
}
ion-button {
  margin-left: 48px;
}
.file-label {
  font-size: 14px;
}
.account-content,
.password-content {
  padding-top: 24px;
  padding-bottom: 24px;
}
.text-full-width {
  width: 100%;
}
#disconnect-button,
#password-button {
  margin: auto;
}

.subscribe-content ion-item {
  --padding-start: 10px;
}

.subscribe-card {
  /* border: 1px solid red; */
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  margin: 20px 5px 20px 5px;
  box-shadow: 0px 0px 7px -3px #000000;
  /* background: linear-gradient(to right, #4e54c8, #8f94fb); */
}

.subscribe-card ion-label {
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  transform: translateY(-15px);
}

.subscribe-card ion-button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 65%);
  margin-left: 0;
  overflow-y: visible;
}

.subscribe-card h2 {
  text-align: center;
  background-color: #15202b;
  /* border-radius: 8px; */
  color: white;
  width: calc(100% + 40px);
  transform: translateX(-20px);
  padding: 5px 0;
}

.subscribe-card ul {
  list-style: none;
  font-size: 15px;
  border-top: 1px solid lightgray;
  padding-top: 8px;
}
</style>
