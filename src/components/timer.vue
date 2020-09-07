<template>
<div>
  <span  :class="{redColor , timer}">
    {{countDownTime}}
  
  </span>
</div>
</template>

<script>
import {bus} from '../main';

    export default {

        data() {
            return {
                timerCount: this.timeInterval,
                countDownTime:'',
                timerData :{
                    hours:null,
                    minutes:null,
                    seconds:null,
                },
                

                redColor:false,
                timer:true
            }
        },
        
        props: ['timeInterval'],

        watch: {
 
            timerCount: {
                handler(value) {
                   
                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                           
                        //    Hours
                            this.timerData.hours = (this.timerCount / 3600);
                            let rhours = Math.floor(this.timerData.hours);
                            if(rhours <10){
                                rhours = "0" + rhours
                            }

                        //  Minutes
                            this.timerData.minutes = (this.timerData.hours - rhours) * 60;
                            let rminutes = Math.floor(this.timerData.minutes);
                            if (rminutes < 10){
                                rminutes = "0" + rminutes
                            }

                        // Seconds
                            this.timerData.seconds = (this.timerData.minutes - rminutes)  * 60;
                            let rseconds = Math.round(this.timerData.seconds)
                            if (rseconds >59){
                                rseconds = '00';
                            }else if(rseconds <10 ){
                                rseconds = "0" + rseconds
                            }
                            this.countDownTime =  rhours + " : " + rminutes + " : " + rseconds 
                            if (rhours == 0 && rminutes == 0 && rseconds <= 59){
                                this.redColor = true
                            }
                            let timerData = {rhours:rhours, rminutes:rminutes, rseconds:rseconds}
                        bus.$emit('timer', timerData);

                        }, 1000);
                    }

                },
                immediate: true // This ensures the watcher is triggered upon creation
            }

        }
    }

</script>

<style scoped>
.timer{
    font-family: sans-serif;
    font-weight: bolder;
    font-size: x-large;
    text-shadow: 0px 3px 5px #ff0000;
}
.redColor{
    color: #ff0000;
    text-shadow: 0px 3px 5px black;

}
</style>