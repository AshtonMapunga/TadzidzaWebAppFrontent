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
         <h1 style="font-size: 44px;" class="signInHeader">Fees Payment</h1>
  
        <v-list-item color="indigo darken-2">
              <v-list-item-title v-if="!Success" style="font-size: 23px; color: #303F9F">Pay fees for: <b class="float-right">{{Nameoftudents}}</b> </v-list-item-title>
              <v-list-item-title v-if="Success" style="font-size: 23px; color: #303F9F;">You have successfully paid <b>{{Nameoftudents}}`s </b> school fees </v-list-item-title>
            </v-list-item>
         <v-divider></v-divider>
         
  <template >
    <v-card       >
      <v-form
    ref="form"
    lazy-validation
    class="pa-4 pt-6"
  >  

       <v-row>
            

            <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          color="indigo darken-2"
            label="Enter Amount"
            v-model="AmountPaid"
            :rules="AmountRules"
            type="number"
            outlined
            dense
            required
          ></v-text-field>
        </v-col>
        <v-col

          cols="12"
          sm="6"
        >
          <v-text-field
          v-model="PhoneNumber"
          :rules="PhoneRules"
          color="indigo darken-2"
            label="Customer Phone Number"
            type="number"
            outlined
            dense
            required
          ></v-text-field>
        </v-col>
        </v-row>
        <p class="ml-11" style="color: red" v-show="NoInternet">The transaction is terminated check your internet connection or phone number and try again *</p>


        <!-- <v-btn
            dark   
            color="indigo darken-2"
            @click="PayOnline()"
            class="float-right mr-12"
          >
            Pay
          </v-btn>  -->
          <v-btn
          class="btn btn-lg btn-block"
      :loading="loading4"
      :disabled="loading4"
      color="green"
      @click="loader = 'loading4'"
    >
      <span style="color: white">Pay Fees</span>
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>mdi-cached</v-icon>
        </span>
      </template>
    </v-btn>
    <br>
    <p></p>
    <router-link to="/suggest_payment">
          <v-btn
          dark
          class="btn btn-lg btn-block"
      :loading="loading7"
      :disabled="loading7"
      color="indigo darken-2"
    >
      Back
      <template v-slot:loaderr>
        <span class="custom-loaderrr">
          <v-icon light>mdi-cached</v-icon>
        </span>
      </template>
    </v-btn></router-link>

          <br>
          <br>
        <router-link class="mt-5" to="/suggest_payment" v-if="Success">
      <v-btn
        dark
        color="indigo darken-2"
        class="btn btn-lg btn-block ml-4">
        Back
      </v-btn></router-link>
      <br>
      <br>
    </v-form>
      </v-card>


  </template>
  
  
  </v-card>
  
    </v-card>
    
  </template>
  <script>
    import Axios from 'axios';
  
    export default {
      data: () => ({    
        loading4: false,
        loader: null,  
        show: false,
         dialog: false,
         Subjects:false,
          dialogs: false,
          Allfees:[],
          ClosedBalance:"",
          DateofCB: "",
          Nameoftudents: "",
          phoneNumber: "",
          EmailofStudent: "",
          AmountPaid:"",
          PhoneNumber:"",
          PhoneRules: [
        v => !!v || 'Phone Number is required',
      ],
      AmountRules: [
        v => !!v || ' Number is required',
      ],
          Success:false,
          NoInternet: false
      }),
      methods:{
        PayOnline(){
          if(this.$refs.form.validate()){

            const unique = Math.random()
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
         const  payLoad = {
          DateofPayment: FulltimeAndDate,
          Invoice: unique,
          AmountPaid: this.AmountPaid,
          Email: this.EmailofStudent,
          phoneNumber: this.PhoneNumber,
          Description: "Fees paid",
          } 
          Axios.post('http://localhost:5050/send/money', payLoad,{
      headers:{
      Authorization: "Basic " + localStorage.getItem("Tokken")
    }
    })
    .then( 
      (response)=>{
      console.log(response.data)
      if(response.data == "The transaction was successfull"){
        this.Success=true
        this.Validate = false
        console.log("Yes")
        this.NoticeValue=""
      } else if(response.data == "The transaction is terminated check your internet connection and try again"){
        this.NoInternet=true
      }
      else{
        this.Danger = true
      }
    })
          }
        
        }
  
      },
    async created(){
        const Email = localStorage.getItem("Email")
        const response = await Axios.get(`http://localhost:5050/post/studentlogin/${Email}`,{
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } )
          const FeesPaid =response.data.User.FeesPaid
          const FeestobePaid = response.data.User.FeestobePaid
          this.Nameoftudents = response.data.User.full_name
          this.EmailofStudent = response.data.User.Email
          this.classOfstudent = response.data.User.className
  
          console.log(FeesPaid)
          console.log(FeestobePaid)
  
          this.Allfees = FeestobePaid.concat(FeesPaid)
          console.log(this.Allfees)
          const d = new Date();
          const yyyy = d.getFullYear()
          const mm = d.getMonth()+1
          const dd = d.getDate()
  
          this.DateofCB = yyyy + "-"+mm+"-"+ dd
  
    }, 
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 2000)

        this.loader = null
        this.PayOnline()
      },
    },
    }
  </script>
  
  <style scoped>
  #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
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
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
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
  .signInFooter{
  color: red;
}
  </style>
  