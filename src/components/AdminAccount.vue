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
      <v-icon style="font-size: 35px; color:  #303F9F;">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="font-size: 30px; color:  #303F9F;" >{{Name  }}</v-list-item-title>
          </v-list-item>
<br>       


<div class="ml-6">
  
  <table id="customers" v-show="!NoResults">
  
 

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



</table>
<br>
<router-link to="/edit-Admin">
          <v-btn
          class="btn btn-lg btn-block "
          width="98%"

            dark   
            color="green"
          >
            Edit your Details
          </v-btn>    
        </router-link>

<br>
<p></p>
<router-link to="/admi-home">
            <v-btn
          type="submit"          
          class="btn btn-lg btn-block "
          width="98%"
            dark   
            color="indigo darken-2"
          >
            Back
          </v-btn>
        </router-link>
</div>
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
        BioClassess: ["2A", "2B", "3C"],
        Name: '',
      Address: '',
      Email: '',
      className:'',
      Password: '',
      Phone_number:'',
      Maths:[],
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

    }),
    methods:{
      ShowSub(){
        console.log("Hi Zondai")
      }
    }
    ,
    async created(){
      const Email = localStorage.getItem("Email")
      const response = await Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/adminlogin/${Email}`,{
        headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
      } )
        this.Name=response.data.User.full_name
        this.Address=response.data.User.Address
        this.Email=response.data.User.Email
        this.Phone_number=response.data.User.Phone_number
        

  }
    
  }
</script>
<style>
  .moveLeft{
    margin-top: 50px auto;
  }
  
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 98%;
  padding: 4px;
  table-layout: fixed;
  margin-right: 4px;

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
}
.changetored{
  color: rgb(202, 24, 24);
}
</style>

