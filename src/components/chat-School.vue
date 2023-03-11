<template>
  
  
    <v-card
      class="mx-auto mt-12"
      max-width="2000"
      style="border-radius: 15px; background-color:   rgb(251, 251, 253);"
    >
      <v-card-text color="indigo darken-2" v-if="Messagesss">
       <h4 class="NoticeHeader"> School Chat </h4>
        <br>
        <br>
        <div       v-for="message in Messages" :key="message.Currenttime" >
          <v-alert
          width="50%"
          
      shaped
      dark
      color="indigo darken-2"
      v-if="message.full_name !== Name && message.className==className"
    >
        <h3 class="name-users" >{{message.full_name}}</h3>
        <br>
        <v-divider></v-divider>
        <p class="points">{{message.message}} </p>
        <h6 class="float-right">{{message.Currenttime}} <span class="ml-3">{{message.CurrentDate}} </span>  </h6>
    </v-alert>
    <div  class="d-flex flex-row-reverse">
      <v-alert 
    width="50%"
      shaped
      outlined
      color="indigo darken-2"
      dark
      v-if="message.full_name == Name"
    >
        <h3 class="name-user" >{{message.full_name}}</h3>
        <br>
        <hr>
        <p class="point">{{message.message}} </p>
        <h6 class="float-right">{{message.Currenttime}} <span class="ml-3">{{message.CurrentDate}} </span></h6>
    </v-alert>
    </div>
    <!-- <v-alert
      shaped
      color="info"
      v-if="message.full_name == Name"
    >
    <div>
      <h3 class="name-user" >{{message.full_name}}</h3>
        <h6 class="Date">{{message.Currenttime}}</h6>
        <br>
        <v-divider></v-divider>
        <p class="point">{{message.message}} </p>
      </div>
    </v-alert> -->
</div>
        <!-- <v-alert
      shaped
      dark
      color="indigo darken-2"
      v-for="message in Messages" :key="message.Currenttime" 
      width="50%"
    >
    <div v-if="message.full_name === Name" >

    </div>
    <br>
        <h3 class="name-user" >{{message.full_name}}</h3>
        <h6 class="Date">{{message.Currenttime}}</h6>
        <br>
        <v-divider></v-divider>
        <p class="point">{{message.message}} </p>
    </v-alert> -->
       <v-textarea
      color="indigo darken-2"
      label="Message"
      v-model="message"
      placeholder="Type Message...."
    ></v-textarea>
          <v-btn
          class="Btn-Send"
            dark   
            color="indigo darken-2"
            @click="SendMessage()"
          >
            Send
          </v-btn>    
       <router-link to="/sudent-home">
          <v-btn
          
            dark   
            color="indigo darken-2"
          >
            Back
          </v-btn>    
        </router-link> 
      </v-card-text>
    

      <v-card-text color="indigo darken-2" v-if="!Messagesss">
        <v-list-item color="indigo darken-2">
            <v-list-item-icon>
      <v-icon style="font-size: 35px; color: #303F9F">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="font-size: 30px; color: #303F9F">{{Name}}</v-list-item-title>
          </v-list-item>        <br>
        <br>
        <v-spacer></v-spacer>
          <v-btn class="btn btn-lg btn-block"
            dark   
            color="green"
            @click="MessageReceived()"
          >
            Join
          </v-btn>   
          <p></p> 
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
      <br>
      <br>
      <br>
      <br>
    </v-card>
  </template>
  <script>
  import Axios from 'axios';
  import io from "socket.io-client"
  export default {
    data: () => ({
      rules: [v => v.length <= 2000 || 'Max 2000 characters'],
      dialog: false,
      NoticeValue:"",
      Success:false,
      Validate:false,
      AllNotices:[],
      message:"",
      Messagesss:false,
      className:"",
      Messages:[],
      Name:'',
    }),
    methods:{
        MessageReceived(){
          this.Messagesss=true

          this.SocketInstance = io("https://tadzidza-welearnwebappggfg-api.onrender.com")

          this.SocketInstance.on("message:received", (data)=>{
            this.Messages = this.Messages.concat(data)
          })
        },
        SendMessage(){
          const d = new Date()
          const years  = d.getFullYear()
          const day = d.getDate()
          const month = d.getMonth()+1
          const hours = d.getHours()
          const Minutes = d.getMinutes()
           const Fulltime = hours+":"+Minutes    
           const FullDate =  day+"/"+month+"/"+years
            const Message={
                Currenttime: Fulltime,
                CurrentDate: FullDate,
                full_name: this.Name,
                message: this.message,
                className: this.className
            }
            this.SocketInstance.emit("message", Message)
            this.Messages = this.Messages.concat(Message)
            this.message="";
        }
    },
    async created(){
      this.SocketInstance = io("https://tadzidza-welearnwebappggfg-api.onrender.com")
      const response = await Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/text/get/messages`,{
        headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
      } )
        
       this.Messages = response.data
       const Email = localStorage.getItem("Email")
      const Response = await Axios.get(`https://tadzidza-welearnwebappggfg-api.onrender.com/post/studentlogin/${Email}`,{
        headers:{
          Authorization: "Basic " + localStorage.getItem("Tokken")
        }
      } )
        this.Name=Response.data.User.full_name
        this.className=Response.data.User.className

        console.log(this.Name)
  }
  
  }
</script>
<style scoped>
.NoticeHeader{
    text-align: center;
    color: #303F9F;
    font-size: 35px;
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