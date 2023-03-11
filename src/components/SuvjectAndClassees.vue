<template>
    <v-card
      class="mx-auto mt-8"
      max-width="1100 "
      elevation="0"
    
    >
    <v-card v-show="Success">
      <br>
      <br>
      <br>
      <h3 class="mr-4 ml-4 mt-4" style="color:#303F9F "><i>You have successfully registered your classes</i> </h3>
    <br>  
    <br>
    <router-link to="/teachers-account">
            <v-btn
          type="submit"          
          class="btn btn-lg btn-block ml-4"
          width="97%"
            dark   
            color="green"
          >
            View Account 
          </v-btn>
        </router-link>
        <p></p>
        <router-link to="/subjectsandclasses">
            <v-btn
          type="submit"          
          class="btn btn-lg btn-block ml-4"
          width="97%"
            dark   
            color="indigo darken-2"
          >
            Add Another Subject
          </v-btn>
        </router-link>
        <br>
        <br>
        <br>
    </v-card>
  <v-card
      elevation="9"
      v-show="!Success"
  >
  
     <legend  class="reset">
  
      </legend>
         <h1 style="font-size: 40px;" class="signInHeader">Enter Subject Corresponding to the Classes</h1>
      <br>
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
                <v-list-item-title style="color: #303F9F" class="float right">Class: {{classOfstudent}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-form v-model="valid" ref="form" @submit.prevent="handleSubmit">  

            <v-row>
                <v-col
                cols="12"
                sm="6"
              >
              <v-select
              class="ml-5 mr-9"
                v-model="Form1"
                :rules="requiredRule"
                :items="itemSubjects"
                label="Subject"
                required
              ></v-select>
              
              </v-col>
                            <v-col
                cols="12"
                sm="6"
              >
              <v-autocomplete
            
            class="ml-12 mr-4"
            :items="['1A','1B','1C','1D','1E','2A', '2B', '2C', '2F', '2D', '2E', '3B', '3C', '3D','4A','4B','4C','4D','4E']"
                label="Select all your subjects"
                :rules="requiredRule"
                v-model="Subjects1"
                multiple
              ></v-autocomplete>
              </v-col>
       
            </v-row>
 
            <p class="ml-5 text-danger"  v-show="ClassIsFalse"> You cannot teach more than 3 subject as recommended by the ministry of education </p>

            <v-btn
          type="submit"          
          class="btn btn-lg btn-block ml-4"
            dark   
            width="97%"
            color="green"
            @click="validate()"
          >
            Save
          </v-btn> 
          <br>
          <br>
          <router-link to="/teachers-home">
            <v-btn
          type="submit"          
          class="btn btn-lg btn-block ml-4"
          width="97%"
            dark   
            color="indigo darken-2"
          >
            Back
          </v-btn>
        </router-link>
  </v-form>
      <template >
       
       
    </template>
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
         Form1:"",
         Form2:"",
         Form3:"",
         Subjects1:[],
         Subjects2:[],
         Subjects3:[],
         itemSubjects:['Mathematics', 'Accounts', 'Biology', 'English', 'Physics',
                 'Combined Science', 'Geography', 'Agriculture', 'History', 'Chemistry'],
          dialogs: false,
          classOfstudent:"",
          Allfees:[],
          requiredRule: [
      v => !!v || 'This is required',
      
    ],
    SubjectsRules: [
      v => !!v || 'Fill this field',
    ],
    MathsArray:[],
    PhysicsArray: [],
    AccountsArray:[],
    BiologyArray:[],
    EnglishArray:[],
    ChemistryArray:[],
    CombinedScienceArray:[],
    GeographyArray:[],
    ClassIsFalse: false,
    AgricultureArray:[],
    HistoryArray:[],
          Form:{

      Email: '',
      Password: '',
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
        Element:"",
        StudentName:"",
        SubjectIsFalse: false,
        Success: false,

      Number_of_Subjects: [],
      PasswordRules: [
        v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
      ],
      valid: false,
    value: '',
      }),
      methods:{
        handleSubmit() {
      this.$refs.form.validate();
      if(!this.valid) {
        console.log("validation error")
      
      }
   
      else{

        if(this.Form1==="English" && this.Subjects1.length !=0){
          const MathsArray = []

          let myBiologu1 = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu1=="2C"){
          const newItem = {
            ClassName: "2C"    
          }
          MathsArray.push(newItem)
          
        }

        let myBiologu12A = this.Subjects1.find(subject => subject=="2A");
        if(myBiologu12A=="2A"){
        const newItem2A = {
            ClassName: "2A"    
          }
          MathsArray.push(newItem2A)
          
        }

        let myBiologu12B = this.Subjects1.find(subject => subject=="2B");

        if(myBiologu12B=="2B"){
          const newItem2B = {
            ClassName: "2B"    
          }
          MathsArray.push(newItem2B)
          
        }

        let myBiologu12C = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu12C=="2C"){
          const newItem2D = {
            ClassName: "2D"    
          }
          MathsArray.push(newItem2D)
        }


        let myBiologu12E = this.Subjects1.find(subject => subject=="2E");
        if(myBiologu12E=="2E"){
          const newItem2E = {
            ClassName: "2E"    
          }
          MathsArray.push(newItem2E)
        }

        let myBiologu13A = this.Subjects1.find(subject => subject=="3A");
        if(myBiologu13A=="3A"){
          const newItem3A = {
            ClassName: "3A"    
          }
          MathsArray.push(newItem3A)
        }

        let myBiologu13B = this.Subjects1.find(subject => subject=="3B");
        if(myBiologu13B =="3B"){
          const newItem3B = {
            ClassName: "3B"    
          }
          MathsArray.push(newItem3B)
        }
        let myBiologu13C = this.Subjects1.find(subject => subject=="3C");

        if(myBiologu13C =="3C"){
          const newItem3C = {
            ClassName: "3C"    
          }
          MathsArray.push(newItem3C)
        }

        let myBiologu13D = this.Subjects1.find(subject => subject=="3D");
        if(myBiologu13D=="3D"){
          const newItem3D = {
            ClassName: "3D"    
          }
          MathsArray.push(newItem3D)
        }

        let myBiologu13E = this.Subjects1.find(subject => subject=="3E");

        if(myBiologu13E=="3E"){
          const newItem3E = {
            ClassName: "3E"    
          }
          MathsArray.push(newItem3E)
        }


        let myBiologu14E = this.Subjects1.find(subject => subject=="4E");
        if(myBiologu14E=="4E"){
          const newItem4E = {
            ClassName: "4E"    
          }
          MathsArray.push(newItem4E)
        }
        let myBiologu14A = this.Subjects1.find(subject => subject=="4A");

        if(myBiologu14A=="4A"){
          const newItem4A = {
            ClassName: "4A"    
          }
          MathsArray.push(newItem4A)
        }
        let myBiologu14B = this.Subjects1.find(subject => subject=="4B");
  
        if( myBiologu14B =="4B"){
          const newItem4B = {
            ClassName: "4B"    
          }
          MathsArray.push(newItem4B)
        }
        let myBiologu14C = this.Subjects1.find(subject => subject=="4C");

        if(myBiologu14C=="4C"){
          const newItem4C = {
            ClassName: "4C"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu34D= this.Subjects1.find(subject => subject=="4D");
        if(myBiologu34D=="4D"){
          const newItem4C = {
            ClassName: "4D"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu31D = this.Subjects1.find(subject => subject=="1D");
        if(myBiologu31D=="1D"){
          const newItem1D = {
            ClassName: "1D"    
          }
          MathsArray.push(newItem1D)
        }

        let myBiologu31A = this.Subjects1.find(subject => subject=="1A");
        if(myBiologu31A=="1A"){
          const newItem1A = {
            ClassName: "1A"    
          }
          MathsArray.push(newItem1A)
        }
        let myBiologu31B = this.Subjects1.find(subject => subject=="1B");
        if(myBiologu31B=="1B"){
          const newItem1B = {
            ClassName: "1B"    
          }
          MathsArray.push(newItem1B)
        }

        let myBiologu31C = this.Subjects1.find(subject => subject=="1C");
        if(myBiologu31C=="1C"){
          const newItem1C = {
            ClassName: "1C"    
          }
          MathsArray.push(newItem1C)
        }

        let myBiologu31E = this.Subjects1.find(subject => subject=="1E");
        if(myBiologu31E=="1E"){
          const newItem1E = {
            ClassName: "1E"    
          }
          MathsArray.push(newItem1E)
        }


        this.MathsArray= MathsArray
        console.log(this.MathsArray)
        
        if(this.Number_of_Subjects.length <3){
          const Subject = {
          NameofSubject: "English"
        } 
        this.Number_of_Subjects.push(Subject)
        const newForm ={
          Email: this.Form.Email,
          English:this.MathsArray,
          Number_of_Students: this.Number_of_Subjects
        }
        Axios.post(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveandupdateteacher`, newForm, {
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          if(response.data==="The student is successfully updated")
          this.Success = true
        })
        }
        else{
          this.ClassIsFalse=true
        }

        }

        
        if(this.Form1==="Mathematics" && this.Subjects1.length !=0){
          const MathsArray = []

          let myBiologu1 = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu1=="2C"){
          const newItem = {
            ClassName: "2C"    
          }
          MathsArray.push(newItem)
          
        }

        let myBiologu12A = this.Subjects1.find(subject => subject=="2A");
        if(myBiologu12A=="2A"){
        const newItem2A = {
            ClassName: "2A"    
          }
          MathsArray.push(newItem2A)
          
        }

        let myBiologu12B = this.Subjects1.find(subject => subject=="2B");

        if(myBiologu12B=="2B"){
          const newItem2B = {
            ClassName: "2B"    
          }
          MathsArray.push(newItem2B)
          
        }

        let myBiologu12C = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu12C=="2C"){
          const newItem2D = {
            ClassName: "2D"    
          }
          MathsArray.push(newItem2D)
        }


        let myBiologu12E = this.Subjects1.find(subject => subject=="2E");
        if(myBiologu12E=="2E"){
          const newItem2E = {
            ClassName: "2E"    
          }
          MathsArray.push(newItem2E)
        }

        let myBiologu13A = this.Subjects1.find(subject => subject=="3A");
        if(myBiologu13A=="3A"){
          const newItem3A = {
            ClassName: "3A"    
          }
          MathsArray.push(newItem3A)
        }

        let myBiologu13B = this.Subjects1.find(subject => subject=="3B");
        if(myBiologu13B =="3B"){
          const newItem3B = {
            ClassName: "3B"    
          }
          MathsArray.push(newItem3B)
        }
        let myBiologu13C = this.Subjects1.find(subject => subject=="3C");

        if(myBiologu13C =="3C"){
          const newItem3C = {
            ClassName: "3C"    
          }
          MathsArray.push(newItem3C)
        }

        let myBiologu13D = this.Subjects1.find(subject => subject=="3D");
        if(myBiologu13D=="3D"){
          const newItem3D = {
            ClassName: "3D"    
          }
          MathsArray.push(newItem3D)
        }

        let myBiologu13E = this.Subjects1.find(subject => subject=="3E");

        if(myBiologu13E=="3E"){
          const newItem3E = {
            ClassName: "3E"    
          }
          MathsArray.push(newItem3E)
        }


        let myBiologu14E = this.Subjects1.find(subject => subject=="4E");
        if(myBiologu14E=="4E"){
          const newItem4E = {
            ClassName: "4E"    
          }
          MathsArray.push(newItem4E)
        }
        let myBiologu14A = this.Subjects1.find(subject => subject=="4A");

        if(myBiologu14A=="4A"){
          const newItem4A = {
            ClassName: "4A"    
          }
          MathsArray.push(newItem4A)
        }
        let myBiologu14B = this.Subjects1.find(subject => subject=="4B");
  
        if( myBiologu14B =="4B"){
          const newItem4B = {
            ClassName: "4B"    
          }
          MathsArray.push(newItem4B)
        }
        let myBiologu14C = this.Subjects1.find(subject => subject=="4C");

        if(myBiologu14C=="4C"){
          const newItem4C = {
            ClassName: "4C"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu34D= this.Subjects1.find(subject => subject=="4D");
        if(myBiologu34D=="4D"){
          const newItem4C = {
            ClassName: "4D"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu31D = this.Subjects1.find(subject => subject=="1D");
        if(myBiologu31D=="1D"){
          const newItem1D = {
            ClassName: "1D"    
          }
          MathsArray.push(newItem1D)
        }

        let myBiologu31A = this.Subjects1.find(subject => subject=="1A");
        if(myBiologu31A=="1A"){
          const newItem1A = {
            ClassName: "1A"    
          }
          MathsArray.push(newItem1A)
        }
        let myBiologu31B = this.Subjects1.find(subject => subject=="1B");
        if(myBiologu31B=="1B"){
          const newItem1B = {
            ClassName: "1B"    
          }
          MathsArray.push(newItem1B)
        }

        let myBiologu31C = this.Subjects1.find(subject => subject=="1C");
        if(myBiologu31C=="1C"){
          const newItem1C = {
            ClassName: "1C"    
          }
          MathsArray.push(newItem1C)
        }

        let myBiologu31E = this.Subjects1.find(subject => subject=="1E");
        if(myBiologu31E=="1E"){
          const newItem1E = {
            ClassName: "1E"    
          }
          MathsArray.push(newItem1E)
        }


        this.MathsArray= MathsArray
        console.log(this.MathsArray)
        
        if(this.Number_of_Subjects.length <3){
          const Subject = {
          NameofSubject: "Mathematics"
        } 
        this.Number_of_Subjects.push(Subject)
        const newForm ={
          Email: this.Form.Email,
          Maths:this.MathsArray,
          Number_of_Students: this.Number_of_Subjects
        }
        Axios.post(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveandupdateteacher`, newForm, {
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          if(response.data==="The student is successfully updated")
          this.Success = true
        })
        }
        else{
          this.ClassIsFalse=true
        }

        }

        if(this.Form1==="Accounts" && this.Subjects1.length !=0){
          const MathsArray = []

          let myBiologu1 = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu1=="2C"){
          const newItem = {
            ClassName: "2C"    
          }
          MathsArray.push(newItem)
          
        }

        let myBiologu12A = this.Subjects1.find(subject => subject=="2A");
        if(myBiologu12A=="2A"){
        const newItem2A = {
            ClassName: "2A"    
          }
          MathsArray.push(newItem2A)
          
        }

        let myBiologu12B = this.Subjects1.find(subject => subject=="2B");

        if(myBiologu12B=="2B"){
          const newItem2B = {
            ClassName: "2B"    
          }
          MathsArray.push(newItem2B)
          
        }

        let myBiologu12C = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu12C=="2C"){
          const newItem2D = {
            ClassName: "2D"    
          }
          MathsArray.push(newItem2D)
        }


        let myBiologu12E = this.Subjects1.find(subject => subject=="2E");
        if(myBiologu12E=="2E"){
          const newItem2E = {
            ClassName: "2E"    
          }
          MathsArray.push(newItem2E)
        }

        let myBiologu13A = this.Subjects1.find(subject => subject=="3A");
        if(myBiologu13A=="3A"){
          const newItem3A = {
            ClassName: "3A"    
          }
          MathsArray.push(newItem3A)
        }

        let myBiologu13B = this.Subjects1.find(subject => subject=="3B");
        if(myBiologu13B =="3B"){
          const newItem3B = {
            ClassName: "3B"    
          }
          MathsArray.push(newItem3B)
        }
        let myBiologu13C = this.Subjects1.find(subject => subject=="3C");

        if(myBiologu13C =="3C"){
          const newItem3C = {
            ClassName: "3C"    
          }
          MathsArray.push(newItem3C)
        }

        let myBiologu13D = this.Subjects1.find(subject => subject=="3D");
        if(myBiologu13D=="3D"){
          const newItem3D = {
            ClassName: "3D"    
          }
          MathsArray.push(newItem3D)
        }

        let myBiologu13E = this.Subjects1.find(subject => subject=="3E");

        if(myBiologu13E=="3E"){
          const newItem3E = {
            ClassName: "3E"    
          }
          MathsArray.push(newItem3E)
        }


        let myBiologu14E = this.Subjects1.find(subject => subject=="4E");
        if(myBiologu14E=="4E"){
          const newItem4E = {
            ClassName: "4E"    
          }
          MathsArray.push(newItem4E)
        }
        let myBiologu14A = this.Subjects1.find(subject => subject=="4A");

        if(myBiologu14A=="4A"){
          const newItem4A = {
            ClassName: "4A"    
          }
          MathsArray.push(newItem4A)
        }
        let myBiologu14B = this.Subjects1.find(subject => subject=="4B");
  
        if( myBiologu14B =="4B"){
          const newItem4B = {
            ClassName: "4B"    
          }
          MathsArray.push(newItem4B)
        }
        let myBiologu14C = this.Subjects1.find(subject => subject=="4C");

        if(myBiologu14C=="4C"){
          const newItem4C = {
            ClassName: "4C"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu34D= this.Subjects1.find(subject => subject=="4D");
        if(myBiologu34D=="4D"){
          const newItem4C = {
            ClassName: "4D"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu31D = this.Subjects1.find(subject => subject=="1D");
        if(myBiologu31D=="1D"){
          const newItem1D = {
            ClassName: "1D"    
          }
          MathsArray.push(newItem1D)
        }

        let myBiologu31A = this.Subjects1.find(subject => subject=="1A");
        if(myBiologu31A=="1A"){
          const newItem1A = {
            ClassName: "1A"    
          }
          MathsArray.push(newItem1A)
        }
        let myBiologu31B = this.Subjects1.find(subject => subject=="1B");
        if(myBiologu31B=="1B"){
          const newItem1B = {
            ClassName: "1B"    
          }
          MathsArray.push(newItem1B)
        }

        let myBiologu31C = this.Subjects1.find(subject => subject=="1C");
        if(myBiologu31C=="1C"){
          const newItem1C = {
            ClassName: "1C"    
          }
          MathsArray.push(newItem1C)
        }

        let myBiologu31E = this.Subjects1.find(subject => subject=="1E");
        if(myBiologu31E=="1E"){
          const newItem1E = {
            ClassName: "1E"    
          }
          MathsArray.push(newItem1E)
        }


        this.MathsArray= MathsArray
        console.log(this.MathsArray)
        
        if(this.Number_of_Subjects.length <3){
          const Subject = {
          NameofSubject: "Accounts"
        } 
        this.Number_of_Subjects.push(Subject)
        const newForm ={
          Email: this.Form.Email,
          Accounts:this.MathsArray,
          Number_of_Students: this.Number_of_Subjects
        }
        Axios.post(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveandupdateteacher`, newForm, {
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          if(response.data==="The student is successfully updated")
          this.Success = true
        })
        }
        else{
          this.ClassIsFalse=true
        }

        }


          
        if(this.Form1==="Biology" && this.Subjects1.length !=0){
          const MathsArray = []

          let myBiologu1 = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu1=="2C"){
          const newItem = {
            ClassName: "2C"    
          }
          MathsArray.push(newItem)
          
        }

        let myBiologu12A = this.Subjects1.find(subject => subject=="2A");
        if(myBiologu12A=="2A"){
        const newItem2A = {
            ClassName: "2A"    
          }
          MathsArray.push(newItem2A)
          
        }

        let myBiologu12B = this.Subjects1.find(subject => subject=="2B");

        if(myBiologu12B=="2B"){
          const newItem2B = {
            ClassName: "2B"    
          }
          MathsArray.push(newItem2B)
          
        }

        let myBiologu12C = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu12C=="2C"){
          const newItem2D = {
            ClassName: "2D"    
          }
          MathsArray.push(newItem2D)
        }


        let myBiologu12E = this.Subjects1.find(subject => subject=="2E");
        if(myBiologu12E=="2E"){
          const newItem2E = {
            ClassName: "2E"    
          }
          MathsArray.push(newItem2E)
        }

        let myBiologu13A = this.Subjects1.find(subject => subject=="3A");
        if(myBiologu13A=="3A"){
          const newItem3A = {
            ClassName: "3A"    
          }
          MathsArray.push(newItem3A)
        }

        let myBiologu13B = this.Subjects1.find(subject => subject=="3B");
        if(myBiologu13B =="3B"){
          const newItem3B = {
            ClassName: "3B"    
          }
          MathsArray.push(newItem3B)
        }
        let myBiologu13C = this.Subjects1.find(subject => subject=="3C");

        if(myBiologu13C =="3C"){
          const newItem3C = {
            ClassName: "3C"    
          }
          MathsArray.push(newItem3C)
        }

        let myBiologu13D = this.Subjects1.find(subject => subject=="3D");
        if(myBiologu13D=="3D"){
          const newItem3D = {
            ClassName: "3D"    
          }
          MathsArray.push(newItem3D)
        }

        let myBiologu13E = this.Subjects1.find(subject => subject=="3E");

        if(myBiologu13E=="3E"){
          const newItem3E = {
            ClassName: "3E"    
          }
          MathsArray.push(newItem3E)
        }


        let myBiologu14E = this.Subjects1.find(subject => subject=="4E");
        if(myBiologu14E=="4E"){
          const newItem4E = {
            ClassName: "4E"    
          }
          MathsArray.push(newItem4E)
        }
        let myBiologu14A = this.Subjects1.find(subject => subject=="4A");

        if(myBiologu14A=="4A"){
          const newItem4A = {
            ClassName: "4A"    
          }
          MathsArray.push(newItem4A)
        }
        let myBiologu14B = this.Subjects1.find(subject => subject=="4B");
  
        if( myBiologu14B =="4B"){
          const newItem4B = {
            ClassName: "4B"    
          }
          MathsArray.push(newItem4B)
        }
        let myBiologu14C = this.Subjects1.find(subject => subject=="4C");

        if(myBiologu14C=="4C"){
          const newItem4C = {
            ClassName: "4C"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu34D= this.Subjects1.find(subject => subject=="4D");
        if(myBiologu34D=="4D"){
          const newItem4C = {
            ClassName: "4D"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu31D = this.Subjects1.find(subject => subject=="1D");
        if(myBiologu31D=="1D"){
          const newItem1D = {
            ClassName: "1D"    
          }
          MathsArray.push(newItem1D)
        }

        let myBiologu31A = this.Subjects1.find(subject => subject=="1A");
        if(myBiologu31A=="1A"){
          const newItem1A = {
            ClassName: "1A"    
          }
          MathsArray.push(newItem1A)
        }
        let myBiologu31B = this.Subjects1.find(subject => subject=="1B");
        if(myBiologu31B=="1B"){
          const newItem1B = {
            ClassName: "1B"    
          }
          MathsArray.push(newItem1B)
        }

        let myBiologu31C = this.Subjects1.find(subject => subject=="1C");
        if(myBiologu31C=="1C"){
          const newItem1C = {
            ClassName: "1C"    
          }
          MathsArray.push(newItem1C)
        }

        let myBiologu31E = this.Subjects1.find(subject => subject=="1E");
        if(myBiologu31E=="1E"){
          const newItem1E = {
            ClassName: "1E"    
          }
          MathsArray.push(newItem1E)
        }


        this.MathsArray= MathsArray
        console.log(this.MathsArray)
        
        if(this.Number_of_Subjects.length <3){
          const Subject = {
          NameofSubject: "Biology"
        } 
        this.Number_of_Subjects.push(Subject)
        const newForm ={
          Email: this.Form.Email,
          Biology:this.MathsArray,
          Number_of_Students: this.Number_of_Subjects
        }
        Axios.post(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveandupdateteacher`, newForm, {
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          if(response.data==="The student is successfully updated")
          this.Success = true
        })
        }
        else{
          this.ClassIsFalse=true
        }

        }










                  
        if(this.Form1==="Physics" && this.Subjects1.length !=0){
          const MathsArray = []

          let myBiologu1 = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu1=="2C"){
          const newItem = {
            ClassName: "2C"    
          }
          MathsArray.push(newItem)
          
        }

        let myBiologu12A = this.Subjects1.find(subject => subject=="2A");
        if(myBiologu12A=="2A"){
        const newItem2A = {
            ClassName: "2A"    
          }
          MathsArray.push(newItem2A)
          
        }

        let myBiologu12B = this.Subjects1.find(subject => subject=="2B");

        if(myBiologu12B=="2B"){
          const newItem2B = {
            ClassName: "2B"    
          }
          MathsArray.push(newItem2B)
          
        }

        let myBiologu12C = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu12C=="2C"){
          const newItem2D = {
            ClassName: "2D"    
          }
          MathsArray.push(newItem2D)
        }


        let myBiologu12E = this.Subjects1.find(subject => subject=="2E");
        if(myBiologu12E=="2E"){
          const newItem2E = {
            ClassName: "2E"    
          }
          MathsArray.push(newItem2E)
        }

        let myBiologu13A = this.Subjects1.find(subject => subject=="3A");
        if(myBiologu13A=="3A"){
          const newItem3A = {
            ClassName: "3A"    
          }
          MathsArray.push(newItem3A)
        }

        let myBiologu13B = this.Subjects1.find(subject => subject=="3B");
        if(myBiologu13B =="3B"){
          const newItem3B = {
            ClassName: "3B"    
          }
          MathsArray.push(newItem3B)
        }
        let myBiologu13C = this.Subjects1.find(subject => subject=="3C");

        if(myBiologu13C =="3C"){
          const newItem3C = {
            ClassName: "3C"    
          }
          MathsArray.push(newItem3C)
        }

        let myBiologu13D = this.Subjects1.find(subject => subject=="3D");
        if(myBiologu13D=="3D"){
          const newItem3D = {
            ClassName: "3D"    
          }
          MathsArray.push(newItem3D)
        }

        let myBiologu13E = this.Subjects1.find(subject => subject=="3E");

        if(myBiologu13E=="3E"){
          const newItem3E = {
            ClassName: "3E"    
          }
          MathsArray.push(newItem3E)
        }


        let myBiologu14E = this.Subjects1.find(subject => subject=="4E");
        if(myBiologu14E=="4E"){
          const newItem4E = {
            ClassName: "4E"    
          }
          MathsArray.push(newItem4E)
        }
        let myBiologu14A = this.Subjects1.find(subject => subject=="4A");

        if(myBiologu14A=="4A"){
          const newItem4A = {
            ClassName: "4A"    
          }
          MathsArray.push(newItem4A)
        }
        let myBiologu14B = this.Subjects1.find(subject => subject=="4B");
  
        if( myBiologu14B =="4B"){
          const newItem4B = {
            ClassName: "4B"    
          }
          MathsArray.push(newItem4B)
        }
        let myBiologu14C = this.Subjects1.find(subject => subject=="4C");

        if(myBiologu14C=="4C"){
          const newItem4C = {
            ClassName: "4C"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu34D= this.Subjects1.find(subject => subject=="4D");
        if(myBiologu34D=="4D"){
          const newItem4C = {
            ClassName: "4D"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu31D = this.Subjects1.find(subject => subject=="1D");
        if(myBiologu31D=="1D"){
          const newItem1D = {
            ClassName: "1D"    
          }
          MathsArray.push(newItem1D)
        }

        let myBiologu31A = this.Subjects1.find(subject => subject=="1A");
        if(myBiologu31A=="1A"){
          const newItem1A = {
            ClassName: "1A"    
          }
          MathsArray.push(newItem1A)
        }
        let myBiologu31B = this.Subjects1.find(subject => subject=="1B");
        if(myBiologu31B=="1B"){
          const newItem1B = {
            ClassName: "1B"    
          }
          MathsArray.push(newItem1B)
        }

        let myBiologu31C = this.Subjects1.find(subject => subject=="1C");
        if(myBiologu31C=="1C"){
          const newItem1C = {
            ClassName: "1C"    
          }
          MathsArray.push(newItem1C)
        }

        let myBiologu31E = this.Subjects1.find(subject => subject=="1E");
        if(myBiologu31E=="1E"){
          const newItem1E = {
            ClassName: "1E"    
          }
          MathsArray.push(newItem1E)
        }


        this.MathsArray= MathsArray
        console.log(this.MathsArray)
        
        if(this.Number_of_Subjects.length <3){
          const Subject = {
          NameofSubject: "Physics"
        } 
        this.Number_of_Subjects.push(Subject)
        const newForm ={
          Email: this.Form.Email,
          Physics:this.MathsArray,
          Number_of_Students: this.Number_of_Subjects
        }
        Axios.post(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveandupdateteacher`, newForm, {
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          if(response.data==="The student is successfully updated")
          this.Success = true
        })
        }
        else{
          this.ClassIsFalse=true
        }

        }






        



          
        if(this.Form1==="Biology" && this.Subjects1.length !=0){
          const MathsArray = []

          let myBiologu1 = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu1=="2C"){
          const newItem = {
            ClassName: "2C"    
          }
          MathsArray.push(newItem)
          
        }

        let myBiologu12A = this.Subjects1.find(subject => subject=="2A");
        if(myBiologu12A=="2A"){
        const newItem2A = {
            ClassName: "2A"    
          }
          MathsArray.push(newItem2A)
          
        }

        let myBiologu12B = this.Subjects1.find(subject => subject=="2B");

        if(myBiologu12B=="2B"){
          const newItem2B = {
            ClassName: "2B"    
          }
          MathsArray.push(newItem2B)
          
        }

        let myBiologu12C = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu12C=="2C"){
          const newItem2D = {
            ClassName: "2D"    
          }
          MathsArray.push(newItem2D)
        }


        let myBiologu12E = this.Subjects1.find(subject => subject=="2E");
        if(myBiologu12E=="2E"){
          const newItem2E = {
            ClassName: "2E"    
          }
          MathsArray.push(newItem2E)
        }

        let myBiologu13A = this.Subjects1.find(subject => subject=="3A");
        if(myBiologu13A=="3A"){
          const newItem3A = {
            ClassName: "3A"    
          }
          MathsArray.push(newItem3A)
        }

        let myBiologu13B = this.Subjects1.find(subject => subject=="3B");
        if(myBiologu13B =="3B"){
          const newItem3B = {
            ClassName: "3B"    
          }
          MathsArray.push(newItem3B)
        }
        let myBiologu13C = this.Subjects1.find(subject => subject=="3C");

        if(myBiologu13C =="3C"){
          const newItem3C = {
            ClassName: "3C"    
          }
          MathsArray.push(newItem3C)
        }

        let myBiologu13D = this.Subjects1.find(subject => subject=="3D");
        if(myBiologu13D=="3D"){
          const newItem3D = {
            ClassName: "3D"    
          }
          MathsArray.push(newItem3D)
        }

        let myBiologu13E = this.Subjects1.find(subject => subject=="3E");

        if(myBiologu13E=="3E"){
          const newItem3E = {
            ClassName: "3E"    
          }
          MathsArray.push(newItem3E)
        }


        let myBiologu14E = this.Subjects1.find(subject => subject=="4E");
        if(myBiologu14E=="4E"){
          const newItem4E = {
            ClassName: "4E"    
          }
          MathsArray.push(newItem4E)
        }
        let myBiologu14A = this.Subjects1.find(subject => subject=="4A");

        if(myBiologu14A=="4A"){
          const newItem4A = {
            ClassName: "4A"    
          }
          MathsArray.push(newItem4A)
        }
        let myBiologu14B = this.Subjects1.find(subject => subject=="4B");
  
        if( myBiologu14B =="4B"){
          const newItem4B = {
            ClassName: "4B"    
          }
          MathsArray.push(newItem4B)
        }
        let myBiologu14C = this.Subjects1.find(subject => subject=="4C");

        if(myBiologu14C=="4C"){
          const newItem4C = {
            ClassName: "4C"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu34D= this.Subjects1.find(subject => subject=="4D");
        if(myBiologu34D=="4D"){
          const newItem4C = {
            ClassName: "4D"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu31D = this.Subjects1.find(subject => subject=="1D");
        if(myBiologu31D=="1D"){
          const newItem1D = {
            ClassName: "1D"    
          }
          MathsArray.push(newItem1D)
        }

        let myBiologu31A = this.Subjects1.find(subject => subject=="1A");
        if(myBiologu31A=="1A"){
          const newItem1A = {
            ClassName: "1A"    
          }
          MathsArray.push(newItem1A)
        }
        let myBiologu31B = this.Subjects1.find(subject => subject=="1B");
        if(myBiologu31B=="1B"){
          const newItem1B = {
            ClassName: "1B"    
          }
          MathsArray.push(newItem1B)
        }

        let myBiologu31C = this.Subjects1.find(subject => subject=="1C");
        if(myBiologu31C=="1C"){
          const newItem1C = {
            ClassName: "1C"    
          }
          MathsArray.push(newItem1C)
        }

        let myBiologu31E = this.Subjects1.find(subject => subject=="1E");
        if(myBiologu31E=="1E"){
          const newItem1E = {
            ClassName: "1E"    
          }
          MathsArray.push(newItem1E)
        }


        this.MathsArray= MathsArray
        console.log(this.MathsArray)
        
        if(this.Number_of_Subjects.length <3){
          const Subject = {
          NameofSubject: "Biology"
        } 
        this.Number_of_Subjects.push(Subject)
        const newForm ={
          Email: this.Form.Email,
          Biology:this.MathsArray,
          Number_of_Students: this.Number_of_Subjects
        }
        Axios.post(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveandupdateteacher`, newForm, {
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          if(response.data==="The student is successfully updated")
          this.Success = true
        })
        }
        else{
          this.ClassIsFalse=true
        }

        }


        


          
        if(this.Form1==="Combined Science" && this.Subjects1.length !=0){
          const MathsArray = []

          let myBiologu1 = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu1=="2C"){
          const newItem = {
            ClassName: "2C"    
          }
          MathsArray.push(newItem)
          
        }

        let myBiologu12A = this.Subjects1.find(subject => subject=="2A");
        if(myBiologu12A=="2A"){
        const newItem2A = {
            ClassName: "2A"    
          }
          MathsArray.push(newItem2A)
          
        }

        let myBiologu12B = this.Subjects1.find(subject => subject=="2B");

        if(myBiologu12B=="2B"){
          const newItem2B = {
            ClassName: "2B"    
          }
          MathsArray.push(newItem2B)
          
        }

        let myBiologu12C = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu12C=="2C"){
          const newItem2D = {
            ClassName: "2D"    
          }
          MathsArray.push(newItem2D)
        }


        let myBiologu12E = this.Subjects1.find(subject => subject=="2E");
        if(myBiologu12E=="2E"){
          const newItem2E = {
            ClassName: "2E"    
          }
          MathsArray.push(newItem2E)
        }

        let myBiologu13A = this.Subjects1.find(subject => subject=="3A");
        if(myBiologu13A=="3A"){
          const newItem3A = {
            ClassName: "3A"    
          }
          MathsArray.push(newItem3A)
        }

        let myBiologu13B = this.Subjects1.find(subject => subject=="3B");
        if(myBiologu13B =="3B"){
          const newItem3B = {
            ClassName: "3B"    
          }
          MathsArray.push(newItem3B)
        }
        let myBiologu13C = this.Subjects1.find(subject => subject=="3C");

        if(myBiologu13C =="3C"){
          const newItem3C = {
            ClassName: "3C"    
          }
          MathsArray.push(newItem3C)
        }

        let myBiologu13D = this.Subjects1.find(subject => subject=="3D");
        if(myBiologu13D=="3D"){
          const newItem3D = {
            ClassName: "3D"    
          }
          MathsArray.push(newItem3D)
        }

        let myBiologu13E = this.Subjects1.find(subject => subject=="3E");

        if(myBiologu13E=="3E"){
          const newItem3E = {
            ClassName: "3E"    
          }
          MathsArray.push(newItem3E)
        }


        let myBiologu14E = this.Subjects1.find(subject => subject=="4E");
        if(myBiologu14E=="4E"){
          const newItem4E = {
            ClassName: "4E"    
          }
          MathsArray.push(newItem4E)
        }
        let myBiologu14A = this.Subjects1.find(subject => subject=="4A");

        if(myBiologu14A=="4A"){
          const newItem4A = {
            ClassName: "4A"    
          }
          MathsArray.push(newItem4A)
        }
        let myBiologu14B = this.Subjects1.find(subject => subject=="4B");
  
        if( myBiologu14B =="4B"){
          const newItem4B = {
            ClassName: "4B"    
          }
          MathsArray.push(newItem4B)
        }
        let myBiologu14C = this.Subjects1.find(subject => subject=="4C");

        if(myBiologu14C=="4C"){
          const newItem4C = {
            ClassName: "4C"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu34D= this.Subjects1.find(subject => subject=="4D");
        if(myBiologu34D=="4D"){
          const newItem4C = {
            ClassName: "4D"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu31D = this.Subjects1.find(subject => subject=="1D");
        if(myBiologu31D=="1D"){
          const newItem1D = {
            ClassName: "1D"    
          }
          MathsArray.push(newItem1D)
        }

        let myBiologu31A = this.Subjects1.find(subject => subject=="1A");
        if(myBiologu31A=="1A"){
          const newItem1A = {
            ClassName: "1A"    
          }
          MathsArray.push(newItem1A)
        }
        let myBiologu31B = this.Subjects1.find(subject => subject=="1B");
        if(myBiologu31B=="1B"){
          const newItem1B = {
            ClassName: "1B"    
          }
          MathsArray.push(newItem1B)
        }

        let myBiologu31C = this.Subjects1.find(subject => subject=="1C");
        if(myBiologu31C=="1C"){
          const newItem1C = {
            ClassName: "1C"    
          }
          MathsArray.push(newItem1C)
        }

        let myBiologu31E = this.Subjects1.find(subject => subject=="1E");
        if(myBiologu31E=="1E"){
          const newItem1E = {
            ClassName: "1E"    
          }
          MathsArray.push(newItem1E)
        }


        this.MathsArray= MathsArray
        console.log(this.MathsArray)
        
        if(this.Number_of_Subjects.length <3){
          const Subject = {
          NameofSubject: "Combined Science"
        } 
        this.Number_of_Subjects.push(Subject)
        const newForm ={
          Email: this.Form.Email,
          CombinedScience:this.MathsArray,
          Number_of_Students: this.Number_of_Subjects
        }
        Axios.post(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveandupdateteacher`, newForm, {
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          if(response.data==="The student is successfully updated")
          this.Success = true
        })
        }
        else{
          this.ClassIsFalse=true
        }

        }


          
        if(this.Form1==="Geography" && this.Subjects1.length !=0){
          const MathsArray = []

          let myBiologu1 = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu1=="2C"){
          const newItem = {
            ClassName: "2C"    
          }
          MathsArray.push(newItem)
          
        }

        let myBiologu12A = this.Subjects1.find(subject => subject=="2A");
        if(myBiologu12A=="2A"){
        const newItem2A = {
            ClassName: "2A"    
          }
          MathsArray.push(newItem2A)
          
        }

        let myBiologu12B = this.Subjects1.find(subject => subject=="2B");

        if(myBiologu12B=="2B"){
          const newItem2B = {
            ClassName: "2B"    
          }
          MathsArray.push(newItem2B)
          
        }

        let myBiologu12C = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu12C=="2C"){
          const newItem2D = {
            ClassName: "2D"    
          }
          MathsArray.push(newItem2D)
        }


        let myBiologu12E = this.Subjects1.find(subject => subject=="2E");
        if(myBiologu12E=="2E"){
          const newItem2E = {
            ClassName: "2E"    
          }
          MathsArray.push(newItem2E)
        }

        let myBiologu13A = this.Subjects1.find(subject => subject=="3A");
        if(myBiologu13A=="3A"){
          const newItem3A = {
            ClassName: "3A"    
          }
          MathsArray.push(newItem3A)
        }

        let myBiologu13B = this.Subjects1.find(subject => subject=="3B");
        if(myBiologu13B =="3B"){
          const newItem3B = {
            ClassName: "3B"    
          }
          MathsArray.push(newItem3B)
        }
        let myBiologu13C = this.Subjects1.find(subject => subject=="3C");

        if(myBiologu13C =="3C"){
          const newItem3C = {
            ClassName: "3C"    
          }
          MathsArray.push(newItem3C)
        }

        let myBiologu13D = this.Subjects1.find(subject => subject=="3D");
        if(myBiologu13D=="3D"){
          const newItem3D = {
            ClassName: "3D"    
          }
          MathsArray.push(newItem3D)
        }

        let myBiologu13E = this.Subjects1.find(subject => subject=="3E");

        if(myBiologu13E=="3E"){
          const newItem3E = {
            ClassName: "3E"    
          }
          MathsArray.push(newItem3E)
        }


        let myBiologu14E = this.Subjects1.find(subject => subject=="4E");
        if(myBiologu14E=="4E"){
          const newItem4E = {
            ClassName: "4E"    
          }
          MathsArray.push(newItem4E)
        }
        let myBiologu14A = this.Subjects1.find(subject => subject=="4A");

        if(myBiologu14A=="4A"){
          const newItem4A = {
            ClassName: "4A"    
          }
          MathsArray.push(newItem4A)
        }
        let myBiologu14B = this.Subjects1.find(subject => subject=="4B");
  
        if( myBiologu14B =="4B"){
          const newItem4B = {
            ClassName: "4B"    
          }
          MathsArray.push(newItem4B)
        }
        let myBiologu14C = this.Subjects1.find(subject => subject=="4C");

        if(myBiologu14C=="4C"){
          const newItem4C = {
            ClassName: "4C"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu34D= this.Subjects1.find(subject => subject=="4D");
        if(myBiologu34D=="4D"){
          const newItem4C = {
            ClassName: "4D"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu31D = this.Subjects1.find(subject => subject=="1D");
        if(myBiologu31D=="1D"){
          const newItem1D = {
            ClassName: "1D"    
          }
          MathsArray.push(newItem1D)
        }

        let myBiologu31A = this.Subjects1.find(subject => subject=="1A");
        if(myBiologu31A=="1A"){
          const newItem1A = {
            ClassName: "1A"    
          }
          MathsArray.push(newItem1A)
        }
        let myBiologu31B = this.Subjects1.find(subject => subject=="1B");
        if(myBiologu31B=="1B"){
          const newItem1B = {
            ClassName: "1B"    
          }
          MathsArray.push(newItem1B)
        }

        let myBiologu31C = this.Subjects1.find(subject => subject=="1C");
        if(myBiologu31C=="1C"){
          const newItem1C = {
            ClassName: "1C"    
          }
          MathsArray.push(newItem1C)
        }

        let myBiologu31E = this.Subjects1.find(subject => subject=="1E");
        if(myBiologu31E=="1E"){
          const newItem1E = {
            ClassName: "1E"    
          }
          MathsArray.push(newItem1E)
        }


        this.MathsArray= MathsArray
        console.log(this.MathsArray)
        
        if(this.Number_of_Subjects.length <3){
          const Subject = {
          NameofSubject: "Geography"
        } 
        this.Number_of_Subjects.push(Subject)
        const newForm ={
          Email: this.Form.Email,
          Geography:this.MathsArray,
          Number_of_Students: this.Number_of_Subjects
        }
        Axios.post(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveandupdateteacher`, newForm, {
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          if(response.data==="The student is successfully updated")
          this.Success = true
        })
        }
        else{
          this.ClassIsFalse=true
        }

        }





          
        if(this.Form1==="Agriculture" && this.Subjects1.length !=0){
          const MathsArray = []

          let myBiologu1 = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu1=="2C"){
          const newItem = {
            ClassName: "2C"    
          }
          MathsArray.push(newItem)
          
        }

        let myBiologu12A = this.Subjects1.find(subject => subject=="2A");
        if(myBiologu12A=="2A"){
        const newItem2A = {
            ClassName: "2A"    
          }
          MathsArray.push(newItem2A)
          
        }

        let myBiologu12B = this.Subjects1.find(subject => subject=="2B");

        if(myBiologu12B=="2B"){
          const newItem2B = {
            ClassName: "2B"    
          }
          MathsArray.push(newItem2B)
          
        }

        let myBiologu12C = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu12C=="2C"){
          const newItem2D = {
            ClassName: "2D"    
          }
          MathsArray.push(newItem2D)
        }


        let myBiologu12E = this.Subjects1.find(subject => subject=="2E");
        if(myBiologu12E=="2E"){
          const newItem2E = {
            ClassName: "2E"    
          }
          MathsArray.push(newItem2E)
        }

        let myBiologu13A = this.Subjects1.find(subject => subject=="3A");
        if(myBiologu13A=="3A"){
          const newItem3A = {
            ClassName: "3A"    
          }
          MathsArray.push(newItem3A)
        }

        let myBiologu13B = this.Subjects1.find(subject => subject=="3B");
        if(myBiologu13B =="3B"){
          const newItem3B = {
            ClassName: "3B"    
          }
          MathsArray.push(newItem3B)
        }
        let myBiologu13C = this.Subjects1.find(subject => subject=="3C");

        if(myBiologu13C =="3C"){
          const newItem3C = {
            ClassName: "3C"    
          }
          MathsArray.push(newItem3C)
        }

        let myBiologu13D = this.Subjects1.find(subject => subject=="3D");
        if(myBiologu13D=="3D"){
          const newItem3D = {
            ClassName: "3D"    
          }
          MathsArray.push(newItem3D)
        }

        let myBiologu13E = this.Subjects1.find(subject => subject=="3E");

        if(myBiologu13E=="3E"){
          const newItem3E = {
            ClassName: "3E"    
          }
          MathsArray.push(newItem3E)
        }


        let myBiologu14E = this.Subjects1.find(subject => subject=="4E");
        if(myBiologu14E=="4E"){
          const newItem4E = {
            ClassName: "4E"    
          }
          MathsArray.push(newItem4E)
        }
        let myBiologu14A = this.Subjects1.find(subject => subject=="4A");

        if(myBiologu14A=="4A"){
          const newItem4A = {
            ClassName: "4A"    
          }
          MathsArray.push(newItem4A)
        }
        let myBiologu14B = this.Subjects1.find(subject => subject=="4B");
  
        if( myBiologu14B =="4B"){
          const newItem4B = {
            ClassName: "4B"    
          }
          MathsArray.push(newItem4B)
        }
        let myBiologu14C = this.Subjects1.find(subject => subject=="4C");

        if(myBiologu14C=="4C"){
          const newItem4C = {
            ClassName: "4C"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu34D= this.Subjects1.find(subject => subject=="4D");
        if(myBiologu34D=="4D"){
          const newItem4C = {
            ClassName: "4D"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu31D = this.Subjects1.find(subject => subject=="1D");
        if(myBiologu31D=="1D"){
          const newItem1D = {
            ClassName: "1D"    
          }
          MathsArray.push(newItem1D)
        }

        let myBiologu31A = this.Subjects1.find(subject => subject=="1A");
        if(myBiologu31A=="1A"){
          const newItem1A = {
            ClassName: "1A"    
          }
          MathsArray.push(newItem1A)
        }
        let myBiologu31B = this.Subjects1.find(subject => subject=="1B");
        if(myBiologu31B=="1B"){
          const newItem1B = {
            ClassName: "1B"    
          }
          MathsArray.push(newItem1B)
        }

        let myBiologu31C = this.Subjects1.find(subject => subject=="1C");
        if(myBiologu31C=="1C"){
          const newItem1C = {
            ClassName: "1C"    
          }
          MathsArray.push(newItem1C)
        }

        let myBiologu31E = this.Subjects1.find(subject => subject=="1E");
        if(myBiologu31E=="1E"){
          const newItem1E = {
            ClassName: "1E"    
          }
          MathsArray.push(newItem1E)
        }


        this.MathsArray= MathsArray
        console.log(this.MathsArray)
        
        if(this.Number_of_Subjects.length <3){
          const Subject = {
          NameofSubject: "Agriculture"
        } 
        this.Number_of_Subjects.push(Subject)
        const newForm ={
          Email: this.Form.Email,
          Agriculture:this.MathsArray,
          Number_of_Students: this.Number_of_Subjects
        }
      Axios.post(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveandupdateteacher`, newForm, {
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          if(response.data==="The student is successfully updated")
          this.Success = true
        })
        }
        else{
          this.ClassIsFalse=true
        }

        }


        


          
        if(this.Form1==="History" && this.Subjects1.length !=0){
          const MathsArray = []

          let myBiologu1 = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu1=="2C"){
          const newItem = {
            ClassName: "2C"    
          }
          MathsArray.push(newItem)
          
        }

        let myBiologu12A = this.Subjects1.find(subject => subject=="2A");
        if(myBiologu12A=="2A"){
        const newItem2A = {
            ClassName: "2A"    
          }
          MathsArray.push(newItem2A)
          
        }

        let myBiologu12B = this.Subjects1.find(subject => subject=="2B");

        if(myBiologu12B=="2B"){
          const newItem2B = {
            ClassName: "2B"    
          }
          MathsArray.push(newItem2B)
          
        }

        let myBiologu12C = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu12C=="2C"){
          const newItem2D = {
            ClassName: "2D"    
          }
          MathsArray.push(newItem2D)
        }


        let myBiologu12E = this.Subjects1.find(subject => subject=="2E");
        if(myBiologu12E=="2E"){
          const newItem2E = {
            ClassName: "2E"    
          }
          MathsArray.push(newItem2E)
        }

        let myBiologu13A = this.Subjects1.find(subject => subject=="3A");
        if(myBiologu13A=="3A"){
          const newItem3A = {
            ClassName: "3A"    
          }
          MathsArray.push(newItem3A)
        }

        let myBiologu13B = this.Subjects1.find(subject => subject=="3B");
        if(myBiologu13B =="3B"){
          const newItem3B = {
            ClassName: "3B"    
          }
          MathsArray.push(newItem3B)
        }
        let myBiologu13C = this.Subjects1.find(subject => subject=="3C");

        if(myBiologu13C =="3C"){
          const newItem3C = {
            ClassName: "3C"    
          }
          MathsArray.push(newItem3C)
        }

        let myBiologu13D = this.Subjects1.find(subject => subject=="3D");
        if(myBiologu13D=="3D"){
          const newItem3D = {
            ClassName: "3D"    
          }
          MathsArray.push(newItem3D)
        }

        let myBiologu13E = this.Subjects1.find(subject => subject=="3E");

        if(myBiologu13E=="3E"){
          const newItem3E = {
            ClassName: "3E"    
          }
          MathsArray.push(newItem3E)
        }


        let myBiologu14E = this.Subjects1.find(subject => subject=="4E");
        if(myBiologu14E=="4E"){
          const newItem4E = {
            ClassName: "4E"    
          }
          MathsArray.push(newItem4E)
        }
        let myBiologu14A = this.Subjects1.find(subject => subject=="4A");

        if(myBiologu14A=="4A"){
          const newItem4A = {
            ClassName: "4A"    
          }
          MathsArray.push(newItem4A)
        }
        let myBiologu14B = this.Subjects1.find(subject => subject=="4B");
  
        if( myBiologu14B =="4B"){
          const newItem4B = {
            ClassName: "4B"    
          }
          MathsArray.push(newItem4B)
        }
        let myBiologu14C = this.Subjects1.find(subject => subject=="4C");

        if(myBiologu14C=="4C"){
          const newItem4C = {
            ClassName: "4C"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu34D= this.Subjects1.find(subject => subject=="4D");
        if(myBiologu34D=="4D"){
          const newItem4C = {
            ClassName: "4D"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu31D = this.Subjects1.find(subject => subject=="1D");
        if(myBiologu31D=="1D"){
          const newItem1D = {
            ClassName: "1D"    
          }
          MathsArray.push(newItem1D)
        }

        let myBiologu31A = this.Subjects1.find(subject => subject=="1A");
        if(myBiologu31A=="1A"){
          const newItem1A = {
            ClassName: "1A"    
          }
          MathsArray.push(newItem1A)
        }
        let myBiologu31B = this.Subjects1.find(subject => subject=="1B");
        if(myBiologu31B=="1B"){
          const newItem1B = {
            ClassName: "1B"    
          }
          MathsArray.push(newItem1B)
        }

        let myBiologu31C = this.Subjects1.find(subject => subject=="1C");
        if(myBiologu31C=="1C"){
          const newItem1C = {
            ClassName: "1C"    
          }
          MathsArray.push(newItem1C)
        }

        let myBiologu31E = this.Subjects1.find(subject => subject=="1E");
        if(myBiologu31E=="1E"){
          const newItem1E = {
            ClassName: "1E"    
          }
          MathsArray.push(newItem1E)
        }


        this.MathsArray= MathsArray
        console.log(this.MathsArray)
        
        if(this.Number_of_Subjects.length <3){
          const Subject = {
          NameofSubject: "History"
        } 
        this.Number_of_Subjects.push(Subject)
        const newForm ={
          Email: this.Form.Email,
          History:this.MathsArray,
          Number_of_Students: this.Number_of_Subjects
        }
         Axios.post(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveandupdateteacher`, newForm, {
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          if(response.data==="The student is successfully updated")
          this.Success = true
        })
        }
        else{
          this.ClassIsFalse=true
        }

        }



        if(this.Form1==="Chemistry" && this.Subjects1.length !=0){
          const MathsArray = []

          let myBiologu1 = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu1=="2C"){
          const newItem = {
            ClassName: "2C"    
          }
          MathsArray.push(newItem)
          
        }

        let myBiologu12A = this.Subjects1.find(subject => subject=="2A");
        if(myBiologu12A=="2A"){
        const newItem2A = {
            ClassName: "2A"    
          }
          MathsArray.push(newItem2A)
          
        }

        let myBiologu12B = this.Subjects1.find(subject => subject=="2B");

        if(myBiologu12B=="2B"){
          const newItem2B = {
            ClassName: "2B"    
          }
          MathsArray.push(newItem2B)
          
        }

        let myBiologu12C = this.Subjects1.find(subject => subject=="2C");
        if(myBiologu12C=="2C"){
          const newItem2D = {
            ClassName: "2D"    
          }
          MathsArray.push(newItem2D)
        }


        let myBiologu12E = this.Subjects1.find(subject => subject=="2E");
        if(myBiologu12E=="2E"){
          const newItem2E = {
            ClassName: "2E"    
          }
          MathsArray.push(newItem2E)
        }

        let myBiologu13A = this.Subjects1.find(subject => subject=="3A");
        if(myBiologu13A=="3A"){
          const newItem3A = {
            ClassName: "3A"    
          }
          MathsArray.push(newItem3A)
        }

        let myBiologu13B = this.Subjects1.find(subject => subject=="3B");
        if(myBiologu13B =="3B"){
          const newItem3B = {
            ClassName: "3B"    
          }
          MathsArray.push(newItem3B)
        }
        let myBiologu13C = this.Subjects1.find(subject => subject=="3C");

        if(myBiologu13C =="3C"){
          const newItem3C = {
            ClassName: "3C"    
          }
          MathsArray.push(newItem3C)
        }

        let myBiologu13D = this.Subjects1.find(subject => subject=="3D");
        if(myBiologu13D=="3D"){
          const newItem3D = {
            ClassName: "3D"    
          }
          MathsArray.push(newItem3D)
        }

        let myBiologu13E = this.Subjects1.find(subject => subject=="3E");

        if(myBiologu13E=="3E"){
          const newItem3E = {
            ClassName: "3E"    
          }
          MathsArray.push(newItem3E)
        }


        let myBiologu14E = this.Subjects1.find(subject => subject=="4E");
        if(myBiologu14E=="4E"){
          const newItem4E = {
            ClassName: "4E"    
          }
          MathsArray.push(newItem4E)
        }
        let myBiologu14A = this.Subjects1.find(subject => subject=="4A");

        if(myBiologu14A=="4A"){
          const newItem4A = {
            ClassName: "4A"    
          }
          MathsArray.push(newItem4A)
        }
        let myBiologu14B = this.Subjects1.find(subject => subject=="4B");
  
        if( myBiologu14B =="4B"){
          const newItem4B = {
            ClassName: "4B"    
          }
          MathsArray.push(newItem4B)
        }
        let myBiologu14C = this.Subjects1.find(subject => subject=="4C");

        if(myBiologu14C=="4C"){
          const newItem4C = {
            ClassName: "4C"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu34D= this.Subjects1.find(subject => subject=="4D");
        if(myBiologu34D=="4D"){
          const newItem4C = {
            ClassName: "4D"    
          }
          MathsArray.push(newItem4C)
        }

        let myBiologu31D = this.Subjects1.find(subject => subject=="1D");
        if(myBiologu31D=="1D"){
          const newItem1D = {
            ClassName: "1D"    
          }
          MathsArray.push(newItem1D)
        }

        let myBiologu31A = this.Subjects1.find(subject => subject=="1A");
        if(myBiologu31A=="1A"){
          const newItem1A = {
            ClassName: "1A"    
          }
          MathsArray.push(newItem1A)
        }
        let myBiologu31B = this.Subjects1.find(subject => subject=="1B");
        if(myBiologu31B=="1B"){
          const newItem1B = {
            ClassName: "1B"    
          }
          MathsArray.push(newItem1B)
        }

        let myBiologu31C = this.Subjects1.find(subject => subject=="1C");
        if(myBiologu31C=="1C"){
          const newItem1C = {
            ClassName: "1C"    
          }
          MathsArray.push(newItem1C)
        }

        let myBiologu31E = this.Subjects1.find(subject => subject=="1E");
        if(myBiologu31E=="1E"){
          const newItem1E = {
            ClassName: "1E"    
          }
          MathsArray.push(newItem1E)
        }


        this.MathsArray= MathsArray
        console.log(this.MathsArray)
        
        if(this.Number_of_Subjects.length <3){
          const Subject = {
          NameofSubject: "Chemistry"
        } 
        this.Number_of_Subjects.push(Subject)
        const newForm ={
          Email: this.Form.Email,
          Chemistry:this.MathsArray,
          Number_of_Students: this.Number_of_Subjects
        }
        Axios.post(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveandupdateteacher`, newForm, {
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          if(response.data==="The student is successfully updated")
          this.Success = true
        })
        }
        else{
          this.ClassIsFalse=true
        }

        }

      
      }},
      

      
    
      },
    async created(){
        const Email = localStorage.getItem("Email")
        await Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/teacherlogin/${Email}`,{
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          this.Form.Email = response.data.User.Email
          this.StudentName = response.data.User.Name
          this.classOfstudent = response.data.User.className
          this.Form.Password = response.data.User.Password
          this.Number_of_Subjects=response.data.User.Number_of_Students





          
          var Mathes = this.Number_of_Subjects.find(item => item.NameofSubject === "Mathematics");
          const filteredMaths = this.itemSubjects.filter(function(item) {
            return item !== Mathes.NameofSubject
          })
         this.itemSubjects= filteredMaths

          var Accounsts = this.Number_of_Subjects.find(item => item.NameofSubject === "Accounts");
          const filteredItems = this.itemSubjects.filter(function(item) {
            return item !== Accounsts.NameofSubject
          })
          this.itemSubjects= filteredItems
          var Biologyyy = this.Number_of_Subjects.find(item => item.NameofSubject === "Biology");
          const filteredBiology = this.itemSubjects.filter(function(item) {
            return item !== Biologyyy.NameofSubject
          })
          this.itemSubjects= filteredBiology

          var Englishh = this.Number_of_Subjects.find(item => item.NameofSubject === "English");
          const filteredEnglish = this.itemSubjects.filter(function(item) {
            return item !== Englishh.NameofSubject
          })
          this.itemSubjects= filteredEnglish

          var Physicss = this.Number_of_Subjects.find(item => item.NameofSubject === "Physics");
          console.log(Physicss)

          const filteredPhysicss = this.itemSubjects.filter(function(item) {
            return item !== Physicss.NameofSubject
          })
          this.itemSubjects= filteredPhysicss

          var Combined_Science = this.Number_of_Subjects.find(item => item.NameofSubject === "Combined Science");
          console.log(Combined_Science)
          const filterCombined_Science = this.itemSubjects.filter(function(item) {
            return item !== Combined_Science.NameofSubject
          })
          this.itemSubjects= filterCombined_Science

          var Geography = this.Number_of_Subjects.find(item => item.NameofSubject === "Geography");
          const filterGeography = this.itemSubjects.filter(function(item) {
            return item !== Geography.NameofSubject
          })
          this.itemSubjects= filterGeography

          var Agriculturer = this.Number_of_Subjects.find(item => item.NameofSubject === "Agriculture");
          const filterAgriculturer = this.itemSubjects.filter(function(item) {
            return item !== Agriculturer.NameofSubject
          })
          this.itemSubjects= filterAgriculturer

          var Historyy = this.Number_of_Subjects.find(item => item.NameofSubject === "History");
          const filterAHistory = this.itemSubjects.filter(function(item) {
            return item !== Historyy.NameofSubject
          })
          this.itemSubjects= filterAHistory
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
  