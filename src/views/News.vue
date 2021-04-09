<template>
  <div class="News">
    <PageLoader />
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">ข่าว</li>
      </ol>
    </nav>
    <div class="container">
      <div class="banner">
        <img src="../assets/0304201583294538.jpg" alt="" />
      </div>
      <div class="activity mt-5">
        <h4 class="text-left">ข่าวสาร</h4>
        <hr />
        <div class="row">
          <div
            v-for="(new_, index) in newslist"
            :key="new_ + index"
            :v-if="!new_"
            class="card text-left m-3 "
            style="width: 20rem;"
          >
            <img
              :src="api_img + 'news/' + new_.img_name"
              class="card-img-top"
              alt=""
              style="max-height: 150px;"
            />
            <div class="card-body">
              <p class="card-title">
                {{ new_.title }}
              </p>
              <p class="card-text color-gray">วันที่เผยแพร่ 28 ม.ค. 2564</p>
              <b-button class="btn btn-primary" @click="newsDetail(index)"
                >อ่านเพิ่มเติม</b-button
              >
            </div>
          </div>
        </div>
        <jw-pagination
          :pageSize="10"
          :labels="customLabels"
          :items="news"
          @changePage="onChangePage"
        ></jw-pagination>
      </div>
    </div>
  </div>
</template>

<script>
const api_img = "https://express.crm-flow.com/media/";
import router from "../router/index";
import PageLoader from "@/components/PageLoader.vue";
let axios = require("axios");
const customLabels = {
  first: "fisrt",
  last: "last",
  previous: "<",
  next: ">",
};
export default {
  name: "News",
  components: {
    PageLoader,
  },
  data() {
    return {
      news: "",
      newslist: [],
      customLabels,
      pageOfItems: [],
      api_img,
    };
  },
  computed: {
    get() {
      return this.$store.getters.getNews;
    },
  },
  async mounted() {
    console.log("news:mounted");
  },
  methods: {
    async getNews() {
      let config = {
        method: "get",
        url: "https://express.crm-flow.com/api/news/read",
        headers: {},
      };
      await axios(config)
        .then((response) => {
          this.news = response.data;
          // alert('get');
          this.$store.dispatch("addNews", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.newslist = pageOfItems;
    },
    async newsDetail(index) {
      this.$store.dispatch("addNewsDetail", this.newslist[index]);
      router.push({ name: "News1" });
    },
  },
  async created() {
    console.log("news:created");
    await this.getNews("created");
  },
};
</script>

<style scoped>
.banner {
  height: auto;
  margin: 50px 0;
  width: 100%;
}
.banner img {
  height: 100%;
  width: 100%;
}
.btn-primary:hover {
  background: #333;
}
.color-gray {
  color: rgb(0, 132, 255);
}
.card:hover {
  background: rgb(153, 197, 255);
  cursor: pointer;
  color: white !important;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.row {
  margin: 0 !important;
}
.news .row .card {
  width: 350px !important;
}
@media (min-width: 1024px) and (max-width: 1366px) {
  .row {
    margin: 0 !important;
  }
  .news .row .card {
    width: 285px !important;
  }
  .activity .row .card {
    width: 285px !important;
  }
  .pagination {
    margin-top: 20px !important;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .row {
    margin: 0 !important;
  }
  .news .row .card {
    width: 320px !important;
  }
  .pagination {
    margin-top: 20px !important;
  }
}
@media (min-width: 250px) and (max-width: 767px) {
  .banner {
    height: auto;
    margin: 50px 0;
    width: 100%;
  }
  .row {
    margin: 0 !important;
  }
  ul .navbar-nav .ml-auto {
    text-align: right !important;
  }
  .news .row .card {
    margin: 20px auto !important;
    width: 285px !important;
  }
  .activity .row .card {
    margin: 20px auto !important;
    width: 285px !important;
  }
  .pagination {
    margin: 20px 0 !important;
  }
}
</style>
