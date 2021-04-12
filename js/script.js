new Vue({
  el: "#app",
  data: {
    activeEl: 0,
    searchContact: "",
    inputmessage: "",
    dropdownMenu: false,
    myUser: {
      name: "Giovanni",
      avatar: "img/1.png",
    },
    users: [
      {
        name: "Classe29",
        data: "11/04/2021 18:34:00",
        avatar: "img/29.jfif",
        chat: [
          {
            message: "Ti è arrivata la box di Boolean?",
            time: "11/04/2021 18:34:00",
            status: "sent",
            visible: false,
          },
          {
            message: "Non ancora, perdincibacco",
            time: "11/04/2021 18:34:00",
            status: "received",
            visible: false,
          },
        ],
      },
      {
        name: "Anna",
        data: "11/04/2021 18:34:00",
        avatar: "img/anna.jfif",
        chat: [
          {
            message: "In che zona sei tu?",
            time: "11/04/2021 18:34:00",
            status: "sent",
            visible: false,
          },
          {
            message: "Marrone",
            time: "11/04/2021 18:34:00",
            status: "received",
            visible: false,
          },
        ],
      },
      {
        name: "Fra",
        data: "11/04/2021 18:34:00",
        avatar: "img/fra.jfif",
        chat: [
          {
            message: "Mi piace la zucchina",
            time: "11/04/2021 18:34:00",
            status: "sent",
            visible: false,
          },
          {
            message: "Mi sento birichina, ah ah",
            time: "11/04/2021 18:34:00",
            status: "received",
            visible: false,
          },
        ],
      },
      //nmore chats conversations
      {
        name: "Fabio",
        data: "11/04/2021 18:34:00",
        avatar: "img/fabio.png",
        chat: [
          {
            message: "Ciao",
            time: "11/04/2021 18:34:00",
            status: "sent",
            visible: false,
          },
          {
            message: "Lorem ipsum",
            time: "11/04/2021 18:34:00",
            status: "received",
            visible: false,
          },
        ],
      },
      {
        name: "Pablo",
        data: "11/04/2021 18:34:00",
        avatar: "img/pablo.jfif",
        chat: [
          {
            message: "Plata o plomo",
            time: "11/04/2021 18:34:00",
            status: "sent",
            visible: false,
          },
          {
            message: "YO SOY PABLO EMILIO ESCOBAR GAVIRIA",
            time: "11/04/2021 18:34:00",
            status: "received",
            visible: false,
          },
        ],
      },
      {
        name: "Jack",
        data: "11/04/2021 18:34:00",
        avatar: "img/jack-becks.jfif",
        chat: [
          {
            message: "yeaaaaaaaaah",
            time: "11/04/2021 18:34:00",
            status: "sent",
            visible: false,
          },
          {
            message: "boiiiiiiiiiiiiiiii",
            time: "11/04/2021 18:34:00",
            status: "received",
            visible: false,
          },
        ],
      },
    ],
  },

  methods: {
    //Open new chat on @click contacts' name
    showChat: function (el) {
      this.activeEl = el;
    },

    //show new message after input send/received
    addElement: function (index) {
      if (this.inputmessage !== "") {
        this.users[this.activeEl].chat.push({
          message: this.inputmessage,
          time: this.getNow(),
          status: "sent",
          visible: false,
        });
        //message reply delay (1000ms)
        setTimeout(
          () =>
            this.users[this.activeEl].chat.push({
              message: "phok",
              time: this.getNow(),
              status: "received",
              visible: false,
            }),
          1000
        );

        this.inputmessage = "";
      }
    },

    //real time data/time on messages
    getNow: function () {
      const today = new Date();
      const date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      return dateTime;
    },

    //Dropdown on messages
    toggleDropDown: function (i) {
      this.users[this.activeEl].chat[i].visible = !this.users[this.activeEl]
        .chat[i].visible;
    },

    //Delete a single message
    deleteMessage: function (i) {
      this.users[this.activeEl].chat.splice(i, 1);
    },
  },
});

document.addEventListener("DOMContentLoaded", init);
