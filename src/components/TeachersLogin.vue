<template>
  <v-card
    elevation="13"
    class="mx-auto"
    max-width="644"
    style="margin-top: 100px;"  >
   <h1 class="signInHeader">Sign in to WeLearn</h1>
       <v-divider></v-divider>
 <v-form
    ref="form"
    lazy-validation
    class="pa-4 pt-6"
  >
 
        <v-text-field
    filled
      v-model="Form.Email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
        <v-text-field
    filled
      v-model="Form.Password"
      :rules="PasswordRules"
      label="Password"
      typeof="password"
      required
    ></v-text-field>
        <p class="signInFooter" v-show="AlreadyExist"> * Invalid username/ email </p>
    <v-btn
      color="indigo darken-2"
      class="mr-4"
      @click="validate()"
      dark
    >
      Log in
    </v-btn>
  </v-form>

        <p class="ml-5">New to WeLearn? <router-link to="/teacher-signin">Create an account</router-link></p>
  <br>
    <v-spacer></v-spacer>
        <v-spacer></v-spacer>

  </v-card>
</template>
<script>
import Axios from 'axios'
  export default {
data: () => ({
      Form:{
      Email: '',
      Password: '',

      },

        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
 
            PasswordRules: [
        v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
      ],
            AlreadyExist:false

    }),
        methods: {
      validate () {
        if(this.$refs.form.validate()){
       Axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/teacherlogin', this.Form)
        .then( (response)=>{
           if(response.data=="Invalid Email or Password"){
            this.AlreadyExist=true
          }
          else{
            localStorage.setItem('Email', response.data.User.Email)
            localStorage.setItem('Tokken', response.data.Tokken)
            this.$router.push({ path: '/teachers-home' })
          }
        })
        }
        else{
           console.log("Validation Error")
        }
      },
   

    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
  }
</script>
<style>
.signInHeader{
    color: #303F9F;
    text-align: center;
}
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  .signInFooter{
  color: red
}
  #editbtn{
    color: white;
  }
</style>