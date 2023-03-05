<template>
  
    <v-card
      class="mx-auto mt-12"
      max-width="2000"
      style="border-radius: 15px; background-color:   rgb(251, 251, 253);"
    >


    <v-card>
    <v-toolbar
      color="indigo darken-2"
      dark
    >
    <h1 class="NoticeHeader">School Library </h1>
    <br>
    <br>
    <br>
    <br>

    <br>
        <br>

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          centered
        >
          <v-tab
            v-for="n in Arrayzz"
            :key="n"
          >
             {{ n }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p class="head2">Below are the recommended books for the students.</p>
        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='ZJC' && allbook.Subject =='English'"
    >
    <h6 class="FormOF" v-show="AllBooks.length>0">English:</h6>        
    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>          
        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='ZJC' && allbook.Subject =='Chemistry'"
    >
    <h6 class="FormOF" v-show="AllBooks.length>0">Chemistry:</h6>        
    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>
        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='ZJC' && allbook.Subject =='Biology'"
    >
    <h6 class="FormOF">Biology:</h6>        
    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>


        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='ZJC' && allbook.Subject =='Agriculture'"
    >
    <h6 class="FormOF">Agriculture:</h6>        
    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>


        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='ZJC' && allbook.Subject =='Physics'"
    >
    <h6 class="FormOF"> Physics:</h6>        

    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>



        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='ZJC' && allbook.Subject =='Geography'"
    >        <h6 class="FormOF">Geography:</h6>        

    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>


        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='ZJC' && allbook.Subject =='Mathematics'"
    >
    <h6 class="FormOF">Mathematics:</h6>        
    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>



        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      v-if="allbook.Level =='ZJC' && allbook.Subject =='Combined Science'"
      color="indigo darken-2"
    >
    <h6 class="FormOF"> Combined Science:</h6>        
    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>


        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='ZJC' && allbook.Subject =='Shona'"
    >
    <h6 class="FormOF">Shona:</h6>        
    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>
      
      
      </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p class="head2">Below are the recommended books for the students.</p>
        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='O Level' && allbook.Subject =='English'"
    >
    <h6 class="FormOF">English:</h6>        

    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>          
      
      

        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='O Level' && allbook.Subject =='Chemistry'"
    >
    <h6 class="FormOF">Chemistry:</h6>        

    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>


        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='O Level' && allbook.Subject =='Biology'"
    >
    <h6 class="FormOF">Biology:</h6>        

    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>


        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='O Level' && allbook.Subject =='Agriculture'"
    >
    <h6 class="FormOF">Agriculture:</h6>        
    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>


        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='O Level' && allbook.Subject =='Physics'"
    >
    <h6 class="FormOF"> Physics:</h6>        
    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>



        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='O Level' && allbook.Subject =='Geography'"
    >
    <h6 class="FormOF">Geography:</h6>        
    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>


        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='O Level' && allbook.Subject =='Mathematics'"
    >
    <h6 class="FormOF">Mathematics:</h6>        
    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>

        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='O Level' && allbook.Subject =='Combined Science'"
    >
    <h6 class="FormOF"> Combined Science:</h6>        
    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>


        <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
        <v-alert
      outlined
      color="indigo darken-2"
      v-if="allbook.Level =='O Level' && allbook.Subject =='Shona'"
    >
    <h6 class="FormOF">Shona:</h6>        

    <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
      <p class="float-right" style="font-size:13px; ">Written by : {{allbook.Author}}</p>
    </v-alert>
        </div>
      
      
      </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="text-h5">
            An even better title
          </v-card-title>
          <v-card-text>
            <p>
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.
            </p>

            <p class="mb-0">
              Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>





      <v-card-text color="indigo darken-2">

        

       <router-link to="/sudent-home">
          <v-btn
          
            dark   
            color="indigo darken-2"
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
      Arrayzz: ["O' Level", "ZJC"],
      Success:false,
      Validate:false,
      AllBooks:[],
      tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }),
    methods:{
   
    },
    async created(){
      const response = await Axios.get(`http://localhost:5050/get/All/library`,{
        headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
      } )       
       this.AllBooks= response.data
  }
  
  }
</script>
<style>
.NoticeHeader{
    color: white;
    font-size: 45px;
    font-family:'Times New Roman', Times, serif;
}
.Date{
    color: black;
    font-weight: bolder;
    font-size: 20px;
}
.point{
    color: black;
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
}
.FormOF{
    color: black;
    font-size: 20px;
    text-decoration-line: underline;
}
.head2{
    text-decoration-line: underline;
    color:  #303F9F;
    text-align: center;
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 500;
}

</style>