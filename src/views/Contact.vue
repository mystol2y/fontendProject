<template>
  <div class="Contact">
      <PageLoader />
      <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">ติดต่อเรา</li>
      </ol>
    </nav>
    <div class="container">
        <div class="banner">
            <img src="../assets/0304201583294639.jpg" alt="">
        </div>
        <div class="d-flex justify-content-between align-items-center mt-5">
            <div class="row w-100">
            <div class="col-lg-6 col-md-6 col-sm-12 image-wid">
                 <img src="../assets/registerlogo.png" alt="" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 text-left">
                <h3 class="cen">หอการค้าจังหวัดนครพนม</h3>
                <h5 class="cen1">THE NAKHONPHANOM CHAMBER OF COMMERCE</h5>
                <h6>เลขที่ 182/7 ถนนพินิจรังสรรค์ ตำบลในเมือง อำเภอเมือง จังหวัดนครพนม 48000</h6>
                <h6>โทรศัพท์: 0-4250-2007-8</h6>
                <h6>โทรสาร: 0-4250-2008</h6>
                <h6>อีเมล : nkp_cc@yahoo.co.th,<br>nkp@nkpchamber.com</h6>
            </div>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-5">
            <div class="row w-100">
            <div class="col-lg-6 col-md-6 col-sm-12 image-wid">
                 <img src="../assets/contact_logo_tcc.png" alt="" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 text-left">
                <h3 class="cen">หอการค้าไทย</h3>
                <h5 class="cen1">THE THAI CHAMBER OF COMMERCE</h5>
                <h6>เลขที่ 150 ถนนราชบพิธ แขวงวัดราชบพิธ เขตพระนคร กรุงเทพฯ 10200</h6>
                <h6>โทรศัพท์: 0 2018 6888</h6>
                <h6>โทรสาร:  0 2622 1879 , 0 2225 3372</h6>
                <h6>อีเมล : bot@thaichamber.org</h6>
                <a href="https://www.thaichamber.org">https://www.thaichamber.org</a>
            </div>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-5">
            <div class="row w-100">
            <div class="col-lg-6 col-md-6 col-sm-12 image-wid">
                 <img src="../assets/contact_logo_bot.png" alt="" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 text-left">
                <h3 class="cen">สภาหอการค้าแห่งประเทศไทย</h3>
                <h5 class="cen1">BOARD OF TRADE OF THAILAND</h5>
                <h6>เลขที่ 150/2 ถนนราชบพิธ แขวงวัดราชบพิธ เขตพระนคร กรุงเทพฯ 10200</h6>
                <h6>โทรศัพท์: 0 2018 6888</h6>
                <h6>โทรสาร: 0 2622 1879 , 0 2225 3372</h6>
                <h6>อีเมล : bot@thaichamber.org</h6>
                <a href="https://www.thaichamber.org">https://www.thaichamber.org</a>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import PageLoader from "@/components/PageLoader.vue";
export default {
    name: 'Contact',
    component: {
        PageLoader
    }
}
</script>

<style scoped>
    .d-flex img {
        width: 150px;
        height: auto;
    }
    .banner {
    height: auto;
    margin: 50px 0;
    width: 100%;
    }
    .banner img{
    height: 100%;
    width: 100%;
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