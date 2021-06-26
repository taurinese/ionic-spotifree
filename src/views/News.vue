<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-text class="ion-text-center" color="light" mode="ios">
        <h1 class="ion-margin-bottom">News</h1>
      </ion-text>
      <div class="news-container">
        <news-card
          v-for="post in posts"
          :key="post"
          :data="post"
          @click="$router.push({ path: '/news/' + post.id })"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonText } from "@ionic/vue";
import NewsCard from "../components/NewsCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "News",
  components: {
    IonPage,
    IonContent,
    NewsCard,
    IonText,
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    ...mapGetters(["posts"]),
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
news-card {
  margin-bottom: 15%;
}
</style>
