<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <IonSearchbar
        v-model="query"
        placeholder="Rechercher un article, un artiste..."
        color="light"
        inputmode="text"
        mode="ios"
      ></IonSearchbar>
      <transition name="fade">
        <div class="content" v-if="!query">
          <NewsSlider></NewsSlider>
          <DiscoverSlider></DiscoverSlider>
        </div>
      </transition>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonSearchbar } from "@ionic/vue";
import NewsSlider from "../components/NewsSlider";
import DiscoverSlider from "../components/DiscoverSlider"
export default {
  name: "Search",
  components: {
    IonPage,
    IonContent,
    IonSearchbar,
    NewsSlider,
    DiscoverSlider
  },
  data() {
    return {
      query: "",
    };
  },
};
</script>

<style scoped>
ion-searchbar {
  width: 80%;
  margin: auto;
  margin-top: 75px;
  --border-radius: 25px;
}
.content div{
    margin-bottom:75px;
}
/* TRANSITIONS */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
