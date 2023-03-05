<template>
  <v-card
    class="mx-auto mt-8"
    max-width="1100"
    elevation="0"
  
  >         

<v-card
    elevation="9"
    max-width="1000"
    style="padding: 15px;"
>

<h1 style="font-size: 48px;" class="signInHeader">Enter Results</h1>

       <v-divider></v-divider>
       
    <v-card  class="ml-4 ml-4">
      <v-col
                cols="12"
                sm="12"
              >
                <v-autocomplete
                  :items="['2A', '2B', '2C', '2F', '2D', '2E', '3B', '3C', '3D']"
                  label="Enter Class"       
                  v-model="Form.className"           
                ></v-autocomplete>
              </v-col>
                            <v-col
                cols="12"
                sm="12"
                class="mr-4"
              >
                <v-autocomplete
                  :items="['Maths', 'Accounts', 'English','Biology', 'History', 'Shona', 'Physics', 'CombinedScience', 'Geography', 'Agriculture', 'History']"
                  label="Subject"
                  v-model="Form.subjectName"           
                ></v-autocomplete>
              </v-col>
                            <v-col
                cols="12"
                sm="12"
              >
                    <v-btn
                    depressed
                    color="green"
                    class="btn btn-lg btn-block btn btn-success"
                    dark
                    @click="Viewclass()"
                    
                    >
                    Edit Class
                    </v-btn>
              </v-col>
          <v-list-item v-show="!ViewClass">
            <v-list-item-action>
              <v-icon style="font-size: 30px; color: #303F9F;">mdi-home-circle</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title style="font-size: 25px; color: #303F9F"> CLASS : 2A</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <br>
<template>
<br>
<v-table>
  <table id="customers" v-show="!ViewClass" class="ml-4">
  <tr>
    <th>Names</th>
    <th>Email</th>
    <th colspan="2">Add results </th>
  </tr>
  <tr v-for="Student in Students" :key="Student.Email">
    <td>{{Student.full_name}}</td>
    <td>{{Student.Email}}</td>

    <td> 
<v-text-field
      type="number"
      label=""
      hide-details="auto"
      v-model="Student.Input"
    ></v-text-field>    </td>
    <td>           
       <v-btn 
       v-if="Student.showBtn"
      small
      color="indigo darken-2"
      dark
      @click="SaveResults(Student)"
      class="ml-4"
    >
      Save
    </v-btn>
    <v-icon class="ml-4" color="primary" v-show="Student.showCheckbox">mdi-checkbox-marked</v-icon>
  </td>

  </tr>

</table>
</v-table>
 
</template>

          <br>
<template>
  <v-row class="ml-0">
    <v-dialog
      v-model="dialogs"
      persistent
      max-width="290"
    >

      <v-card>
        <v-card-title class="text-h5">
            You have successfully save the class results
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            dark
            text
            @click="dialogs = false"
          >
            Close
          </v-btn>
 
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<br>
    </v-card>
<div style="padding: 10px;">
  <router-link to="/teachers-home">
          <v-btn
          class="btn btn-lg btn-block btn btn-success ml-2"
            dark   
            color="indigo darken-2"
          >
            Back
          </v-btn>    
        </router-link>
</div>
    <br>

</v-card>

  </v-card>
  
</template>
<script>
    import axios from 'axios';

  export default {
    data: () => ({      
      Form:{
        className:'',
        subjectName:'',
},
      Students:[],
      show: false,
       dialog: false,
       Subjects:false,
        dialogs: false,
        ViewClass: true,
        showBtn:true,
        showCheckbox:false



    }),
    methods:{
      Viewclass(){
        axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/addsubject/findStudents', this.Form,{
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
 
        )
        .then( (response)=>{
          console.log(response.data)
          this.Students = response.data
          console.log(this.Students)
          console.log(this.Form)

        })

        return this.ViewClass=false

      },
      SaveResults(Student){
        console.log(this.Form.subjectName)
        const  subjectName = this.Form.subjectName
        if(subjectName=="Accounts"){
          axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveoneresults', {Email : Student.Email, 
            Accounts: Student.Input}, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          console.log(response.data)          
        })
       Student.showBtn = false
       Student.showCheckbox = true
        }
        if(subjectName=="CombinedScience"){
          axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveoneresults', {Email : Student.Email, 
            CombinedScience: Student.Input}, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          console.log(response.data)          
        })
       Student.showBtn = false
       Student.showCheckbox = true
        }


        if(subjectName=="Maths"){
          axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveoneresults', {Email : Student.Email, 
            Maths: Student.Input}, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          console.log(response.data)          
        })
       Student.showBtn = false
       Student.showCheckbox = true
        }

        if(subjectName=="Geography"){
          axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveoneresults', {Email : Student.Email, 
            Geography: Student.Input}, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          console.log(response.data)          
        })
       Student.showBtn = false
       Student.showCheckbox = true
        }

        if(subjectName=="Biology"){
          axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveoneresults', {Email : Student.Email, 
            Biology: Student.Input}, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          console.log(response.data)          
        })
       Student.showBtn = false
       Student.showCheckbox = true
        }

        if(subjectName=="Physics"){
          axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveoneresults', {Email : Student.Email, 
            Physics: Student.Input}, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          console.log(response.data)          
        })
       Student.showBtn = false
       Student.showCheckbox = true
        }

        if(subjectName=="Agriculture"){
          axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveoneresults', {Email : Student.Email, 
            Agriculture: Student.Input}, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          console.log(response.data)          
        })
       Student.showBtn = false
       Student.showCheckbox = true
        }

        if(subjectName=="English"){
          axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveoneresults', {Email : Student.Email, 
            English: Student.Input}, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          console.log(response.data)          
        })
       Student.showBtn = false
       Student.showCheckbox = true
        }

        if(subjectName=="English"){
          axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveoneresults', {Email : Student.Email, 
            English: Student.Input}, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          console.log(response.data)          
        })
       Student.showBtn = false
       Student.showCheckbox = true
        }


        if(subjectName=="English"){
          axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveoneresults', {Email : Student.Email, 
            English: Student.Input}, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          console.log(response.data)          
        })
       Student.showBtn = false
       Student.showCheckbox = true
        }


        if(subjectName=="History"){
          axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveoneresults', {Email : Student.Email, 
            History: Student.Input}, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          console.log(response.data)          
        })
       Student.showBtn = false
       Student.showCheckbox = true
        }

        if(subjectName=="English"){
          axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/saveoneresults', {Email : Student.Email, 
            English: Student.Input}, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          console.log(response.data)          
        })
       Student.showBtn = false
       Student.showCheckbox = true
        }

      }

    }
  }
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 97%;
  position: inherit;
  table-layout: fixed;
  margin-right: 10px;

}

#customers td, #customers th {
  border: 1px solid #7986CB;
  position: inherit;
  padding: 1px;
  font-size: 18px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #C5CAE9;}

#customers th {

  text-align: center;
  background-color: #283593;
  color: white;
}
</style>
