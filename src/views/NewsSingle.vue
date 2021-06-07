<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-text class="ion-text-center" color="light" mode="ios">
        <h1 class="ion-margin-bottom">Titre</h1>
      </ion-text>
      <div class="news">
        <news-card :title="false" :author="true" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonText } from "@ionic/vue";
import NewsCard from "../components/NewsCard.vue";
export default {
  name: "NewsSingle",
  components: {
    IonPage,
    IonContent,
    NewsCard,
    IonText,
  },
};
</script>

<style scoped>
.news {
  margin-top: 10%;
}
</style>
