<template>
  <IonItem class="song-item" lines="none">
    <div>
      <img class="song-img" src="assets/img/discovery.jpg" alt="" />
      <IonText color="light">
        <p>Playlist</p>
        <p>par Utilisateur</p>
      </IonText>
    </div>
    <div class="song-icons-container">
      <img
        @click="like"
        class="song-icons"
        :class="{ liked: isLiked }"
        :src="isLiked ? 'assets/icon/' + src.true : 'assets/icon/' + src.false"
        alt=""
      />
      <img
        @click="handleButtonClick($event)"
        class="song-icons"
        src="assets/icon/more.svg"
        alt=""
      />
      <ion-popover mode="ios">
        test
      </ion-popover>
    </div>
  </IonItem>
</template>

<script>
import { IonText, IonItem, IonPopover, popoverController } from "@ionic/vue";
import popoverSong from "../components/PopoverSong";
export default {
  name: "Song",
  components: {
    IonText,
    IonItem,
    IonPopover,
  },
  data() {
    return {
      isLiked: false,
      src: {
        true: "heart_full.svg",
        false: "heart.svg",
      },
      popover: null,
      currentPopover: null,
    };
  },
  methods: {
    like() {
      console.log("like");
      this.isLiked = !this.isLiked;
    },
    async handleButtonClick(ev) {
      this.popover = await popoverController.create({
        component: popoverSong,
        event: ev,
        translucent: true,
        componentProps: { name: "Test" },
      });
      this.currentPopover = this.popover;
      return this.popover.present();
    },
    dismissPopover() {
      if (this.currentPopover) {
        this.currentPopover.dismiss().then(() => {
          this.currentPopover = null;
        });
      }
    },
  },
};
</script>

<style scoped>
.liked {
  filter: invert(25%) sepia(41%) saturate(2706%) hue-rotate(350deg)
    brightness(92%) contrast(88%) !important;
}
.song-img {
  width: 75px;
  border-radius: 10px;
}
.song-icons-container {
  width: 100px;
  display: flex;
  justify-content: space-around;
  margin-left: auto;
}
.song-icons {
  width: 30px;
  filter: invert(1);
}
.song-item {
  width: 100%;
}
.song-item > div:first-child {
  display: flex;
  align-items: center;
}
ion-text > p {
  margin: 0;
  margin-left: 12px;
}
ion-text > p:last-child {
  color: gray;
}
</style>
