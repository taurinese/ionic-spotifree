<template>
  <div>
    <ion-text class="ion-text-center" color="light" mode="ios">
      <h1 class="ion-margin-bottom">Actualités</h1>
    </ion-text>
    <div class="news">
      <div class="slide">
        <IonIcon
          :icon="chevronBackOutline"
          @click="switchNews('previous')"
        ></IonIcon>
        <div class="news-img">
          <img :src="posts[index].url_image" alt="" />
        </div>

        <IonIcon
          :icon="chevronForwardOutline"
          @click="switchNews('next')"
        ></IonIcon>
      </div>
      <ion-text color="light" mode="ios" class="ion-text-center">
        <h3>{{ posts[index].title }}</h3>
      </ion-text>
      <ion-text mode="ios" class="ion-text-center">
        <p>
          {{ posts[index].body }}
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
  props: ["posts"],
  data() {
    return {
      news: [
        {
          backgroundColor: "red",
          title: "Concert des Daft Punk red ",
          short:
            "Ceci est un résumé d'une actualité tu as compris ou quoi de quoi on parle là blabla",
        },
        {
          backgroundColor: "white",
          title: "Concert des Daft Punk white",
          short:
            "Ceci est un résumé d'une actualité tu as compris ou quoi de quoi on parle là blabla",
        },
        {
          backgroundColor: "yellow",
          title: "Concert des Daft Punk yellow",
          short:
            "Ceci est un résumé d'une actualité tu as compris ou quoi de quoi on parle là blabla",
        },
      ],
      index: 0,
    };
  },
  setup() {
    return {
      chevronBackOutline,
      chevronForwardOutline,
    };
  },
  methods: {
    switchNews(target) {
      if (target == "previous") {
        if (this.index == 0) {
          this.index = this.posts.length - 1;
        } else this.index--;
      } else if (target == "next") {
        if (this.index == this.posts.length - 1) {
          this.index = 0;
        } else this.index++;
      }
      console.log(`Target : ${target}`);
    },
  },
};
</script>

<style scoped>
.disabled {
  opacity: 0.5;
}
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
  /* height: 200px; */
  border-radius: 15px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
ion-text > p {
  width: 300px;
  margin: auto;
  color: rgb(169, 169, 169);
}
</style>
