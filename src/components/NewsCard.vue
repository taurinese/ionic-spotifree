<template>
  <div>
    <div class="news">
      <div class="news-img"></div>
      <ion-text
        v-if="isTitleShown"
        color="light"
        mode="ios"
        class="ion-text-center"
      >
        <h3 id="news-title">Titre</h3>
      </ion-text>
      <ion-text mode="ios" class="ion-text-center">
        <p>
          Description
        </p>
      </ion-text>
      <ion-text v-if="isAuthorShown">
        <p class="author">par author le 01/01/9999</p>
      </ion-text>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: ["data", "title", "author"],
  computed: {
    isTitleShown() {
      if (this.title == false) {
        return false;
      } else return true;
    },
    isAuthorShown() {
      if (this.author == true) return true;
      else return false;
    },
  },
};
</script>

<style scoped>
.news-img {
  width: 300px;
  height: 200px;
  border-radius: 15px;
  margin: auto;
  position: relative;
  background-color: white;
}
ion-text > p {
  width: 300px;
  margin: auto;
  color: rgb(169, 169, 169);
}
.author {
  text-align: right;
  font-style: italic;
  margin-top: 5%;
}
</style>
