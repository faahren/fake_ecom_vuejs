<template>
  <div>
    <v-container>
      <p class="display-3 font-weight-light	text-center pa-4">Search Results</p>
      <v-row class="text-center"> <p class="text-center">
        <h3 >Results for {{this.$route.query.q}}</h3>
      </p>
      </v-row>
        <div class="row">
          <div class="col-md-4 col-sm-4 col-xs-12">
            <router-link to="/post">
            <v-card
              class="mx-auto"
              max-width="400"
              outlined
              tile
            >
              <v-img
                class="white--text align-end"
                height="400px"
                :src="require('../assets/img/home/slider2.jpg')"
              >
                <v-card-title>Top 10 Fashion of the Week</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

              <v-card-text class="text--primary">

                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Enim praesent elementum facilisis leo vel fringilla est ullamcorper.

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
          <div class="col-md-4 col-sm-3 col-xs-12">
            <v-card
              class="mx-auto"
              max-width="400"
              outlined
              tile
            >
              <v-img
                class="white--text align-end"
                height="400px"
                :src="require('../assets/img/home/slider3.jpg')"
              >
                <v-card-title>Best brands for fashion</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

              <v-card-text class="text--primary">

                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Enim praesent elementum facilisis leo vel fringilla est ullamcorper.

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
          </div>
          <div class="col-md-4 col-sm-3 col-xs-12">
            <v-card
              class="mx-auto"
              max-width="400"
              outlined
              tile
            >
              <v-img
                class="white--text align-end"
                height="400px"
                :src="require('../assets/img/home/slider4.jpg')"
              >
                <v-card-title>Fashion Tips & Tricks</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

              <v-card-text class="text--primary">

                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Enim praesent elementum facilisis leo vel fringilla est ullamcorper.

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
          </div>
        </div>
    </v-container>
  </div>
</template>
