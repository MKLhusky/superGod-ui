<template>
  <div class="common-layout">
    <el-container>
      <el-button type="primary" @click="attendance('0')">学习打卡</el-button>
      <el-button type="primary" @click="attendance('1')">健身打卡</el-button>
    </el-container>
  </div>
</template>


<script>
import router from "@/router"
import axios from "axios";

export default {
  name: "DailyAttendance",
  data(){
    return {
      dailyAttendance: {
        attendanceType: null
      }
    }
  },
  methods: {

    attendance(type){
      this.dailyAttendance.attendanceType = type;
      axios.post("/daily/daily/attendance", this.dailyAttendance).then((res) =>{
        console.log(res);
      })
    }

  }

}
</script>

<style scoped>

</style>