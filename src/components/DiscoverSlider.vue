<template>
  <div>
    <IonText class="ion-text-center" color="light" mode="ios">
      <h1 class="ion-margin-bottom">Parcourir</h1>
    </IonText>
    <div class="discover-slider">
      <IonSlides mode="ios">
        <IonSlide>
          <IonCard>
            <img src="assets/img/discovery.jpg" alt="" />
            <IonText color="light">
                <h3>Rock</h3>
            </IonText>
          </IonCard>
          <IonCard>
            <img src="assets/img/discovery.jpg" alt="" />
            <IonText color="light">
                <h3>Pop</h3>
            </IonText>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard>
            <img src="assets/img/discovery.jpg" alt="" />
            <IonText color="light">
                <h3>Pop</h3>
            </IonText>
          </IonCard>
          <IonCard>
            <img src="assets/img/discovery.jpg" alt="" />
            <IonText color="light">
                <h3>Pop</h3>
            </IonText>
          </IonCard>
        </IonSlide>
      </IonSlides>
    </div>
  </div>
</template>

<script>
import {
  IonCard,
  IonText,
  IonSlides,
  IonSlide
} from "@ionic/vue";
export default {
  name: "SongSlider",
  data() {
    return {};
  },
  components: {
    IonCard,
    IonText,
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
  position:relative;
}
/* ion-card-header {
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
} */
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
.discover-slider {
  /* display: flex;
  flex-flow: row; */
  max-width: 300px;
  margin: auto;
  /* overflow-x: scroll; */
}
h3{
    position:absolute;
    z-index:99;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    margin:0;
}

</style>
