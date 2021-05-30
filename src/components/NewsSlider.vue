<template>
  <div>
    <ion-text class="ion-text-center" color="light" mode="ios">
      <h1>Actualités</h1>
    </ion-text>
    <div class="news">
      <div class="slide">
        <IonIcon :icon="chevronBackOutline"></IonIcon>
        <div class="news-img"></div>
        <IonIcon :icon="chevronForwardOutline"></IonIcon>
      </div>
      <ion-text color="light" mode="ios" class="ion-text-center">
        <h3>Concert des Daft Punk</h3>
      </ion-text>
      <ion-text mode="ios" class="ion-text-center">
        <p>
          Ceci est un résumé d'une actualité tu as compris ou quoi de quoi on
          parle là blabla
        </p>
      </ion-text>
    </div>
  </div>
</template>

<script>
import { IonText, IonIcon } from "@ionic/vue";
import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons";
export default {
  name: "NewsSlider",
  components: {
    IonText,
    IonIcon,
  },
  setup() {
    return {
      chevronBackOutline,
      chevronForwardOutline,
    };
  },
};
</script>

<style scoped>
.slide {
  display: flex;
  align-items: center;
  width: 95%;
  margin: auto;
}
ion-icon {
  width: 30px;
  height: 30px;
  color: white;
}
.news-img {
  width: 300px;
  height: 200px;
  border-radius: 15px;
  background-color: red;
  margin: auto;
  position: relative;
}
ion-text > p {
  width: 300px;
  margin: auto;
  color: rgb(169, 169, 169);
}
</style>
