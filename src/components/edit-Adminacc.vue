<template>
  <v-card
  class="mx-auto mt-8"
  max-width="1100 "
  elevation="10"
>

   <v-card elevation="0" width="96%" class="ml-5 mr-5" >
    <div 
v-show="Success">
    <br>
    <br>
      <h2 class="text-success"> <i>You have successfully updated your details</i> </h2>
      <br>
      <p></p>
    <router-link to="/admin-account" >
      <v-btn
      class="btn btn-block btn-success"
        dark   
        color="green"
      >
        View Account
      </v-btn>    
    </router-link>
    <p></p>
    <router-link to="/admi-home">
      <v-btn
      class="btn btn-lg btn-block btn btn-success"
        dark   
        color="indigo darken-2"
      >
        Back
      </v-btn>    
    </router-link>
    <br>
    <br>
    <br>
  </div>

    <div v-show="!Success">
      

    <v-card-title>
      <span class="text-h5">New Account Details</span>
    </v-card-title>
    
   <v-container>
        <v-form
        ref="form"
lazy-validation>
          <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Full Name*"
              :rules="NameRules"
              required
              v-model="full_name"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
            v-model="Phone_number"
            :rules="PhoneRules"
              label="Phone Number"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="12"
          >
            <v-text-field
            v-model="Address"
            :rules="AddressRules"
              label="Address"
              hint="Enter your area of resident"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Password"
              :rules="PasswordRules"
              v-model="Password"
              type="text"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
            v-model="Password"
            :rules="PasswordRules"
              label="Confirm Password"
              type="password"
              aria-required="true"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="12"
          >

          </v-col>
        </v-row>
      <v-btn
      class="btn btn-lg btn-block "
        dark   
        color="green"
        @click="validate()"

      >
        Save
      </v-btn>    
        </v-form>

<br>
<p></p>
<router-link to="/admi-home">
        <v-btn
      type="submit"          
      class="btn btn-lg btn-block "
      width="100%"
        dark   
        color="indigo darken-2"
      >
        Back
      </v-btn>
    </router-link>
      </v-container>
    </div>
   </v-card>
  </v-card>
</template>
<script>
import Axios from 'axios';
export default {
data: () => ({
  full_name:"",
  Phone_number:"",
  Address:"",
  Password:"",
  className:"",
  Subjects:"",
  Email:"",
  Success:false,

  
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
  SubjectRules: [
    v => !!v || 'This field is required',
  ],
        NameRules: [
    v => !!v || 'Name is required',
  ],
  ClassRules:[
    v => !!v || 'Class is required',
  ],
        PasswordRules: [
    v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
      'Password must contain an upper case letter, a numeric character, and a special character',
  ],
}),
methods:{
  validate () {
    if(this.$refs.form.validate()){
    console.log(this.Subjects)
    
      const object = {
        Email: this.Email,
        full_name:this.full_name,
        Address: this.Address,
        Phone_number:this.Phone_number,
        Password: this.Password,

      }
      Axios.post('http://localhost:5050/post/updateAmin',object, {
      headers:{
        Authorization: "Basic " + localStorage.getItem("Tokken")
      }
    } )
    .then( (response)=>{
      console.log(response.data)
      if(response.data=="The Admin has been updated"){
        this.Success = true
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
async created(){
    const Email = localStorage.getItem("Email")
    const response =await Axios.get(`http://localhost:5050/post/adminlogin/${Email}`,{
      headers:{
        Authorization: "Basic " + localStorage.getItem("Tokken")
      }
    } )
      this.Email= response.data.User.Email
      this.full_name=response.data.User.full_name
      this.className  =response.data.User.className
      this.Address=response.data.User.Address
      this.Phone_number=response.data.User.Phone_number
      this.Email=response.data.User.Email
      this.Password=response.data.User.Password
}

}
</script>