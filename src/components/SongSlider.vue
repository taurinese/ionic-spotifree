<template>
  <div>
    <IonText class="ion-text-center" color="light" mode="ios">
      <h1 class="ion-margin-bottom">{{ title }}</h1>
    </IonText>
    <div class="song-slider">
      <IonSlides mode="ios">
        <IonSlide>
          <IonCard>
            <img src="assets/img/discovery.jpg" alt="" />
            <IonCardHeader>
              <IonCardTitle color="light">Chanson</IonCardTitle>
              <IonCardSubtitle>Artiste</IonCardSubtitle>
              <IonIcon :icon="playCircleOutline"></IonIcon>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/img/discovery.jpg" alt="" />
            <IonCardHeader>
              <IonCardTitle color="light">Chanson</IonCardTitle>
              <IonCardSubtitle>Artiste</IonCardSubtitle>
              <IonIcon :icon="playCircleOutline"></IonIcon>
            </IonCardHeader>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard>
            <img src="assets/img/discovery.jpg" alt="" />
            <IonCardHeader>
              <IonCardTitle color="light">Chanson</IonCardTitle>
              <IonCardSubtitle>Artiste</IonCardSubtitle>
              <IonIcon :icon="playCircleOutline"></IonIcon>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/img/discovery.jpg" alt="" />
            <IonCardHeader>
              <IonCardTitle color="light">Chanson</IonCardTitle>
              <IonCardSubtitle>Artiste</IonCardSubtitle>
              <IonIcon :icon="playCircleOutline"></IonIcon>
            </IonCardHeader>
          </IonCard>
        </IonSlide>
      </IonSlides>
      <!-- <IonCard>
        <img src="https://picsum.photos/200/100" alt="" />
        <IonCardHeader>
          <IonCardTitle color="light">Chanson</IonCardTitle>
          <IonCardSubtitle>Artiste</IonCardSubtitle>
          <IonIcon :icon="playCircleOutline"></IonIcon>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <img src="https://picsum.photos/200/100" alt="" />
        <IonCardHeader>
          <IonCardTitle color="light">Chanson</IonCardTitle>
          <IonCardSubtitle>Artiste</IonCardSubtitle>
          <IonIcon :icon="playCircleOutline"></IonIcon>
        </IonCardHeader>
      </IonCard> -->
    </div>
  </div>
</template>

<script>
import { playCircleOutline } from "ionicons/icons";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonText,
  IonIcon,
  IonSlides,
  IonSlide,
} from "@ionic/vue";
export default {
  name: "SongSlider",
  data() {
    return {};
  },
  setup() {
    return {
      playCircleOutline,
    };
  },
  props: [ 'title'],
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonText,
    IonIcon,
    IonSlides,
    IonSlide,
  },
};
</script>

<style scoped>
ion-card {
  width: 125px;
  margin: auto;
  --background: transparent;
  box-shadow: none !important;
  cursor: pointer;
}
ion-card-header {
  padding: 0px;
  padding-left:4px;
  margin-top:4px;
  text-align: left;
}
ion-card-title {
  font-size: 18px;
}
ion-card-subtitle {
  font-size: 16px;
  text-transform: capitalize;
}
ion-icon {
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translate(0, -50%);
  width: 30px;
  height: 30px;
  color: white;
}
ion-icon:hover {
  color: gray;
}
img {
  border-radius: 10px;
  width:125px;
}
.song-slider {
  /* display: flex;
  flex-flow: row; */
  max-width: 300px;
  margin: auto;
  /* overflow-x: scroll; */
}
</style>
