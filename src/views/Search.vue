<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <IonSearchbar
        v-model="query"
        placeholder="Rechercher un article, un artiste..."
        color="light"
        inputmode="text"
        mode="ios"
        @keyup.enter="searchPosts(query)"
      ></IonSearchbar>
      <transition name="fade">
        <div class="content" v-if="query.length == 0">
          <NewsSlider></NewsSlider>
          <DiscoverSlider></DiscoverSlider>
        </div>
        <div v-else-if="search.length > 0">
          <NewsSlider :searching="true"></NewsSlider>
        </div>
        <div v-else-if="search.length == 0">
          <IonText color="light">
            <h3 style="text-align:center;">Aucun résultat... 😔</h3>
          </IonText>
        </div>
      </transition>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonSearchbar, IonText } from "@ionic/vue";
import NewsSlider from "../components/NewsSlider";
import DiscoverSlider from "../components/DiscoverSlider";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Search",
  components: {
    IonPage,
    IonContent,
    IonSearchbar,
    IonText,
    NewsSlider,
    DiscoverSlider,
  },
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(["searchPosts"]),
  },
  computed: {
    ...mapGetters(["search"]),
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
.content div {
  margin-bottom: 75px;
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
