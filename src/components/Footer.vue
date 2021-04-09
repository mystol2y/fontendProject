<template>
  <div class="Footer">
      <div class="container">
      <div class="d-flex justify-content-center align-items-center">
            <div class="row w-100 ">
            <div class="col-lg-6 col-md-6 col-sm-12 image-wid ">
                 <img src="../assets/registerlogo.png" alt="" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 text-left ">
                <h3 class="cen">ติดต่อเรา</h3>
                <h6>เลขที่ 182/7 ถนนพินิจรังสรรค์ ตำบลในเมือง อำเภอเมือง จังหวัดนครพนม 48000</h6>
                <h6>โทรศัพท์: 0-4250-2007-8</h6>
                <h6>โทรสาร: 0-4250-2008</h6>
                <h6>อีเมล : nkp_cc@yahoo.co.th,<br>nkp@nkpchamber.com</h6>
            </div>
            </div>
            </div>
        </div>
      <!-- <div class="row">
          <div class="col">
              <img src="../assets/registerlogo.png" alt="">
          </div>
          <div class="col text-left p-5">
              <p>ติดต่อ</p>
              <p>อีเมล : nkp_cc@yahoo.co.th,nkp@nkpchamber.com</p>
              <p>ที่อยู่ : เลขที่ 182/7 ถนนพินิจรังสรรค์ ตำบลในเมือง อำเภอเมือง จังหวัดนครพนม 48000</p>
              <p>โทรศัพท์ : 0-4250-2007-8 / โทรสาร : 0-4250-2008</p>
          </div>
      </div> -->
  </div>
</template>

<script>
export default {
 name: 'Footer'
}
</script>

<style scoped>
    .Footer {
        background: #E9ECEF;
        padding: 50px 0;
        margin: 105px 0 0 0;
        width: 100%;
    }
    img {
        width: 150px;
    }
     @media (min-width:1024px) and (max-width:1366px){
        .cen {
            font-size: 22px;
        }
        .cen1 {
            font-size: 20px;
        }
        .image-wid {
            margin-bottom: 20px;
        }
    }
    @media (min-width:768px) and (max-width:1023px){
        .cen {
            font-size: 22px;
        }
        .cen1 {
            font-size: 20px;
        }
        .image-wid {
            margin-bottom: 20px;
        }    
    }
    @media (min-width:250px) and (max-width:767px){
        .cen {
            font-size: 22px;
        }
        .cen1 {
            font-size: 20px;
        }
        .image-wid {
            margin-bottom: 20px;
        }    
    }
</style>