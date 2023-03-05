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
       <h1 style="font-size: 48px;" class="signInHeader">Financial Statement</h1>

      <v-list-item color="indigo darken-2">
            <v-list-item-icon>
      <v-icon style="font-size: 35px; color: #303F9F">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="font-size: 30px; color: #303F9F">{{Nameoftudents}}</v-list-item-title>
          </v-list-item>
       <v-divider></v-divider>
       
<template>
          <v-list-item>
            <v-list-item-action>
              <v-icon style="color: #303F9F">mdi-home-circle</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title style="color: #303F9F">Student's class: {{classOfstudent}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        <v-list-item   class="justify-end">
<template>
<br>
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
          </v-list-item>           
    <br>
    <div style="padding: 15px;">
      <router-link to="/sudent-home">
          <v-btn
          class="btn btn-lg btn-block btn btn-success"
            dark   
            color="indigo darken-2"
          >
            Back
          </v-btn>    
        </router-link>
    </div>

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
      show: false,
       dialog: false,
       Subjects:false,
        dialogs: false,
        Allfees:[],
        ClosedBalance:"",
        DateofCB: "",
        Nameoftudents: "",
        classOfstudent: "",
        EmailofStudent: "",
        FeesTransaction:[]
    }),
    methods:{

    },
  async created(){
      const Email = localStorage.getItem("Email")
      const response = await Axios.get(`http://localhost:5050/post/studentlogin/${Email}`,{
        headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
      } )
         this.FeesTransaction = response.data.User.FeesTransaction
        this.Nameoftudents = response.data.User.full_name
        this.EmailofStudent = response.data.User.Email
        this.classOfstudent = response.data.User.className

        
      

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
  word-break: break-all;

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
</style>
