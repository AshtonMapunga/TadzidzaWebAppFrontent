<template>
  <v-card
    elevation="13"
    class="mx-auto"
    max-width="644"
    style="margin-top: 40px;"  >
  <p class="signInHeader">Already have an account? <router-link to="/student-login">Sign in</router-link></p>
   <h1 class="signInHeader">Sign up to WeLearn</h1>
       <v-divider></v-divider>
<template>
  <v-form
    ref="form"
    lazy-validation
    class="pa-4 pt-6"
  >
    <v-text-field
    filled
      v-model="Form.full_name"
      :rules="NameRules"
      label="Name"
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
                ></v-autocomplete>
<template>

      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="Form.DateofBirth"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
              filled
            v-model="Form.DateofBirth"
            label="Date of Birth"
            :rules="DateRules"
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    <v-spacer></v-spacer>
   
</template>
    <v-text-field
    filled
      v-model="Form.ParentName"
      :rules="NameRules"
      label="Name of Next of Kin"
      required
    ></v-text-field>
         <v-text-field
    filled
      v-model="Form.ParentNumber"
      label="Next of Kin Phone Number"
     :rules="PhoneRules"
      type="number"
      required
    ></v-text-field>
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
    <p class="signInFooter" v-show="AlreadyExist"> * Email Already Exist please  <router-link to="/student-login">Sign in</router-link></p>
    <v-btn
      color="indigo darken-2"
      class="mr-4"
      @click="validate()"
      dark
    >
      sign in
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
      Address: '',
      Email: '',
      className:'',
      Password: '',
      Phone_number:'',
      ParentName:'',
      ParentNumber:'',
      DateofBirth: '',
      Subjects:[{"subjectName": "Accounts" }, {"subjectName": "Agriculture"},{"subjectName": "English"},{"subjectName": "Maths"}, {"subjectName": "Biology" },
      {"subjectName": "Geography" },{"subjectName": "Physics" },{"subjectName": "CombinedScience" },{"subjectName": "History" }],

      },
            AddressRules: [
        v => !!v || 'Address is required',
      ],
                PhoneRules: [
        v => !!v || 'Phone Number is required',
      ],
                      DateRules: [
        v => !!v || 'Date is required',
      ],
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
            NameRules: [
        v => !!v || 'Name is required',
      ],
            PasswordRules: [
        v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
      ],
      checkbox: false,
      menu: false,
      date:'',
      AlreadyExist:false
    }),

    methods: {
      validate () {
        if(this.$refs.form.validate()){
        axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/student', this.Form)
        .then( (response)=>{
          console.log(response.data)
          if(response.data=="The Student is successfully saved"){
             this.$router.push({ path: '/student-login' })
          }
          else if(response.data=="The Email belongs to Someone else"){
            this.AlreadyExist=true
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
.signInFooter{
  font-size: smaller;
  color: red;
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
