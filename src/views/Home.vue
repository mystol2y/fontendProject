<template>
  <div class="Home">
    <PageLoader />
    <div class="container ">
      <div class="banner mt-5 mb-5">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide v-for="bann in banner" :key="bann">
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                :src="api_img + 'banner/' + bann.img_name"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        </b-carousel>
      </div>
      <br />
      <!-- ทั้งหมดนี้คือ loading อย่าลบ div ออก -->
      <!-- <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> -->
      <!-- -------------------------------------------------------------------------------------- -->
      <div class="news">
        <h4 class="text-left">ข่าวสาร</h4>
        <hr />
        <div class="row ">
          <div
            v-for="(news_, index) in newslist"
            :key="news_ + index"
            class="card text-left m-3 "
            style="width: 19rem"
          >
            <img
              :src="api_img + 'news/' + news_.img_name"
              class="card-img-top"
              alt=""
              style="max-height: 150px;"
            />
            <div class="card-body">
              <p class="card-title">
                {{ news_.title }}
              </p>
              <p class="card-text color-gray">
                วันที่เผยแพร่ {{ news_.created_at | formatDate }}
              </p>
              <b-button class="btn btn-primary" @click="newsDetail(index)"
                >อ่านเพิ่มเติม</b-button
              >
            </div>
          </div>
        </div>
        <jw-pagination
          :pageSize="5"
          :labels="customLabels"
          :items="$store.getters.getContent.news"
          @changePage="onChangePageNews"
        ></jw-pagination>
      </div>

      <div class="activity mt-5">
        <h4 class="text-left">กิจกรรม</h4>
        <hr />
        <div class="row">
          <div
            v-for="(events, index) in eventslist"
            :key="events + index"
            :v-if="!events"
            class="card text-left m-3 "
            style="width: 20rem"
          >
            <img
              :src="api_img + 'events/' + events.img_name"
              class="card-img-top"
              alt=""
              style="max-height: 150px;"
            />
            <div class="card-body">
              <p class="card-title">
                {{ events.title }}
              </p>
              <p class="card-text color-gray">
                วันที่เผยแพร่ {{ events.created_at | formatDate }}
              </p>
              <b-button class="btn btn-primary" @click="eventDetail(index)"
                >อ่านเพิ่มเติม</b-button
              >
            </div>
          </div>
        </div>
        <jw-pagination
          :pageSize="5"
          :labels="customLabels"
          :items="$store.getters.getContent.events"
          @changePage="onChangePageEvents"
        ></jw-pagination>
      </div>
      <div class="activity mt-5">
        <h4 class="text-left">สิทธิประโยชน์</h4>
        <hr />
        <div class="row">
          <div
            v-for="(benefits, index) in benefitslist"
            :key="benefits + index"
            :v-if="!benefits"
            class="card text-left m-3 "
            style="width: 20rem"
          >
            <img
              :src="api_img + 'benefits/' + benefits.img_name"
              class="card-img-top"
              alt=""
              style="max-height: 150px;"
            />
            <div class="card-body">
              <p class="card-title">
                {{ benefits.title }}
              </p>
              <p class="card-text color-gray">
                วันที่เผยแพร่ {{ benefits.created_at | formatDate }}
              </p>
              <b-button class="btn btn-primary" @click="benefitsDetail(index)"
                >อ่านเพิ่มเติม</b-button
              >
            </div>
          </div>
        </div>
        <jw-pagination
          :pageSize="5"
          :labels="customLabels"
          :items="$store.getters.getContent.benefits"
          @changePage="onChangePageBenefits"
        ></jw-pagination>
      </div>
    </div>
  </div>
</template>

<script>
const customLabels = {
  first: "fisrt",
  last: "last",
  previous: "<",
  next: ">",
};
const api_img = "https://express.crm-flow.com/media/";
let axios = require("axios");
import router from "../router/index";
import PageLoader from "@/components/PageLoader.vue";
export default {
  name: "Home",
  components: {
    PageLoader,
  },
  data() {
    return {
      profile: "",
      api_img,
      customLabels,
      content: {},
      newslist: [],
      eventslist: [],
      banner: "",
      benefits: "",
      benefitslist: [],
    };
  },
  async created() {
    await this.checkStat();
    await this.initial_content();

    // console.log(this.profile[0].status);
  },
  async mounted() {
    // console.log(this.profile);
  },
  methods: {
    async checkStat() {
      this.profile = await this.$store.getters.getprofile;
      console.log("profile", this.profile);
      if (this.profile != "" && this.profile.status == 0) {
        router.push({ name: "Profile" });
      }
    },
    async initial_content() {
      await this.getContent();
      this.$store.dispatch("addContent", this.content);
    },
    async getContent() {
      await this.getNews();
      await this.getEvents();
      await this.getBanners();
      await this.getBenefits();
    },
    async getNews() {
      let config = {
        method: "get",
        url: "https://express.crm-flow.com/api/news/read",
        headers: {},
      };

      await axios(config)
        .then((response) => {
          this.content.news = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async getEvents() {
      let config = {
        method: "get",
        url: "https://express.crm-flow.com/api/events/read",
        headers: {},
      };

      await axios(config)
        .then((response) => {
          this.content.events = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async getBanners() {
      let config = {
        method: "get",
        url: "https://express.crm-flow.com/api/banner/read",
        headers: {},
      };

      await axios(config)
        .then((response) => {
          this.banner = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async getBenefits() {
      let config = {
        method: "get",
        url: "https://express.crm-flow.com/api/benefits/read",
        headers: {},
      };

      await axios(config)
        .then((response) => {
          this.content.benefits = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async eventDetail(index) {
      this.$store.dispatch("addEventsDetail", this.eventslist[index]);
      router.push({ name: "Activity1" });
    },
    async newsDetail(index) {
      this.$store.dispatch("addNewsDetail", this.newslist[index]);
      router.push({ name: "News1" });
    },
    async benefitsDetail(index) {
      this.$store.dispatch("addBenefitsDetail", this.benefitslist[index]);
      router.push({ name: "Benefit1" });
    },
    onChangePageNews(pageOfItems) {
      // update page of items
      this.newslist = pageOfItems;
    },
    onChangePageEvents(pageOfItems) {
      // update page of items
      this.eventslist = pageOfItems;
    },
    onChangePageBenefits(pageOfItems) {
      // update page of items
      this.benefitslist = pageOfItems;
    },
  },
};
</script>

<style scoped>
.btn-primary:hover {
  background: #333;
}
/* .color-gray {
  color: rgb(0, 132, 255);
} */
.card:hover {
  background: rgb(153, 197, 255);
  cursor: pointer;
  color: white !important;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
input {
  margin-bottom: 10px;
}
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgb(0, 0, 0);
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (min-width: 1024px) and (max-width: 1366px) {
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
@media (min-width: 250px) and (max-width: 767px) {
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
