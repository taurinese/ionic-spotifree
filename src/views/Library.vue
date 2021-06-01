<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-text class="ion-text-center" color="light" mode="ios">
        <h1 class="ion-margin-bottom">Library</h1>
      </ion-text>
      <IonList lines="none" mode="ios">
        <IonItem href="/playlist">
          <img src="assets/img/discovery.jpg" alt="" />
          <IonText color="light">
            <p>Playlist</p>
            <p>par Utilisateur</p>
          </IonText>
        </IonItem>
        <IonItem href="/playlist">
          <img src="assets/img/discovery.jpg" alt="" />
          <IonText color="light">
            <p>Playlist</p>
            <p>par Utilisateur</p>
          </IonText>
        </IonItem>
        <IonItem href="/playlist">
          <img src="assets/img/discovery.jpg" alt="" />
          <IonText color="light">
            <p>Playlist</p>
            <p>par Utilisateur</p>
          </IonText>
        </IonItem>
        <IonItem href="/playlist">
          <img src="assets/img/discovery.jpg" alt="" />
          <IonText color="light">
            <p>Playlist</p>
            <p>par Utilisateur</p>
          </IonText>
        </IonItem>
        <IonItem href="/playlist">
          <img src="assets/img/discovery.jpg" alt="" />
          <IonText color="light">
            <p>Playlist</p>
            <p>par Utilisateur</p>
          </IonText>
        </IonItem>
        <IonItem href="/playlist">
          <img src="assets/img/discovery.jpg" alt="" />
          <IonText color="light">
            <p>Playlist</p>
            <p>par Utilisateur</p>
          </IonText>
        </IonItem>
      </IonList>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonText, IonList, IonItem } from "@ionic/vue";
export default {
  name: "Library",
  data() {
    return {};
  },
  components: {
    IonPage,
    IonContent,
    IonText,
    IonList,
    IonItem,
  },
};
</script>

<style scoped>
ion-list {
  margin-top: 48px;
}
ion-item {
  margin-bottom: 24px;
  --detail-icon-color: white;
}
img {
  width: 100px;
  border-radius: 10px;
}
ion-text > p {
  margin: 0;
  margin-left: 12px;
}
ion-text > p:last-child {
  color: gray;
}
</style>
