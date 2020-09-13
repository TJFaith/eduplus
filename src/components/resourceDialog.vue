<template>
 <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="hideDialogMtd">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="hideDialogMtd">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {bus} from '../main';

export default {
    data(){
        return{
            dialog:this.showdialog,
            notifications:false,
            sound:false,
            widgets:false
        }
    },
  props: ['showdialog'],
  methods:{
     hideDialogMtd(){
         this.dialog = false;
          bus.$emit('hideResourceDialog', this.dialog);
      }
  }
}
</script>

<style>

</style>