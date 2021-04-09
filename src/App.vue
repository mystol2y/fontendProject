<template>
  <div id="app">
    <PageLoader />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PageLoader from "@/components/PageLoader.vue";
export default {
  components: {
    Header,
    Footer,
    PageLoader
  },
  data() {
    return {
      profile: localStorage.getItem("profile"),
    };
  },
  async created() {
    await this.checkstat();
  },
  methods: {
    async checkstat() {
      localStorage.getItem("profile") === null
        ? null
        : this.$store.dispatch("addProfile", localStorage.getItem("profile"));
    },
  },
};
</script>

<style>
@font-face {
  font-family: "THSarabun";
  src: local("THSarabun"),
   url(/src/fonts/THSarabun.ttf) format("truetype");
}
#app {
  font-family: "THSarabun",Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
