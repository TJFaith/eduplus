<template >
  <v-row justify="center" class="mode" >
    
    <v-dialog v-model="dialog" draggable=""  style='top: 16px' persistent max-width="600px" >
     <v-btn rounded text width="1" :disabled="showLoading" @click="hideDialogMtd()" color="primary"   class="m-3">
       <v-icon color="" text>fa fa-window-close</v-icon>
       </v-btn>
       
      <v-card class="mx-auto" text>
          <form ref="comunityForm" @submit.prevent="saveCommunityData()">
        <div class="overlayBG">   
            
        <!-- CODE FOR BANNER IMAGE -->
       <v-img v-if="banner_img_preview" :src="banner_img_preview"   height="200px">
          <div class="bannerInput">
        <!-- <v-file-input accept="image/*" name="file"   max-file-size="8"  @change="onFileChange" ref="bannerImage"  label="Upload community Banner"  class="inputIcon" filled prepend-icon="mdi-camera"></v-file-input> -->
        <!-- hide-input -->
        <v-file-input accept="image/*"  name="file"  v-model="community_data.banner" 
          max-file-size="8"  @change="onFileChange" ref="bannerImage"  label="Upload community Banner"  class="inputIcon" filled prepend-icon="mdi-camera"></v-file-input>
        </div>
       </v-img>
        <v-img v-else  src="@/assets/images/defaultBanner.jpg" height="200px">
      
        <div class="bannerInput">
        <v-file-input accept="image/*" name="file"  max-file-size="8"  @change="onFileChange" ref="bannerImage"  label="Upload community Banner"  class="inputIcon" filled prepend-icon="mdi-camera"></v-file-input>
 
        </div>
  
    </v-img>
    </div>
     
     <!-- CODE FOR AVATAR -->
     <v-avatar  class="float-right rounded-circle groupIcon" size="130" tile  @mouseover="opacity=0.46" @mouseleave="opacity=0">
    <v-img v-if="icon_img_preview"   :src="icon_img_preview" >
     <v-overlay
          :opacity="opacity"
        >
        <v-file-input hide-input name="imgfile" v-model="file" ref="icon"  @change="onFileChange2"  v-if="opacity==0.46" filled prepend-icon="mdi-camera"></v-file-input>
     </v-overlay>
        </v-img>

     <v-img v-else src="@/assets/images/about.jpg" >
     <v-overlay
          :opacity="opacity"
        >
        <v-file-input hide-input name="imgfile" v-model="file" @change="onFileChange2" v-if="opacity==0.46" filled prepend-icon="mdi-camera"></v-file-input>
     </v-overlay>
        </v-img>
     </v-avatar>
      
    <v-card-title> 
<v-col cols="6" sm="6" md="7" lg="7">
 <v-text-field
 name="communityTitle"
            label="Title of Community"
            outlined
            width="20"
            :rules="imputRules.text"
            v-model="community_data.title"
             required
          ></v-text-field>
      </v-col>

    </v-card-title>

      <v-card-text >
     <v-textarea

          outlined
          name="communityDescription"
          label="Group Descripption"
          v-model="community_data.description"
          counter=""
          :rules="imputRules.description"
        ></v-textarea>
      </v-card-text>
   <v-card-text >
       <v-col cols="12" sm="12" md="12">       
        <div class="input-group">
            <v-text-field @keyup.enter="addAdmin()" ref="adminEmail" :rules="imputRules.email" v-model="newAdminEmail" clearable label="Add Community Admin" placeholder="type in email address">
            </v-text-field>
              <div class="input-group-prepend mt-4">
                <v-btn @click="addAdmin()"  text icon pre><v-icon>mdi-plus</v-icon></v-btn>
              </div>
        </div>

         <span><b>Community Owner:</b> </span> <span>{{this.$session.get('user_login').email}}</span>
    
        <v-list-group no-action sub-group value="false">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item link v-for="(community_email, index) in community_data.email" :key="index" @click="editAmin = true">
 
            <v-list-item-title>
              
              <span v-if="editAdmin != index">
              {{community_email.email}}<small class="ml-2"><i>{{community_email.status}}</i></small>
              </span>
            
                <div class="input-group" v-if="editAdmin == index" :id="index">
                  <v-text-field :rules="imputRules.email" v-model="community_email.email" clearable label="Add Community Admin" placeholder="type in email address">
                  </v-text-field>
              <div class="input-group-prepend mt-4">
                
                <v-btn @click="updateAdmin(community_email.email, community_email.id,  community_email.community_id)"  text icon pre><v-icon color="success">fa fa-check</v-icon></v-btn>

                <v-btn @click="confirmDelete(community_email.email, community_email.id, community_email.community_id)"  text icon pre><v-icon color="error">fa fa-trash</v-icon></v-btn>
              </div>
           </div>


              </v-list-item-title>
            <v-list-item-icon @click="toggleEdit(index)"><v-icon>fas fa-edit</v-icon></v-list-item-icon>
          
          </v-list-item>

        </v-list-group>
    </v-col>
   </v-card-text>
<v-col cols="12" sm="12" md="12" lg= "7">
        <v-btn @click="hideDialogMtd()" color="error" :disabled="showLoading"  class="mr-6"><v-icon>mdi-save</v-icon> Cancel</v-btn>
        <v-btn type="submit" color="primary">
          <span v-if="!showLoading">
           <v-icon>mdi-save</v-icon> Save
            </span>
            <v-progress-circular color="white" :disabled="showLoading" :size="20" v-if="showLoading"  indeterminate></v-progress-circular>
          
          </v-btn>


  </v-col>


 
          </form>
  
  </v-card>
<!-- <form @submit.prevent="saveCommunityData()">
  <input type="file" name="file" @change="onFileChange()" ref="icon">
  <input type="text" class="form-control" name="title">
  <textarea name="description" id="" cols="30" rows="10"></textarea>
  <input type="submit" value="submit">
</form> -->

    </v-dialog>

    <!-- alert modal -->
    
<v-row justify="center">
  <!-- CONFIRMATION DIALOG -->
    <v-dialog v-model="confirmdialog" persistent max-width="450">
     
      <v-card>
        <v-card-title class="headline" color="success">{{feedbackMessage}}} <v-icon color="success" class="ml-5">fa fa-check</v-icon> </v-card-title>
        <v-card-text v-if="community_data.email.length > 0">An email confirmation was sent to:
         
              <div v-for="(adminEmail, index ) in community_data.email" :key="index">
                {{adminEmail.email}} </div>
          <strong>
          Tell them to login to their email to confirm their Adminship

          </strong>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
         
          <v-btn color="green darken-1" text @click="hideDialogMtd()">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

<!-- EDIT ADMIN DIALOG -->
     <!-- <v-dialog v-model="editAdmin" persistent max-width="450" >
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus sed vitae consequatur similique doloremque eos voluptatum distinctio, maxime deleniti nulla fuga! Odit beatae a, ipsa illum enim consequuntur similique aperiam.
    </v-dialog> -->

  </v-row>
  </v-row>
</template>

<script>
import {bus} from '../main';

export default {
    data(){
        return{
            feedbackMessage:'',
            updatData:false,
            file:null,
            show:false,
            opacity:0,
            dialog:true,
            confirmdialog:false,
            editAdmin:null,
            notifications:true,
            sound:true,
            widgets:true,
            banner_img_preview: null,
            icon_img_preview: null,
            newAdminEmail:"",
            community_data:{title:'',description:'', banner:[]
            , email:[]},
            imputRules:{
              text:[v => v != '' || 'This field is required '],
              description:[d => d.length >= 1 || 'Group discription should be at least 80 character long'],
              email:[v => v=="" || /.+@.+/.test(v) || 'Invalid Email address']
            },
            showLoading:false
            
        }
    },
    computed:{
      
    },
 
      
  
     methods:{
         hideDialogMtd(){
         this.dialog = false;
          bus.$emit('hideDialog', this.dialog);
         },

         onFileChange(e){
            //get image type
          var imageTypeC = '';
          var imgType = e.type.substring(e.type.lastIndexOf("/")+1);


          let imageArr= ['jpeg', 'png' ,'jpg' ,'gif' , 'svg']
           for (let index = 0; index < imageArr.length; index++) {
            if(imgType == imageArr[index]){
              imageTypeC = imageArr[index]
              break;
            }else{
              imageTypeC =''
            }
             
           }
             
             if (imageTypeC !=''){
                if(e.size >= 600000){
                     if(this.banner_img_preview == null){
                        this.banner_img_preview = null;
                      }
                   alert('Image File is too heavy, it should be less than 500kb')

                }else{
                  this.community_data.banner=e
                   this.banner_img_preview= URL.createObjectURL(e);
                 console.log(e)

                   
                }
             }else{
               alert('File Selected is not an image')
             }
             
                

         },

         onFileChange2(e){
            //get image type
          var imageTypeC = '';
          var imgType = e.type.substring(e.type.lastIndexOf("/")+1);


          let imageArr= ['jpeg', 'png' ,'jpg' ,'gif' , 'svg']
           for (let index = 0; index < imageArr.length; index++) {
            if(imgType == imageArr[index]){
              imageTypeC = imageArr[index]
              break;
            }else{
              imageTypeC =''
            }
             
           }
             
             if (imageTypeC !=''){
                if(e.size >= 600000){
                     if(this.icon_img_preview == null){
                        this.icon_img_preview = null;
                      }
                   alert('Image File is too heavy, it should be less than 500kb')

                }else{
                   this.community_data.icon = e
                
                   this.icon_img_preview= URL.createObjectURL(e);
                }
             }else{
               alert('File Selected is not an image')
             }
             
                

         },
        addAdmin(){
          if(this.$refs.adminEmail.validate()){
            if(this.newAdminEmail != ""){
             this.community_data.email.push(
               {
                 email:this.newAdminEmail,
                 status:"pending admin"
               })
           
             this.newAdminEmail =""
       
          }
          }
        
            
        },

        singleData(){
        
      if(this.$route.params.community_id != undefined){
        this.updatData = true;
     let communityID={'c_id':this.$route.params.community_id}
      this.axios.post(this.$hostname+"general_api.php?action=singleCommunity", communityID).then((response)=>{
            // this.communityDATA=response.data
          
            this.community_data.title = response.data.com_data[0].community_name
            this.community_data.description= response.data.com_data[0].community_description
            this.community_data.email = response.data.com_admin

            // this.community_data.email = response.data.com_data[0].email
            // :'', banner:[], email:[]},

          }).catch(error=>{
            alert(error)
          })
      }
      },
    toggleEdit(index){
      // alert(index)
      // alert(this.editAdmin)
      if(this.editAdmin == null){
        this.editAdmin = index
      }else if(this.editAdmin == index){
        this.editAdmin = null
      }else if(this.editAdmin != index){
        this.editAdmin = index
      }
    },
      topAlert(){
           this.$swal.fire({
                icon:'success',
                title:'Email deleted',
                                  toast: true,
                                  position: 'top-end',
                                  showConfirmButton: false,
                                  timer: 3000,
                                  timerProgressBar: true,
                                  didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                                }
         })
      },
      
        // delete admin
         confirmDelete(adminEmail, id, c_id){
          this.$swal.queue([{
            title: 'Are you sure you want to delete'+adminEmail+' from admin list',
            text:id,
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Delete',
            showLoaderOnConfirm: true,
            allowOutsideClick:false,
            preConfirm: () => {
                
                      let adminData={'id':id, 'c_id':c_id}
                      this.axios.post(this.$hostname+"general_api.php?action=deleteAdmin", adminData).then((response)=>{
                          if (response.data.response == 'success'){
                              this.singleData()
                               this.topAlert()
                              }
                          }).catch(error=>{
                            alert(error)
                          })
                    
            }
          }])
          },
          // updateAdmin
          updateAdmin(adminEmail, id, c_id){
                let adminData={'id':id, 'adminEmail':adminEmail,  'c_id':c_id}
          
                this.axios.post(this.$hostname+"general_api.php?action=updateAdmin", adminData).then((response)=>{
                  
                 
                  if(response.data.response =='success'){
                    this.singleData()
                     this.topAlert()
                     this.editAdmin=null

                  }
                  }).catch(error=>{
                    alert(error)
                  })
            
          },
         saveCommunityData(){
       
          //  if(this.$refs.comunityForm.validate()){
             this.showLoading = true


              this.community_data.communityOwner = this.$session.get('user_login').email
              this.community_data.user_id = this.$session.get('user_login').id
            if(this.updatData == false){
              this.axios.post(this.$hostname+"general_api.php?action=newComunity", this.community_data).then((response)=>{
               if (response.data.response == 'success'){
                //  reset form
                this.feedbackMessage = 'Community Created Successfuly'
                this.confirmdialog= true;
                  bus.$emit('getComunity');
               }
               this.showLoading = false;

               }).catch(error=>{
                    this.showLoading = false;
                        alert(error)
                    })

            }else if(this.updatData == true){
              this.community_data.community_id = this.$route.params.community_id
              

              this.axios.post(this.$hostname+"general_api.php?action=updateComunity", this.community_data).then((response)=>{
               this.showLoading = false;
              

              if (response.data.response == 'success'){
                //  reset form
                this.feedbackMessage = 'Community Updated Successfuly'
                this.confirmdialog= true;
                  bus.$emit('getComunity');
               }
               }).catch(error=>{
                    this.showLoading = false;
                        alert(error)
                    })

            }

          //  }
         },

       
       toFormData(obj){
            var fd = new FormData();
                for(var i in this.$route.params.community_idobj){
                    fd.append(i,obj[i]);
            }
            return fd;
        },

// community admins
     },
    
    created(){
     
      this.singleData()
    }
}
</script>

<style scoped >
.groupIcon{
  position: absolute;
  right: 0;
 
  transform: translate(-30%, -50%);
}

.bannerInput{
  /* position: absolute; */
  width:25em;
  height: 5em;
   margin: auto;
   text-align: center;
  transform: translate(0%, 4em);
  padding:1%;
  color: #fff;
  /* background-color: rgba(0, 0, 0, .5); */
  border-radius: 200em;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
}
.inputIcon{
  right: 0;
  left:0;
  top:0;
  bottom: 0;
  transform: translate(1.3rem, 0.3rem);
  margin:0;
  padding: 0;

}

.overlayBG{
  border-top:3px solid blue;
 
}

</style>