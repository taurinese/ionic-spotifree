<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-text class="ion-text-center" color="light" mode="ios">
        <h1 class="ion-margin-bottom">Playlist</h1>
      </ion-text>
      <IonGrid>
        <IonRow>
          <IonItem lines="none">
            <img id="playlist-img" src="assets/img/discovery.jpg" alt="" />
            <IonText color="light">
              <span>Playlist</span>
              <h3>Playlist exemple</h3>
              <div class="flex">
                <img id="icon-img" src="assets/img/discovery.jpg" alt="" />
                <IonText color="medium">
                  <p class="text-sm">
                    par Utilisateur <br />
                    34 min
                  </p>
                </IonText>
              </div>
            </IonText>
          </IonItem>
        </IonRow>
        <IonRow>
          <IonItem lines="none">
            <div class="header-img">
              <img
                class="playlist-header-icons"
                :class="{ liked: isLiked }"
                :src="
                  isLiked
                    ? 'assets/icon/' + full_heart
                    : 'assets/icon/' + empty_heart
                "
                alt=""
                @click="like"
              />
              <img
                class="playlist-header-icons"
                src="assets/icon/share.svg"
                alt=""
              />
            </div>
          </IonItem>
        </IonRow>
        <IonRow class="songs">
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
        </IonRow>
      </IonGrid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonText,
  IonItem,
  IonGrid,
  IonRow,
} from "@ionic/vue";
import Song from "../components/Song";
export default {
  name: "Playlist",
  components: {
    IonPage,
    IonContent,
    IonText,
    IonItem,
    IonGrid,
    IonRow,
    Song,
  },
  data() {
    return {
      liked: false,
      empty_heart: "heart.svg",
      full_heart: "heart_full.svg",
    };
  },
  computed: {
    isLiked() {
      return this.liked;
    },
  },
  methods: {
    like() {
      this.liked = !this.liked;
    },
  },
};
</script>

<style scoped>
#playlist-img {
  width: 125px;
  border-radius: 10px;
  margin-right: 12px;
}
#icon-img {
  width: 50px;
  border-radius: 50%;
  display: inline-block;
}
.text-sm {
  font-size: 14px;
  display: inline-block;
}
.flex {
  display: flex;
  align-items: center;
}
.header-img {
  margin-top: 12px;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  width: 125px;
}
.playlist-header-icons {
  width: 40px;
  filter: invert(1) brightness(0.3);
}
ion-text > p {
  margin: 0;
  margin-left: 12px;
}
ion-text > p:last-child {
  color: gray;
}
ion-row:nth-child(2) {
  margin-bottom: 25px;
}
.songs > ion-item {
  margin-bottom: 12px;
}
.liked {
  filter: invert(25%) sepia(41%) saturate(2706%) hue-rotate(350deg)
    brightness(92%) contrast(88%) !important;
}
</style>
