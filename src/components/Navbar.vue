<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" top color="green ligthen-1">
      <span>Awesome! You added a new project.</span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

     <v-app-bar flat app> 
        <v-app-bar-nav-icon class="grey--text" 
        @click="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Project</span>
          <span>Management</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- DropdownMenu -->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              
              dark
              v-bind="attrs"
              v-on="on"
            >
            <v-icon left>mdi-chevron-down</v-icon>
              Menu
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="link in links" :key="link.id" router :to="link.route"
            >
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn  class="grey lighten-3">
          <span>Sign Out</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
     </v-app-bar>

      <v-navigation-drawer v-model="drawer" app class="indigo lighten-1">
        <v-row justify="center">
          <v-col class="mt-5" cols="6">
            <v-avatar size="100">
              <img src="/avatar-1.jpg">
            </v-avatar>
            <p class="white--text caption mt-2 ml-3">Sniss Ninja</p>
          </v-col>
          <v-col class="ml-9 mb-4">
            <Popup @projectAdded="snackbar = true"/>
          </v-col>
        </v-row>
        <v-list>
          <v-list-item  class="ma-3" v-for="link in links" :key="link.id" router :to="link.route">
            <v-list-item-action>
              <v-icon class="white--text">{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup.vue'
export default {
  name: '',
  components: {
    Popup
  },
  data () {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' },
      ],
      snackbar: false
    }
  }
}
</script>