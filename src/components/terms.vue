<template>
  <div class="text-center">
 
    <v-bottom-sheet
      v-model="showTerms"
      dark


    >
     
     
      
      <v-sheet
        class="text-jsutify px-5"

        height="70vh"
         
      >
        <v-btn
          class="mt-6"
          text
          color="white"
          @click="closeTerms()"
        >
          <v-icon>fas fa-times</v-icon>
        </v-btn>
        <div class="py-3"  style="height:50vh; overflow-y:scroll">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum et voluptatibus cumque obcaecati amet molestiae mollitia distinctio, voluptates dignissimos necessitatibus sunt culpa. Deserunt non laboriosam voluptatem similique earum quisquam dicta?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit minima cupiditate, dignissimos veritatis deleniti facere, ullam, ipsam iusto voluptatibus adipisci porro earum libero. Iusto debitis ipsam doloremque aperiam officia minima.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corrupti sed libero deleniti sint rerum minus asperiores, nulla, est, nisi quia necessitatibus quam hic reiciendis nam temporibus alias quod facilis!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias doloribus quae, neque, labore officiis debitis vero sint saepe inventore unde dicta sequi temporibus, nulla iste at. Modi corrupti voluptatum odio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam repellat autem temporibus dolores similique, unde quos laboriosam perspiciatis fugiat velit quis optio recusandae quam, sit nostrum laborum consectetur illum.

               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum et voluptatibus cumque obcaecati amet molestiae mollitia distinctio, voluptates dignissimos necessitatibus sunt culpa. Deserunt non laboriosam voluptatem similique earum quisquam dicta?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit minima cupiditate, dignissimos veritatis deleniti facere, ullam, ipsam iusto voluptatibus adipisci porro earum libero. Iusto debitis ipsam doloremque aperiam officia minima.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corrupti sed libero deleniti sint rerum minus asperiores, nulla, est, nisi quia necessitatibus quam hic reiciendis nam temporibus alias quod facilis!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias doloribus quae, neque, labore officiis debitis vero sint saepe inventore unde dicta sequi temporibus, nulla iste at. Modi corrupti voluptatum odio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam repellat autem temporibus dolores similique, unde quos laboriosam perspiciatis fugiat velit quis optio recusandae quam, sit nostrum laborum consectetur illum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum et voluptatibus cumque obcaecati amet molestiae mollitia distinctio, voluptates dignissimos necessitatibus sunt culpa. Deserunt non laboriosam voluptatem similique earum quisquam dicta?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit minima cupiditate, dignissimos veritatis deleniti facere, ullam, ipsam iusto voluptatibus adipisci porro earum libero. Iusto debitis ipsam doloremque aperiam officia minima.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corrupti sed libero deleniti sint rerum minus asperiores, nulla, est, nisi quia necessitatibus quam hic reiciendis nam temporibus alias quod facilis!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias doloribus quae, neque, labore officiis debitis vero sint saepe inventore unde dicta sequi temporibus, nulla iste at. Modi corrupti voluptatum odio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam repellat autem temporibus dolores similique, unde quos laboriosam perspiciatis fugiat velit quis optio recusandae quam, sit nostrum laborum consectetur illum.

               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum et voluptatibus cumque obcaecati amet molestiae mollitia distinctio, voluptates dignissimos necessitatibus sunt culpa. Deserunt non laboriosam voluptatem similique earum quisquam dicta?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit minima cupiditate, dignissimos veritatis deleniti facere, ullam, ipsam iusto voluptatibus adipisci porro earum libero. Iusto debitis ipsam doloremque aperiam officia minima.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corrupti sed libero deleniti sint rerum minus asperiores, nulla, est, nisi quia necessitatibus quam hic reiciendis nam temporibus alias quod facilis!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias doloribus quae, neque, labore officiis debitis vero sint saepe inventore unde dicta sequi temporibus, nulla iste at. Modi corrupti voluptatum odio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam repellat autem temporibus dolores similique, unde quos laboriosam perspiciatis fugiat velit quis optio recusandae quam, sit nostrum laborum consectetur illum.
        </div>
          <v-checkbox
     
      label="Click to agree"
      required
 @click="closeTerms()"
    ></v-checkbox>

      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
<script>
import {bus} from '../main';


export default{
    props:['showTerms'],
    data(){
        return{
            
        }
    },
    computed:{
        // showTermsComputed(){
        //     return this.showTerms
        // }
    },
    methods:{
        closeTerms(){
            this.showTerms = !this.showTerms
          bus.$emit('showTerms', this.showTerms);
          console.log(this.showTerms)

            
        }
    },
    created(){
    }
}
</script>

<style scoped>

</style>