<template>
  <div>
    <IonText class="ion-text-center" color="light" mode="ios">
      <h1>Nouvelles sorties</h1>
    </IonText>
    <div class="song-slider">
      <IonCard>
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
      </IonCard>
      <IonCard>
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
      </IonCard>
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
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonText,
    IonIcon,
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
  right: 0;
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
  width: 100%;
  height: 125px;
  border-radius: 8px;
}
.song-slider {
  display: flex;
  flex-flow: row;
  max-width: 300px;
  margin: auto;
  overflow-x: scroll;
}
</style>
