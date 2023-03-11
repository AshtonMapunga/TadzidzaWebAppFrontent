<template>
  <v-card
    elevation="13"
    class="mx-auto mt-12"
    max-width="900"
     >
   <h1 class="signInHeader">School Fees Payments</h1>
       <v-divider></v-divider>
       <form class="ml-12" @submit.prevent="Submit()">
                   <br>
       <div class="mr-12">
            <label> Enter Student's Email: </label>
            <input placeholder="example@gmail.com" v-model="Email" class="float-right" type="email" required>
            <br>
       </div>
            <br>
       <div class="mr-12">
            <label> Enter Levy $:</label>
            <input class="float-right" v-model="Levy" type="number" required>
            <br>
       </div>
            <br>

       <div class="mr-12">
            <label> Enter Tuition Fee $:</label>
            <input class="float-right" v-model="Tuition" type="number" required>
            <br>
       </div> 
       <br>
       <p class="Validate" v-show="Validate">*Please fill in the whole form</p>
       <p v-show="Danger" class="red2">*Invalid Email </p>
       <p v-show="Success" class="Green">You have succesfully saved the transaction</p>
       <router-link to="/admi-home">
          <v-btn
          
            dark   
            color="indigo darken-2"
          >
            back
          </v-btn>    
        </router-link>
       <div class="float-right">
          <v-btn
          :disabled="Success" type="submit" class="mr-12"
            dark   
            color="indigo darken-2"
          >
            Save
          </v-btn>    
          <br>
       </div>
       <br>
       <br>
 <br>
</form>
  </v-card>
</template>
<script>
import Axios from 'axios';

export default {
  data: () => ({
    loader: null,
    show: false,
    Validate: false,
    Levy:"",
    Tuition: "", 
    Danger:false,
    Success:false,
    Email: ""
    
  }),
  methods:{
   Submit(){
    if(this.Levy === "" || this.Tuition === "" || this.Email==""){
      this.Validate = true
    }
    else{
      const Fees= ~~this.Levy + ~~this.Tuition
      const d = new Date()
          const years  = d.getFullYear()
          const day = d.getDate()
          const month = d.getMonth()+1
          const hours = d.getHours()
          const Minutes = d.getMinutes()
          const Secondss = d.getSeconds()

           const Fulltime = hours+":"+Minutes+":"+Secondss    
           const FullDate =  day+"/"+month+"/"+years
           const FulltimeAndDate = FullDate + " "+ " "+ " " + Fulltime
    const Form ={
      DateofPayment: FulltimeAndDate,
      Email: this.Email, 
      AmountPaid: Fees, 
      Description: "Fees paid"
    }
    console.log(Form)
    Axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/addsubject/addfees', Form,{
      headers:{
      Authorization: "Basic " + localStorage.getItem("Tokken")
    }
    })
    .then( (response)=>{
      console.log(response.data)
      if(response.data == "Success: True"){
        this.Success=true
      }
      else{
        this.Danger = true
      }
    })
    }
   }   
  }
}
</script>
<style scoped>
    input{
        color: black;
        border: 2px solid;
        border-radius: 5px;
    }
    button{
        background-color:#283593;
        color: white;
        padding: 3px;
        border-radius: 4px;
        box-shadow: 5px;
    }
    .red2{
      color: red
    }
    .Green{
      color: #283593
    }
    .Validate{
        color: red;
        font-size: 14px;
      }
</style>