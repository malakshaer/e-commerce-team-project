window.addEventListener("DOMContentLoaded", () => {
  const ad = () => {
    var ads = "";

    advs.map(
      (adv) =>
        (ads += `
          <div class="ads-content pages-content">
            <div class="ads-content-img">
              <img src="${adv.img}" alt="Ads Image" />
            </div>
            <div class="ads-content-url">
              <p>
                Link:
                <a href="${adv.img}">${adv.img}</a>
              </p>
            </div>
            <h3>remove</h3>
          </div>
        `)
    );
    return ads;
  };
  document.getElementById("ads-content").innerHTML = ad();
});

const advs = [
  {
    img: "https://source.unsplash.com/random",
  },
  {
    img: "https://source.unsplash.com/random",
  },
  {
    img: "https://robohash.org/quisliberodolores.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/temporerecusandaeex.png?size=50x50&set=set1",
  },
  {
    img: "https://source.unsplash.com/random",
  },
  {
    img: "https://source.unsplash.com/random",
  },
  {
    img: "https://source.unsplash.com/random",
  },
  {
    img: "https://robohash.org/rerumculpadolorem.png?size=50x50&set=set1",
  },
  {
    img: "hhttps://source.unsplash.com/random",
  },
  {
    img: "https://source.unsplash.com/random",
  },
  {
    img: "https://robohash.org/esteiusdolores.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/exercitationemculpanatus.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/quasiperspiciatisconsequatur.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/rerumquiaquasi.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/voluptatevoluptatemfuga.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/possimusfacilisearum.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/voluptasetquasi.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/verosedat.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/undeetab.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/autquasisuscipit.png?size=50x50&set=set1",
  },
];
