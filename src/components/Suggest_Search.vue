<template>
    <v-card
      class="mx-auto mt-12"
      max-width="3700"
      style="border-radius: 25px; background-color:   rgb(251, 251, 253);"
      elevation="0"
    >
      <v-card-text color="indigo darken-2" >
        <p id="Name" class="text-h3" >
        School Search Suggestion    
        </p>
                <v-container class="mt-12" justify="center">
              <v-row justify="center">
                 <v-col
                 cols="12"
                sm="3"
                justify="center"
                class="hoverComponent"

                >
               <v-icon class="d-flex justify-content-center" color="indigo darken-2" style="font-size:100px">mdi-school</v-icon><br>
               <router-link to="/SearchTeacher"    class="hoverComponent" style="color:white">
               <v-btn
            class=" btn btn-lg btn-block"
          dark   
          color="indigo darken-2"
            >
              Search Teacher
            </v-btn>              
           </router-link>
  
      </v-col>
                <v-col
                cols="12"
                sm="3"
                justify="center"
                class="hoverComponent"
                >

                <v-icon class="d-flex justify-content-center" color="indigo darken-2" style="font-size:100px">mdi-human-child</v-icon><br>
                <router-link to="/SearchStudent" style="color:white">

                <v-btn
            class=" btn btn-lg btn-block"
          dark   
          color="indigo darken-2"
            >
              Search Student
            </v-btn>    
          </router-link> 
       </v-col>
              </v-row>
            </v-container>
            <p class="ml-5">
                <router-link to="/admi-home">
          <v-btn
            class="ml-12"    
            dark   
            color="indigo darken-2"
          > 
            Back
          </v-btn>    
        </router-link>
            </p>
            
      </v-card-text>
    
    </v-card>
  </template>
  <script>
    import Axios from 'axios';
  export default {
    data() {
      return {
        full_name:''
      }
    },
    methods: {
    },  
    async created(){
        const Email = localStorage.getItem("Email")
        await Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/studentlogin/${Email}`,{
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          this.full_name=response.data.User.full_name
        })
  
    }
  }
  </script>
  
  
  <style scoped>
    .myname{
      color: rgb(251, 251, 253);
    }
    #Name{
      color: #303F9F;
      text-decoration-line: underline;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      text-align: center;
    }
    .heading{
      background-color:  #303F9F;
      color: white;
      width: 110px;
      font-size: 20px;
      height: 35px;
      border-radius: 8px;
    }
    .heading2{
      background-color:  #303F9F;
      color: white;
      width: 100px;
      font-size: 20px;
      height: 43px;
      border-radius: 8px;
    }
    .hoverComponent:hover{
      background-color: #C5CAE9;
      border-radius: 15px;
    }
  </style>