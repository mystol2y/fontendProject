<template>
  <div class="Profile">
    <PageLoader />
    <div class="container text-left">
      <h3 class="text-center">Profile</h3>
      <ul class="d-flex justify-content-start mb-5">
        <li
          @click="(status = 'a'), setActive('li')"
          class="btn nav-link btn btn-outline-primary"
          :class="{ active: isActive('li') }"
        >
          <i class="bi bi-award"></i> โปรไฟล์
        </li>
        <li
          @click="(status = 'b'), setActive('li1')"
          class="btn nav-link ml-3 btn btn-outline-primary"
          :class="{ active: isActive('li1') }"
        >
          <i class="bi bi-award"></i> สถานะการชำระเงิน
        </li>
        <li
          @click="(status = 'c'), setActive('li2')"
          class="btn nav-link ml-3 btn btn-outline-primary"
          :class="{ active: isActive('li2') }"
        >
          <i class="bi bi-award"></i> ต่ออายุสมาชิก
        </li>
      </ul>
      <div v-if="status === 'a'" class="text-left card">
        <div class="table-responsive ">
          <table class="table table-borderless">
            <tbody class="">
              <tr>
                <th scope="row">ชื่อ</th>
                <td>{{ profile.firstname }}</td>
                <th scope="row">นามสกุล</th>
                <td>{{ profile.lastname }}</td>
              </tr>
              <tr>
                <th scope="row">อายุ</th>
                <td>{{ profile.age }}</td>
                <th scope="row">วันเกิด</th>
                <td>{{ profile.b_date }}</td>
              </tr>
              <tr>
                <th scope="row">ชื่อ (สามี/ภรรยา)</th>
                <td colspan="3">{{ profile.married }} นาง สมศรี สวนเสร็จ</td>
              </tr>
              <tr>
                <th scope="row">ที่ตั้งบ้านเรือน</th>
                <td>{{ profile.address["h_num"] }}</td>
                <th scope="row">ถนน</th>
                <td>{{ profile.address["road"] }}</td>
              </tr>
              <tr>
                <th scope="row">ตำบล</th>
                <td>{{ profile.address["locality"] }}</td>
                <th scope="row">อำเภอ</th>
                <td>{{ profile.address["district"] }}</td>
              </tr>
              <tr>
                <th scope="row">จังหวัด</th>
                <td>{{ profile.address["province"] }}</td>
                <th scope="row">รหัสไปรษณีย์</th>
                <td>{{ profile.address["zip_code"] }}</td>
              </tr>
              <tr>
                <th scope="row">ชื่อพาณิชยกิจประกอบการ</th>
                <td>{{ profile.married }}</td>
                <th scope="row">ประเภทวิสาหกิจประกอบการ</th>
                <td>{{ profile.married }}</td>
              </tr>
              <tr>
                <th scope="row">ที่ตั้งประกอบการ</th>
                <td colspan="3">{{ profile.married }}</td>
              </tr>
              <tr>
                <th scope="row">โทรศัพท์ / โทรสาร</th>
                <td>{{ profile.phone }}</td>
                <th scope="row">โทรศัพท์มือถือ</th>
                <td>{{ profile.mobile }}</td>
              </tr>
              <tr>
                <th scope="row">ประเภทสมาชิก</th>
                <td>{{ profile.member_type }}</td>
                <th scope="row">วันหมดอายุสมาชิก</th>
                <td>{{ profile.expired_date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="status === 'b'" class="text-center card">
        <div class="table-responsive">
          <form v-on:submit.prevent="onSubmit">
            <table class="table table-borderless ">
              <thead>
                <tr>
                  <th scope="col" class="text-left">ชื่อ</th>
                  <th scope="col">รูป</th>
                  <th scope="col">วัน/เดือน/ปี</th>
                  <th scope="col">สถานะ</th>
                  <th scope="col">หมายเหตุ</th>
                </tr>
              </thead>
              <tbody
                v-for="(image_d, index) in profile.img"
                :key="image_d + index"
              >
                <tr>
                  <td class="text-left">{{ img_name[index] }}</td>
                  <td>
                    <img
                      :src="'data:image.png;base64,' + image[index]"
                      height="200px"
                      alt="Logo"
                    />
                  </td>
                  <td>{{ image_d.created_date }}</td>
                  <td>
                    <h5>
                      {{ img_status[image_d.status] }}
                    </h5>
                    <div v-if="image_d.status == 2" class="col-6 mb-3 ">
                      {{ img_name[index] }}
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="inputGroupFile05"
                          @change="processFile($event, image_d.img_name, index)"
                        />
                        <label
                          class="custom-file-label"
                          for="inputGroupFile05"
                          >{{
                            image_update[index]
                              ? image_update[index].file.name
                              : ""
                          }}</label
                        >
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>
                      {{ image_d.description ? image_d.description : "" }}
                    </h5>
                  </td>
                </tr>
              </tbody>
            </table>
            <b-button v-if="formopen" type="submit">submit</b-button>
          </form>
        </div>
      </div>
      <div v-if="status === 'c'" class="text-left card">
        <form v-on:submit.prevent="onSubmit" class="text-light">
          <h4 class="text-center text-light">ต่ออายุสมาชิก</h4>
          <div class="row text-left ">
            <div class="col wi">
              เลขบัตรประชาชน
              <input
                type="text"
                class="form-control form-control-sm "
                placeholder=""
                v-model="formsarray.id_card"
                required
              />
            </div>
          </div>
          <div class="cen">
            <img
              src="https://pngimg.com/uploads/qr_code/qr_code_PNG24.png"
              alt=""
            />
          </div>
          <div class="col mb-3 mx-auto">
            อัพโหลดรูป การชำระเงิน
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
                @change="processFile1($event)"
              />
              <label class="custom-file-label" for="inputGroupFile01">{{
                formsarray.slip_img.name
              }}</label>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary mb-5 ">ตกลง</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router/index";
import PageLoader from "@/components/PageLoader.vue";
var axios = require("axios");
import moment from "moment";
export default {
  name: "Profile",
  data() {
    return {
      formsarray: {
        id_card: "",
        slip_img: "",
      },
      status: "a",
      activeItem: "li",
      profile: {},
      year: "",
      image_update: {},
      image_name: [],
      image: {},
      img_name: [
        "สำเนาทะเบียนบ้าน",
        "สำเนาบัตรประชาชน",
        "สำเนาทะเบียนพาณิชย์หรือทะเบียนการค้า/หนังสือรับรองการจดทะเบียน",
        "รูปถ่าย 1 หรือ 2 นิ้ว จำนวน 2 รูป",
        "ค่าบำรุงสมาชิก (รายปี) 1,000 บาท/ปี",
      ],
      img_status: ["รอการตรวจสอบ", "ผ่าน", "ไม่ผ่าน"],
      formopen: false,
    };
  },
  components: {
    PageLoader,
  },
  async created() {
    await this.getProfile();
    await this.getImage();
    // console.log(this.image);
  },
  computed: {},
  mounted() {},
  methods: {
    processFile1(event) {
      this.formsarray.slip_img = event.target.files[0];
    },
    isActive: function(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
    },
    async getProfile() {
      // console.log()
      this.profile = await JSON.parse(this.$store.getters.getprofile);
      this.profile.address = await JSON.parse(this.profile.address);
      this.profile.managing_partner = await JSON.parse(
        this.profile.managing_partner
      );

      this.year = moment(this.profile.created_date).format("Y-MM-DD");
      var data = JSON.stringify({ member_id: this.profile.member_id });
      var config = {
        method: "post",
        url: "https://express.crm-flow.com/api/image/get",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      await axios(config)
        .then(async (response) => {
          // this.image_name = response.data;
          // console.log(response.data);
          this.profile.img = response.data;
          this.image_name.push(
            response.data[0].img,
            response.data[1].img,
            response.data[2].img,
            response.data[3].img,
            response.data[4].img
          );
          this.profile.img.forEach((element) => {
            console.log(element.status);
            if (element.status == 2) this.formopen = true;
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async getImage() {
      var data = JSON.stringify(this.image_name);
      console.log(data);
      var config = {
        method: "post",
        url: "https://express.crm-flow.com/api/image/base",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      await axios(config)
        .then(async (response) => {
          this.image = response.data;
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async processFile(event, image_name) {
      this.image_update[image_name] = {
        file: await event.target.files[0],
      };
    },
    onSubmit() {
      // console.log(this.arr);
      let data = new FormData();
      for (const [key, value] of Object.entries(this.image_update)) {
        data.append([key], value.file);
        // console.log(value.image_name);
      }
      data.append("member_id", this.profile.member_id);
      data.append("username", this.profile.username);

      var config = {
        method: "post",
        url: "https://express.crm-flow.com/api/registerforms/update",
        data: data,
      };
      axios(config)
        .then(function(response) {
          // console.log(localStorage.getItem("username"));
          this.refreshProfile();
          console.log(JSON.stringify(response.data));
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    refreshProfile: function() {
      let data = JSON.stringify({
        username: this.profile.username,
        password: this.profile.password,
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
.cen {
  text-align: center;
  background: #fff;
  margin: 20px;
}
.cen img {
  width: 500px;
}
ul li:hover,
ul li.active {
  /* background: linear-gradient(90deg, #F5515F 0%, #A1051D 100%); */
  background: #0576de;
  color: white;
}
.card {
  padding: 50px;
  background: linear-gradient(-45deg, #13f1fc 0%, #0470dc 100%);
  /* box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px; */
  /* box-shadow: rgba(14, 30, 37, 0.6) 0px 2px 4px 0px, rgba(14, 30, 37, 0.6) 0px 2px 16px 0px; */
  box-shadow: rgba(17, 17, 26, 0.3) 0px 4px 16px,
    rgba(17, 17, 26, 0.3) 0px 8px 24px, rgba(17, 17, 26, 0.3) 0px 16px 56px;
}
.card .wi {
  margin: 20px;
}
h3 {
  margin-top: 20px;
}
table {
  /* text-align: left; */
  color: white;
  border-radius: 10px;
}
tbody {
  margin: 60px;
}
table img {
  width: 50px;
  height: 50px;
}
ul {
  margin: 20px 0 !important;
  padding: 0 !important;
}
@media (min-width: 1024px) and (max-width: 1366px) {
  table img {
    width: 50px;
    height: 50px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  table img {
    width: 50px;
    height: 50px;
  }
  .cen img {
    width: 400px;
    text-align: center;
  }
}
@media (min-width: 250px) and (max-width: 767px) {
  /* .col,
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
  } */
  table img {
    width: 50px;
    height: 50px;
  }
  .cen img {
    width: 150px;
    text-align: center;
  }
  .card {
    padding: 0;
  }
  .card .wi {
    margin: 20px;
  }
}
</style>
