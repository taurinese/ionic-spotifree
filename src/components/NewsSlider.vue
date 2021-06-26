<template>
  <div v-if="searching && search.length > 0">
    <ion-text class="ion-text-center" color="light" mode="ios">
      <h1 class="ion-margin-bottom">Actualités ({{ search.length }})</h1>
    </ion-text>
    <div class="news">
      <div class="slide">
        <IonIcon
          :icon="chevronBackOutline"
          @click="switchNews('previous')"
          v-if="search.length > 1"
        ></IonIcon>
        <div
          class="news-img"
          @click="$router.push({ path: '/news/' + search[index].id })"
        >
          <img :src="search[index].url_image" alt="" />
        </div>

        <IonIcon
          :icon="chevronForwardOutline"
          @click="switchNews('next')"
          v-if="search.length > 1"
        ></IonIcon>
      </div>
      <ion-text color="light" mode="ios" class="ion-text-center">
        <h3>{{ search[index].title }}</h3>
      </ion-text>
      <ion-text mode="ios" class="ion-text-center">
        <p v-html="search[index].body"></p>
      </ion-text>
    </div>
  </div>
  <div v-else-if="posts.length > 0">
    <ion-text class="ion-text-center" color="light" mode="ios">
      <h1 class="ion-margin-bottom">Actualités</h1>
    </ion-text>
    <div class="news">
      <div class="slide">
        <IonIcon
          :icon="chevronBackOutline"
          @click="switchNews('previous')"
        ></IonIcon>
        <div
          class="news-img"
          @click="$router.push({ path: '/news/' + posts[index].id })"
        >
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
        <p v-html="posts[index].body"></p>
      </ion-text>
    </div>
  </div>
</template>

<script>
import { IonText, IonIcon } from "@ionic/vue";
import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons";
import { mapGetters } from "vuex";
export default {
  name: "NewsSlider",
  components: {
    IonText,
    IonIcon,
  },
  data() {
    return {
      index: 0,
    };
  },
  setup() {
    return {
      chevronBackOutline,
      chevronForwardOutline,
    };
  },
  props: ["searching"],
  computed: {
    ...mapGetters({
      posts: "lastPosts",
      search: "search",
    }),
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
  mounted() {
    if (this.$store.getters.posts.length == 0) {
      this.$store.dispatch("getPosts");
    }
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
.news-img img {
  border-radius: 12px;
}
ion-text > p {
  width: 300px;
  margin: auto;
  color: rgb(169, 169, 169);
}
</style>
