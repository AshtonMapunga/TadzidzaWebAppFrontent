<template>
    <v-card
      elevation="13"
      class="mx-auto"
      max-width="944"
      style="margin-top: 40px;"  >
     <h1 class="signInHeader">Post a book to the Library</h1>
         <v-divider></v-divider>
  <template>
    <v-form
      ref="form"
      lazy-validation
      class="pa-4 pt-6"

    >
      <v-text-field
      filled
        v-model="Form.Name_Description"
        :rules="Name_DescriptionRules"
        label="Name and Description of the book"
        required
        v-show="!Success"
      ></v-text-field>
  
      <v-text-field
      filled
        v-model="Form.Link"
        :rules="LinkRules"
        label="Enter Link"
        v-show="!Success"
        required
      ></v-text-field>
      <v-autocomplete
                  :items="['Maths', 'Accounts', 'English','Biology', 'History', 'Shona', 'Physics', 'CombinedScience', 'Geography', 'Agriculture', 'History']"
                  label="Subject"
                  filled
                  v-show="!Success"
                  v-model="Form.Subject"           
                ></v-autocomplete>
         <v-text-field
      filled
        v-model="Form.Author"
        label="Name of Author"
       :rules="AuthorRules"
        type="text"
        required
        v-show="!Success"
      ></v-text-field>
        
        <v-autocomplete
          filled
          v-model="Form.Level"
          :rules="LevelRules"
          :items="['O Level', 'ZJC']"
                    label="Choose Level"   
                    v-show="!Success"
                  ></v-autocomplete>
      <v-btn
      v-if="!Success"
        color="indigo darken-2"
        class="mr-4"
        @click="validate()"
        dark
      >
        Add Book
      </v-btn>
      <div v-show="Success">
      <p class="bookheader">Book Details</p>
      <p >Name and Description : <span style="color: #303F9F;">{{Form.Name_Description}}</span> </p>
      <p>Link : <span style="color: #303F9F;"> {{Form.Link}}</span> </p>
      <p>Author: <span style="color: #303F9F;"> {{Form.Author}}</span> </p>
      <p>Subject: <span style="color: #303F9F;"> {{Form.Subject}}</span> </p>
      <p>Level: <span style="color: #303F9F;"> {{Form.Level}}</span> </p>
      </div>
      <p class="signInFooter" v-show="Success"> * Book successfully saved </p>
      <p class="signInFooter" v-show="NotSuccess"> * Link of the Book Already exist </p>
      <router-link to="/teacher-library">
        <v-btn
      v-if="Success"
        color="indigo darken-2"
        class="mr-4"
        @click="validate()"
        dark
      >
 
        Back
      </v-btn>
      </router-link>

    </v-form>
  </template>
      <v-spacer></v-spacer>
    </v-card>
  </template>
  <script>
  import axios from 'axios'
    export default {
  
      data: () => ({
        Form:{
  
        Name_Description: '',
        Link: '',
        Subject: '',
        Author:'',
        Level: '',
        ShowBook:true

        },
        LinkRules: [
          v => !!v || 'Link is required',
        ],
        SubjectRules: [
          v => !!v || 'Subject is required',
        ],
 
        AuthorRules: [
          v => !!v || 'Author is required',
        ],
        Name_DescriptionRules: [
          v => !!v || 'Name is required',
        ],
        LevelRules:[
          v => !!v || 'Level is required',
        ],
        checkbox: false,
        menu: false,
        date:'',
        AlreadyExist:false,
        Success:false,
        NotSuccess:false
      }),
  
      methods: {
        validate () {
          if(this.$refs.form.validate()){
            axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/post/library', this.Form,{
                headers:{
                Authorization: "Basic " + localStorage.getItem("Tokken")
              }
              })
              .then( (response)=>{
                console.log(response.data)
                if(response.data == "The Book is successfully saved"){
                  this.Success= true
                }
                if(response.data == "The Book already exist"){
                  this.NotSuccess= true
                }
          else{
            this.Danger = true
          }
    })
          }
          else{
             console.log("Validation Error")
          }
        },
     
  
      },
    }
  </script>
  <style scoped>
  .signInHeader{
      color: #303F9F;
      text-align: center;
  }
  .signInFooter{
    font-size: 20px;
    color: #303F9F;
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
    .bookheader{
      font-size: 23px;
      font-weight: bolder;
      text-align: center;
      text-decoration-line: underline;
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
  