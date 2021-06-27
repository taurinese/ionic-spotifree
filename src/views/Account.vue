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
            <IonLabel position="stacked">Nom</IonLabel>
            <IonItem class="inputs" lines="none" color="light">
              <IonInput type="text" v-model="form.name"></IonInput>
              <IonButton color="dark" @click="changeName">Modifier</IonButton>
            </IonItem>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonLabel position="stacked">Adresse mail</IonLabel>
            <IonItem class="inputs" lines="none" color="light">
              <IonInput type="text" v-model="form.email"></IonInput>
              <IonButton color="dark" @click="changeEmail">Modifier</IonButton>
            </IonItem>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonLabel position="stacked">Nom d'utilisateur</IonLabel>
            <IonItem class="inputs" lines="none" color="light">
              <IonInput type="text" v-model="form.username"></IonInput>
              <IonButton color="dark" @click="changeUsername"
                >Modifier</IonButton
              >
            </IonItem>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonLabel position="stacked">Avatar</IonLabel>
            <IonItem class="inputs" lines="none" color="light">
              <IonLabel v-if="form.avatar" class="file-label">{{
                form.avatar.name
              }}</IonLabel>
              <IonLabel v-else class="file-label"
                >Aucun fichier sélectionné...</IonLabel
              >
              <IonInput
                class="file-input"
                type="file"
                @input="form.avatar = $event.target.files[0]"
                @change="onFileChange"
              ></IonInput>
              <IonButton @click="changeAvatar" color="dark">Ajouter</IonButton>
            </IonItem>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonLabel position="stacked">Aperçu</IonLabel>
            <IonItem class="inputs" lines="none" color="light">
              <img
                v-if="url"
                :src="url"
                alt="form.avatar.name"
                id="preview"
                width="100"
                height="100"
              />
              <p v-else>Aucune image sélectionnée...</p>
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
            <IonInput type="password" v-model="passwords.current"></IonInput>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonLabel position="stacked">Nouveau mot de passe</IonLabel>
            <IonInput type="password" v-model="passwords.new"></IonInput>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonLabel position="stacked"
              >Confirmer le nouveau mot de passe</IonLabel
            >
            <IonInput type="password" v-model="passwords.confirm"></IonInput>
          </IonItem>
          <IonItem class="ion-margin-top" lines="none" color="light">
            <IonButton
              id="password-button"
              color="dark"
              expand="block"
              @click="changePassword"
            >
              Définir un nouveau mot de passe
            </IonButton>
          </IonItem>
        </div>
        <div v-if="currentTab == 'subscribe'" class="subscribe-content">
          <div v-if="plans.length > 0">
            <IonItem
              lines="none"
              color="light"
              v-for="plan in plans"
              :key="plan"
            >
              <div class="subscribe-card">
                <IonLabel color="dark">Abonnement {{ plan.name }}</IonLabel>
                <h2 v-if="plan.price != 0">{{ plan.price / 100 }}€</h2>
                <h2 v-else>GRATUIT</h2>
                <p v-html="plan.content"></p>
                <IonButton
                  v-if="plan.stripe_id != user.subscription.stripe_plan"
                  color="tertiary"
                  @click="openModal(plan.stripe_id)"
                  >Modifier</IonButton
                >
              </div>
            </IonItem>
          </div>
          <!-- <IonItem lines="none" color="light">
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
          </IonItem> -->
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
  modalController,
} from "@ionic/vue";
import { mapGetters } from "vuex";
import StripeModal from "../components/StripeModal.vue";
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
      form: {
        name: "",
        username: "",
        email: "",
        avatar: null,
      },
      url: "",
      passwords: {
        current: "",
        new: "",
        confirm: "",
      },
      secret: null,
      stripe: null,
      card: null,
    };
  },
  mounted() {
    this.currentTab = this.tabs[0];
    this.form.name = this.$store.getters.user.name;
    this.form.username = this.$store.getters.user.username;
    this.form.email = this.$store.getters.user.email;
    this.$store.dispatch("getPlans");
    /* this.$nextTick(function() {
      if (this.currentTab == "subscribe") {
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
      }
    }); */
  },
  methods: {
    async openModal(id) {
      const modal = await modalController.create({
        component: StripeModal,
        cssClass: "my-custom-class",
        componentProps: {
          title: "Paiement",
          id: id,
          card: this.card,
          stripe: this.stripe,
          secret: this.secret,
          token: this.token,
        },
        mode: "ios",
        swipeToClose: true,
        
      });
      console.log(id);
      return modal.present();
    },
    subscribe(id) {
      this.showModal = true;
      console.log(id);
    },
    switchTab(index) {
      this.currentTab = this.tabs[index];
    },
    changeName() {
      this.$store.dispatch("changeName", this.form.name);
    },
    changeUsername() {
      this.$store.dispatch("changeUsername", this.form.username);
    },
    changeEmail() {
      this.$store.dispatch("changeEmail", this.form.email);
    },
    changeAvatar() {
      this.$store.dispatch("changeAvatar", this.form.avatar);
    },
    onFileChange() {
      this.url = URL.createObjectURL(this.form.avatar);
    },
    changePassword() {
      this.$store.dispatch("changePassword", this.passwords);
    },
  },
  computed: {
    ...mapGetters(["user", "plans", "token"]),
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

.file-input {
  position: absolute;
  opacity: 0;
  width: 70%;
}

#preview {
  border-radius: 12px;
}
</style>
