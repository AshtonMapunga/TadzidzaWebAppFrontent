<template>
  <div>
  <div v-show="NotAuthorized" elevation="0">
      <h1 style="text-align:center"><i>You are not authorized to use this page</i></h1>
    </div>
    <v-card
    v-show="!NotAuthorized"
      class="mx-auto mt-8"
      max-width="3700"
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
                <v-list-item-title style="color: #303F9F">Class: {{className}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          <v-list-item   class="justify-end">
  <template>
    
  <template >
       
       <v-card     elevation="0" max-width="3700" class="ml-5 mr-5" v-show="Success">
  
        <div class="mr-3 ml-3">
          <br>
         <h2 class="text-success"> <i>Time Table of your class does not exist please consult your teacher about this issue in the chat room <section></section></i> </h2>
         <br>
         <br>
       <router-link to="/chatschool" >
         <v-btn
         class="btn btn-block btn-success"
           dark   
           color="green"
         >
           Chat Room
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
        </div>
       
       <br>
       <br>
       </v-card>
      
   </template>
  <br>
  <table id="customers" v-show="!Success">
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
 
       <p></p>
       <router-link to="/sudent-home" v-show="!Success">
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
</div>
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
          NotAuthorized: false,
          ClosedBalance:"",
          DateofCB: "",
          ViewClass: true,
        showBtn:true,
        Success: false,
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
        await Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/studentlogin/${Email}`,{
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } ).then((response)=>{
          this.className=response.data.User.className
          const full_name=response.data.User.full_name
          if(full_name===null){
            this.NotAuthorized=true
          }
        })


          const newFormForm = {
            ClassName: this.className
          }
        await Axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/TimeTable/findone', newFormForm)
        .then((Response)=>{
          
        if(Response.data==="The class does not exist"){
            this.Success=true
        }
        console.log(Response.data)
        console.log(Response.data.User.Monday)
        this.Monday = Response.data.User.Monday
        this.Wednesday = Response.data.User.Wednesday
        this.Tuesday = Response.data.User.Tuesday
        this.Thursday = Response.data.User.Thursday
        this.Friday = Response.data.User.Friday
        if(Response.data==="The class does not exist"){
            this.Success=true
        }
        })
        // .then( (response)=>{
        //     console.log(response.data)
        //   const ClassStudent = response.data.User.ClassName
        //   this.Monday = response.data.User.Monday
        //   console.log(ClassStudent)
        //   this.Tuesday = response.data.User.Tuesday
        //   this.Wednesday = response.data.User.Wednesday
        //   this.Thursday = response.data.User.Thursday
        //   this.Friday = response.data.User.Friday
        //   if(response.data=="The class does not exist"){
        //     this.Success=true
        //   }
        // })

  
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
  