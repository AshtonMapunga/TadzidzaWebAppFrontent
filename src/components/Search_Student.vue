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
      v-model="Email"
      :rules="emailRules"
      label="Enter Student's Email"
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
                <v-list-item-title style="font-size: 25px; color: #303F9F"> Student's Name: <b> {{ Nameoftudents }}</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  <template>
  <br>

  <table id="customers">
  <tr >
    <td style="width: 35%;">Address </td>
    <td>{{ Address }}</td>
  </tr>
  <tr v-bind:class="AccountshSuccess" >
    <td>Email</td>
    <td>{{ Email }}</td>
  </tr>
  <tr v-bind:class="Success">
    <td >Guardian</td>
    <td>{{ ParentName }}</td>
  </tr>
  <tr>
    <td >Guardian's Phone Number</td>
    <td>{{ ParentNumber }}</td>
  </tr>
  


</table>
<v-list-item>
              <v-list-item-content>
                <v-list-item-title style="font-size: 25px; color: #303F9F; text-align: center;"> Financial Statement</v-list-item-title>
              </v-list-item-content>
        </v-list-item>


<table id="customers">
  <tr>
    <th>Date</th>
    <th>Detail</th>
    <th>Cr $</th>
    <th>Dr $</th>
    <th>Bal $</th>
  </tr>
  <tr v-for="feesTransaction in FeesTransaction" :key="feesTransaction.DateofPayment">
    <td> {{feesTransaction.DateofPayment | currency }}</td>
    <td>{{feesTransaction.Description}} </td>
    <td v-if="feesTransaction.Description=='Fees to be paid'"> {{feesTransaction.AmountPaid}} </td>
    <td v-else ></td>
    <td v-if="feesTransaction.Description=='Fees paid'"> {{feesTransaction.AmountPaid}}</td>
    <td v-else ></td>
    <td></td>
  </tr>
  <tr>
    <td style="fontWeight: bold">{{DateofCB}}</td>
    <td style="fontWeight: bold">Closed Balance</td>
    <td></td>
    <td></td>
    <td style="fontWeight: bold">${{ClosedBalance}}</td>
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
        DoesNotExist: "Student with such email does not exist! please enter the correct email",  
        show: false,
        NoSuccess:false,
          ViewClass:true,
       dialog: false,
       Subjects:false,
        dialogs: false,
        Allfees:[],
        ClosedBalance:"",
        DateofCB: "",
        Nameoftudents: "",
        className: "",
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
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      }),
      methods:{
        validate(){
            if(this.$refs.form.validate()){

      const Email = this.Email
        Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/studentlogin/${Email}`,{
        headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
      } ).then((response)=>{
        console.log( response.data)
        if(response.data === "The Student does not exist"){
          console.log("error sqdSa ")
            this.ViewClass=true
            this.NoSuccess=true
        }


        else{
        this.FeesTransaction = response.data.User.FeesTransaction
        this.Nameoftudents = response.data.User.full_name
        this.EmailofStudent = response.data.User.Email
        this.className = response.data.User.className
        this.Address = response.data.User.Address
        this.ParentNumber = response.data.User.ParentNumber
        this.DateofBirth = response.data.User.DateofBirth
        this.ParentName = response.data.User.ParentName
        this.ViewClass=false
        this.NoSuccess=false

        
        const FeesPaid = this.FeesTransaction.filter( function(item){return (item.Description == "Fees paid");} );
        const FeestobePaid = this.FeesTransaction.filter( function(item){return (item.Description == "Fees to be paid");} );


        const sumFeesPaid = FeesPaid.reduce((accumulator, object) => {
                return accumulator + object.AmountPaid;
              }, 0);

              const sumFeestobePaid = FeestobePaid.reduce((accumulator, object) => {
                return accumulator + object.AmountPaid;
              }, 0);

         console.log(sumFeesPaid)
         console.log(sumFeestobePaid)
         
         const Balanciaga = sumFeestobePaid-sumFeesPaid
         if(Balanciaga >0 ){
          this.ClosedBalance = Balanciaga + " Cr"
         }
         else if(Balanciaga<0){
          this.ClosedBalance = Balanciaga + " Dr"
         }
         else{
          this.ClosedBalance = Balanciaga
         }

        this.Allfees = FeestobePaid.concat(FeesPaid)
        console.log(this.Allfees)
        const d = new Date();
        const yyyy = d.getFullYear()
        const mm = d.getMonth()+1
        const dd = d.getDate()
        this.DateofCB = dd+ "/"+mm+"/"+yyyy

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
  