<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div
        v-if="$router.currentRoute.value.path == '/home'"
        class="circles"
        :class="{ 'opacity-none': menu }"
      >
        <div class="circle" id="one"></div>
        <div class="circle" id="two"></div>
        <div class="circle" id="three"></div>
      </div>
      <IonGrid>
        <IonRow>
          <IonCol class="ion-align-items-end ion-justify-content-center">
            <IonButton color="dark" size="default">Inscrivez-vous</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
      <NewsSlider></NewsSlider>
      <SongSlider></SongSlider>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { defineComponent } from "vue";
import NewsSlider from "../components/NewsSlider";
import SongSlider from "../components/SongSlider";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    NewsSlider,
    SongSlider,
  },
  data() {
    return {
      menu: false,
    };
  },
});
</script>

<style scoped>
ion-grid {
  height: 100vh;
}
ion-row {
  height: 100%;
}
ion-col {
  display: flex;
  height: 100%;
}
.circles {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  z-index: -1;
  opacity: 1;
  transition: opacity 1s ease-in-out;
}
.circles.opacity-none {
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
}
.circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: lightgrey;
  position: absolute;
  z-index: -1;
}
.circle#one {
  top: -150px;
  left: 50%;
}
.circle#two {
  bottom: 50px;
  left: 70%;
}
.circle#three {
  top: 150px;
  left: -150px;
}
</style>
