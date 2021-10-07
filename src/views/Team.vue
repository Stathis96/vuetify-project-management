<template>
  <div class="team">
    <h1 class="subheading grey --text lighten-3">Team</h1>

    <v-container class="my-5">

      <v-row>
        <v-col cols="6" lg="3" v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-1">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-action>
              <v-btn flat color="grey lighten-3">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'The Sniss Ninja', role: 'Web developer', avatar: '/avatar-1.jpg' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>