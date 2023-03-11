<template>
  <v-card
    elevation="3"
    class="mx-auto mt-12"
    max-width="900"
     >
   <h1 style="font-size: 48px;"  class="signInHeader">Finacial Statement</h1>
   <br>
   <table id="customers">
  <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Debit</th>
    <th>Credit</th>
    <th>Closed Balance</th>
  </tr>
  <tr>
    <td>12/02/2021</td>
    <td>School Fees to be paid</td>
    <td>$100</td>
    <td></td>
    <td>$100</td>

  </tr>
  <tr>
    <td>16/02/2021</td>
    <td>Fees Paid</td>
    <td></td>
    <td>$70</td>
    <td>$30</td>
  </tr>
  <tr>
    <td>12/05/2021</td>
    <td>School Fees</td>
    <td>$150</td>
    <td></td>
    <td>$180</td>
  </tr>
  <tr>
      <td>19/05/2021</td>
    <td>Fees Paid</td>
    <td></td>
    <td>$80</td>
    <td>$100</td>
  </tr>
  <tr>
      <td>20/05/2021</td>
    <td>Fees Paids</td>
    <td></td>
    <td>$100</td>
    <td>$0</td>
  </tr>
  <tr>
    <td>12/09/2021</td>
    <td>School fees</td>
    <td>$150</td>
     <td></td>
    <td>$150</td>

  </tr>

</table>
<br>

<router-link to="/student-home">
    <v-btn
      depressed
      color="primary"
   class="float-right" >
      Close
    </v-btn></router-link>
    <br>
    <br>
  </v-card>
</template>
<script>
  import Axios from 'axios';
export default {
  data() {
    return {
      FeesTransaction:[]
    }
  },
  methods: {
  },  
  async created(){
      const Email = localStorage.getItem("Email")
      const response = await Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/studentlogin/${Email}`,{
        headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
      } )
        this.FeesTransaction=response.data.FeesTransaction

  }
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
</style>