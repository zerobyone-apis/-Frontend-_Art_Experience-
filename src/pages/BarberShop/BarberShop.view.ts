

// import XComponent from "../../components/XComponent";
import Vue from 'vue';
import User from "../../models/User";
// import Event from "../../models/Event";

export default class BarberShopView extends Vue {
  private stepsBarberShop: any = [{}, {}]
  // private event: Event = new Event();
  private events: any[] = [];
  private selectedEvents: any[] = [];

  private barberDialog: boolean = false;

  private selectedBarber: any = {};

  private user: User = new User();

  public barberShop: any = {
    info: {
      name: "Art Experience",
      direction: "Bvar Artigas 2333",
      email: "artexperience@gmail.com",
      phone: "098345432",
      stars: 4,
      time: {
        start: "12:00",
        end: "22:00",
        days: "luenes a viernes" //this will be a array
      }
    },
    pageDesign: {
      banner: {
        img: "https://static.vecteezy.com/system/resources/previews/000/539/084/non_2x/barbershop-logo-design-vector.jpg",
        scala: 100,
        x: 0,
        y: 0
      },
      logo: {
        img: "https://i.etsystatic.com/13221305/r/il/ab6ed6/1210022632/il_794xN.1210022632_eygv.jpg",
        scala: 100,
        x: 0,
        y: 0
      },
      presentation: {
        img: "https://image.shutterstock.com/image-vector/barber-shopface-modern-designvector-illustrationhipster-260nw-764435734.jpg",
        scala: 100,
        x: 0,
        y: 0
      },
    },

    barbers: [
      {
        info: {
          name: "ZeroByOne",
          job: "barber",
          email: "zerobyone@gmail.com",
          phone: "099 999 999",
          stars: 5
        },
        picture: {
          img: "http://es.web.img3.acsta.net/r_640_360/newsv7/16/04/15/12/49/422146.jpg",
          scala: 100,
          x: 0,
          y: 0
        },
        banner: {
          img: "https://s.yimg.com/ny/api/res/1.2/OoBy44.dLtaLgobVIO7fNA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NzQ0O2g9Mzcy/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d4345e2367382e3b40a1e43f5016972b",
          scala: 100,
          x: 0,
          y: 0
        }
      },

      {
        info: {
          name: "Damian Rodriguez",
          job: "peluquero",
          email: "damianezretirl1@gmail.com",
          phone: "099 999 999",
          stars: 4
        },
        picture: {
          img: "https://i.ytimg.com/vi/9aFVSkncq00/maxresdefault.jpg",
          scala: 100,
          x: 0,
          y: 0
        },
        banner: {
          img: "https://diarioavance.com/wp-content/uploads/2017/03/matrix.jpg",
          scala: 100,
          x: 0,
          y: 0
        }
      }
    ]
  };

  private snackbar: any = { state: false, timeout: 0 };

  private pagination: any = {
    page: 1,
    total: 0,
    limit: 8,
    descending: true,
    sortBy: "code"
  };

  private icons: any = {
    instagram: "https://image.flaticon.com/icons/png/512/87/87390.png",
    facebook: "https://image.flaticon.com/icons/png/512/33/33702.png"
  }

  private rules: any = {
  };

  private steps: any = [
    {
      title: "Datos basicos",
      fields: [
        {
          is: "input",
          name: "location",
          label: "Barberia",
          hint: "EVENT.hintLocation",
          icon: "home",
          rules: this.rules.required,
          required: true
        },
        {
          is: "input",
          name: "location",
          label: "Tipo de trabajo",
          hint: "EVENT.hintLocation",
          icon: "work",
          rules: this.rules.required,
          required: true
        }
      ]
    },
    {
      title: "Fecha de inicio y fin",
      fields: [
        {
          is: "input",
          name: "location",
          label: "Barberia",
          hint: "EVENT.hintLocation",
          icon: "home",
          rules: this.rules.required,
          required: false
        },
        {
          is: "input",
          name: "location",
          label: "Tipo de trabajo",
          hint: "EVENT.hintLocation",
          icon: "work",
          rules: this.rules.required,
          required: false
        },
        {
          is: "date",
          name: "startDate",
          label: "inicio",
          hint: "EVENT.hintDate",
          icon: "event",
          rules: this.rules.required,
          required: true
        },
        {
          is: "hour",
          workTime: 0.5,
          name: "startDate",
          label: "horarios",
          hint: "EVENT.hintDate",
          icon: "event",
          rules: this.rules.required,
          required: true
        }
      ]
    }
  ];

  showBarberProfile(selectedBarber: any) {
    this.selectedBarber = selectedBarber;
    this.barberDialog = true;
    console.log(selectedBarber);
  }




  // goToBarberProfile() { 
  //   this.showBarberProfile = true;
  //   // this.$router.push("Barber");
  // }
  // {
  //       title: "Creacion de Encuesta",
  //       Addbutton: {text:"Crear"},
  //       fields: [
  //         {
  //           is: "input",
  //           name: "name",
  //           label: "nombre",
  //           hint: "EVENT.hintName",
  //           icon: "person",
  //           rules: this.rules.required,
  //           required: true
  //         },
  //         {
  //           is: "select",
  //           name: "type",
  //           label: "tipo de encuesta",
  //           hint: "EVENT.hintName",
  //           icon: "person",
  //           rules: this.rules.required,
  //           data: {
  //             items: this.typeSurvey
  //           },
  //           required: true
  //         },
  //         {
  //           is: "date",
  //           name: "limitTime",
  //           label: "fecha limite",
  //           hint: "EVENT.hintDate",
  //           icon: "event",
  //           rules: this.rules.required,
  //           required: true
  //         }
  //       ]
  //     }

  // created() {
  //   this.init();
  // }

  // init() {
  //   let user = JSON.parse(this.$store.state.userInfo);
  //   console.log(user);
  //   this.user = new User(user);
  //   console.log("init id user is " + this.user.id);
  //   if (this.user) {
  //     this.get(this.user.id);
  //   }
  // }

  // /**
  //  * @name GET
  //  * @description gets items with filters of pagination
  //  */
  // async get(idUser) {
  //   try {
  //     this.loading.table = true;
  //     let events = await Event.get(idUser);
  //     this.pagination.total = events.total;
  //     this.selectedEvents = [];
  //     this.events = events.docs;
  //   } catch (error) {
  //     console.log(error);
  //     this.$notify({
  //       group: "foo",
  //       type: "warn",
  //       title: "Error",
  //       text: error.data.message
  //     });
  //   } finally {
  //     this.loading.table = false;
  //   }
  // }



  // try {
  //   this.event = Object.assign(this.event, event);
  //   await this.event.add(this.user.id);
  //   this.events.push(this.event);
  //   this.dialogs.add = false;
  // } catch (error) {
  //   this.$notify({
  //     group: "foo",
  //     type: "warn",
  //     title: "Error",
  //     text: error.data.message
  //   });
  // }



  // /**
  //  * @name SAVE
  //  * @description save changes in the selected item from the table
  //  */
  // async save(event) {
  //   this.event = Object.assign(this.event, event);
  //   console.log(this.event);
  //   try {
  //     await this.event.save();
  //     this.dialogs.save = false;
  //     this.updateInTable();
  //   } catch (error) {
  //     console.log(error);
  //     if (error.status == "VALIDATE") {
  //       this.errors.wizard = true;
  //     }
  //   }
  // }

  // /**
  //  * @name REMOVE
  //  * @description remove selected items
  //  */
  // async remove() {
  //   try {
  //     await Promise.all(
  //       this.selectedEvents.map(async event => {
  //         let aux: any = new Event(event);
  //         await aux.delete();
  //         this.removeFromTable(aux._id.value);
  //       })
  //     );
  //     this.dialogs.delete = false;
  //   } catch (error) {
  //     if (error.status == 401) {
  //       let result = await this.auth.reconnect();
  //       if (result) {
  //         this.get(this.pagination);
  //       } else {
  //         this.auth.logoff();
  //       }
  //     } else {
  //     }
  //   }
  // }

  // /**
  //  * @name SHOW_NEW
  //  * @description shows the add dialog
  //  */
  // showNew() {
  //   //this.event = new Event();
  //   this.dialogs.add = true;
  // }

  // /**
  //  * @name OPEN
  //  * @description
  //  */
  // open(event) {
  //   // this.event = Object.assign(new Event(), event);
  //   // this.dialogs.save = true;
  // }

  // /**
  //  * @name SHOW_SAVE
  //  * @description shows the update dialog when is selected a item from the table
  //  */
  // showSave(event) {
  //   console.log(event);
  //   this.event = Object.assign(new Event(), event);
  //   this.dialogs.save = true;
  // }

  // /**
  //  * @name REMOVE_FROM_TABLE
  //  * @description remove item from the table
  //  */
  // removeFromTable(id: number) {
  //   let index = -1;
  //   let selectedIndex = -1;
  //   this.events.map(elem => {
  //     if (elem._id == id) {
  //       index = this.events.indexOf(elem);
  //     }
  //   });

  //   this.selectedEvents.map(elem => {
  //     if (elem._id == id) {
  //       selectedIndex = this.selectedEvents.indexOf(elem);
  //     }
  //   });
  //   this.events.splice(index, 1);
  //   this.selectedEvents.splice(selectedIndex, 1);
  // }

  // /**
  //  * @name UPDATE_SELECTED
  //  * @description shows the delete snackbar where is selected a item from the table
  //  */
  // updateSelected(selected: any[]) {
  //   this.selectedEvents = selected;
  //   if (selected.length > 0) {
  //     this.snackbar.state = true;
  //   } else {
  //     this.snackbar.state = false;
  //   }
  // }

  // /**
  //  * @name UPDATE_IN_TABLE
  //  * @description update items in the table
  //  */
  // updateInTable() {
  //   this.events.map(event => {
  //     if (event._id == this.event._id.value) {
  //       Object.assign(event, this.event.getRaw());
  //     }
  //   });
  // }

  getStars() {
    let stars: String = "";
    for (let index = 0; index < this.barberShop.info.stars; index++) {
      stars += "star ";
    }
    return stars;
  }
}