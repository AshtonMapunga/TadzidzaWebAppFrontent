<template>
  <v-card
    elevation="13"
    class="mx-auto"
    max-width="644"
    style="margin-top: 40px;"  >
  <p class="signInHeader">Already have an account? <router-link to="/teacher-login">Sign in</router-link></p>
   <h1 class="signInHeader">Sign up to Tadzidza</h1>
       <v-divider></v-divider>
<template>
  <v-form
    ref="form"
    lazy-validation
    class="pa-4 pt-6"
  >
    <v-text-field
    filled
      v-model="Form.Name"
      :rules="NameRules"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
    filled
      v-model="Form.Surname"
      :rules="NameRules"
      label="Surname"
      required
    ></v-text-field>
    <v-text-field
    filled
      v-model="Form.Address"
      :rules="AddressRules"
      label="Address"
      required
    ></v-text-field>
    <v-text-field
    filled
      v-model="Form.Phone_number"
      label="Phone Number"
     :rules="PhoneRules"
      type="number"
      required
    ></v-text-field>
    <v-autocomplete
                    filled
                v-model="Form.className"
                  :items="['2A', '2B', '2C', '2F', '2D', '2E', '3B', '3C', '3D']"
                  label="Enter Class"      
                  hint="class that you are responsible for"            
                ></v-autocomplete>
 
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

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
    <v-btn
      color="indigo darken-2"
      class="mr-4"
      @click="validate()"
      dark
    >
    Sign up
    </v-btn>
  </v-form>
</template>
    <v-spacer></v-spacer>
  </v-card>
</template>
<script>
import axios from 'axios'
  export default {

    data: () => ({
      Form:{
      Name: '',
      Surname:'',
      Address: '',
      className: '',
      Email: '',
      Phone_number:'',

      Password: '',
      
      },
            AddressRules: [
        v => !!v || 'Address is required',
      ],
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      PhoneRules: [
        v => !!v || 'Phone Number is required',
      ],
            NameRules: [
        v => !!v || 'Name is required',
      ],
            PasswordRules: [
        v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        if(this.$refs.form.validate()){
        axios.post('http://localhost:5050/post/teacher', this.Form)
        .then( (response)=>{
          console.log(response.data)
          if(response.data=="The Teacher is successfully saved"){
             console.log("I love nutty o")
             this.$router.push({ path: '/teacher-login' })
          }
          else{
            console.log("An error occured")
          }
        })
        }
        else{
           console.log("Validation Error")
        }
      },
   

    },
  }
</script>
<style scoped>
.signInHeader{
    color: #303F9F;
    text-align: center;
}
.abnormally{
  color: red;
  border: red 1px solid;
  border-radius: 0%;
}
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  #editbtn{
    color: white;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
