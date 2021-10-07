<template>
  <div class="dashboard">
    <h1 class="subheading grey --text lighten-3">Dashboard</h1>

<v-container class="my-5">

  <v-row class="mb-3 ml-3">
    <v-tooltip top>
      <template v-slot:activator="{on}">
        <v-btn small color="grey lighten-3 mr-4" @click="sortBy('title')" v-on="on">
          <v-icon left small>mdi-folder</v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>
      </template>
      <span>Sorts projects by name</span>
    </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{on}">
        <v-btn small color="grey lighten-3" @click="sortBy('person')" v-on="on">
          <v-icon left small>mdi-account</v-icon>
          <span class="caption text-lowercase">By person</span>
         </v-btn>
        </template>
      <span>Sorts projects by person</span>
    </v-tooltip> 
  </v-row>

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
import db from '../views/fb'

  export default {
    name: 'Dashboard',
    data() {
      return {
      projects: []
      }
    },
    methods: {
      sortBy(prop){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
    },
    created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges()

        changes.forEach(change => {
          if (change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
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