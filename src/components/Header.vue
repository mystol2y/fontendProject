<template>
  <div class="Header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="../assets/registerlogo.png" alt="" />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item btn">
            <router-link v-if="$store.getters.getNav.home" to="/"
              >หน้าหลัก</router-link
            >
          </li>
          <li class="nav-item btn">
            <router-link v-if="$store.getters.getNav.news" to="/News"
              >ข่าวสาร</router-link
            >
          </li>
          <li class="nav-item btn">
            <router-link v-if="$store.getters.getNav.activity" to="/activity"
              >กิจกรรม</router-link
            >
          </li>
          <li class="nav-item btn">
            <router-link v-if="$store.getters.getNav.permission" to="/benefit"
              >สิทธิประโยชน์</router-link
            >
          </li>
          <li class="nav-item btn">
            <router-link to="/contact">ติดต่อเรา</router-link>
          </li>
          <li class="nav-item btn">
            <router-link v-if="$store.getters.getNav.profile" to="/profile"
              >โปรไฟล์</router-link
            >
          </li>
          <li class="nav-item btn">
            <router-link v-if="$store.getters.getNav.register" to="/register"
              >สมัครสมาชิก</router-link
            >
          </li>
          <li
            v-if="$store.getters.getNav.login"
            class="nav-item btn btn-primary"
          >
            <router-link to="/Login" class="text-light"
              >เข้าสู่ระบบ</router-link
            >
          </li>
          <li
            v-if="$store.getters.getNav.logout"
            @click="logOut"
            class="nav-item btn btn-danger"
          >
            <router-link to="/" class="text-light">ออกจากระบบ</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import router from "../router/index";

export default {
  name: "Header",
  data() {
    return {};
  },
  async created() {},
  mounted() {},
  computed: {
    get() {
      return this.$store.getters.getNav;
    },
  },
  methods: {
    async logOut() {
      localStorage.removeItem("profile");
      this.$store.dispatch("removeProfile");
      console.log("logout");
      sessionStorage.clear();
      router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
a:hover {
  /* background: rgb(93, 162, 252); */
  /* padding: 10px; */
  cursor: pointer;
  /* color:white!important; */
  text-decoration: none;
  /* border-radius: 5px; */
  /* font-size: 18px; */
}
img {
  width: 75px;
  margin-left: 100px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .ml-auto {
    text-align: right !important;
  }
  .mr-5 {
    margin: 0 !important;
    padding-top: 15px !important;
  }
}
@media (min-width: 250px) and (max-width: 767px) {
  .ml-auto {
    text-align: right !important;
  }
  .mr-5 {
    margin: 0 !important;
    padding-top: 15px !important;
  }
}
</style>
