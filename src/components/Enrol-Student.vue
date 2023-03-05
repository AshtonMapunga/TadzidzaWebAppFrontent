<template>
  <v-card elevation="0">
    <v-card v-show="Forbidden" elevation="0">
      <h1 style="text-align:center">You are not authorized to use this page</h1>
    </v-card>
    <v-card
    v-show="!Forbidden"
      elevation="13"
      class="mx-auto"
      max-width="644"
      style="margin-top: 40px;"  >
     <h1 class="signInHeader">Enrol First Year Students</h1>
         <v-divider></v-divider>
  <template>
    <v-card v-show="!noEnrolment">
      <v-card class="mr-4 ml-4 mt-4" color="indigo darken-2" dark>There is no students to be enroled</v-card>
    <br>
    <router-link to="/admi-home">
          <v-btn
            class="ml-4"    
            dark   
            color="indigo darken-2"
          >
            Back
          </v-btn>    
        </router-link>
        <br>
    </v-card>
    <v-card v-show="Success">
      <v-card class="mr-4 ml-4 mt-4" color="indigo darken-2" dark>You have successfully enroled first year students</v-card>
    <br>  
    <router-link to="/admi-home">
          <v-btn
            class="ml-4"    
            dark   
            color="indigo darken-2"
          > 
            Back
          </v-btn>    
        </router-link>
        <br>
    </v-card>
    <v-card elevation="0"     v-show="!Success">
      <v-form
    v-show="noEnrolment"
      ref="form"
      lazy-validation
      class="pa-4 pt-6"
    >
        <v-card class="mt-4 mb-3" color="indigo darken-2" dark>Number of Students to be enrolled is: <span>{{ number_of_students }}</span></v-card>
         <v-text-field
        filled
        v-model="Form.FirstClassName"
        label="Enter Number of Pupil in 1A"
       :rules="PhoneRules"
        type="number"
        required
      ></v-text-field>

      <v-text-field
      filled
        v-model="Form.SecondClassNames"
        label="Enter Number of Pupil in 1B"
       :rules="PhoneRules"
        type="number"
        required
      ></v-text-field>

      <v-text-field
      filled
        v-model="Form.ThirdClassName"
        label="Enter Number of Pupil in 1C"
       :rules="PhoneRules"
        type="number"
        required
      ></v-text-field>

      <v-text-field
      filled
        v-model="Form.FourthClassName"
        label="Enter Number of Pupil in 1D"
       :rules="PhoneRules"
        type="number"
        required
      ></v-text-field>
            
  <template>
     
  </template>
           <v-text-field
      filled
        v-model="Form.FifthClassName"
        label="Enter Number of Pupil in 1E"
       :rules="PhoneRules"
        type="number"
        required
      ></v-text-field>
      <p class="LessThan" v-show="lessThanNoOfStudent">~Students you are trying to enrol  are not equal to the students that have applied*
        <btn
        class="button"
        @click="enrollStudent()"
        dark
      >
        enrol anyway
      </btn>
      </p>
      <p class="MoreThan" v-show="NoSuccess">* please enter a number which is equal or less to the number of students shown above </p>
      <router-link to="/admi-home">
          <v-btn
            class="mr-4"    
            dark   
            color="indigo darken-2"
          >
            Back
          </v-btn>    
        </router-link>
      <v-btn
        color="indigo darken-2"
        class="float-right"
        @click="validate()"
        dark
      >
        Enrol
      </v-btn>

    </v-form>
    </v-card>
    
  </template>
      <v-spacer></v-spacer>
    </v-card>

  </v-card>
  </template>
<script>
  import axios from 'axios'
    export default {
  
      data: () => ({
        Form:{
            FirstClassName:'',
            ThirdClassName:'',
            FourthClassName:'',
            FifthClassName:'',
            SecondClassNames: ''

        },
        NoSuccess: false,
        noEnrolment: true,
        full_name:"",
        Forbidden:false,
        Success: false,
        lessThanNoOfStudent:false,
       ArrayofStudents:[],
       PhoneRules: [
          v => !!v || ' Number of students is required',
        ],
        number_of_students:""
      }),
  
      methods: {
        enrollStudent(){
          const firstClass = parseInt(this.Form.FifthClassName)
          const FierstClass = firstClass -1 
          const Sendd = {
            FirstClassName: FierstClass,
            ThirdClassName: parseInt(this.Form.SecondClassNames),
            FourthClassName: parseInt(this.Form.FirstClassName) ,
            FifthClassName: parseInt(this.Form.FourthClassName),
            SecondClassNames: parseInt(this.Form.ThirdClassName)
           }
           axios.post('http://localhost:5050/get/All/enrolment', Sendd)
          .then( (response)=>{
            console.log(response.data)
            if(response.data=="You have successfully enroled first year students"){
              this.Success=true
            }
            else{
              console.log("An error occured")
            }
          })
        },
       async getEnrolStud(){
          const response = await axios.get(`http://localhost:5050/getEnroled/student`,{
      } )

        this.ArrayofStudents = response.data
        this.number_of_students = this.ArrayofStudents.length
        console.log(this.ArrayofStudents)
        if(this.number_of_students==0){
          this.noEnrolment = false
        }
        },
        validate () {
          if(this.$refs.form.validate()){
           const Sendd = {
            FirstClassName: parseInt(this.Form.FifthClassName),
            ThirdClassName: parseInt(this.Form.SecondClassNames),
            FourthClassName: parseInt(this.Form.FirstClassName),
            FifthClassName: parseInt(this.Form.FourthClassName),
            SecondClassNames: parseInt(this.Form.ThirdClassName)
           }
           const CompareEnrolledStudentToEnrolled = Sendd.FifthClassName+ Sendd.FirstClassName
           + Sendd.ThirdClassName+ Sendd.FourthClassName+ Sendd.SecondClassNames

           if(CompareEnrolledStudentToEnrolled===this.number_of_students){
              this.enrollStudent()
            }else if(CompareEnrolledStudentToEnrolled> this.number_of_students ){
            this.NoSuccess= true
            this.lessThanNoOfStudent= false
           }else{
            this.lessThanNoOfStudent= true
            this.NoSuccess= false

           }
          }
          else{
             console.log("Validation Error")
          }
        },
     
  
      },
      async created(){


        const Email = localStorage.getItem("Email")
        const response =await axios.get(`http://localhost:5050/post/adminlogin/${Email}`,{
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).catch(() => {
           console.log("Forbiden");
           this.Forbidden=true
        })

          this.full_name=response.data.User.full_name
          this.getEnrolStud()
 
  }
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
    .MoreThan{
      font-size: 13px;
      color: red;  
      font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     }
    .LessThan{
      font-size: 13px;
      color: rgb(65, 65, 238);
    }
    .button{
      color: white;
      background: #303F9F;
      border-radius: 5px;
      border: 2px black;
      padding: 2px;

    }
    
    .button:hover{
      color: #303F9F;
      background: grey;
      border-radius: 5px;
      border: 2px;
      border-color: black;
      padding: 2px;

    }
  </style>
  