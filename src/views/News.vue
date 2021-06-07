<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-text class="ion-text-center" color="light" mode="ios">
        <h1 class="ion-margin-bottom">News</h1>
      </ion-text>
      <div class="news-container">
        <news-card @click="$router.push({ path: '/news/1' })" />
        <news-card @click="$router.push({ path: '/news/1' })" />
        <news-card @click="$router.push({ path: '/news/1' })" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonText } from "@ionic/vue";
import NewsCard from "../components/NewsCard.vue";
export default {
  name: "News",
  components: {
    IonPage,
    IonContent,
    NewsCard,
    IonText,
  },
};
</script>

<style scoped>
.news-container {
  margin-top: 5%;
}
.news-container div:not(:first-child) {
  margin-top: 10%;
}
</style>
