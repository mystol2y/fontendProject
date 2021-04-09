<template>
  <div class="Login ">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">เข้าสู่ระบบ</li>
      </ol>
    </nav>
    <form v-on:submit.prevent="onSubmit" class="container mt-5">
      <div class="card text-left p-5">
        <img src="../assets/registerlogo.png" alt="" />
        <h5 class="text-center my-3">หอการค้าจังหวัดนครพนม</h5>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            type="text"
            class="form-control"
            id="Username"
            v-model="username"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="password"
          />
        </div>
        <!-- <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div> -->
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
const axios = require("axios");
import router from "../router/index";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      profile: "",
    };
  },
  methods: {
    onSubmit: function() {
      let data = JSON.stringify({
        username: this.username,
        password: this.password,
      });
      let config = {
        method: "post",
        url: "https://express.crm-flow.com/api/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(async (response) => {
          this.profile = await response.data[0];
          localStorage.setItem("profile", JSON.stringify(this.profile));
          this.$store.dispatch("addProfile", JSON.stringify(this.profile));
          router.push({ name: "Home" });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
img {
  width: 150px;
  height: auto;
  margin: 0 auto;
}
</style>
