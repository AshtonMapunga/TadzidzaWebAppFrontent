<template>
  <v-card
    class="mx-auto mt-8"
    max-width="1100 "
    elevation="9"
  
  >
         <h1 style="font-size: 48px;" class="signInHeader">Class Fees Analyses</h1>
         

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
                <v-autocomplete
                :rules="ClassRules"
                v-model="className"
                :items="['1A','1B','1C','1D','1E','2A', '2B', '2C', '2F', '2D', '2E', '3B', '3C', '3D','4A','4B','4C','4D','4E']"                  label="Enter Class"                  
                ></v-autocomplete>
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
                    View Class
                    </v-btn>
              </v-col>
      </v-row>
          </v-list-item>
       <v-divider></v-divider>
       
<template>

    <div v-show="!ViewClass">
        <template>
          <v-list-item>
            <v-list-item-action>
              <v-icon style="font-size: 30px; color: #303F9F">mdi-home-circle</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title style="font-size: 25px; color: #303F9F"> CLASS : {{ className }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <br>
        <v-list-item   class="justify-end">
<template>
<br>
<table id="customers">
  <tr>
    <th>Names</th>
    <th>Phone Number</th>
    <th>Date of Birth </th>
    <th>Address</th>
    <th>Email</th>
    <th>Guadian</th>
  </tr>
  <tr v-for="(Student, i) in Students" :key="i">
    <td>{{ Student.full_name }}</td>
    <td>{{ Student.ParentNumber }}</td>
    <td>{{ Student.DateofBirth }}</td>
    <td>{{ Student.Address }}</td>
    <td>{{ Student.Email }}</td>
    <td>{{ Student.ParentName }}</td>
  </tr>
</table>
</template>
          </v-list-item>           
        </template>
    </div>
    <br>
          <router-link to="/teachers-home">
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
      show: false,
        ViewClass:true,
        Students:[],
        className:"",
        ClassRules:[
        v => !!v || 'Class is required',
      ],
    }),
    methods:{
      validate () {
        if(this.$refs.form.validate()){


          const object = {
            className: this.className
          }

          Axios.post('http://localhost:5050/post/findclassAndSubject', object, {
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } )
        .then( (response)=>{
          this.Students = response.data
        })




          console.log("Yes")
          this.ViewClass=false
        }
      }
    }
  }
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
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
