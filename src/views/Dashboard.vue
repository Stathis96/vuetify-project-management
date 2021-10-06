<template>
  <div class="dashboard">
    <h1 class="subheading grey --text lighten-3">Dashboard</h1>

<v-container class="my-5">

   <v-card flat class="pa-5 ma-2" v-for="project in projects" :key="project.title">
   <v-row row wrap :class="`pa-3 project ${project.status}`">
     <v-col cols="12" md="6">
       <div class="caption grey--text">Project Title</div>
       <div>{{project.title}}</div>
       </v-col>
       <v-col xs="2">
         <div class="caption grey--text">Person</div>
       <div>{{project.person}}</div>
       </v-col>
          <v-col xs="2">
         <div class="caption grey--text">Due Date</div>
       <div>{{project.due}}</div>
       </v-col>
        <v-col xs="2">
         <div class="float-right">
           <v-chip :class="`${project.status} white--text caption my-2`">
             {{project.status}}
           </v-chip>
         </div>
       </v-col>
  </v-row>
  <!-- <v-divider></v-divider> -->
</v-card>

 </v-container>   
  </div>
</template>

<script>

  export default {
    name: 'Dashboard',
    data() {
      return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2021', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2020', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2022', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
      }
    }
  }
</script>

<style>
.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid #ffaa2c;
}
.project.overdue{
  border-left: 4px solid #f83e70;
}
.v-chip.ongoing {
    background: #fed330 !important;
  }
  .v-chip.complete {
    background: #26de81 !important;
  }
  .v-chip.overdue {
    background: #fc5c65 !important;
  }
</style>