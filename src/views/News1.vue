<template>
  <div class="News1">
    <PageLoader />
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">ข่าวสาร</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ $store.getters.getNewsDetail.title }}
        </li>
      </ol>
    </nav>
    <div class="container">
      <h3 class="mt-5 mb-5">
        <img
          :src="api_img + 'news/' + $store.getters.getNewsDetail.img_name"
          class="card-img-top"
          alt=""
        />
        <froalaView v-model="$store.getters.getNewsDetail.body"></froalaView>
        <!-- <div
          contenteditable="true"
          v-html="$store.getters.getEventsDetail.body"
        ></div> -->
      </h3>
    </div>
  </div>
</template>

<script>
const api_img = "https://express.crm-flow.com/media/";
import PageLoader from "@/components/PageLoader.vue";
export default {
  name: "News1",
  components: {
    PageLoader,
  },
  data() {
    return {
      api_img,
    };
  },
  computed: {
    get() {
      return this.$store.getters.getNewsDetail;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px 0;
}
.container img {
  width: 100%;
  height: 100%;
}
@media (min-width: 1024px) and (max-width: 1366px) {
  .container {
    padding: 20px 0;
  }
  .container img {
    width: 100%;
    height: 100%;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    padding: 20px 0;
  }
  .container img {
    width: 100%;
    height: 100%;
  }
}
@media (min-width: 250px) and (max-width: 767px) {
  .container {
    padding: 20px 0;
  }
  .container img {
    width: 100%;
    height: 100%;
  }
}
</style>
