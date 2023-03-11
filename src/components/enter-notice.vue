<template>
    <v-card
      class="mx-auto mt-12"
      max-width="1700"
      style="border-radius: 25px; background-color:   rgb(251, 251, 253);"
    >
      <v-card-text color="indigo darken-2">
        <h5 style="font-size: 34px;" class="signInHeader">Post a note on the Notice Board </h5>
        <p></p>
        <v-spacer></v-spacer>
        <v-divider></v-divider>
        <v-spacer></v-spacer>
        <template>
            <v-container fluid>
                <v-textarea
                v-model="NoticeValue"
                counter
                label="Text"
                placeholder="Write the notice..."
                :rules="rules"
                ></v-textarea>
                <p class="Validate" v-show="Validate">*Please Enter your post</p>
                <p v-show="Success" class="Green">You have succesfully add the note</p>
          </v-container>
          <template>

  <v-row class="ml-l" >
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
    
      <template v-slot:activator="{ on, attrs }">
    <v-btn
          color="green"
          class="btn btn-lg btn-block ml-3"
          width="98%"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Save Post
        </v-btn>    

      </template>
     
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you want add this post?
        </v-card-title>
        <v-card-text></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="Submit()"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <br>

    <router-link to="/adminView_Notice">
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
</template>
        </template>
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
      Validate:false
    }),
    methods:{
        Submit(){
    if(this.NoticeValue == ""){
      this.Validate = true
      this.dialog = false

    }
    else{
    const d = new Date()
    const day = d.getDate()
    const month = d.getMonth() + 1
    const year = d.getFullYear()
    const GetDate = day+" / "+ month + " / "+ year
    const Form ={
        Currenttime: GetDate,
        Notice: this.NoticeValue, 
    }
    console.log(Form)
    Axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/post/NoticeBoard', Form,{
      headers:{
      Authorization: "Basic " + localStorage.getItem("Tokken")
    }
    })
    .then( 
      (response)=>{
      console.log(response.data)
      if(response.data == "The Notice is successfully send"){
        this.Success=true
        this.Validate = false
        this.NoticeValue=""
      }
      else{
        this.Danger = true
      }
    })
    this.dialog = false
    }
   }    
    }
  }
</script>
<style scoped>
.Validate{
  color: red;
}
.Green{
  color:  #303F9F;
}
</style>
