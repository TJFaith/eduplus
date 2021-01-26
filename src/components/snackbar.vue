<template>
     <v-snackbar
      v-model="showSnackbarAlert"
      color="red"
    >
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="showSnackbarAlert = false"
        >
          <v-icon>fas fa-times</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
</template>
<script>
export default {
    props:['message', 'showSnackbarAlert'],
    data(){
        return{
        
        }
    }
}
</script>
<style scoped>

</style>