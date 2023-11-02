const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/coffee1.jpg" },
  { name: "Voluptatem", image: "images/coffee2.jpg" },
  { name: "Explicabo", image: "images/coffee3.jpg" },
  { name: "Rchitecto", image: "images/coffee4.jpg" },
  { name: " Beatae", image: "images/coffee5.jpg" },
  { name: " Vitae", image: "images/coffee6.jpg" },
  { name: "Inventore", image: "images/coffee7.jpg" },
  { name: "Veritatis", image: "images/coffee8.jpg" },
  { name: "Accusantium", image: "images/coffee9.jpg" },
]
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

{
  "name": "Dev'Coffee",
  "short_name": "DevCoffee",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#fdfdfd",
  "theme_color": "#db4938",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "./images/icons/icon-72x72.png",
      "type": "image/png", "sizes": "72x72"
    },
    {
      "src": "./images/icons/icon-96x96.png",
      "type": "image/png", "sizes": "96x96"
    },
    {
      "src": "./images/icons/icon-128x128.png",
      "type": "image/png","sizes": "128x128"
    },
    {
      "src": "./images/icons/icon-144x144.png",
      "type": "image/png", "sizes": "144x144"
    },
    {
      "src": "./images/icons/icon-152x152.png",
      "type": "image/png", "sizes": "152x152"
    },
    {
      "src": "./images/icons/icon-192x192.png",
      "type": "image/png", "sizes": "192x192"
    },
    {
      "src": "./images/icons/icon-384x384.png",
      "type": "image/png", "sizes": "384x384"
    },
    {
      "src": "./images/icons/icon-512x512.png",
      "type": "image/png", "sizes": "512x512"
    }
  ]
}
