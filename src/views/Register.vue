<template>
  <div class="Register">
    <PageLoader />
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">สมัครสมาชิก</li>
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
        <h4>ใบสมัครเป็นสมาชิก</h4>

        <fieldset class="form-group row">
          <legend class="col-form-label col-auto float-sm-left pt-0">
            ข้าพเจ้า
          </legend>
          <div class="col-auto d-flex">
            <div class="form-check ml-3 ">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="1"
                :checked="arr.gender == '1'"
                v-model="arr.gender"
              />
              <label class="form-check-label" for="gridRadios1"> นาย </label>
            </div>
            <div class="form-check ml-3">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="2"
                :checked="arr.gender == '2'"
                v-model="arr.gender"
              />
              <label class="form-check-label" for="gridRadios2"> นาง </label>
            </div>
            <div class="form-check ml-3">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                value="3"
                :checked="arr.gender == '3'"
                v-model="arr.gender"
              />
              <label class="form-check-label" for="gridRadios3"> นางสาว </label>
            </div>
          </div>
        </fieldset>
        <div class="row">
          <div class="col-6 d-flex align-items-center ">
            ชื่อ
            <input
              type="text"
              class="form-control form-control-sm ml-2 "
              placeholder=""
              v-model="arr.firstname"
              required
            />
          </div>
          <div class="col-6 d-flex align-items-center ">
            นามสกุล
            <input
              type="text"
              class="form-control form-control-sm ml-2"
              placeholder=""
              v-model="arr.lastname"
              required
            />
          </div>
          <div class="col-4 d-flex align-items-center">
            อายุ
            <input
              type="text"
              class="form-control form-control-sm mx-2 "
              placeholder=""
              v-model="arr.age"
              required
            />
            ปี
          </div>
          <div class="col-6  d-flex align-items-center">
            วันเกิด
            <date-picker
              v-model="arr.b_date"
              lang="en"
              type="day"
              format="DD-MM-YYYY"
              class="mx-1"
            ></date-picker>
          </div>
        </div>
        <div class="row text-left">
          <div class="col-12">
            (สามี/ภรรยา) ชื่อ<input
              type="text"
              class="form-control form-control-sm "
              placeholder=""
              v-model="arr.married"
              required
            />
          </div>
          <div class="col-4 ">
            ตั้งบ้านเรือนอยู่เลขที่
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder=""
              v-model="arr.address.h_num"
              required
            />
          </div>
          <div class="col-4 ">
            ถนน
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder=""
              v-model="arr.address.road"
              required
            />
          </div>
          <div class="col-4">
            ตำบล
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder=""
              v-model="arr.address.locality"
              required
            />
          </div>
          <div class="col-4">
            อำเภอ
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder=""
              v-model="arr.address.district"
              required
            />
          </div>
          <div class="col-4">
            จังหวัด
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder=""
              v-model="arr.address.province"
              required
            />
          </div>
          <div class="col-4">
            รหัสไปรษณีย์
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder=""
              v-model="arr.address.zip_code"
              required
            />
          </div>
        </div>
        <div class="row d-flex text-left">
          <div class="col-6">
            ชื่อพาณิชยกิจประกอบการ
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder=""
              v-model="arr.commercial_affairs"
              required
            />
          </div>
          <div class="col-6">
            ประเภทวิสาหกิจประกอบการ
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder=""
              v-model="arr.commercial_type"
              required
            />
          </div>
          <div class="col-6">
            ที่ตั้งประกอบการ
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder=""
              v-model="arr.commercial_address"
              required
            />
          </div>
          <div class="col-6">
            โทรศัพท์ / โทรสาร
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder=""
              v-model="arr.phone"
              required
            />
          </div>
          <div class="col-6">
            โทรศัพท์มือถือ
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder=""
              v-model="arr.mobile"
              required
            />
          </div>
        </div>
        <p class="text-left col-12 p-0">
          ข้าพเจ้าทราบ และเข้าใจ ในข้อบังคับของหอการค้าจังหวัดนครพนมดีแล้ว
          จึงขอสมัครเป็นสมาชิกของหอการค้าจังหวัด นครพนม
        </p>
        <fieldset class="form-group row">
          <legend class="col-form-label col-auto float-sm-left pt-0">
            ประเภท
          </legend>
          <div class="col-auto d-flex">
            <div class="form-check ml-3">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios11"
                id="gridRadios11"
                value="1"
                v-model="arr.member_type"
              />
              <label class="form-check-label" for="gridRadios11"> สามัญ </label>
            </div>
            <div class="form-check ml-3">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios22"
                id="gridRadios22"
                value="2"
                v-model="arr.member_type"
              />
              <label class="form-check-label" for="gridRadios22"> สมทบ </label>
            </div>
          </div>
        </fieldset>
        <p class="text-left">
          พร้อมนี้ได้แนบ
          (ถ้าเป็นร้านบุคคลธรรมดาต้องแนบภาพถ่ายใบทะเบียนพาณิชย์หรือใบทะเบียนการค้า
          ถ้าเป็นนิติบุคคลต้องแนบภาพถ่ายหนังสือรับรองนายทะเบียนหุ้นส่วนบริษัทและหนังสือมอบอำนาจ
          ซึ่งระบุว่านิติบุคคลนั้นตกลงมอบอำนาจให้หุ้นส่วนผู้จัดการ
        </p>
        <fieldset class="form-group row">
          <legend class="col-form-label col-auto float-sm-left pt-0">
            ชื่อ
          </legend>
          <div class="col-auto d-flex">
            <div class="form-check ml-3">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios111"
                id="gridRadios111"
                value="gen1"
                v-model="arr.managing_partner.gender"
              />
              <label class="form-check-label" for="gridRadios111"> นาย </label>
            </div>
            <div class="form-check ml-3">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios222"
                id="gridRadios222"
                value="gen2"
                v-model="arr.managing_partner.gender"
              />
              <label class="form-check-label" for="gridRadios222"> นาง </label>
            </div>
            <div class="form-check ml-3">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios333"
                id="gridRadios333"
                value="gen3"
                v-model="arr.managing_partner.gender"
              />
              <label class="form-check-label" for="gridRadios333">
                นางสาว
              </label>
            </div>
            <br />
          </div>
        </fieldset>
        <div class="col-12">
          <input
            type="text"
            class="form-control form-control-sm ml-2"
            placeholder=""
            v-model="arr.managing_partner.fullname"
            required
          />
        </div>
        <p class="text-left col-12">
          เป็นผู้มีอำนาจทำการแทนได้ทุกอย่างเพียงคนเดียวตามข้อบังคับที่ 10
          รวมเอกสารจำนวน 1 ฉบับ )
        </p>
        <div class="row text-left">
          <div class="col-6 mb-3 ">
            อัพโหลดรูป สำเนาทะเบียนบ้าน
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
                @change="processFile0($event)"
              />
              <label class="custom-file-label" for="inputGroupFile01">{{
                arr.house_particulars_img.name
              }}</label>
            </div>
          </div>
          <div class="col-6 mb-3 ">
            อัพโหลดรูป สำเนาบัตรประชาชน
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile02"
                @change="processFile1($event)"
              />
              <label class="custom-file-label" for="inputGroupFile02">{{
                arr.id_card_img.name
              }}</label>
            </div>
          </div>
          <div class="col-6 mb-3 ">
            อัพโหลดรูป
            สำเนาทะเบียนพาณิชย์หรือทะเบียนการค้า/หนังสือรับรองการจดทะเบียน
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile03"
                @change="processFile2($event)"
              />
              <label class="custom-file-label" for="inputGroupFile03">{{
                arr.commercial_particulars_img.name
              }}</label>
            </div>
          </div>
          <div class="col-6 mb-3 ">
            อัพโหลดรูปถ่าย 1 หรือ 2 นิ้ว จำนวน 2 รูป
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile04"
                @change="processFile3($event)"
              />
              <label class="custom-file-label" for="inputGroupFile04">{{
                arr.profile_img.name
              }}</label>
            </div>
          </div>
          <div class="col-6 mb-3 ">
            อัพโหลดรูป ค่าบำรุงสมาชิก (รายปี) 1,000 บาท/ปี
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile05"
                @change="processFile4($event)"
              />
              <label class="custom-file-label" for="inputGroupFile05">{{
                arr.slip_img.name
              }}</label>
            </div>
          </div>
        </div>
        <div class="col-12 text-left">
          ชื่อผู้ใช้
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder=""
            v-model="arr.username"
            required
          />
        </div>
        <div class="col-12 text-left">
          รหัสผ่าน
          <input
            type="password"
            class="form-control form-control-sm"
            placeholder=""
            v-model="arr.password"
            required
          />
        </div>

        <div class="col-12 text-left">
          ยืนยันรหัสผ่าน
          <input
            v-bind:style="classvalidate"
            v-on:keyup="validate"
            type="password"
            class="form-control form-control-sm"
            placeholder=""
            v-model="arr.repassword"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary mb-5">สมัคร</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import PageLoader from "@/components/PageLoader.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import router from "../router/index";
const axios = require("axios");
const FormData = require("form-data");
export default {
  name: "Register",
  data() {
    return {
      arr: {
        username: "",
        password: "",
        repassword: "",
        b_date: "",
        gender: "",
        firstname: "",
        lastname: "",
        age: "",
        married: "",
        address: {
          h_num: "",
          road: "",
          locality: "",
          district: "",
          province: "",
          zip_code: "",
        },
        commercial_affairs: "",
        member_type: "",
        commercial_address: "",
        phone: "",
        mobile: "",
        managing_partner: {
          gender: "",
          fullname: "",
        },
        house_particulars_img: "",
        id_card_img: "",
        commercial_particulars_img: "",
        profile_img: "",
        slip_img: "",
      },
      classvalidate: {
        borderColor: "",
      },
    };
  },

  components: {
    DatePicker,
    PageLoader,
  },
  methods: {
    onSubmit() {
      // console.log(this.arr);
      let data = new FormData();
      data.append(
        "house_particulars_img",
        this.arr.house_particulars_img,
        this.arr.house_particulars_img.name
      );
      data.append(
        "id_card_img",
        this.arr.id_card_img,
        this.arr.id_card_img.name
      );
      data.append(
        "commercial_particulars_img",
        this.arr.commercial_particulars_img,
        this.arr.commercial_particulars_img.name
      );
      data.append(
        "profile_img",
        this.arr.profile_img,
        this.arr.profile_img.name
      );
      data.append("slip_img", this.arr.slip_img, this.arr.slip_img.name);
      data.append("gender", this.arr.gender);
      data.append("firstname", this.arr.firstname);
      data.append("lastname", this.arr.lastname);
      data.append("age", this.arr.age);
      data.append("b_date", this.arr.b_date);
      data.append("married", this.arr.married);
      data.append("address", JSON.stringify(this.arr.address));
      data.append("commercial_affairs", this.arr.commercial_affairs);
      data.append("commercial_type", this.arr.commercial_type);
      data.append("commercial_address", this.arr.commercial_address);
      data.append("phone", this.arr.phone);
      data.append("mobile", this.arr.mobile);
      data.append("member_type", this.arr.member_type);
      data.append(
        "managing_partner",
        JSON.stringify(this.arr.managing_partner)
      );
      data.append("username", this.arr.username);
      data.append("password", this.arr.password);
      if (
        this.arr.repassword.trim() == this.arr.password.trim() &&
        this.arr.b_date != ""
      ) {
        var config = {
          method: "post",
          url: "https://express.crm-flow.com/api/registerforms",
          data: data,
        };
        axios(config)
          .then(function(response) {
            // console.log(localStorage.getItem("username"));
            router.push({ name: "Regis_complete" });
            console.log(JSON.stringify(response.data));
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    validate() {
      if (this.arr.repassword.trim() == this.arr.password.trim()) {
        this.classvalidate.borderColor = "";
        console.log(true);
      } else {
        this.classvalidate.borderColor = "red";
      }
    },
    processFile0(event) {
      this.arr.house_particulars_img = event.target.files[0];
    },
    processFile1(event) {
      this.arr.id_card_img = event.target.files[0];
    },
    processFile2(event) {
      this.arr.commercial_particulars_img = event.target.files[0];
    },
    processFile3(event) {
      this.arr.profile_img = event.target.files[0];
    },
    processFile4(event) {
      this.arr.slip_img = event.target.files[0];
    },
  },
};
</script>

<style scoped>
input {
  margin-bottom: 10px;
}
@media (min-width: 1024px) and (max-width: 1366px) {
}
@media (min-width: 768px) and (max-width: 1023px) {
  .headpaper img {
    width: 150px;
    margin-top: 40px;
  }
  .cen img {
    width: 400px;
  }
}
@media (min-width: 250px) and (max-width: 767px) {
  .col,
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12 {
    flex: 0 0 100%;
    text-align: left;
    max-width: 100%;
  }
  .headpaper img {
    width: 150px;
    margin-top: 40px;
  }
  .cen img {
    width: 200px;
  }
  h5 {
    font-size: 12px;
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
