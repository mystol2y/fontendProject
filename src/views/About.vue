<template>
  <div class="about">
    <PageLoader />
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">สิทธิประโยชน์</li>
      </ol>
    </nav>
    <div class="container">
      <div class="headpaper">
        <img src="../../src/assets/registerlogo.png" alt="" />
        <h3>หอการค้าจังหวัดนครพนม</h3>
        <h4>THE NAKHONPHANOM CHAMBER OF COMMERCE</h4>
        <h5>
          เลขที่ 182/7 ถนนพินิจรังสรรค์ ตำบลในเมือง อำเภอเมือง จังหวัดนครพนม
          48000
        </h5>
        <h5>โทรศัพท์. 0-4250-2007-8 / โทรสาร. 0-4250-2008</h5>
        <h5>
          www.nkpchamber.com / Email : nkp_cc@yahoo.co.th,nkp@nkpchamber.com
        </h5>
      </div>
      <br />
      <hr style="border: 2px solid #000" />
      <br />
      <form v-on:submit.prevent="onSubmit">
        <h4>ต่ออายุสมาชิก</h4>
        <div class="row text-left ">
            <div class="col">
            เลขบัตรประชาชน
            <input type="text" class="form-control form-control-sm " placeholder="" v-model="formsarray.id_card" required/>
          </div>
          </div>
          <div class="cen">
            <img src="https://pngimg.com/uploads/qr_code/qr_code_PNG24.png" alt="">
          </div>
          <div class="col mb-3 mx-auto">
            อัพโหลดรูป การชำระเงิน
            <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile01" @change="processFile($event)">
            <label class="custom-file-label" for="inputGroupFile01">{{formsarray.slip_img.name}}</label>
            
          </div>
          </div>
          <button type="submit" class="btn btn-primary mb-5">ตกลง</button>
      </form >
    </div>
  </div>
</template>

<script>
import PageLoader from "@/components/PageLoader.vue";
export default {
  name: 'About',
     components: {
    PageLoader
  },
  data(){
   return {
     formsarray:{
       id_card:'',
       slip_img:''
     },
   }
 },
  methods:{
    onSubmit(){
      console.log(this.formsarray)
      //var a = this.arr;
    //  var s = Object.entries(a);
    //  var result = Object.keys(a).map((key) => [a[key]]);
    },
    processFile(event) {
    this.formsarray.slip_img = event.target.files[0]
  }
  }
}
</script>


<style scoped>
  @media (min-width:1024px) and (max-width:1366px){
  
}
@media (min-width:768px) and (max-width:1023px){
  .headpaper img{
    width: 150px;
    margin-top: 40px;
  }
  .cen img {
    width: 400px;
  }
}
@media (min-width:250px) and (max-width:767px){
  .headpaper img{
    width: 150px;
    margin-top: 40px;
  }
  .cen img {
    width: 200px;
  }
  h5 {
    font-size: 10px;
  }
  h4 {
    font-size: 14px;
  }
  h3 {
    font-size: 16px;
  }
  .custom-file {
    width: auto;
  }
  .mx-auto {
    margin: 0;
  }
}
</style>