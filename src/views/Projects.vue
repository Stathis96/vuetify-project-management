<template>
  <div class="projects">
    <h1 class="subheading grey --text lighten-3">This is a projects page</h1>



    <v-container class="my-5">

      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.id">
          <v-expansion-panel-header>
            {{project.title}}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">Due by {{project.due}}</div>
             <div>{{project.content}}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from '../views/fb'
export default {
  data() {
    return {
      projects: []
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Sniss Ninja' && project.status != 'complete'
      })
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