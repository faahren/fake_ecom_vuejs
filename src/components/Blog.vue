<template>
  <div>
    <v-container>
      <p class="display-3 font-weight-light	text-center pa-4">Read About Fashion</p>
        <div class="row">
          <div class="col-md-4 col-sm-4 col-xs-12" v-for="(post, index) in posts"
              :key="index">
            <router-link :to="'/post/' + post.id">
            <v-card
              class="mx-auto"
              max-width="400"
              outlined
              tile
            >
              <v-img
                class="white--text align-end"
                height="400px"
                :src="getImage(post.src)"
              >
                <v-card-title>{{post.title}}</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

              <v-card-text class="text--primary">

                <div>{{post.description}}

                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="orange"
                  text
                >
                  Read More
                </v-btn>
              </v-card-actions>
            </v-card>
            </router-link>
          </div>
        </div>
    </v-container>
  </div>
</template>

<script>
    const posts = require('./posts.json');

    export default {
        data: () => ({
            posts
        }),
        methods: {
          getImage: function(src) {
            return require("@/" + src);
          }
        }
    }
</script>
