<template>
  <div class="wrap">
    <div class="content-input">
      <el-form ref="login" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名 "></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      form:{
        username:'',
        password:''
      },
      rules:{
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'},
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'},
        ]
      },
    }
  },
  mounted() {
    document.onkeydown = (event)=>{
      let key = window.event.keyCode
      if(key == 13){
        this.submit();
      }
    }
  },
  methods:{
    submit(){
      this.$refs['login'].validate((valid)=>{
        console.log(valid,'校验----')
        if(valid){
          localStorage.setItem('username',this.form.username);
          localStorage.setItem('password',this.form.password);
          let token = this.createUUID32();
          console.log(token,'token-----')
          localStorage.setItem('loginToken',token);
          this.$router.push({
            path:'/homeManage'
          })
        }
      })
    },
    createUUID32(){
      var s = [];
      var hexDigits = "0123456789abcdefghigklmnopqrstuvwxyz";
      for (var i = 0; i < 32; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";
      var uuid = s.join("");
      return uuid
    },
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:black;
  .content-input{
    position:absolute;
    right:20%;
    top:20%;
    width:20%;
  }
}
</style>
