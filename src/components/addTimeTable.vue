<template>
  <div>
  <div v-show="NotAuthorized" elevation="0">
      <h1 style="text-align:center"><i>You are not authorized to use this page</i></h1>
    </div>
          
  <v-card
  v-show="!NotAuthorized"
    class="mx-auto mt-8"
    max-width="1100"
    elevation="0"
  
  >         
 
  <template >
       
       <v-card     elevation="9" max-width="1000" class="ml-5 mr-5" v-show="!Success">
        <br>
        <br>
        <div class="mr-3 ml-3">
          <br>
          <br>
         <h2 class="text-success"> <i>Time Table of your class is successfull saved</i> </h2>
         <br>
         <br>
       <router-link to="/student-account" >
         <v-btn
         class="btn btn-block btn-success"
           dark   
           color="green"
         >
           View Timetable
         </v-btn>    
       </router-link>
       <p></p>
       <router-link to="/teachers-home">
         <v-btn
         class="btn btn-lg btn-block btn btn-success"
           dark   
           color="indigo darken-2"
         >
           Back
         </v-btn>    
       </router-link>
       <br>
        </div>
       
       <br>
       <br>
       </v-card>
      
   </template>


           
  <template >
       
       <v-card     elevation="9" max-width="1000" class="ml-5 mr-5" v-show="!ViewClass">
        <br>
        <br>
        <div class="mr-3 ml-3">
          <br>
         <h2 class="text-success"> <i>Time Table of your class already exist Please Update the time table</i> </h2>
         <br>
         <br>
       <router-link to="/student-account" >
         <v-btn
         class="btn btn-block btn-success"
           dark   
           color="green"
         >
           Update Timetable
         </v-btn>    
       </router-link>
       <p></p>
       <router-link to="/teachers-home">
         <v-btn
         class="btn btn-lg btn-block btn btn-success"
           dark   
           color="indigo darken-2"
         >
           Back
         </v-btn>    
       </router-link>
       <br>
        </div>
        <br>
       
       <br>
       <br>
       </v-card>
      
   </template>

   
<v-card
    elevation="9"
    max-width="1000"
    v-show="!Subjects"
>

<h1 style="font-size: 48px;" class="signInHeader">Enter Results</h1>

       <v-divider></v-divider>
       
    <v-card  class="ml-4 ml-4" elevation="0" >

          <v-list-item >
            <v-list-item-action>
              <v-icon  style="font-size: 30px; color: #303F9F;">mdi-home-circle</v-icon>
            </v-list-item-action>

            <v-list-item-content >
              <v-list-item-title class="signInHeader1"> CLASS : {{className}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
<template>
  <v-form v-model="valid" ref="form" @submit.prevent="handleSubmit">  
<v-table>
  <table id="customers">
  <tr>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wedneday</th>
    <th>Thursday</th>
    <th>Friday </th>
  </tr>
  <tr >
    <td>               <v-select
                v-model="Form.Monday1"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select></td>
    <td>       
      
      <v-select
                v-model="Form.Tuesday1"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
    </td>  <td>               <v-select
                v-model="Form.Wednesday1"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select></td>
                <td>                <v-select
                v-model="Form.Thursday1"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select></td>
                <td>              <v-select
                v-model="Form.Friday1"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select></td>
  </tr>  <tr >
    <td> <v-select
                v-model="Form.Monday2"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select></td>
    <td>              <v-select
                v-model="Form.Tuesday2"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select></td>  <td>                 <v-select
                v-model="Form.Wednesday2"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select></td>
                <td>             
                  <v-select
                v-model="Form.Thursday2"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
                     </td>
                <td>           
                  
                         
                  <v-select
                v-model="Form.Friday2"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select></td>
  </tr>
  <tr >
    <td>     
                    <v-select
                v-model="Form.Monday3"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
            </td>
    <td>              
      <v-select
                v-model="Form.Tuesday3"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
  </td>  
  <td>            
    <v-select
                v-model="Form.Wednesday3"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
</td>
                <td>   
                  <v-select
                v-model="Form.Thursday3"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
</td>
                <td>        

                  <v-select
                v-model="Form.Friday3"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
</td>
  </tr>
  <tr >
    <td> 
                  <v-select
                v-model="Form.Monday4"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
            </td>
    <td>        
      
      <v-select
                v-model="Form.Tuesday4"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
</td>  <td>             
  
  <v-select
                v-model="Form.Wednesday4"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
</td>
                <td>                
                  

                  <v-select
                v-model="Form.Thursday4"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
              </td>
                <td>               
                  
                  <v-select
                v-model="Form.Friday4"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
  </td>
  </tr>
  <tr >
    <td> 
      
      <v-select
                v-model="Form.Monday5"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>  
    </td>
    <td>              
      
      <v-select
                v-model="Form.Tuesday5"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select> 
      </td>  <td>             
        <v-select
                v-model="Form.Wednesday5"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select> 
           </td>
                <td>        
                  <v-select
                v-model="Form.Thursday5"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
            </td>
                <td>              
                  <v-select
                v-model="Form.Friday5"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>                 
    </td>
      </tr>
      <tr >
    <td> 
      
      <v-select
                v-model="Form.Monday6"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>       
    </td>
    <td>               
      <v-select
                v-model="Form.Tuesday6"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>      
        </td>  <td>                
          <v-select
                v-model="Form.Wednesday6"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>  
        </td>
                <td>                
                  <v-select
                v-model="Form.Thursday6"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>  
        </td>
                <td>  
                  
                  <v-select
                v-model="Form.Friday6"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select> 
  </td>
  </tr>
  <tr >
    <td> 
      <v-select
                v-model="Form.Monday7"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select> 
            </td>
    <td>   
      
      <v-select
                v-model="Form.Tuesday7"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
      
      </td>  <td>            
        <v-select
                v-model="Form.Wednesday7"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
        </td>
                <td>   
                  
                  <v-select
                v-model="Form.Thursday7"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select></td>
                <td>                
                  <v-select
                v-model="Form.Friday7"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
              </td>
  </tr>
  <tr >
    <td> 
      
      <v-select
                v-model="Form.Monday8"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
</td>
    <td>                
      <v-select
                v-model="Form.Tuesday8"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
        </td>  <td>              
                <v-select
                v-model="Form.Wednesday8"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
      </td>
                <td>       
                  <v-select
                v-model="Form.Thursday8"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
            </td>
                <td>              
                  <v-select
                v-model="Form.Friday8"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
      </td>
  </tr>
  <tr >
    <td>                   <v-select
                v-model="Form.Monday9"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
    </td>
    <td>            
          <v-select
                v-model="Form.Tuesday9"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select></td>  <td>         
                <v-select
                v-model="Form.Wednesday9"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
              </td>
                <td>    
                  <v-select
                v-model="Form.Thursday9"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
              </td>
                <td>        
                  <v-select
                v-model="Form.Friday9"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
            </td>
  </tr>
  <tr >
    <td>                   <v-select
                v-model="Form.Monday10"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
      </td>
    <td>               
      <v-select
                v-model="Form.Tuesday10"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
      
      </td>  <td>    
        
        <v-select
                v-model="Form.Wednesday10"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select></td>
                <td>                
                          <v-select
                v-model="Form.Thursday10"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
             </td>
                <td>                
                  <v-select
                v-model="Form.Friday10"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
              </td>
  </tr>
  <tr >
    <td> 
      <v-select
                v-model="Form.Monday11"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
        </td>
    <td>               
      
      <v-select
                v-model="Form.Tuesday11"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
      </td>  <td>               
        
        <v-select
                v-model="Form.Wednesday11"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
            </td>
                <td>                
                  <v-select
                v-model="Form.Thursday11"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>        
          </td>
                <td>               
                  <v-select
                v-model="Form.Friday11"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
            </td>
  </tr>
  <tr >
    <td>
      
      <v-select
                v-model="Form.Monday12"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>
    </td>
    <td>              
      <v-select
                v-model="Form.Tuesday12"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select></td>  <td>             
                <v-select
                v-model="Form.Wednesday12"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select>  
                </td>
                <td>                
                  <v-select
                v-model="Form.Thursday12"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select> 
              </td>
                <td>              
                  
                  <v-select
                v-model="Form.Friday12"
                :rules="requiredRule"
                :items="['Mat', 'Acc', 'Eng','Bio', 'His', 'Sho', 'Phy', 'Sci', 'Geo', 'Agr', 'His']"
                label="Subject"
                required
              ></v-select> 
            </td>
  </tr>
</table>
</v-table>
<br>
<v-btn
      color="green"
      class="btn-lg btn-block mr-4"
      style="width: 95%;"
      type="submit"
      dark
    >
      Post
    </v-btn>
  </v-form>

</template>

<br>
    </v-card>
    <br>
    <router-link to="/teachers-home">
    <v-btn
      depressed
      dark
      color="indigo darken-2"
      style="width: 94%;"
     class="btn-lg btn-block ml-4" >
      Back
    </v-btn></router-link>
    <br>
    <br>

</v-card>

  </v-card>
</div>
</template>
<script>
    import Axios from 'axios';

  export default {
    data: () => ({      
      Form:{
        Monday1: '',
        Tuesday1: '',
        Wednesday1: '',
        Thursday1:'',
        Friday1: '',
        

        Monday2: '',
        Tuesday2: '',
        Wednesday2: '',
        Thursday2:'',
        Friday2: '',

        Monday3: '',
        Tuesday3: '',
        Wednesday3: '',
        Thursday3:'',
        Friday3: '',

        Monday4: '',
        Tuesday4: '',
        Wednesday4: '',
        Thursday4:'',
        Friday4: '',

        Monday5: '',
        Tuesday5: '',
        Wednesday5: '',
        Thursday5:'',
        Friday5: '',

        Monday6: '',
        Tuesday6: '',
        Wednesday6: '',
        Thursday6:'',
        Friday6: '',

        Monday7: '',
        Tuesday7: '',
        Wednesday7: '',
        Thursday7:'',
        Friday7: '',

        Monday8: '',
        Tuesday8: '',
        Wednesday8: '',
        Thursday8:'',
        Friday8: '',

        Monday9: '',
        Tuesday9: '',
        Wednesday9: '',
        Thursday9:'',
        Friday9: '',

        Monday10: '',
        Tuesday10: '',
        Wednesday10: '',
        Thursday10:'',
        Friday10: '',

        Monday11: '',
        Tuesday11: '',
        Wednesday11: '',
        Thursday11:'',
        Friday11: '',

        Monday12: '',
        Tuesday12: '',
        Wednesday12: '',
        Thursday12:'',
        Friday12: '',

},
valid: false,
    value: '',
    requiredRule: [
      v => !!v || 'This is required',
    ],
    className:'',

      Students:[],
      show: false,
       dialog: false,
       Subjects:false,
        dialogs: false,
        ViewClass: true,
        showBtn:true,
        Success: true,
        NotAuthorized: false,
        showCheckbox:false
    }),
    methods:{
      handleSubmit() {
      this.$refs.form.validate();
      if(!this.valid) {
        console.log("validation error")
      }
      else{

        const newForm={
        ClassName: this.className,
        Monday:[{
        Subject: this.Form.Monday1,
    },
    {
        Subject: this.Form.Monday2,
    },
    {
        Subject: this.Form.Monday3
    },
    {
        Subject: this.Form.Monday4
    },
    {
        Subject: this.Form.Monday5
    },
    {
        Subject: this.Form.Monday6
    },
    {
        Subject: "Break",
    },
    {
        Subject: this.Form.Monday7
    },
    {
        Subject: this.Form.Monday8
    },
    {
        Subject: this.Form.Monday9,
    },
    {
        Subject: this.Form.Monday10
    },
    {
        Subject: this.Form.Monday11
    },
    {
        Subject: this.Form.Monday12
    },
  ],
  Tuesday:[{
        Subject: this.Form.Tuesday1    },
    {
        Subject: this.Form.Tuesday2
    },
    {
        Subject: this.Form.Tuesday3
    },
    {
        Subject: this.Form.Tuesday4,
    },
    {
        Subject: this.Form.Tuesday5,
    },
    {
        Subject: this.Form.Tuesday6,
    },
    {
        Subject: "Break",
    },
    {
        Subject: this.Form.Tuesday7,
    },
    {
        Subject: this.Form.Tuesday8,
    },
    {
        Subject: this.Form.Tuesday9,
    },
    {
        Subject: this.Form.Tuesday10
    },
    {
        Subject: this.Form.Tuesday11
    },
    {
        Subject: this.Form.Tuesday12
    },
  ],

  Wednesday:[{
        Subject: this.Form.Wednesday1
    },
    {
        Subject: this.Form.Wednesday2    },
    {
        Subject: this.Form.Wednesday3
    },
    {
        Subject: this.Form.Wednesday4
    },
    {
        Subject: this.Form.Wednesday5
    },
    {
        Subject: this.Form.Wednesday6,
    },
    {
        Subject: "Break",
    },
    {
        Subject: this.Form.Wednesday7    },
    {
        Subject: this.Form.Wednesday8
    },
    {
        Subject: this.Form.Wednesday9,
    },
    {
        Subject: this.Form.Wednesday10
    },
    {
        Subject: this.Form.Wednesday11
    },
    {
        Subject: this.Form.Wednesday12
    },
  ],

  Thursday:[{
        Subject: this.Form.Thursday1
          },
    {
        Subject: this.Form.Thursday2
    },
    {
        Subject: this.Form.Thursday3
    },
    {
        Subject: this.Form.Thursday4,
    },
    {
        Subject: this.Form.Thursday5,
    },
    {
        Subject: this.Form.Thursday6,
    },
    {
        Subject: "Break",
    },
    {
        Subject: this.Form.Thursday7
          },
    {
        Subject: this.Form.Thursday8
    },
    {
        Subject: this.Form.Thursday9,
    },
    {
        Subject: this.Form.Thursday10
    },
    {
        Subject: this.Form.Thursday11
    },
    {
        Subject: this.Form.Thursday12
    },
  ],

  Friday:[{
        Subject: this.Form.Friday1
    },
    {
        Subject: this.Form.Friday2
    },
    {
        Subject: this.Form.Friday3    },
    {
        Subject: this.Form.Friday4
    },
    {
        Subject: this.Form.Friday5
    },
    {
        Subject: this.Form.Friday6
    },
    {
        Subject: "Break",
    },
    {
        Subject: this.Form.Friday7,
    },
    {
        Subject: this.Form.Friday8    },
    {
        Subject: this.Form.Friday9,
    },
    {
        Subject: this.Form.Friday10
    },
    {
        Subject: this.Form.Friday11
    },
    {
        Subject: this.Form.Friday12
    },
  ]
      }
      
      Axios.post('http://localhost:5050/post/post/classtimetable', newForm)
        .then( (response)=>{
          console.log(response.data)
          if(response.data=="Class timetable is successfully saved"){
            this.Success = false
            this.Subjects=true
            this.ViewClass = true
          }
          else if(response.data=="The Class already exist so please update it"){
           this.ViewClass = false
           this.Success = true
           this.Subjects = true
          }
          else{
            console.log("An error occured")
          }
        })
      }
    } 
  },
    async created(){
        const Email = localStorage.getItem("Email")
        const response =await Axios.get(`http://localhost:5050/post/teacherlogin/${Email}`,{
          headers:{
            Authorization: "Basic " + localStorage.getItem("Tokken")
          }
        } )
          this.className=response.data.User.className
          const full_name=response.data.User.Name
          console.log(this.className)
          if(full_name===null){
            this.NotAuthorized=true
            this.Subjects=false
          }
          const newFormForm = {
            ClassName: this.className
          }
          Axios.post('http://localhost:5050/post/TimeTable/findone', newFormForm)
        .then( (response)=>{
          console.log(response.data.User.ClassName)
         if(response.data.User.ClassName!=null){
           this.ViewClass = false
           this.Success = true
           this.Subjects = true
          }
          else{
            console.log("An error occured")
          }
        })

    }
  }
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 95%;
  position: inherit;
  table-layout: fixed;
  margin-right: 10px;

}

#customers td, #customers th {
  border: 2px solid #283593;
  position: inherit;
  padding: 1px;
  font-size: 18px;
}
.signInHeader1{
  color:  #303F9F;
}

#customers tr:nth-child(even){background-color: whitesmoke;}

#customers tr:hover {background-color: #9fa5cc;}

#customers th {

  text-align: center;
  background-color: #283593;
  color: white;
}
</style>
