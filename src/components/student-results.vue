<template>
  <v-card
    class="mx-auto mt-8"
    max-width="1100 "
    elevation="0"
  
  >
<v-card
    elevation="9"
>

   <legend  class="reset">

    </legend>

      <v-list-item>
            <v-list-item-icon>
      <v-icon style="font-size: 35px;">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="font-size: 30px;" >        {{full_name}}
            </v-list-item-title>
          </v-list-item>
       <v-divider></v-divider>
       
<template>

    <v-card>
      <v-list>
        <template>
          <div  class="float-left">
            <v-list-item>
            <v-list-item-action>
              <v-icon style="color: #303F9F">mdi-calendar</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title style="color: #303F9F"> Year: {{yyyy}} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </div>
          <div  class="float-right">
            <v-list-item>
            <v-list-item-action>
              <v-icon style="color: #303F9F">mdi-clock</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title style="color: #303F9F"> Term : {{ Term }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>   
          </div>
          <br>
          <v-divider></v-divider>
                 <h1 style="font-size: 24px; margin-top: 5px" class="signInHeader" v-show="!NoResults">RESULTS</h1>
<template>
  <v-card class="ml-5 mr-5" elevation="0" v-show="NoResults">
        <br>
          <h3 style="color: #303F9F"> <i>Results are not yet out please make sure you have registered your subjects</i> </h3>
          <br>
        <router-link to="/student-account" >
          <v-btn
          class="btn btn-block btn-success"
            dark   
            color="green"
          >
            View Subjects
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
        <br>
        <br>
        </v-card>
       

<table id="customers" v-show="!NoResults">
  
  <tr>
    <th>Suject</th>
    <th>Grade</th>
    <th>Teacher's Comment</th>
  </tr>
  <tr v-bind:class="MathsSuccess" >
    <td>Maths</td>
    <td>{{MathsGrade}}</td>
    <td>{{MathsComment}}</td>
  </tr>
  <tr v-bind:class="AccountshSuccess" >
    <td>Accounts</td>
    <td>{{AccountsGrade}}</td>
    <td>{{AccountsComment}}</td>
  </tr>
  <tr v-bind:class="Success">
    <td >English</td>
    <td>{{EnglishGrade}}</td>
    <td>{{EnglishComment}}</td>
  </tr>
  <tr v-bind:class="HistorySuccess">
    <td>History</td>
    <td>{{HistoryGrade}}</td>
    <td>{{HistoryComment}}</td>

  </tr>
  <tr v-bind:class="PhysicsSuccess">
    <td>Physics</td>
    <td>{{PhysicsGrade}}</td>
    <td>{{PhysicsComment}}</td>

  </tr>
  <tr v-bind:class="BiologySuccess">
    <td>Biology</td>
    <td>{{BiologyGrade}}</td>
    <td>{{BiologyComment}}</td>

  </tr>
  <tr v-bind:class="GeographySuccess">
    <td>Geography</td>
    <td>{{GeographyGrade}}</td>
    <td>{{GeographyComment}}</td>

  </tr>
  <tr v-bind:class="AgricultureSuccess">
    <td>Agriculture</td>
    <td>{{AgricultureGrade}}</td>
    <td>{{AgricultureComment}}</td>
  </tr>
</table>
</template>
        </template>
      </v-list>
    </v-card>
    <br>
    <router-link to="/sudent-home">
    <v-btn
      depressed
      color="primary"
   class="float-right mr-4" >
      Close
    </v-btn></router-link>
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
      EnglishSuccess:'',   
      Term:"",
      yyyy:"",
      MathsSuccess:'',   
      AccountshSuccess:'',   
      CombinedScienceSuccess:'',   
      Success:'',   
      GeographySuccess:'',   
      HistorySuccess:'',   
      AgricultureSuccess:'',   
      PhysicsSuccess:'',   
      NoResults:false,
      BiologySuccess:'',   

      show: false,
       dialog: false,
       Subjects:false,
        dialogs: false,
        full_name:'',
        Maths:"",
        MathsGrade:"",
        MathsComment:"",

        English:"",
        EnglishGrade:"",
        EnglishComment:"",

        CombinedScience:"",
        CombinedScienceGrade:"",
        CombinedScienceComment:"",

        Accounts:"",
        AccountsGrade:"",
        AccountsComment:"",


        Agriculture:"",
        AgricultureGrade:"",
        AgricultureComment:"",
        


        Geography:"",
        GeographyGrade:"",
        GeographyComment:"",

        Biology:"",
        BiologyGrade:"",
        BiologyComment:"",

       

        Physics:"",
        PhysicsGrade:"",
        PhysicsComment:"",

        History:"",
        HistoryGrade:"",
        HistoryComment:""
    }),
    methods:{
      ShowSub(){
        console.log("Hi Zondai")
      }

    },
    async created(){
      const Email = localStorage.getItem("Email")
      await Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/studentlogin/${Email}`,{
        headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
      } ).then((response)=>{
        this.full_name=response.data.User.full_name
        this.Maths = response.data.User.Maths
        this.CombinedScience = response.data.User.CombinedScience
        this.English = response.data.User.English
        this.Physics = response.data.User.Physics
        this.History = response.data.User.History
        this.Accounts = response.data.User.Accounts
        this.Biology = response.data.User.Biology
        console.log(this.Accounts)
        this.Geography = response.data.User.Geography
        this.Agriculture = response.data.User.Agriculture
      })


        // Maths
        if(this.Maths===null){
          this.MathsComment = "Results are not out"
          this.MathsGrade = "----"
        }
        if(this.Maths===1 && this.Maths<=36){
          this.MathsComment = "Failed"
          this.MathsGrade = "U"
          this.MathsSuccess="changetored"
        } if(this.Maths>=37 && this.Maths<=42){
          this.MathsComment = "Failed"
          this.MathsGrade = "E"
          this.MathsSuccess="changetored"
        }
        if(this.Maths>=43 && this.Maths<=49){
          this.MathsComment = "Failed"
          this.MathsGrade = "D"
          this.MathsSuccess="changetored"
        }
        if(this.Maths>=50 && this.Maths<=59){
          this.MathsComment = "Pass with credit"
          this.MathsGrade = "C"
        }
        if(this.Maths>=60 && this.Maths<=69){  
          this.MathsComment = "Pass"
          this.MathsGrade = "B"
        }
        if(this.Maths>=70 && this.Maths<=100){
          this.MathsComment = "Very Good"
          this.MathsGrade = "A"
        }
        if(this.Maths=="null"){
          this.MathsComment = "DNR/DNW"
          this.MathsGrade = "---"
        }
        // English
        if(this.English===null){
          this.EnglishComment = "Results are not out"
          this.EnglishGrade = "----"
        }
        if(this.English===1 && this.English<=36){
          this.EnglishComment = "Failed"
          this.EnglishGrade = "U"
          this.Success="changetored"

        } if(this.English>=37 && this.English<=42){
          this.EnglishComment = "Failed"
          this.EnglishGrade = "E"
          this.Success="changetored"
        }
        if(this.English>=43 && this.English<=49){
          this.EnglishComment = "Failed"
          this.MathsGrade = "D"
          this.Success="changetored"
        }
        if(this.English>=50 && this.English<=59){
          this.EnglishComment = "Pass with credit"
          this.MathsGrade = "C"
        }
        if(this.English>=60 && this.English<=69){  
          this.EnglishComment = "Pass"
          this.EnglishGrade = "B"
        }
        if(this.English>=70 && this.English<=100){
          this.EnglishComment = "Very Good"
          this.EnglishGrade = "A"
        }
        if(this.English=="null"){
          this.EnglishComment = "DNR/DNW"
          this.EnglishGrade = "---"
        }
                // CombinedScience
        if(this.CombinedScience===null){
          this.CombinedScienceComment = "Results are not out"
          this.CombinedScienceGrade = "----"
        }
        if(this.CombinedScience===1 && this.CombinedScience<=36){
          this.CombinedScienceComment = "Failed"
          this.CombinedScienceGrade = "U"
          this.CombinedScienceSuccess="changetored"
        } if(this.CombinedScience>=37 && this.CombinedScience<=42){
          this.CombinedScienceComment = "Failed"
          this.CombinedScienceGrade = "E"
          this.CombinedScienceSuccess="changetored"

        }
        if(this.CombinedScience>=43 && this.CombinedScience<=49){
          this.CombinedScienceComment = "Failed"
          this.CombinedScienceGrade = "D"
          this.CombinedScienceSuccess="changetored"
        }
        if(this.CombinedScience>=50 && this.CombinedScience<=59){
          this.CombinedScienceComment = "Pass with credit"
          this.CombinedScienceGrade = "C"
        }
        if(this.CombinedScience>=60 && this.CombinedScience<=69){  
          this.CombinedScienceComment = "Pass"
          this.CombinedScienceGrade = "B"
        }
        if(this.CombinedScience>=70 && this.CombinedScience<=100){
          this.CombinedScienceComment = "Very Good"
          this.CombinedScienceGrade = "A"
        }
        if(this.CombinedScience=="null"){
          this.CombinedScienceComment = "DNR/DNW"
          this.CombinedScienceGrade = "---"
          this.CombinedScienceSuccess="changetored"

        }
        // Accounts
        if(this.Accounts===null){
          this.AccountsComment = "Results are not out"
          this.AccountsGrade = "----"
        }
        if(this.Accounts===1 && this.Accounts<=36){
          this.AccountsComment = "Failed"
          this.AccountsGrade = "U"
          this.AccountshSuccess="changetored"

        } if(this.Accounts>=37 && this.Accounts<=42){
          this.AccountsComment = "Failed"
          this.AccountsGrade = "E"
          this.AccountshSuccess="changetored"
        }
        if(this.Accounts>=43 && this.Accounts<=49){
          this.AccountsComment = "Failed"
          this.AccountsGrade = "D"
          this.AccountshSuccess="changetored"
        }
        if(this.Accounts>=50 && this.Accounts<=59){
          this.AccountsComment = "Pass with credit"
          this.AccountsGrade = "C"
        }
        if(this.Accounts>=60 && this.Accounts<=69){  
          this.AccountsComment = "Pass"
          this.AccountsGrade = "B"
        }
        if(this.Accounts>=70 && this.Accounts<=100){
          this.AccountsComment = "Very Good"
          this.AccountsGrade = "A"
        }
        if(this.Accounts=='null'){
          this.AccountsComment = "DNR/DNW"
          this.AccountsGrade = "---"
        }

       // Biology
       if(this.Biology===null){
          this.BiologyComment = "Results are not out"
          this.BiologyGrade = "----"
        }
        if(this.Biology===1 && this.Biology<=36){
          this.BiologyComment = "Failed"
          this.BiologyGrade = "U"
          this.BiologySuccess="changetored"
        } if(this.Biology>=37 && this.Biology<=42){
          this.BiologyComment = "Failed"
          this.BiologyGrade = "E"
          this.BiologySuccess="changetored"
        }
        if(this.Biology>=43 && this.Biology<=49){
          this.BiologyComment = "Failed"
          this.BiologyGrade = "D"
          this.BiologySuccess="changetored"
        }
        if(this.Biology>=50 && this.Biology<=59){
          this.BiologyComment = "Pass with credit"
          this.BiologyGrade = "C"
        }
        if(this.Biology>=60 && this.Biology<=69){  
          this.BiologyComment = "Pass"
          this.BiologyGrade = "B"
        }
        if(this.Biology>=70 && this.Biology<=100){
          this.BiologyComment = "Very Good"
          this.BiologyGrade = "A"
        }
        if(this.Biology=="null"){
          this.BiologyComment = "REsults are not out"
          this.BiologyGrade = "---"

        }


       // History
       if(this.History===null){
          this.HistoryComment = "Results are not out"
          this.HistoryGrade = "----"
        }
       if(this.History===1 && this.History<=36){
          this.HistoryComment = "Failed"
          this.HistoryGrade = "U"
          this.HistorySuccess="changetored"
        } if(this.History>=37 && this.History<=42){
          this.HistoryComment = "Failed"
          this.HistoryGrade = "E"
          this.HistorySuccess="changetored"
        }
        if(this.History>=43 && this.History<=49){
          this.HistoryComment = "Failed"
          this.HistoryGrade = "D"
          this.HistorySuccess="changetored"
        }
        if(this.History>=50 && this.History<=59){
          this.HistoryComment = "Pass with credit"
          this.HistoryGrade = "C"
        }
        if(this.History>=60 && this.History<=69){  
          this.HistoryComment = "Pass"
          this.HistoryGrade = "B"
        }
        if(this.History>=70 && this.History<=100){
          this.HistoryComment = "Very Good"
          this.HistoryGrade = "A"
        }
        if(this.History=="null"){
          this.HistoryComment = "DNR/DNW"
          this.HistoryGrade = "---"
          this.HistorySuccess="changetored"

        }
        
       // Physics
       if(this.Physics===null){
          this.PhysicsComment = "Results are not out"
          this.PhysicsGrade = "----"
        }
        if(this.Physics===1 && this.Physics<=36){
          this.PhysicsComment = "Failed"
          this.PhysicsGrade = "U"
          this.PhysicsSuccess="changetored"
        } if(this.Physics>=37 && this.Physics<=42){
          this.PhysicsComment = "Failed"
          this.PhysicsGrade = "E"
          this.PhysicsSuccess="changetored"
        }
        if(this.Physics>=43 && this.Physics<=49){
          this.PhysicsComment = "Failed"
          this.PhysicsGrade = "D"
          this.PhysicsSuccess="changetored"
        }
        if(this.Physics>=50 && this.Physics<=59){
          this.PhysicsComment = "Pass with credit"
          this.PhysicsGrade = "C"

        }
        if(this.Physics>=60 && this.Physics<=69){  
          this.PhysicsComment = "Pass"
          this.PhysicsGrade = "B"
        }
        if(this.Physics>=70 && this.Physics<=100){
          this.PhysicsComment = "Very Good"
          this.PhysicsGrade = "A"
        }
        if(this.Physics=="null"){
          this.PhysicsComment = "DNR/DNW"
          this.PhysicsGrade = "---"
          this.PhysicsSuccess="changetored"

        }
      //Agriculture
        
      if(this.Agriculture===null){
          this.AgricultureComment = "Results are not out"
          this.AgricultureGrade = "----"
        }
        if(this.Agriculture===1 && this.Agriculture<=36){
          this.AgricultureComment = "Failed"
          this.AgricultureGrade = "U"
          this.AgricultureSuccess="changetored"
        } if(this.Agriculture>=37 && this.Agriculture<=42){
          this.AgricultureComment = "Failed"
          this.AgricultureGrade = "E"
          this.AgricultureSuccess="changetored"

        }
        if(this.Agriculture>=43 && this.Agriculture<=49){
          this.AgricultureComment = "Failed"
          this.AgricultureGrade = "D"
          this.AgricultureSuccess="changetored"
        }
        if(this.Agriculture>=50 && this.Agriculture<=59){
          this.AgricultureComment = "Pass with credit"
          this.AgricultureGrade = "C"
        }
        if(this.Agriculture>=60 && this.Agriculture<=69){  
          this.AgricultureComment = "Pass"
          this.AgricultureGrade = "B"
        }
        if(this.Agriculture>=70 && this.Agriculture<=100){
          this.AgricultureComment = "Very Good"
          this.AgricultureGrade = "A"
        }
 
             
        
        // Geography
        if(this.Geography===null){
          this.GeographyComment = "Results are not out"
          this.GeographyGrade = "----"
        }
        if(this.Geography===1 && this.Geography<=36){
          this.GeographyComment = "Failed"
          this.GeographyGrade = "U"
          this.GeographySuccess="changetored"
        } if(this.Geography>=37 && this.Geography<=42){
          this.GeographyComment = "Failed"
          this.GeographyGrade = "E"
          this.GeographySuccess="changetored"
        }
        if(this.Geography>=43 && this.Geography<=49){
          this.GeographyComment = "Failed"
          this.GeographyGrade = "D"
          this.GeographySuccess="changetored"
        }
        if(this.Geography>=50 && this.Geography<=59){
          this.GeographyComment = "Pass with credit"
          this.GeographyGrade = "C"
        }
        if(this.Geography>=60 && this.Geography<=69){  
          this.GeographyComment = "Pass"
          this.GeographyGrade = "B"
        }
        if(this.Geography>=70 && this.Geography<=100){
          this.GeographyComment = "Very Good"
          this.GeographyGrade = "A"
        }
        if(this.Geography=='null'){
          this.GeographyComment = "DNR/DNW"
          this.GeographyGrade = "---"
        }
        if(this.Geography===null && this.Agriculture===null && this.Physics===null && this.History===null && this.Accounts===null
        && this.Biology===null && this.CombinedScience===null && this.English===null && this.Maths===null){
          this.NoResults =true
        } 
        const d = new Date();
         this.yyyy = d.getFullYear()
        const mm = d.getMonth()
        if(mm <4 ){
          this.Term = 1
        }
        if( mm >=4 &&  mm <8 ){
          this.Term = 2
        }
        if(mm >=8 &&  mm <12 ){
          this.Term = 3
        }

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
.changetored{
  color: rgb(202, 24, 24);
}

</style>
