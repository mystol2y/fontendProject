<template>
  <div class="Activity">
    <PageLoader />
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">กิจกรรม</li>
      </ol>
    </nav>
    <div class="container">
      <div class="banner">
        <img src="../assets/0410201586525987.png" alt="" />
        <!-- <div>
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
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/0410201586525987.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/0410201586525987.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div> -->
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
            style="width: 20rem;"
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
              <p class="card-text color-gray">วันที่เผยแพร่ 28 ม.ค. 2564</p>
              <b-button class="btn btn-primary" @click="eventDetail(index)"
                >อ่านเพิ่มเติม</b-button
              >
            </div>
          </div>
        </div>
        <jw-pagination
          :pageSize="10"
          :labels="customLabels"
          :items="events"
          @changePage="onChangePageEvents"
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
import router from "../router/index";
import PageLoader from "@/components/PageLoader.vue";
let axios = require("axios");
export default {
  name: "Events",
  components: {
    PageLoader,
  },
  data() {
    return {
      events: "",
      eventslist: [],
      api_img,
      customLabels,
    };
  },
  computed: {
    // get() {
    //   console.log('news:computed');
    //   return this.$store.getters.getContent;
    // },
  },
  async mounted() {
    console.log("news:mounted");
    //  this.initial();
  },
  methods: {
    async getEvents() {
      let config = {
        method: "get",
        url: "https://express.crm-flow.com/api/events/read",
        headers: {},
      };

      await axios(config)
        .then((response) => {
          this.events = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    onChangePageEvents(pageOfItems) {
      // update page of items
      this.eventslist = pageOfItems;
    },
    async eventDetail(index) {
      this.$store.dispatch("addEventsDetail", this.eventslist[index]);
      router.push({ name: "Activity1" });
    },
    // async initial() {
    //   alert('news');
    //   console.log(this.$store.getters.getContent)
    //    this.news = await JSON.parse(this.$store.getters.getContent);
    //   this.news = await JSON.parse(this.news.news);
    //   this.news = this.news[0];
    // },
  },
  async created() {
    console.log("news:created");
    this.getEvents();
  },
};
</script>

<style scoped>
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
.banner {
  height: auto;
  margin: 50px 0;
  width: 100%;
}
.banner img {
  height: 100%;
  width: 100%;
}
.row {
  margin: 0 !important;
}
.activity .row .card {
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
  .activity .row .card {
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
