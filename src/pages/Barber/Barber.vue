<template>
  <v-dialog v-model="model" fullscreen scrollable transition="slide-y-reverse-transition">
    <div class="background-dialog">
      <div class="toolbar-dialog" :class="$vuetify.breakpoint.name+'-format'">
        <v-icon class="pt-3 pl-1" @click="model=false" dark fab>arrow_back</v-icon>
      </div>

      <div class="barber-profile-page" :class="$vuetify.breakpoint.name+'-format'">
        <!-- BANNER  -->
        <div class="banner">
          <v-img
            :src="barberData.banner.img"
            aspect-ratio="1"
            class="banner-wallpaper grey lighten-2"
          ></v-img>

          <v-img :src="barberData.picture.img" aspect-ratio="1" class="banner-logo grey lighten-2">
            <template v-slot:placeholder></template>
          </v-img>

          <div class="actions-box">
            <v-img class="action-logo" :src="icons.facebook"></v-img>
            <v-img class="action-logo" :src="icons.instagram"></v-img>
            <v-btn small class="btn-reservation" @click="dialogs.add = true">reservar</v-btn>

            <div class="darkbox">
              <h2 class="font-title">{{ barberData.info.name }}</h2>
              <v-icon dark class="darkbox-white-stars" small>star star star star star</v-icon>
              <v-icon class="darkbox-stars" small>{{ getStars() }}</v-icon>
            </div>
          </div>
        </div>

        <!-- INFO -->
        <div class="info-content">
          <v-stepper v-model="wizard" vertical>
            <v-stepper-header>
              <v-stepper-step step="1" @click="wizard=1">informacion</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2" @click="wizard=2">trabajos</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3" @click="wizard=3">opiniones</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card>
                  <div class="info-content-box">
                    <p class="font-title">Cargo</p>
                    <p class="font-text">{{ barberData.info.job }}</p>
                    <p class="font-title">cel:</p>
                    <p class="font-text">{{ barberData.info.phone }}</p>
                    <p class="font-title">email:</p>
                    <p class="font-text">{{ barberData.info.email }}</p>
                  </div>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card>
                  <v-btn>free for more</v-btn>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card>
                  <v-btn>free for more</v-btn>
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </div>

        <!-- best pictures  -->
        <div class="pictures-box">
          <div class="picture-box" v-for="(pic,index) in pictures" :key="index">
            <v-img :src="pic" aspect-ratio="1" class="picture"></v-img>
          </div>
        </div>
      </div>

      <!--Dialogs-->
      <add-dialog v-model="dialogs.add" :steps="steps" @event="add" button-text="Crear"></add-dialog>
    </div>
  </v-dialog>
  <!-- </transition> -->
</template>

<script lang="ts">
import BarberView from "./Barber.view";
import "./Barber.scss";
import "../../styles/fonts.scss";
import { Component, Prop } from "vue-property-decorator";
import AddDialog from "@/components/dialogs/addDialog/addDialog.vue";

@Component({
  components: {
    AddDialog
  }
})

export default class Barber extends BarberView {
  @Prop({ default: false }) value!: boolean;
  @Prop({
    default: {
      info: {
        name: "ZeroByOne",
        job: "barber",
        email: "zerobyone@gmail.com",
        stars: 5
      },
      picture: {
        img: "https://avatars2.githubusercontent.com/u/37275050?s=460&v=4",
        scala: 100,
        x: 0,
        y: 0
      },
      banner: {
        img:
          "https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images-medium-5/barbershop-clippers-in-black-and-white-paul-ward.jpg",
        scala: 100,
        x: 0,
        y: 0
      }
    }
  })
  barberData!: any;

  getStars() {
    let stars: String = "";
    for (let index = 0; index < this.barberData.info.stars; index++) {
      stars += "star ";
    }
    return stars;
  }
}
</script>
