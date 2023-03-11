<template>
    <v-card
      elevation="13"
      class="mx-auto mt-12"
      max-width="900"
       >
     <h1 class="signInHeader">School Fees to be paid</h1>
         <v-divider></v-divider>
                     <br>
         <form class="ml-12" @submit.prevent="Submit()">
       
         <div class="mr-12">
              <label> Enter Levy $:</label>
              <input class="float-right" type="number" v-model="Levy" required>
              <br>
         </div>
              <br>
  
         <div class="mr-12">
              <label> Enter Tuition Fee $:</label>
              <input class="float-right" type="number" v-model="Tuition" required>
              <br>
         </div>
         <p v-show="Success" class="Green">You have succesfully saved the transaction</p>
         <p class="Validate" v-show="Validate">*Please fill in the whole form</p>
         <br>
         <div class="float-left">
         <br>               
         <router-link to="/admi-home">
            <v-btn
          dark   
          color="indigo darken-2"
        >
        Back
        </v-btn>
          </router-link>               

            <br>
         </div>
         <div class="float-right" v-show="!Success">
         <br>
            <v-btn
            :disabled="Success"  class="mr-12"
          type="submit"
          dark   
          color="indigo darken-2"
        >
        Submit
        </v-btn>  
            <br>
         </div>
         <br>
         <br>
      </form>
   <br>
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
        Success:false,
        Tuition: ""
        
      }),
      methods:{
       Submit(){
        if(this.Levy === "" || this.Tuition === ""){
          this.Validate = true
        }
        else{
        const Fees = ~~this.Levy + ~~this.Tuition
        console.log(Fees)


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
          AmountPaid: Fees,
          Description: "Fees to be paid"
        }
        Axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/fees/tobepaid', Form,{
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        })
        .then( (response)=>{
          console.log(response.data)
          this.Success=true
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
      .Validate{
        color: red;
        font-size: 14px;
      }
      .Green{
      color: #283593
    }
      
  </style>