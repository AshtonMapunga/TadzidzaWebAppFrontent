<template>
    <v-card
      class="mx-auto mt-8"
      max-width="1100 "
      elevation="9"
    
    >
           <h1 style="font-size: 48px;" class="signInHeader">Seach for Teacher</h1>
           
  
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
      v-model="Surname"
      :rules="emailRules"
      label="Enter teacher's surname"
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
    <div v-show="Success" class="ml-4">
      <p style="font-size: 28px;" class="text-danger">The Teacher has been successfully deleted</p> 
    </div>
  
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
                <v-list-item-title style="font-size: 25px; color: #303F9F"> Teacher's Name: <b> {{ Nameoftudents }}</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <br>
            <v-btn class="btn btn-lg btn-block ml-4"
            dark   
            width="97%"
            color="green"
            @click="DeleteStudent()"
          >
            Delete
          </v-btn>   
          <br>
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
        DoesNotExist: " Teacher with such email does not exist! please enter the correct email",  
        show: false,
        NoSuccess:false,
        Success:false,
          ViewClass:true,
       dialog: false,
       Subjects:false,
        dialogs: false,
        Allfees:[],
        ClosedBalance:"",
        DateofCB: "",
        Nameoftudents: "",
        className: "",
        Surname:"",
      Address: '',
      Password: '',
      Phone_number:'',
      ParentName:'',
      ParentNumber:'',
      DateofBirth: '',
        EmailofStudent: "",
        FeesTransaction:[],
          Students:[],
          Email:"",
          emailRules: [
        v => !!v || 'Surname is required'
      ],
      }),
      methods:{

        DeleteStudent(){
            const object ={
            Email: this.Email
        }
    Axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/deleteTeacher', object, {
      headers:{
        Authorization: "Basic " + localStorage.getItem("Tokken")
      }
    } )
    .then( (response)=>{
      if(response.data=="The teacher has been deleted"){
        console.log("vdacjgfjagvwegyrvuggvjvasdjhfvghv")
        this.Success = true
        this.ViewClass=true
      }
      else{
        console.log("An error occured")
      }
    })
        },
        validate(){
            if(this.$refs.form.validate()){

      const Email = this.Surname
        Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/teacherloginName/${Email}`,{
        headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
      } ).then((response)=>{
        console.log( response.data)
        if(response.data === "The Teacher does not exist"){
            this.ViewClass=true
            this.NoSuccess=true
        }
        else{
        this.Nameoftudents = response.data.User.Name
        this.Email = response.data.User.Email

        this.ViewClass=false
        this.NoSuccess=false

        }

      })
        
      

        

  }}

      }
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
  