<template>
  <ion-app>
    <div  @click="openMenu" class="menu" :class="{ active: menuOpened }">
      <div class="burger"></div>
      <div class="menu-opened">
        <IonList inset="true" mode="ios">
          <IonItem
            button
            @click="
              $router.push({ path: '/home' });
              menuOpened = false;
            "
          >
            <IonIcon :icon="musicalNoteOutline"></IonIcon>
            <IonLabel>Accueil</IonLabel>
          </IonItem>
          <IonItem
            button
            @click="
              $router.push({ path: '/search' });
              menuOpened = false;
            "
          >
            <IonIcon :icon="searchOutline"></IonIcon>
            <IonLabel>Rechercher</IonLabel>
          </IonItem>
          <IonItem
            button
            @click="
              $router.push({ path: '/account' });
              menuOpened = false;
            "
          >
            <IonIcon :icon="personOutline"></IonIcon>
            <IonLabel>Compte</IonLabel>
          </IonItem>
          <IonItem
            button
            @click="
              $router.push({ path: '/news' });
              menuOpened = false;
            "
          >
            <IonIcon :icon="megaphoneOutline"></IonIcon>
            <IonLabel>Actualités</IonLabel>
          </IonItem>
          <IonItem
            button
            @click="
              $router.push({ path: '/contact' });
              menuOpened = false;
            "
          >
            <IonIcon :icon="mailOutline"></IonIcon>
            <IonLabel>Contact</IonLabel>
          </IonItem>
          <IonItem
            button
            @click="
              $router.push({ path: '/library' });
              menuOpened = false;
            "
          >
            <IonIcon :icon="libraryOutline"></IonIcon>
            <IonLabel>Bibliothèque</IonLabel>
          </IonItem>
        </IonList>
      </div>
    </div>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import {
  IonApp,
  IonRouterOutlet,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import { defineComponent } from "vue";
import {
  personOutline,
  musicalNoteOutline,
  libraryOutline,
  searchOutline,
  mailOutline,
  megaphoneOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
  },
  setup() {
    return {
      /* homeOutline, */
      personOutline,
      musicalNoteOutline,
      libraryOutline,
      searchOutline,
      mailOutline,
      megaphoneOutline,
    };
  },
  created(){
    console.log(this.$router.currentRoute.value.path)
  },
  data() {
    return {
      menuOpened: false,
    };
  },
  methods: {
    openMenu() {
      this.menuOpened = !this.menuOpened;
      console.log("menu");
    },
  },
});
</script>
<style scoped>
ion-tab-bar {
  --ion-border-color: transparent;
  box-shadow: 5px 10px 15px 3px #000000;
}
ion-icon {
  color: white;
  margin-right: 20px;
}
ion-list {
  width: 100%;
}
ion-item {
  --padding-bottom: 12px;
  --padding-top: 12px;
}
.menu {
  position: absolute;
  top: 3%;
  left: 5%;
  height: 30px;
  width: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.menu.active .burger {
  width: 0px;
  border: none;
  transition: width 0.5s, border 0.5s;
}
.menu.active .burger:before {
  width: 40px;
  transform: rotate(45deg);
  top: 0;
  left: 0;
  transition: width 0.5s, transform 0.5s;
}
.menu.active .burger:after {
  width: 40px;
  transform: rotate(-45deg);
  top: 0px;
  left: 0;
  transition: width 0.5s, transform 0.5s;
}
.menu .menu-opened {
  position: absolute;
  top: -3vh;
  left: -105vw;
  width: 100vw;
  height: 100vh;
  padding:2vh;
  z-index: 10;
  background-color: #15202B;
  transform: translateX(0);
  transition: transform 0.5s ease-in-out;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
}
.menu.active .menu-opened {
  transform: translateX(100vw);
  transition: transform 0.5s ease-in-out;
}
.burger {
  position: relative;
  content: "";
  width: 40px;
  height: 1px;
  border: 1px white solid;
  border-radius: 5px;
  background-color: white;
  transition: width 0.5s, border 0.5s;
  z-index: 15;
}
.burger:before {
  position: absolute;
  top: -10px;
  left: 0;
  content: "";
  width: 15px;
  border: 1px white solid;
  border-radius: 5px;
  background-color: white;
  transition: width 0.5s, transform 0.5s;
}
.burger:after {
  position: absolute;
  top: 10px;
  left: 0;
  content: "";
  width: 25px;
  background-color: white;
  border: 1px white solid;
  border-radius: 5px;
  transition: width 0.5s, transform 0.5s;
}
</style>