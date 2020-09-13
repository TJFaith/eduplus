<template >
  <v-row justify="center" class="mode" >
    <v-dialog v-model="dialog" draggable=""  style='top: 16px' persistent max-width="600px" >
      <v-card class="mx-auto" text>
        <div class="overlayBG">   
        
       <v-img v-if="banner_img_preview" :src="banner_img_preview"   height="200px"/>
        <v-img v-else  src="@/assets/images/defaultBanner.jpg" height="200px">
      
        <div class="bannerInput">
        <v-file-input  @change="onFileChange" ref="bannerImage"  label="Upload community Banner"  class="inputIcon" filled prepend-icon="mdi-camera"></v-file-input>
 
        </div>
  
    </v-img>
    </div>
     
     <v-avatar  class="float-right rounded-circle groupIcon" size="130" tile  @mouseover="opacity=0.46" @mouseleave="opacity=0">
     <v-img  src="@/assets/images/about.jpg" >
     <v-overlay
          :opacity="opacity"
        >
        <v-file-input hide-input  v-if="opacity==0.46" filled prepend-icon="mdi-camera"></v-file-input>
     </v-overlay>
        </v-img>
     </v-avatar>
      
    <v-card-title> 
<v-col cols="6" sm="6" md="7" lg="7">
 <v-text-field
            label="Title of Community"
            outlined
            width="20"
          ></v-text-field>
      </v-col>

    </v-card-title>

      <v-card-text >
     <v-textarea
          outlined
          name="input-7-4"
          label="Group Descripption"
          value=""
        ></v-textarea>
      </v-card-text>

   <v-card-text >
       <v-col cols="12" sm="12" md="12">
      
         
<div class="input-group">
    <v-text-field  label="Add Community Admin" placeholder="type in email address">
    </v-text-field>
      <div class="input-group-prepend mt-4">
        <v-btn  text icon pre><v-icon>mdi-plus</v-icon></v-btn>
      </div>
</div>

        </v-col>
   </v-card-text>
        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item link>
            <v-list-item-title>tjbenbiz@gmail.com</v-list-item-title>
            <v-list-item-icon><v-icon>mdi-delete</v-icon></v-list-item-icon>
          </v-list-item>

             <v-list-item link>
            <v-list-item-title>tjbenbiz@gmail.com</v-list-item-title>
            <v-list-item-icon><v-icon>mdi-delete</v-icon></v-list-item-icon>
          </v-list-item>
             <v-list-item link>
            <v-list-item-title>tjbenbiz@gmail.com</v-list-item-title>
            <v-list-item-icon><v-icon>mdi-delete</v-icon></v-list-item-icon>
          </v-list-item>
     
</v-list-group>




 
  </v-card>
<v-col cols="6" sm="6" md="7" lg="7">
        <v-btn @click="hideDialogMtd()" color="error"  text class="mr-6"><v-icon>mdi-save</v-icon> Cancel</v-btn>
        <v-btn  text><v-icon>mdi-save</v-icon> Save</v-btn>


  </v-col>

    </v-dialog>
  </v-row>
</template>

<script>
import {bus} from '../main';

export default {
    data(){
        return{
            show:false,
            opacity:0,
            dialog:true,
            notifications:true,
            sound:true,
            widgets:true,
            banner_img_preview: null
        }
    },
  
     methods:{
         hideDialogMtd(){
         this.dialog = false;
          bus.$emit('hideDialog', this.dialog);
         },

         onFileChange(e){
           console.log(e)

      //          let file = e;
      //          file
      // //  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i; 
      //  var file_type = this.$refs.bannerImage.value
      //  file_type
      //  console.log(this.$refs.bannerImage)
      //  if (!allowedExtensions.exec(file_type)) { 
      //    this.$refs.bannerImage.value = null;
      //    this.banner_img_preview = null;
      //           alert('Invalid file type'); 
      //           return false; 
            // } else{
            //   if(e.size >= 600000){
            //      this.$refs.file.value = null;
            //      if(this.banner_img_preview == null){
            //       this.banner_img_preview = null;

            //      }
                // alert('Image File is too heavy, it should be less than 500kb')
              // }else{
              //   this.banner_img_preview= URL.createObjectURL(file);

              // }
            // }

         }
     },
    created(){

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