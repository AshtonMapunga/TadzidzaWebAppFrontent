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
          <h6 class="FormOF">English:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='ZJC' && allbook.Subject =='English' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>          
      <h6 class="FormOF">Chemistry:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='ZJC' && allbook.Subject =='Chemistry' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div> 


      <h6 class="FormOF">Biology:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='ZJC' && allbook.Subject =='Biology' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div> 


      <h6 class="FormOF">Agriculture:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='ZJC' && allbook.Subject =='Agriculture' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div> 


      <h6 class="FormOF"> Physics:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='ZJC' && allbook.Subject =='Physics' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div> 

      <h6 class="FormOF">Geography:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='ZJC' && allbook.Subject =='Geography' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>


      <h6 class="FormOF">Mathematics:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='ZJC' && allbook.Subject =='Mathematics' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>




      <h6 class="FormOF"> Combined Science:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='ZJC' && allbook.Subject =='Combined Science' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>

      
      <h6 class="FormOF">History:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='ZJC' && allbook.Subject =='History' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>


      <h6 class="FormOF">Shona:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='ZJC' && allbook.Subject =='Shona' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>
    
    
    </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p class="head2">Below are the recommended books for the students.</p>
          <h6 class="FormOF">English:</h6>        
          <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='O Level' && allbook.Subject =='English' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>  
    
    

      <h6 class="FormOF">Chemistry:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='O Level' && allbook.Subject =='Chemistry' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>  
    


      <h6 class="FormOF">Biology:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='O Level' && allbook.Subject =='Biology' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>  
    


      <h6 class="FormOF">Agriculture:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='O Level' && allbook.Subject =='Agriculture' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>  
    


      <h6 class="FormOF"> Physics:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='O Level' && allbook.Subject =='Physics' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>  
    



      <h6 class="FormOF">Geography:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='O Level' && allbook.Subject =='Geography' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>  
    


      <h6 class="FormOF">Mathematics:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='O Level' && allbook.Subject =='Mathematics' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>  
    



      <h6 class="FormOF"> Combined Science:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='O Level' && allbook.Subject =='Combined Science' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
  </v-alert>
      </div>  
    


      <h6 class="FormOF">Shona:</h6>        
      <div v-for="allbook in AllBooks" :key="allbook.Author" style="border: 3px; border-color:  hsl(232, 54%, 41%); ">
      <v-alert
    outlined
    color="indigo darken-2"
    v-if="allbook.Level =='O Level' && allbook.Subject =='Shona' && allbook.ShowBook">
  <a :href="allbook.Link" target="_blank" rel="noopener noreferrer" >{{allbook.Name_Description}}</a>
  <br>
    <p  class=" float-left" style="font-size:13px; font-weight: bold; ">Written by : {{allbook.Author}}</p>
    <v-btn 
      small
      color="indigo darken-2"
      dark
      class="ml-12 float-right"
      @click="DeleteBook(allbook)"
    >
      Delete
    </v-btn>
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

      

     <router-link to="/teachers-home">
        <v-btn
          class="float-left"        
          dark   
          color="indigo darken-2"
        >
          Home
        </v-btn>    
      </router-link> 
      <router-link to="/teacher-add-library">
        <v-btn
        class="float-right"
          dark   
          color="indigo darken-2"
        >
          Add Book
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
    Arrayzz: [ "ZJC", "O' Level"],
    Success:false,
    Validate:false,
    AllBooks:[],
    tabs: null,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),
  methods:{
    DeleteBook(allbook){
          Axios.post('https://tadzidza-welearnwebappggfg-api.onrender.com/post/dlibrary/delete', {Link : allbook.Link 
          }, {
          headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
        }
        )
        .then( (response)=>{
          if(response.data=="The Book has been deleted"){
            allbook.ShowBook=false
          }
        })
       
    }
    },
  async created(){
    await Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/get/All/library`,{
      headers:{
        Authorization: "Basic " + localStorage.getItem("Tokken")
      }
    } ).then((response)=>{
      this.AllBooks= response.data

    })       
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