<template>
  <nav>
     <v-app-bar flat app> 
        <v-app-bar-nav-icon class="grey--text" 
        @click="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Project</span>
          <span>Management</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat class="grey lighten-3">
          <span>Sign Out</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
     </v-app-bar>

      <v-navigation-drawer v-model="drawer" app class="indigo lighten-1">
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
export default {
  name: '',
  data () {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' },
      ]
    }
  }
}
</script>