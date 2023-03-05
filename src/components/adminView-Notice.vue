<template>
  <v-card
    class="mx-auto mt-12"
    max-width="2000"
    style="border-radius: 15px; background-color:   rgb(251, 251, 253);"
  >
    <v-card-text color="indigo darken-2">
     <h4 class="NoticeHeader"> Important Notices </h4>

     <router-link to="/enterNotice">
        <v-btn
          class="float-right"
          dark   
          color="indigo darken-2"
        >
          Add Notice
        </v-btn>    
      </router-link> 

      <br>
      <br>

      <div v-for="AllNotice in AllNotices" :key="AllNotice._id" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="AllNotice.ShowNotice"
  >
  <p class="FFFFF">{{AllNotice.Notice}}</p>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Date : {{AllNotice.Currenttime}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteNotice(AllNotice)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>  

        <router-link to="/admi-home">
            <v-btn
          type="submit"          
          class="btn btn-lg btn-block"
            dark   
            color="indigo darken-2"
          >
            Back
          </v-btn>
        </router-link>

      <br>
      <br>
    </v-card-text>
  
  </v-card>
</template>
<script>
import Axios from 'axios';
export default {
  data: () => ({
    rules: [v => v.length <= 2000 || 'Max 2000 characters'],
    dialog: false,
    NoticeValue:"",
    Success:false,
    Validate:false,
    AllNotices:[]
  }),
  methods:{
    DeleteNotice(AllNotice){
          Axios.post('http://localhost:5050/post/Notice/delete', {Notice : AllNotice.Notice 
          }, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          console.log(response.data)
          if(response.data=="The Notice has been deleted"){
            AllNotice.ShowNotice=false
          }
        })
       
    }
 
  },
  async created(){
    const response = await Axios.get(`http://localhost:5050/get/All/notice`,{
      headers:{
        Authorization: "Basic " + localStorage.getItem("Tokken")
      }
    } )
      
     this.AllNotices= response.data
     console.log(this.AllNotices)
}

}
</script>
<style lang="scss" scoped>

.NoticeHeader{
  float: left;
  color: #303F9F;
  font-size: 25px;
  font-family:'Times New Roman', Times, serif;
}
.Date{
  float: right;
  color: grey;
  font-weight: bolder;
  font-size: 13px;
}
.point{
  color: black;
  font-size: 19px;
  font-family: 'Times New Roman', Times, serif;
}
.FFFFF{
  word-break: break-all;

}
</style>