<template>
  <div>
    <div class="news">
      <div class="news-img"><img :src="data.url_image" alt="" /></div>
      <ion-text
        v-if="isTitleShown"
        color="light"
        mode="ios"
        class="ion-text-center"
      >
        <h3 id="news-title">{{ data.title }}</h3>
      </ion-text>
      <ion-text
        mode="ios"
        class="ion-text-center"
        :class="{ bodyMargin: !isTitleShown }"
      >
        <p v-html="data.body"></p>
      </ion-text>
      <ion-text v-if="isAuthorShown">
        <p class="author">par {{ data.user.name }} le {{ getDate }}</p>
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
    getDate() {
      let date = new Date(this.data.created_at);
      date =
        (date.getMonth() > 8
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1)) +
        "/" +
        (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
        "/" +
        date.getFullYear();
      return date;
    },
  },
};
</script>

<style scoped>
.news {
  margin-bottom: 20%;
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
  max-height: 200px;
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
.bodyMargin p {
  margin-top: 5%;
}
</style>
