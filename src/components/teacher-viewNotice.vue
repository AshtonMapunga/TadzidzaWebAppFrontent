<template>
    <v-card
      class="mx-auto mt-12"
      max-width="2000"
      style="border-radius: 15px; background-color:   rgb(251, 251, 253);"
    >
      <v-card-text color="indigo darken-2">
       <h4 class="NoticeHeader"> Important Notices </h4>
       <router-link to="/teachers-home">
          <v-btn
            class="float-right"
            dark   
            color="indigo darken-2"
          >
            Back
          </v-btn>    
        </router-link> 
        <br>
        <br>

        <div       v-for="allNotices in AllNotices" :key="allNotices.Notice" >

<div  class="d-flex flex-row-reverse">
  <v-alert 
width="100%"
  shaped
  outlined
  color="indigo darken-2"
  dark
>
    <p class="point">{{allNotices.Notice}} </p>
    <h6 class="float-right">{{allNotices.Currenttime}} </h6>
</v-alert>
</div>

</div>

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
   
    },
    async created(){
      const response = await Axios.get(`http://localhost:5050/get/All/notice`,{
        headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
      } )
        
       this.AllNotices= response.data
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
  color: #303F9F;
    font-size: 19px;
    font-family: 'Times New Roman', Times, serif;
}
</style>