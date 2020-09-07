<template>

<div class="loader">
    
        <img class="rounded-circle" style="width:30%" src="@/assets/images/loader.gif" alt="">
    </div>

    
</template>
<script>
import {bus} from '../main';
export default {
    data(){
        return{
            loader:false
        } 
    },
    created(){
        bus.$on('loader',(data)=>{
            this.loader= data;
        })
    }
}
</script>

<style scoped>
.loader {
    position: absolute;
    top:50%;
    left: 45%;
    z-index: 100;
}

</style>