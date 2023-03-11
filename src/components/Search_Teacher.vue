<template>
    <v-card
      class="mx-auto mt-8"
      max-width="1100 "
      elevation="9"
    
    >
           <h1 style="font-size: 48px;" class="signInHeader">Seach for student</h1>
           
  
  <v-card
      elevation="0"
  >
  
     <legend  class="reset">
  
      </legend>
  
        <v-list-item    
        > <v-row>
          
          <v-col
                  cols="12"
                  sm="6"
                >
                <v-form 
                ref="form"
               lazy-validation
                class="pa-4 pt-6"
                >
                  <v-text-field
    filled
      v-model="NameofTeacher"
      :rules="emailRules"
      label="Enter Surname"
      required
    ></v-text-field>
                </v-form>
  
                </v-col>
                              <v-col
                  cols="12"
                  sm="6"
                >
                      <v-btn
                      depressed
                      color="indigo darken-2"
                      class="btn btn-lg btn-block mt-10"
                      dark
                      @click="validate()"
                      >
                      Search
                      </v-btn>
                </v-col>
        </v-row>
            </v-list-item>
         <v-divider></v-divider>
         
  <template>
    <div v-show="NoSuccess" class="ml-4">
      <p style="font-size: 28px;" class="text-danger">{{ DoesNotExist }}</p>
    </div>
  
    <div v-show="!ViewClass">
          <template>
            <v-list-item>
              <v-list-item-action>
                <v-icon style="font-size: 30px; color: #303F9F">mdi-account</v-icon>
              </v-list-item-action>
  
              <v-list-item-content>
                <v-list-item-title style="font-size: 25px; color: #303F9F"> Student's Name: <b> {{ Nameoftudents }}  {{ Surname }}</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  <template>
  <br>

  
  <table id="customers">
  
 

  <tr v-bind:class="MathsSuccess" >
    <td style="width: 35%;">Address </td>
    <td>{{ Address }}</td>
  </tr>

  <tr v-bind:class="AccountshSuccess" >
    <td>Email</td>
    <td>{{ Email }}</td>
  </tr>
  <tr v-bind:class="Success">
    <td >Phone Number</td>
    <td>{{ Phone_number }}</td>
  </tr>
  <tr>
    <th colspan="1">Subjects</th>
    <th colspan="1">Classes</th>

  </tr>
  <tr v-show="BiologyTrue">
    <td style="padding-left: 20px;">Biology</td>
    <td> <span  v-for="(Bio, i) in Biology" :key="i">{{ Bio.ClassName }},   </span> </td>
  </tr>
  <tr v-show="GeographTrue">
    <td style="padding-left: 20px;">Geography</td>
    <td> <span  v-for="(Geo, i) in Geography" :key="i">{{ Geo.ClassName }},   </span> </td>
  </tr>
  <tr v-show="AccountsTrue">
    <td style="padding-left: 20px;">Accounts</td>
    <td> <span  v-for="(Accountss, i) in Accounts" :key="i">{{ Accountss.ClassName }},   </span> </td>
  </tr>
  <tr v-show="ScienceTrue">
    <td style="padding-left: 20px;">Combined Science</td>
    <td> <span  v-for="(Sciences, i) in Science" :key="i">{{ Sciences.ClassName }},   </span> </td>
  </tr>
  <tr v-show="EnglishTrue">
    <td style="padding-left: 20px;">English</td>
    <td> <span  v-for="(Englissh, i) in English" :key="i">{{ Englissh.ClassName }},   </span> </td>
  </tr>
  <tr v-show="MathseTrue">
    <td style="padding-left: 20px;">Mathematics</td>
    <td> <span  v-for="(Mathss, i) in Maths" :key="i">{{ Mathss.ClassName }},   </span> </td>
  </tr>
  <tr v-show="BiologyTrue">
    <td style="padding-left: 20px;">Biology</td>
    <td> <span  v-for="(Biologyy, i) in Biology" :key="i">{{ Biologyy.ClassName }},   </span> </td>
  </tr>
  <tr v-show="PhysicsTrue">
    <td style="padding-left: 20px;">Physics</td>
    <td> <span  v-for="(Physicss, i) in Physics" :key="i">{{ Physicss.ClassName }},   </span> </td>
  </tr>
  <tr v-show="ChemistryTrue">
    <td style="padding-left: 20px;">Chemistry</td>
    <td> <span  v-for="(Chemistrry, i) in Chemistry" :key="i">{{ Chemistrry.ClassName }},   </span> </td>
  </tr>  <tr v-show="AgricultureTrue">
    <td style="padding-left: 20px;">Agriculture</td>
    <td> <span  v-for="(Agricultures, i) in Agriculture" :key="i">{{ Agricultures.ClassName }},   </span> </td>
  </tr>

  <tr v-show="HistoryTrue">
    <td style="padding-left: 20px;">History</td>
    <td> <span  v-for="(Historryy, i) in History" :key="i">{{ Historryy.ClassName }},   </span> </td>
  </tr>


</table>
  </template>
          </template>
      </div>
      <br>
            <router-link to="/SuggestSearch">
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
        DoesNotExist: "Teacher with such name does not exist! please enter the correct name",  
        show: false,
        NoSuccess:false,
        ViewClass:true,
       dialog: false,
       Subjects:false,
        dialogs: false,
        Name: '',
      Address: '',
      Email: '',
      className:'',
      Password: '',
      Phone_number:'',
      Maths:[],
      Surname:'',
      English:[],
      CombinedScience:[],
      Accounts:[],
      History:[],
      Agriculture:[],
      Physics:[],
      Chemistry:[],
      Biology:[],
      Geography:[],
      Science:[],
      ScienceTrue: true,
      GeographTrue: true,
      PhysicsTrue: true,
      AgricultureTrue: true,
      BiologyTrue: true,
      AccountsTrue: true,
      MathseTrue: true,
      EnglishTrue: true,
      HistoryTrue: true,
      ChemistryTrue: true,
      NameofTeacher:"",
          emailRules: [
        v => !!v || 'Name is required'
      ],
      }),
      methods:{
        validate(){
            if(this.$refs.form.validate()){
                const Email = this.NameofTeacher
                Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/teacherloginName/${Email}`,{
        headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
      } ).then((response)=>{
        console.log( response.data)
        if(response.data === "The Teacher does not exist"){
          console.log("error sqdSa ")
            this.ViewClass=true
            this.NoSuccess=true
        }
        else{
            this.ViewClass=false
        this.NoSuccess=false
            
        console.log( response.data)
        this.Name=response.data.User.Name
        this.Address=response.data.User.Address
        this.Email=response.data.User.Email
        this.className=response.data.User.className
        this.Phone_number=response.data.User.Phone_number
        this.Surname=response.data.User.Surname

        this.Maths=response.data.User.Maths
        this.English=response.data.User.English
        this.Science=response.data.User.CombinedScience
        this.Geography=response.data.User.Geography
        this.Physics=response.data.User.Physics
        this.Biology=response.data.User.Biology
        this.Accounts=response.data.User.Accounts
        this.History=response.data.User.History
        this.Biology=response.data.User.Biology
        this.Chemistry=response.data.User.Chemistry

        console.log(this.className)
        console.log(this.Science)
        if(this.Geography.length ===0){
          this.GeographTrue= false
        }
        if(this.Biology.length === 0){
          this.BiologyTrue = false
        }

        if(this.Science.length === 0){
          this.ScienceTrue = false
        }
        if(this.Accounts.length === 0){
          this.AccountsTrue = false
        }
        if(this.History.length === 0){
          this.HistoryTrue = false
        }
        if(this.Maths.length === 0){
          this.MathseTrue = false
        }
        if(this.Physics.length === 0){
          this.PhysicsTrue = false
        }
        if(this.Agriculture.length === 0){
          this.AgricultureTrue = false
        }
        if(this.English.length === 0){
          this.EnglishTrue = false
        }
        if(this.Chemistry.length === 0){
          this.ChemistryTrue = false
        }
        console.log(this.Physics.length)
        }
      })
    

        

  }}}

      }
    
  </script>
  
  <style scoped>
  #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 97%;
    margin-left: 18px;
    font-size: 11px;
  
  }
  
  #customers td, #customers th {
    border: 1px solid #7986CB;
    padding: 8px;
    font-size: 11px;
  }
  
  #customers tr:nth-child(even){background-color: #f2f2f2;}
  
  #customers tr:hover {background-color: #C5CAE9;}
  
  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #283593;
    color: white;
  }
  </style>
  