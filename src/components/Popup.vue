<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green lighten-3"
          v-bind="attrs"
          v-on="on"
        >
          Add new Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h6 grey lighten-2 flex justify-center">
          <h2>Add a New Project</h2>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
          
          <v-menu max-width="290">
              <template v-slot:activator="{ on }">
                  <v-text-field :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" v-on="on" :rules="inputRules"></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
            <v-spacer></v-spacer>

          <v-card-actions>
            <v-btn
              color="green lighten-2"  
              @click="submit()"
              :loading="loading"
            >
              Add project
            </v-btn>
         </v-card-actions>
         </v-form>
        </v-card-text>

        <v-divider></v-divider>


      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from 'moment'
import db from '../views/fb'

  export default {
    name: 'Popup',
    data() {
      return {
        dialog: false,
        title : '',
        content: '',
        due: null,
        inputRules: [
          v =>  v && v.length >= 3 || 'Minimum length is 3 characters'
        ],
        loading: false
      }
    },
    methods:{
      submit() {
        if (this.$refs.form.validate()){
          this.loading = true
          const project = {
            title: this.title,
            content: this.content,
            due: moment(this.due).format("Do MMMM YYYY"),
            person: 'Sniss Ninja',
            status: 'ongoing'
          }
          db.collection('projects').add(project).then(()=>{
            console.log('Success,added to the db!')
            this.loading = false
            this.dialog = false
            this.$emit('projectAdded')
          })
        }
          // this.title = ''
          // this.content = ''
          // this.due = null
          // this.status = ''
      }
    },
    computed: {
    formattedDate() {
      return this.due ? moment(this.due).format("Do MMMM YYYY") : "";
    }
  }
  }
</script>

<style lang="scss" scoped>

</style>