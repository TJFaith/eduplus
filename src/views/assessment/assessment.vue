<template>
  <div>
    <app-header></app-header>
    {{$route.params.id}}

  </div>
</template>

<script>


export default {
  data(){
      return{

      }
  },
  methods:{
    getID(){
    this.axios.get(this.$hostname + 'primary_api.php?action=get_assessment').then((response)=>{
     console.log(response)
    })
    }
  },
  mounted(){
    this.getID();
  },
  created(){

  }
}
</script>
