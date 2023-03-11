<template>
    <v-card
      class="mx-auto mt-8"
      max-width="1100 "
      elevation="0"
    
    >
  <v-card
      elevation="9"
  >
  
     <legend  class="reset">
  
      </legend>
         <h1 style="font-size: 48px;" class="signInHeader">Register Your Subjects</h1>
  
        <v-list-item color="indigo darken-2">
              <v-list-item-icon>
        <v-icon style="font-size: 35px; color: #303F9F">mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title style="font-size: 30px; color: #303F9F">{{StudentName}}</v-list-item-title>
            </v-list-item>
         <v-divider></v-divider>
         
  <template>
  
          <template>
            <v-list-item v-show="Success">
              <v-list-item-action>
                <v-icon style="color: #303F9F" class="float right">mdi-home-circle</v-icon>
              </v-list-item-action>
  
              <v-list-item-content>
                <v-list-item-title style="color: #303F9F" class="float right">Student's class: {{classOfstudent}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-form
            v-show="Success"
            ref="form"
            lazy-validation
          > 
            <v-autocomplete
            filled
            class="ml-5 mr-5"
                :items="['Mathematics', 'Accounts', 'Biology', 'English', 'Physics', 'Combined Science', 'Geography', 'Agriculture', 'History']"
                label="Select all your subjects"
                hint="please make sure you enter the subject assign to you as a class"
                :rules="SubjectsRules"
                v-model="Subjects"
                multiple
              ></v-autocomplete>
              <v-text-field
              class="ml-5 mr-5"
    filled
      v-model="Password"
      :rules="PasswordRules"
      label="Password"
      typeof="password"
      required
    ></v-text-field>
  </v-form>
      <template >
       
        <v-card class="ml-5 mr-5" elevation="0" v-show="!Success">
        <br>
          <h2 class="text-success"> <i>You have successfully Registered your Subjects</i> </h2>
          <br>
        <router-link to="/student-account" >
          <v-btn
          class="btn btn-block btn-success"
            dark   
            color="green"
          >
            View Subjects
          </v-btn>    
        </router-link>
        <p></p>
        <router-link to="/sudent-home">
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
        </v-card>
       
    </template>
              <p></p>
              <p class="ml-5 text-danger" v-show="SubjectIsFalse"> * Please Select your Subjects </p>
              <p class="ml-5 text-danger"  v-show="ClassIsFalse"> * Password did not match please enter the correct password </p>
              <router-link to="/sudent-home" class="ml-5"           v-show="Success">
          <v-btn
            dark   
            color="indigo darken-2"
          >
            Back
          </v-btn>    
        </router-link>
       <div class="float-right"  v-show="Success">
          <v-btn
          type="submit" class="mr-5"
            dark   
            color="indigo darken-2"
            @click="validate()"
          >
            Register
          </v-btn>    

          
          <br>
       </div>

          </template>
      <br>
      <br>
      <br>
  </template>
  
  </v-card>
  
    </v-card>
    
  </template>
  <script>
    import Axios from 'axios';
  
    export default {
      data: () => ({      
        show: false,
         dialog: false,
         Subjects:[],
          dialogs: false,
          classOfstudent:"",
          Allfees:[],
          Form:{

      Email: '',
      Password: '',
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
        Password:"",
        StudentName:"",
        SubjectIsFalse: false,
        Success: true,
        ClassIsFalse: false,
          SubjectsRules: [
        v => !!v || 'Subjects are required',
      ],
      PasswordRules: [
        v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
      ],
      }),
      methods:{
        validate () {
        if(this.$refs.form.validate()){
          if(this.Password==this.Form.Password && this.Subjects.length!=0){
            this.RegisterStudent()
            console.log("Success")
            this.Success = false
            this.ClassIsFalse = false
            this.SubjectIsFalse = false
          }
           if(this.Password!==this.Form.Password){
            this.ClassIsFalse = true
            this.SubjectIsFalse = false

          }
          else{
          this.SubjectIsFalse = true
          this.ClassIsFalse = false

        }
        }
        else{
           console.log("Validation Error")
        }
      },
      
      RegisterStudent(){
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
        Axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveandupdatestudent', this.Form,{
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        })
        .then( (response)=>{
          console.log(response.data)
          if(response.data=="The student is successfully updated"){
            this.Success = false
            this.ClassIsFalse = false
            this.SubjectIsFalse = false
          }
          else if(response.data=="The email does not exist"){
            this.EmailIsFalse=true
          }
          else{
            console.log("An error occured")
          }
        })
      }



      },
    async created(){
        const Email = localStorage.getItem("Email")
        await Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/studentlogin/${Email}`,{
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          console.log(response)
          this.Form.Email = response.data.User.Email
          this.StudentName = response.data.User.full_name
          this.classOfstudent = response.data.User.className
          this.Form.Password = response.data.User.Password
          
        })

    }
    }
  </script>
  
  <style scoped>
  #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
  
  }
  
  #customers td, #customers th {
    border: 1px solid #7986CB;
    padding: 8px;
    word-break: break-all;
  
  }
  
  #customers tr:nth-child(even){background-color: #f2f2f2;}
  
  #customers tr:hover {background-color: #C5CAE9;}
  
  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #283593;
    color: white;
  }
  </style>
  