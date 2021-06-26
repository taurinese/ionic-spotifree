<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div v-if="post">
        <ion-text class="ion-text-center" color="light" mode="ios">
          <h1 class="ion-margin-bottom">{{ post.title }}</h1>
        </ion-text>
        <div class="news">
          <news-card :data="post" :title="false" :author="true" />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonText } from "@ionic/vue";
import NewsCard from "../components/NewsCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "NewsSingle",
  components: {
    IonPage,
    IonContent,
    NewsCard,
    IonText,
  },
  mounted() {
    this.$store.dispatch("getPost", this.$route.params.id);
    console.log("dispatch post" + this.$route.params.id);
  },
  computed: {
    ...mapGetters(["post"]),
  },
};
</script>

<style scoped>
.news {
  margin-top: 10%;
}
</style>
