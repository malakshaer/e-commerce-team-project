window.addEventListener("DOMContentLoaded", () => {
  const inboxNotification = () => {
    var inboxNotifications = "";

    users.map(
      (user) =>
        (inboxNotifications += `
          <div class="inbox-content pages-content">
            <div class="inbox-content-img">
              <img src="${user.img}" alt="User Image" />
            </div>
            <div class="inbox-content-username">${user.username}</div>
          </div>
        `)
    );
    return inboxNotifications;
  };
  document.getElementById("inbox-content").innerHTML = inboxNotification();
});

const users = [
  {
    img: "https://robohash.org/recusandaeharumvoluptatum.png?size=50x50&set=set1",
    username: "Cherri",
  },
  {
    img: "https://robohash.org/dolorumquibusdamquia.png?size=50x50&set=set1",
    username: "Leonie",
  },
  {
    img: "https://robohash.org/velfugaest.png?size=50x50&set=set1",
    username: "Tatiania",
  },
  {
    img: "https://robohash.org/veldistinctioaliquam.png?size=50x50&set=set1",
    username: "Aleksandr",
  },
  {
    img: "https://robohash.org/sedquibusdamvelit.png?size=50x50&set=set1",
    username: "Pru",
  },
  {
    img: "https://robohash.org/etquiin.png?size=50x50&set=set1",
    username: "Alyse",
  },
  {
    img: "https://robohash.org/quidemquisvoluptas.png?size=50x50&set=set1",
    username: "Fin",
  },
  {
    img: "https://robohash.org/idexplicabomaiores.png?size=50x50&set=set1",
    username: "Kaitlin",
  },
  {
    img: "https://robohash.org/accusantiumdictamolestiae.png?size=50x50&set=set1",
    username: "Ursala",
  },
  {
    img: "https://robohash.org/estautsit.png?size=50x50&set=set1",
    username: "Reginald",
  },
];
