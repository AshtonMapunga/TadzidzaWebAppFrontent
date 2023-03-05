<template>
  <v-app>
  <template>
  <v-card class="overflow-hidden ">
    <v-app-bar
      absolute
      color="indigo darken-2"
      dark
      elevate-on-scroll
      class="mb-12"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Tadzidza</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-wrench</v-icon>
      </v-btn>
    </v-app-bar>

     <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="740"
    >   
      <v-container class="mt-12" style="height: 700px;">
      <router-view/>
      </v-container>
    </v-sheet>
  </v-card>
  
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="indigo darken-2"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques"
    >
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques"
      class="overflow-y-auto"
      max-height="600 auto"
    >
      <v-container style="height: 1px;"></v-container>
    </v-sheet>
  </v-card>
</template>
    <v-main>
    </v-main>
  </v-app>
  
</template>


<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
<style>
.body{
  color: black;
}
</style>