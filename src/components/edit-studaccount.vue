<template>
  <v-row justify="center"
  class="mt-4">
      <v-card
      persistent
      max-width="900px"
      elevation="10"
>
        <v-card-title>
          <span class="text-h5">Edit Account Details</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form
            ref="form"
            lazy-validation
          > 
        
          <v-row>

            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Full Name*"
                v-model="Form.Name"
                :rules="NameRules"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Address"
                v-model="Form.Address"
                :rules="AddressRules"
                hint="Enter your area of resident"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Phone Number"
                type="text"
                v-model="Form.Phone_number"
                :rules="PhoneRules"
                hint="enter your phone number"
                persistent-hint
                required
              ></v-text-field>
            </v-col>
                          <v-col
              cols="12"
              sm="6"
              md="4"
            >
            <v-autocomplete
              v-model="Form.className"
                :items="['2A', '2B', '2C', '2F', '2D', '2E', '3B', '3C', '3D']"
                :rules="classNameRules"
                label="Enter Class"                  
              ></v-autocomplete>
              <p class="signInFooter" v-show="ClassIsFalse"> * Please Select your Class </p>
            </v-col>
                          <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Date of Birth"
                v-model="Form.DateofBirth"
                :rules="DateRules"
                type="date"
                required
              ></v-text-field>
            </v-col>              <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Name of your next Kin"
                v-model="Form.ParentName"
                :rules="NameRules"
                required
              ></v-text-field>
            </v-col>              <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Next of Kin Phone Number"                  
                v-model="Form.ParentNumber"
                :rules="PhoneRules"
                required
              ></v-text-field>
            </v-col>              <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Email"
                type="email"
                v-model="Form.Email"
                :rules="emailRules"
                required
              ></v-text-field>
              <p class="signInFooter" v-show="EmailIsFalse"> * Enter the correct Email </p>

            </v-col>              <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Password"
                type="text"
                v-model="Form.Password"
                :rules="PasswordRules"
                required
              ></v-text-field>
            </v-col>
                         <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Confirm Passwords"
                required
                v-model="ConfirmPassword"
                :rules="PasswordRules"
              ></v-text-field>
              <p class="signInFooter" v-show="PasswordIsFalse"> * Password did not match </p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-autocomplete
                :items="['Mathematics', 'Accounts', 'Biology', 'English', 'Physics', 'Combined Science', 'Geography', 'Agriculture', 'History']"
                label="Subjects"
                :rules="SubjectsRules"
                v-model="Subjects"
                multiple
              ></v-autocomplete>
              <p class="signInFooter" v-show="SubjectIsFalse"> * Please Select your Subjects </p>
            </v-col>
          </v-row>

        
        </v-form>
  
          <v-btn
          color="green"
          dark
          class="btn btn-lg btn-block"

          @click="validate()"
        >
          Save
        </v-btn>
        <p></p>
        <router-link to="/student-account">
              <v-btn
            type="submit"          
            class="btn btn-lg btn-block"
            width="100%"
              dark   
              color="indigo darken-2"
            >
              Back
            </v-btn>
          </router-link>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Save your details
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            No
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
          </v-container>
        </v-card-text>

      </v-card>
  </v-row>
</template>
<script>
    import axios from 'axios';
  export default {
    data: () => ({
      dialog: false,
      AlreadyExist:false,
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
      MathsRegister:false,
        BiologyRegister:false,
        PhysicsRegister:false,
        Register:false,
        EnglishRegister:false,
        CombinedScienceRegister:false,
        GeographyRegister:false,
        AccountsRegister:false,
        HistorRegister:false,
        AgricultureRegister:false,
        },
        Subjects:[],
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
      classNameRules: [
        v => !!v || 'Class is required',
      ],
      SubjectsRules: [
        v => !!v || 'Subjects are required',
      ],
      ConfirmPassword:"",
      PasswordIsFalse: false,
      SubjectIsFalse: false,
      ClassIsFalse: false,
      EmailIsFalse: false,
    }),
    methods:{
      validate () {
        if(this.$refs.form.validate()){
          if(this.ConfirmPassword==this.Form.Password && this.Subjects.length!=0 && this.Form.className!=""){
            this.UpdateStudent()
          }
           if(this.ConfirmPassword!==this.Form.Password ){
            this.PasswordIsFalse = true
          }
            if(this.Subjects.length==0){
            this.SubjectIsFalse = true
          }
           if(this.Form.className==""){
            this.ClassIsFalse = true
          }
        }
        else{
           console.log("Validation Error")
        }
      },

      UpdateStudent(){
        function findBiology(subject) {
          return subject === "Biology"
        }        
        let myBiologu = this.Subjects.find(subject => findBiology(subject));
        if(myBiologu=="Biology"){
          this.Form.BiologyRegister=true
        }
        if(myBiologu!="Biology"){
          this.Form.BiologyRegister=false
        }



        function findMaths(subject) {
          return subject === "Mathematics"
        }        
        let myMaths = this.Subjects.find(subject => findMaths(subject));
        if(myMaths=="Mathematics"){
          this.Form.MathsRegister=true
        }
        if(myMaths!="Mathematics"){
          this.Form.MathsRegister=false
        }
        
        
        
        function findEnglish(subject) {
          return subject === "English"
        }        
        let myEnglish = this.Subjects.find(subject => findEnglish(subject));
        if(myEnglish=="English"){
          this.Form.EnglishRegister=true
        }
       if(myEnglish!="English"){
          this.Form.EnglishRegister=false
        }


        function findHistory(subject) {
          return subject === "History"
        }        
        let myHistory = this.Subjects.find(subject => findHistory(subject));
        if(myHistory=="History"){
          this.Form.HistorRegister=true
        }
        if(myHistory!="History"){
          this.Form.HistorRegister=false
        }


        function findGeo(subject) {
          return subject === "Geography"
        }        
        let myGeography = this.Subjects.find(subject => findGeo(subject));
        if(myGeography=="Geography"){
          this.Form.GeographyRegister= true
        }
        if(myGeography!="Geography"){
          this.Form.GeographyRegister= false
        }



        function findCombinedScience(subject) {
          return subject === "Combined Science"
        }        
        let myCombinedScience = this.Subjects.find(subject => findCombinedScience(subject));
        if(myCombinedScience=="Combined Science"){
          this.Form.CombinedScienceRegister=true
        }
        if(myCombinedScience!="Combined Science"){
          this.Form.CombinedScienceRegister=false
        }



        function findAgriculture(subject) {
          return subject === "Agriculture"
        }        
        let myAgriculture = this.Subjects.find(subject => findAgriculture(subject));
        if(myAgriculture=="Agriculture"){
          this.Form.AgricultureRegister=true
        }
        if(myAgriculture!="Agriculture"){
          this.Form.AgricultureRegister=false
        }



        function findAccounts(subject) {
          return subject === "Accounts"
        }        
        let myfindAccounts = this.Subjects.find(subject => findAccounts(subject));
        if(myfindAccounts=="findAccounts"){
          this.Form.AccountsRegister=true
        }
        if(myfindAccounts!="findAccounts"){
          this.Form.AccountsRegister=false
        }


        function findPhysics(subject) {
          return subject === "Physics"
        }        
        let MyPhysics = this.Subjects.find(subject => findPhysics(subject));
        if(MyPhysics=="Physics"){
          this.Form.PhysicsRegister=true
        }
        if(MyPhysics!="Physics"){
          this.Form.PhysicsRegister=false
        }
        axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveandupdatestudent', this.Form,{
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        })
        .then( (response)=>{
          console.log(response.data)
          if(response.data=="The student is successfully updated"){
             this.$router.push({ path: '/student-account' })
          }
          else if(response.data=="The email does not exist"){
            this.EmailIsFalse=true
          }
          else{
            console.log("An error occured")
          }
        })
      }
    }
  }
</script>

<style scoped>
.signInHeader{
    color: #303F9F;
    text-align: center;
}
.signInFooter{
  font-weight: 500;
  font-size: small;
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
