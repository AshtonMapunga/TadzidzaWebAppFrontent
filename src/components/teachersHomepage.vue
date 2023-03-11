<template>
    <v-card
      class="mx-auto mt-12"
      max-width="3700"
      style="border-radius: 25px; background-color:   rgb(251, 251, 253);"
    >
      <v-card-text color="indigo darken-2">
        <p id="Name" class="text-h4" >
          {{full_name}}
        </p>
        <v-container>
            <v-row>
              <v-col
              cols="12"
                sm="3"
                justify="center"
                class="hoverComponent"

              >
             <v-icon       class="d-flex justify-content-center" color="indigo darken-2" style="font-size:100px">mdi-account</v-icon><br>
        <router-link to="/teachers-account">
          <v-btn
          class=" btn btn-lg btn-block"
          
            dark   
            color="indigo darken-2"
          >
            Account
          </v-btn>    
        </router-link> 
              </v-col>
              <v-col
              class="hoverComponent"
                cols="12"
                sm="3"
              >
                 <v-icon class="d-flex justify-content-center" color="indigo darken-2" style="font-size:100px">mdi-library</v-icon><br>
    <router-link to="/teacher-library">                   
      <v-btn
      class=" btn btn-lg btn-block"
      color="indigo darken-2"
      dark
    >
      Library
    </v-btn> 
  </router-link>
 
                  </v-col>
              <v-col
                cols="12"
                class="hoverComponent"
                sm="3"
              >
             <v-icon class="d-flex justify-content-center" color="indigo darken-2" style="font-size:100px">mdi-cloud</v-icon><br>
             <router-link to="/class-analyse">
          <v-btn
          class=" btn btn-lg btn-block"
            dark   
            color="indigo darken-2"
          >
            Class Analysis
          </v-btn>    
        </router-link>               
                  </v-col>
              <v-col
                cols="12"
                class="hoverComponent"
                sm="3"

              >
             <v-icon class="d-flex justify-content-center" color="indigo darken-2" style="font-size:100px">mdi-pencil-box-outline</v-icon><br>
                   <router-link class="d-flex justify-content-center" to="/subjectsandclasses">
          <v-btn
          class=" btn btn-lg btn-block"
            dark   
            color="indigo darken-2"
          >
            Subjects & Classes
          </v-btn>    
        </router-link>               
    </v-col>
            <v-col
            justify="center"
                cols="12"
                class="hoverComponent"
                sm="3"
              >
             <v-icon class="d-flex justify-content-center" color="indigo darken-2" style="font-size:100px">mdi-clipboard-outline</v-icon><br>
        <router-link class="d-flex justify-content-center" to="/enter-results">
          <v-btn
          class=" btn btn-lg btn-block"
            dark   
            color="indigo darken-2"
          >
            Results
          </v-btn>    
        </router-link> 
            
    </v-col>
                            <v-col
                            class="hoverComponent"
                cols="12"
                sm="3"
              >
             <v-icon class="d-flex justify-content-center" color="indigo darken-2" style="font-size:100px">mdi-clock-in</v-icon><br>
            <router-link class="d-flex justify-content-center" to="/addTimetable">
          <v-btn
          class=" btn btn-lg btn-block"
            dark   
            color="indigo darken-2"
          >
            Add Timetable
          </v-btn>    
        </router-link>
    </v-col>
                            <v-col
                            class="hoverComponent"
                cols="12"
                sm="3"
              >
             <v-icon class="d-flex justify-content-center" color="indigo darken-2" style="font-size:100px">mdi-message-text-outline</v-icon><br>
         <router-link to="/teachersChat">
          <v-btn
          class=" btn btn-lg btn-block"
          
            dark
            color="indigo darken-2"
          >
            Chat Room
          </v-btn>              
         </router-link>

    </v-col>
              <v-col
                cols="12"
                class="hoverComponent"
                sm="3"
              >
             <v-icon class="d-flex justify-content-center" color="indigo darken-2" style="font-size:100px">mdi-clipboard-text</v-icon><br>
             <router-link to="/teacher-View-Notice">
          <v-btn
          class="btn btn-lg btn-block"
          
            dark   
            color="indigo darken-2"
          >
            Notice Board
          </v-btn>    
        </router-link> 
     </v-col>
            </v-row>
          </v-container>
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
       await Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/teacherlogin/${Email}`,{
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          this.full_name=response.data.User.Name
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