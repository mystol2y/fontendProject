<template>
  <div class="Register_complete">
      <div class="container">
          <div class="card mx-auto">
              <div class="img mt-5">
                  <img src="../assets/registerlogo.png" alt="">
              </div>
              <div class="content mt-5">
                  <h5>ท่านได้ทำการสมัครสมาชิกสำเร็จแล้ว</h5>
              </div>
              <router-link to="/" class="btn btn-success w-50 mx-auto mt-5 mb-5">ตกลง</router-link> 
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Register_complete'
}
</script>

<style scoped>
    .card {
        margin-top: 50px;
        width: 50%;
        height: auto;
    }
</style>
