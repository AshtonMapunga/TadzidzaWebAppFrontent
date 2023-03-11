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
      <v-icon >mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="font-size: 30px;" >{{Name}}</v-list-item-title>
          </v-list-item>
       <v-divider></v-divider>
       
<template>

    <v-card>
      <div class="ml-6">
  
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
    <td >Gurdian's Name</td>
    <td>{{ ParentName }}</td>
  </tr>
  <tr v-bind:class="Success">
    <td >Guardian's Phone Number</td>
    <td>{{ ParentNumber }}</td>
  </tr>
  <tr>
    <th rowspan="1">Subjects</th>
    <th colspan="1"><span v-show="MathsRegister">Maths,   </span> <span v-show="EnglishRegister">English,  
     </span><span  v-show="GeographyRegister">Geography,   </span><span v-show="PhysicsRegister"> Physics,  </span><span 
      v-show="HistoryRegister">History,  
       </span><span v-show="AccountsRegister">Accounts,   </span><span v-show="CombinedScienceRegister">Combined Science,   </span ><span  v-show="MathsRegister">Agriculture,</span>
        <span  v-show="ChemistryRegister">Chemistry</span></th>
  </tr>
</table>
<br>
<router-link to="/edit-student">
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
<router-link to="/sudent-home">
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
    </v-card>
</template><template>

    <v-card>
            <v-list>
        <template v-if="NoSubject">
          <v-list-item>
            <v-list-item-content>
              <p class="poda" poda>You have not yet Register your Subjects please click the button below Register
              </p>
              <v-divider></v-divider>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <br>
          <br>
          </template>      
      </v-list>   
    </v-card>
</template>
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
        NoSubject:false,
        SubjectsPresent: true,
      Name: '',
      Address: '',
      Email: '',
      className:'',
      Password: '',
      Phone_number:'',
      ParentName:'',
      ParentNumber:'',
      DateofBirth: '',
      // Subjects

      MathsRegister: false,
      EnglishRegister: false,
      CombinedScienceRegister: false,
      GeographyRegister: false,
      BiologyRegister: false,
      AccountsRegister: false,
      PhysicsRegister: false,
      ChemistryRegister: false,
      AgricultureRegister: false,
      HistoryRegister: false,
    }),
     methods: {
  },  
  async created(){
      const Email = localStorage.getItem("Email")
      await Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/studentlogin/${Email}`,{
        headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
      } ).then((response)=>{
        console.log(response)
        this.Name=response.data.User.full_name
        this.Address=response.data.User.Address
        this.Email=response.data.User.Email
        this.className=response.data.User.className
        this.Password=response.data.User.Password
        this.ParentName=response.data.User.ParentName
        this.ParentNumber=response.data.User.ParentNumber
        this.DateofBirth=response.data.User.DateofBirth
        this.Phone_number=response.data.User.Phone_number
        
        this.MathsRegister=response.data.User.MathsRegister
        this.EnglishRegister=response.data.User.EnglishRegister
        this.CombinedScienceRegister=response.data.User.CombinedScienceRegister
        this.GeographyRegister=response.data.User.GeographyRegister
        this.HistoryRegister=response.data.User.HistoryRegister
        this.AccountsRegister=response.data.User.AccountsRegister
        this.BiologyRegister=response.data.User.BiologyRegister
        this.PhysicsRegister=response.data.User.PhysicsRegister
        this.ChemistryRegister=response.data.User.PhysicsRegister

        if(this.MathsRegister===false &&this.EnglishRegister===false &&
         this.CombinedScienceRegister===false &&this.EnglishRegister===false && this.MathsRegister===false
         &&this.EnglishRegister===false &&this.MathsRegister===false &&this.EnglishRegister===false){
          this.NoSubject=true,
          this.SubjectsPresent=false
         }
      })

  }
  }
</script>
<style>
  .moveLeft{
    margin-top: 50px auto;
  }
  .poda{
    color:  #303F9F;
  }
</style>

