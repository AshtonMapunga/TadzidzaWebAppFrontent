<template>
    <v-card
      class="mx-auto mt-12"
      max-width="2000"
      style="border-radius: 15px; background-color:   rgb(251, 251, 253);"
    >
    <v-card-text color="indigo darken-2" >
       <h4 class="NoticeHeader">Notice Board </h4>
       <p>*All the important annoucement at the school are posted here</p>
        <hr>
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
<router-link to="/sudent-home">
          <v-btn
          class="btn btn-lg btn-block"
            dark   
            color="indigo darken-2"
            @click="MessageReceived()"
          >
            Back
          </v-btn>    
        </router-link>
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
<style scoped>
.NoticeHeader{
    text-align: center;
    color: #303F9F;
    font-size: 35px;
    text-decoration-line: underline;
    font-family:'Times New Roman', Times, serif;
}
.Date{
    color: #303F9F;
    font-weight: bolder;
    font-size: 14px;
    float: right;
}
.name-user{
    color: #303F9F;
    font-weight: bolder;
    font-size: 14px;
    float: left;
}

.name-users{
    color: #ffff;
    font-weight: bolder;
    font-size: 14px;
    float: left;
}

.Dates{
    color: #ffff;
    font-weight: bolder;
    font-size: 14px;
    float: right;
}
.points{
  word-break: break-all;
    color: #ffff;
    size: inherit;
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
}

.point{
  word-break: break-all;
    color: #303F9F;
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
}
.Btn-Send{
    float: right;
}
</style>