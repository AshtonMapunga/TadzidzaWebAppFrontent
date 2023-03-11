<template>
    <v-card
      class="mx-auto mt-8"
      max-width="3700 "
      elevation="0"
    
    >
  <v-card
      elevation="9"
  >
         <h1 style="font-size: 48px;" class="signInHeader">Timetable</h1>
         <v-divider></v-divider>
         
  <template>
            <v-list-item>
              <v-list-item-action>
                <v-icon style="color: #303F9F">mdi-home-circle</v-icon>
              </v-list-item-action>
  
              <v-list-item-content>
                <v-list-item-title style="color: #303F9F">Teacher's class: {{className}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          <v-list-item   class="justify-end">
  <template>
  <br>
  <table id="customers">
    <tr >
      <th style="font-weight: bold; font-size: 12px;">DAY</th>
      <th style="font-size: 11px;">07:30 - 08:00</th>
      <th style="font-size: 11px;">08:00 - 08:30</th>
      <th style="font-size: 11px;">08:30 - 09:00</th>
      <th style="font-size: 11px;">09:00 - 09:30</th>
      <th style="font-size: 11px;">09:30 - 10:00</th>
      <th style="font-size: 11px;">10:00 - 10:30</th>
      <th style="font-size: 11px;">10:30 - 11:00</th>
      <th style="font-size: 11px;">11:00 - 11:30</th>
      <th style="font-size: 11px;">11:30 - 12:00</th>
      <th style="font-size: 11px;">12:00 - 12:30</th>
      <th style="font-size: 11px;">12:30 - 13:00</th>
      <th style="font-size: 11px;">13:00 - 13:30</th>
      <th style="font-size: 11px;">13:30 - 14:00</th>
    </tr>
    <tr >
      <td style="font-weight: bold;"> MON</td>
      <td v-for="(MondaySub, i) in Monday" :key="i">{{MondaySub.Subject}}</td>
    </tr>
    <tr >
      <td style="font-weight: bold;"> Tue</td>
      <td v-for="(TuesdaySub, i) in Tuesday" :key="i">{{TuesdaySub.Subject}}</td>
    </tr>    <tr >
      <td style="font-weight: bold;"> Wed</td>
      <td v-for="(WednesdaySub, i) in Wednesday" :key="i">{{WednesdaySub.Subject}}</td>
    </tr>
    <tr >
      <td style="font-weight: bold;"> Thu</td>
      <td v-for="(ThursdaySub, i) in Thursday" :key="i">{{ThursdaySub.Subject}}</td>
    </tr>
    <tr >
      <td style="font-weight: bold;"> Fri</td>
      <td v-for="(FridaySub, i) in Friday" :key="i">{{FridaySub.Subject}}</td>
    </tr>
  </table>
   
  </template>
  
            </v-list-item>           
      <br>
  </template>
  <router-link to="/student-account" >
         <v-btn
         style="width:98%"
         class="btn btn-block btn-success ml-3"
           dark   
           color="green"
         >
           Update Timetable
         </v-btn>    
       </router-link>
       <p></p>
       <router-link to="/teachers-home">
         <v-btn
         class="btn btn-lg btn-block btn ml-3"
         style="width:98%"
           dark   
           color="indigo darken-2"
         >
           Back
         </v-btn>    
       </router-link>
       <br>
       <br>
  </v-card>
  
    </v-card>
    
  </template>
  <script>
    import Axios from 'axios';
  
    export default {
      data: () => ({      
        show: false,
         dialog: false,
         Subjects:false,
          dialogs: false,
          Allfees:[],
          Monday:[],
          Tuesday:[],
          Wednesday:[],
          Thursday:[],
          Friday:[],

          ClosedBalance:"",
          DateofCB: "",
          Nameoftudents: "",
          className: "",
          EmailofStudent: "",
          MondaySubjets:[
            "Mat","Mat","Mat","Mat","Mat","Mat","Mat","Mat","Mat","Mat","Mat","Mat","Mat","Mat","Mat"
          ]
      }),
      methods:{
        findSubject(){
          
        }
  
      },
    async created(){

        const Email = localStorage.getItem("Email")
        const response =await Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/teacherlogin/${Email}`,{
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } )
        console.log(response)
          this.className=response.data.User.className
   
          console.log(this.className)
          const newFormForm = {
            ClassName: this.className
          }
          Axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/TimeTable/findone', newFormForm)
        .then( (response)=>{
          console.log(response.data.User.ClassName)
          this.Monday = response.data.User.Monday
          this.Tuesday = response.data.User.Tuesday
          this.Wednesday = response.data.User.Wednesday
          this.Thursday = response.data.User.Thursday
          this.Friday = response.data.User.Friday
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
    padding: 1px;
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
  