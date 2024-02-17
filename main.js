/* auth */

if (!localStorage.getItem('isLogged')) {
  window.location.href = './usuario.html';
}


/* CONTENIDO ANTIGUO */

/* class Song {
  static idCounter = 0;
  constructor({nombre, artista, duracion, año, genero, cover, urlSong,  isFavorite = false, inCart = false}) {
    this.id = Song.idCounter++;
    this.nombre = nombre;
    this.artista = artista;
    this.duracion = duracion;
    this.anio = anio;
    this.genero = genero;
    this.cover = cover;
    this.urlSong = urlSong
    this.isFavorite = isFavorite;
    this.inCart = inCart;
  }


} */
/* PARA REVISAR */

/* getSongName()
{
  return `${this.nombre}`;
}

getSongArtist()
{
  return `${this.artista}`;
}

getSongDuration()
{
  return `${this.duration}`;
}


getSongYear()

{
  return `${this.año}`;
}

getSongGenre()
{
  return `${this.genero}`;
} */

/* 
class Playlist {

  constructor({nombre, listaCanciones = [], ordenEscucha}) {
    this.nombre = nombre;
    this.listaCanciones = listaCanciones;
    this.ordenEscucha = ordenEscucha;
  }

  renderList() {
    if (this.products.length === 0) this.container.innerHTML = `<p class="productsError">No se encontraron productos</p>`
    else this.container.innerHTML = this.products.map((p) => `
     <div class="product" onClick="changeCurrentProduct(${p.id})">
                <div class="left-product">
                  <img src=${p.image} alt="shoe" />
                  <h4>${p.nombre}</h4>
                </div>
                <span class="price">$${p.anio}</span>
              </div>
    `)
  }

  searchProduct(query) {
    const results = this.listaCanciones.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    if (results.length === 0) this.container.innerHTML = `<p class="productsError">No se encontraron productos</p>`
    else productsContainerList.innerHTML = results.map((p) => `
     <div class="product" onClick="changeCurrentProduct(${p.id})">
                <div class="left-product">
                  <img src=${p.image} alt="shoe" />
                  <h4>${p.name}</h4>
                </div>
                <span class="price">$${p.price}</span>
              </div>
    `)
  }



  


} */


/* PARA REVISAR */
/* getPlaylistName()

{
  return this.nombre;

}

getPlaylistSongs()
{
  return this.listaCanciones;
}

getPlaylistListeningOrder()
{
  return this.ordenEscucha;
}



addSongToPLaylist(song)
{
  this.listaCanciones.push(song);

}

removeSongFromPlaylist(song)
{
  this.listaCanciones = this.listaCanciones.filter(s > s !== song);
}

shufflePlaylist()
{
  this.listaCanciones = this.listaCanciones.sort(() => Math.random() - 0.5);
}

playPlaylist()
{
  this.listaCanciones.forEach(song => {
    console.log(`Playing : ${song.nombre}`);

  }); */
/* } */

/* class Reproductor {
  catalogodeCanciones;
  currentSong;
  audio;
  filtroDeCanciones;
  currentPlaylist; */


/* COMPLETAR CATALOGO CANCIONES  eliminar las etiquetas */
/*  constructor() {
   this.catalogodeCanciones = [
     new Song({nombre: "Break On Through", artista: "The Doors", duracion: "00:02:29", año: "1967", genero: "Rock"}),
     new Song({nombre: "B.Y.O.B", artista: "System of a Down", duracion: "00:04:16", año: "2005", genero: "Trash Metal"}),
     new Song({nombre: "Cementery Gates", artista: "Pantera", duracion: "00:07:02", año: "2003", genero: "Metal"}),
     new Song({nombre: "Reptilia", artista: "The Strokes", duracion: "00:03:29", año: "2003", genero: "Alternative"}),
     new Song({nombre: "St.Anger", artista: "Metallica", duracion: "00:07:21", año: "2003", genero: "Nu Metal"}),
     new Song({nombre: "Cessio", artista: "Sal y Mileto", duracion: "00:09:30", año: "2001", genero: "Rock Experimental"}),
     new Song({nombre: "Duality", artista: "Slipknot", duracion: "00:04:12", año: "2004", genero: "Metal"}),
     new Song({nombre: "Santa Monica", artista: "Theory of a Deadman", duracion: "00:04:06", año: "2005", genero: "Rock"}),
     new Song({nombre: "Hoy tengo ganas de ti", artista: "Alejandro Fernandez", duracion: "00:04:51", año: "2013", genero: "Balada Pop"}),
     new Song({nombre: "Love Don't let Me Go", artista: "David Guetta", duracion: "00:03:36", año: "2002", genero: "Electronica"}),
     new Song({nombre: "Sexy Bitch", artista: "David Guetta", duracion: "00:03:15", año: "2009", genero: "Electro Pop"}),
     new Song({nombre: "This One´s for you (feat. Zara larsson)", artista: "David Guetta", duracion: "00:03:27", año: "2016", genero: "EDM"}),
     new Song({nombre: "When Love Takes Over", artista: "David Guetta", duracion: "00:03:11", año: "2009", genero: "Electronica"}),
     new Song({nombre: "Electrónica", artista: "...", duracion: "", año: "", genero: ""}),
     new Song({nombre: "Film Out", artista: "BTS", duracion: "3:34", año: "2021", genero: "K-POP"}),
     new Song({nombre: "GUETTE", artista: "...", duracion: "", año: "", genero: ""}),
     new Song({nombre: "GIVEN-TAKEN", artista: "ENHYPEN", duracion: "3:03", año: "2020", genero: "K-POP"}),
     new Song({nombre: "Mi ex tenía Razón", artista: "Karol G", duracion: "00:02:41", año: "2023", genero: "Pop"}),
     new Song({nombre: "Maps", artista: "Maroon 5", duracion: "00:03:09", año: "2014", genero: "Pop rock"}),
     new Song({nombre: "Memories", artista: "Maroon 5", duracion: "00:03:15", año: "2019", genero: "Reggae fusión"}),
     new Song({nombre: "Sugar", artista: "Maroon 5", duracion: "00:05:02", año: "2015", genero: "Pop rock"}),
     new Song({nombre: "Just Give me a Reason", artista: "Pink", duracion: "00:04:03", año: "2012", genero: "Pop"}),
     new Song({nombre: "I'm not the only one", artista: "Sam Smith", duracion: "00:03:24", año: "2014", genero: "Soul"}),
     new Song({nombre: "Too Good At Goodbyes", artista: "Sam Smith", duracion: "00:03:21", año: "2018", genero: "Pop orquestal"}),
     new Song({nombre: "Unholy", artista: "Sam Smith", duracion: "00:04:35", año: "2023", genero: "Dance Pop"}),
     new Song({nombre: "Writing's on the Wall", artista: "Sam Smith", duracion: "00:04:45", año: "2015", genero: "Pop"}),
     new Song({nombre: "There's Nothing Holdin' me Back", artista: "Shawn Mendes", duracion: "00:03:28", año: "2016", genero: "Pop"}),
     new Song({nombre: "Sheluvme", artista: "Tai Verdes", duracion: "2:30", año: "2022", genero: "POP"}),
     new Song({nombre: "TOPLINE (Feat, Tiger JK", artista: "SKZ", duracion: "2023", año: "3:23", genero: "K-POP"}),
     new Song({nombre: "You Should be Sad", artista: "Halsey", duracion: "3:25", año: "2020", genero: "POP"})


   ];

   this.mostrarCanciones();
   this.currentPlaylist = 'Busqueda';
   this.currentSong = this.catalogodeCanciones[0];
   this.audio = new Audio(); */


//Listener on click of id buscar  (PROFE)
/*     let buscar = document.getElementById('Buscar');
    buscar.addEventListener('click', () => {
      this.buscarCancion(document.getElementById("search").value);

    });

    let play = document.getElementById('Play');
    play.addEventListener('click', () => {
      this.play();

    });



  } */

/*  METODOS */

/* Method that gets all the song  names and place them  in #canciones div   (HTML-CSS) completar*/
/*   mostrarCanciones = function () {
    let canciones = document.getElementsByClassName("resBusqueda");
    this.catalogodeCancione.forEach(song => {
      canciones.innerHTML += <li id="res_${song.id}" class="cancion"> ${song.nombre}
        <span class="favoritos fa fa-heart"></span> <span class="addPlaylist fa fa-plus"></span>

      </li>;


    });

  }


  mostrarBusqueda = function () {
    let canciones = document.getElementsByClassName("resBusqueda");
    filtroDeCanciones.forEach(
      song => {
        canciones.innerHTML += <li id="res_${song.id}" class="cancion"> ${song.nombre}
          <span class="favoritos fa fa-heart"></span> <span class="addPlaylist fa fa-plus"></span>

        </li>;
      }
    );
  }
 */


/* Method to search a song by name with regex*/
/* 
  buscarCancion = function (inputUser) {
    inputUser = inputUser.trim(inputUser);
    inputUser = inputUser.toLowercase();
    let canciones = document.getElementById("resBusqueda");
    canciones.innerHTML = '';
    let resNombre = this.catalogodeCanciones.filter(song => song.nombre.match(inputUser));
    let resAlbum = this.catalogodeCanciones.filter(song => song.album.match(inputUser));
    let resArtista = this.catalogodeCanciones.filter(song => song.artista.match(inputUser));
    let filtroDeCanciones = [...resNombre, ...resAlbum, ...resArtista];


    filtroDeCanciones = [... new Set(filtroDeCanciones)]
    this.mostrarBusqueda(filtroDeCanciones);
  } */

// change cover

/*   cambioPortada = function () {
    const portada = document.getElementById("portada");
    portada.src = "/IMG/" + this.currentSong.cover;

  } */




/* Method to play current song if #play button is clicked */
/* La seccion del case esta incompleta */
/* 
  play = function () {
    if (this.currentSong !== undefined) {
      this.audio.src = "/CANCIONES/" + this.currentSong.urlSong;
      this.audio.play();

    } else {
      let id;
      switch (this.currentPlaylist) {
        case "Favoritos":
          id = document.getElementById("pause");
        case "Busqueda":
          id = document.getElementById("pause");

        case "Lista":
          id = document.getElementById("pause");
          break;
      }
      this.currentSong = thid.catalogodeCanciones.find
        (song => song.id === id);
      this.audio.src = "/CANCIONES/" + this.currentSong.urlSong;
      this.audio.play();

    }
    this.cambioPortada();

  } */


/* Method to pause current song if #PAUSE button is clicked */
/* 
  pause = function () {
    let pauseButton = document.getElementsByClassName("pause");
    pauseButton.addEventListener("click", () => {
      let currentSong = this.getCurrentSong();
      let audio = new Audio(currentSong.urlSong);
      audio.pause();
    });

  } */

/* Method to stop current song if #STOP button is clicked */

/*   stop = function () {
    let stopButton = document.getElementsByClassName("stop");
    stopButton.addEventListener("click", () => {
      let currentSong = this.getCurrentSong();
      let audio = new Audio(currentSong.urlSong);
      audio.stop();
      audio.currenTime = 0;
    });

  }


}



let Reproductor = new Reproductor();
let favoritos = new Playlist("favoritos", [], "shuffle");
let playlist1 = new Playlist("Playlist1", [], "shuffle"); */




/* CONTENIDO NUEVO */


/* SONGS*/

class Product {
  static idCounter = 0;
  constructor({ name, price = 200, discountedPrice = 100, artista, duracion, anio, genero, urlSong, image, isFavorite = false, inCart = false }) {
    this.id = Product.idCounter++;
    this.name = name;
    this.price = price;
    this.discountedPrice = discountedPrice;
    this.artista = artista;
    this.duracion = duracion;
    this.anio = anio;
    this.genero = genero;
    this.urlSong = urlSong
    this.image = image;
    this.isFavorite = isFavorite;
    this.inCart = inCart;

  }
}

/* PLAYLIST */

class ProductList {
  constructor({ name, products = [], container }) {
    this.name = name
    this.products = products
    this.container = container
  }

  renderList() {
    if (this.products.length === 0) this.container.innerHTML = `<p class="productsError">Playlist vacía</p>`
    else this.container.innerHTML = this.products.map((p) => `
     <div class="product" onClick="changeCurrentProduct(${p.id})">
                <div class="left-product">
                  <img src=${p.image} alt="shoe" />
                  <h4>${p.name}</h4>
                  <button id= "play" class="boton-play">
          <i class="bi bi-play"></i>
      </button>
                </div>
           
              </div>
    `)
  }

  searchProduct(query) {
    const results = this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    if (results.length === 0) this.container.innerHTML = `<p class="productsError">Playlist vacia</p>`
    else productsContainerList.innerHTML = results.map((p) => `
     <div class="product" onClick="changeCurrentProduct(${p.id})">
                <div class="left-product">
                  <img src=${p.image} alt="shoe" />
                  <h4>${p.name}</h4>
                  <button id= "play" class="boton-play">
          <i class="bi bi-play"></i>
      </button>
                </div>
              </div>
    `)
  }

  addProduct(product) {
    if (this.name === 'Favorites') product.isFavorite = true
    if (this.name === 'cart') product.inCart = true
    this.products.push(product)
    this.renderList()
  }

  removeProduct(product) {
    if (this.name === 'Favorites') product.isFavorite = false
    if (this.name === 'cart') product.inCart = false
    const index = this.products.indexOf(product)
    if (index === -1) return
    this.products.splice(index, 1)
    this.renderList()
  }
}

/* REPRODUCTOR */

const allProducts = [
  new Product({ name: "Break On Through", artista: "The Doors", duracion: "00:02:29", anio: "1967", genero: "Rock", image: "./IMG/THEDOORS.png", urlSong: "./CANCIONES/01 Break On Through (To The Other Side).mp3" }),
  new Product({ name: "B.Y.O.B", artista: "System of a Down", duracion: "00:04:16", anio: "2005", genero: "Trash Metal", image: "./IMG/SYSTEMOFADOWN.png", urlSong: ".CANCIONES//02 B.Y.O.B..mp3" }),
  new Product({ name: "Cementery Gates", artista: "Pantera", duracion: "00:07:02", anio: "2003", genero: "Metal", image: "./IMG/PANTERA.png", urlSong: "./CANCIONES/02 Cemetery Gates - Remastered Version.mp3" }),
  new Product({ name: "Reptilia", artista: "The Strokes", duracion: "00:03:29", anio: "2003", genero: "Alternative", image: "./IMG/THESTROKES.png", urlSong: "./CANCIONES/02 Reptilia.mp3" }),
  new Product({ name: "St.Anger", artista: "Metallica", duracion: "00:07:21", anio: "2003", genero: "Nu Metal", image: "./IMG/METALLICA.png", urlSong: "./CANCIONES/02 St. Anger.mp3" }),
  new Product({ name: "Cessio", artista: "Sal y Mileto", duracion: "00:09:30", anio: "2001", genero: "Rock Experimental", image: "./IMG/SALYMILETO.png", urlSong: "./CANCIONES/2-04 cessio.mp3" }),
  new Product({ name: "Duality", artista: "Slipknot", duracion: "00:04:12", anio: "2004", genero: "Metal", image: "./IMG/SLIPKNOT.png", urlSong: "./CANCIONES/04 Duality.mp3" }),
  new Product({ name: "Santa Monica", artista: "Theory of a Deadman", duracion: "00:04:06", anio: "2005", genero: "Rock", image: "./IMG/THEORYOFADEADMAN.png", urlSong: "./CANCIONES/05 Santa Monica.mp3" }),
  new Product({ name: "Hoy tengo ganas de ti", artista: "Alejandro Fernandez", duracion: "00:04:51", anio: "2013", genero: "Balada Pop", image: "./IMG/BALADA.jpg", urlSong: "./CANCIONES/Alejandro Fernández - Hoy Tengo Ganas De Ti.mp3" }),
  new Product({ name: "Love Don't let Me Go", artista: "David Guetta", duracion: "00:03:36", anio: "2002", genero: "Electronica", image: "./IMG/DAVID_GUETTA_1.jpg", urlSong: "./CANCIONES/David Guetta - Love Don-'t Let Me Go.mp3" }),
  new Product({ name: "Sexy Bitch", artista: "David Guetta", duracion: "00:03:15", anio: "2009", genero: "Electro Pop", image: "./IMG/DAVID_GUETTA_2.jpg", urlSong: "./CANCIONES/David Guetta - Sexy Bitch (feat. Akon).mp3" }),
  new Product({ name: "This Ones for you (feat. Zara larsson)", artista: "David Guetta", duracion: "00:03:27", anio: "2016", genero: "EDM", image: "./IMG/DAVID_GUETTA_3.jpg", urlSong: "./CANCIONES/David Guetta - This One-'s for You (feat. Zara Larsson) (Official Song UEFA EURO 2016).mp3" }),
  new Product({ name: "When Love Takes Over", artista: "David Guetta", duracion: "00:03:11", anio: "2009", genero: "Electronica", image: "./IMG/DAVID_GUETTA_4.jpg", urlSong: "./CANCIONES/David Guetta - When Love Takes Over (feat. Kelly Rowland).mp3" }),
  new Product({ name: "Electrónica", artista: "...", duracion: "", anio: "", genero: "", image: "./IMG/ELECTRONICA.jpg", urlSong: "./CANCIONES/Electronic - Electrónica.mp3" }),
  new Product({ name: "Film Out", artista: "BTS", duracion: "3:34", anio: "2021", genero: "K-POP", image: "./IMG/FILM_OUT.jpg", urlSong: "./CANCIONES/Film Out.mp3" }),
  new Product({ name: "GUETTE", artista: "...", duracion: "...", anio: "...", genero: "..", image: "./IMG/BALADA.jpg", urlSong: "./CANCIONES/Gambi - GUETTE.mp3" }),
  new Product({ name: "GIVEN-TAKEN", artista: "ENHYPEN", duracion: "3:03", anio: "2020", genero: "K-POP", image: "./IMG/BorderDayOne.png", urlSong: "./CANCIONES/GIVEN-TAKEN.mp3" }),
  new Product({ name: "Mi ex tenía Razón", artista: "Karol G", duracion: "00:02:41", anio: "2023", genero: "Pop", image: "./IMG/KAROLG.jpg", urlSong: "./CANCIONES/KAROL G - MI EX TENÍA RAZÓN.mp3" }),
  new Product({ name: "Maps", artista: "Maroon 5", duracion: "00:03:09", anio: "2014", genero: "Pop rock", image: "./IMG/Marron5_Maps.jpg", urlSong: "./CANCIONES/Marron5_Maps.mp3" }),
  new Product({ name: "Memories", artista: "Maroon 5", duracion: "00:03:15", anio: "2019", genero: "Reggae fusión", image: "./IMG/Marron5_memories.jpg", urlSong: "./CANCIONES/Marron5_Memories.mp3" }),
  new Product({ name: "Sugar", artista: "Maroon 5", duracion: "00:05:02", anio: "2015", genero: "Pop rock", image: "./IMG/Marron5_Sugar.jpg", urlSong: "./CANCIONES/Marron5_Sugar.mp3" }),
  new Product({ name: "Just Give me a Reason", artista: "Pink", duracion: "00:04:03", anio: "2012", genero: "Pop", image: "./IMG/Pink_Just.jpg", urlSong: "./CANCIONES/Pink.mp3" }),
  new Product({ name: "I'm not the only one", artista: "Sam Smith", duracion: "00:03:24", anio: "2014", genero: "Soul", image: "./IMG/SMITH_3.jpg", urlSong: "./CANCIONES/Sam Smith - I-'m Not The Only One.mp3" }),
  new Product({ name: "Too Good At Goodbyes", artista: "Sam Smith", duracion: "00:03:21", anio: "2018", genero: "Pop orquestal", image: "./IMG/SMITH_1.jpg", urlSong: "./CANCIONES/Sam Smith - Too Good At Goodbyes.mp3" }),
  new Product({ name: "Unholy", artista: "Sam Smith", duracion: "00:04:35", anio: "2023", genero: "Dance Pop", image: "./IMG/SMITH_2.jpg", urlSong: "./CANCIONES/Sam Smith - Unholy.mp3" }),
  new Product({ name: "Writing's on the Wall", artista: "Sam Smith", duracion: "00:04:45", anio: "2015", genero: "Pop", image: "./IMG/SMITH.jpg", urlSong: "./CANCIONES/Sam Smith - Writing-'s On The Wall.mp3" }),
  new Product({ name: "There's Nothing Holdin' me Back", artista: "Shawn Mendes", duracion: "00:03:28", anio: "2016", genero: "Pop", image: "./IMG/Shaw_mendes.jpg", urlSong: "./CANCIONES/Shawn Mendes - There's Nothing Holdin' Me Back.mp3" }),
  new Product({ name: "Sheluvme", artista: "Tai Verdes", duracion: "2:30", anio: "2022", genero: "POP", image: "./IMG/HDTV.png", urlSong: "./CANCIONES/Sheluvme.mp3" }),
  new Product({ name: "TOPLINE (Feat, Tiger JK", artista: "SKZ", duracion: "2023", anio: "3:23", genero: "K-POP", image: "./IMG/SCLASS.jpg", urlSong: "./CANCIONES/TOPLINE(Feat.TigerJK.mp3" }),
  new Product({ name: "You Should be Sad", artista: "Halsey", duracion: "3:25", anio: "2020", genero: "POP", image: "./IMG/Halsey-Manic.png", urlSong: "./CANCIONES/Youshouldbesad.mp3" })

]

/* Current product */

const productContainer = document.getElementById('product-container')
let currentProduct

function addCurrentProductToCart() {
  cart.addProduct(currentProduct)
  changeCurrentProduct(currentProduct.id)
}

function addCurrentProductToFavorite() {
  favorites.addProduct(currentProduct)
  changeCurrentProduct(currentProduct.id)
}

function removeCurrentProductFromCart() {
  cart.removeProduct(currentProduct)
  changeCurrentProduct(currentProduct.id)
}

function removeCurrentProductFromFavorite() {
  favorites.removeProduct(currentProduct)
  changeCurrentProduct(currentProduct.id)
}

function changeCurrentProduct(id) {
  const product = allProducts.find(p => p.id === id)
  currentProduct = product
  productContainer.innerHTML = `
        <img class="product-img" src="${product.image}" alt="shoe" />
        <h2 class="product-name">
          ${product.name}
        </h2>
        <div class="product-price">
          <span >Artista:  ${product.artista}</span>
        </div>
        <div class="product-price">
          <span>Duración: ${product.duracion}</span>
        </div>
        <div class="product-price">
        <span>Año: ${product.anio}</span>
      </div>
      <div class="product-price">
        
        <span>Género: ${product.genero}</span>
        
      </div>

      <div class="product-price">
      <span class="price">
      <button class="boton-backward">
          <i class="bi bi-skip-backward"></i>
      </button>
      <button id= "play" class="boton-play">
          <i class="bi bi-play"></i>
      </button>
      <button class="boton-forward">
          <i class="bi bi-skip-forward"></i>
      </button>
      <button id = "pause" class="boton-pause">
          <i class="bi bi-pause"></i>
      </button>
      <button id = "mute" class="boton-mute">
          <i class="bi bi-stop"></i>
      </button>
    
  </span>
     
      
    </div>



        ${product.isFavorite ?
      `<button class="add-to-cart-btn secondary-btn" onClick="removeCurrentProductFromFavorite()">
      <i class="bi bi-x-lg"></i> Remove from favorites
    </button >`
      :
      `<button class="add-to-cart-btn secondary-btn" onClick="addCurrentProductToFavorite()">
    <i class="bi bi-heart"></i> 
  </button >`




    }

          ${product.inCart ?
      `<button class="add-to-cart-btn" onClick="removeCurrentProductFromCart()">
          <i class="bi bi-x-lg"></i> Remove from playlist
        </button>`
      :
      `<button class="add-to-cart-btn" onClick="addCurrentProductToCart()">
          <i class="bi bi-plus"></i> 
        </button>`}
`
}
changeCurrentProduct(0)



const cartContainerList = document.getElementById('cart')
const productsContainerList = document.getElementById('products')
const favoritesContainerList = document.getElementById('favorites')

const products = new ProductList({ name: 'All products', products: allProducts, container: productsContainerList })
const cart = new ProductList({ name: 'cart', container: cartContainerList })
const favorites = new ProductList({ name: 'Favorites', container: favoritesContainerList })

function onStart() {
  products.renderList()
  favorites.renderList()
  cart.renderList()
}
onStart()

const searchInput = document.getElementById('search')
const searchIcon = document.getElementById('searchIcon')
searchIcon.addEventListener('click', () => {
  products.searchProduct(searchInput.value)
})

searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    products.searchProduct(searchInput.value)
  }
})

/* REPRODUCIR AUDIO */

const audio = new Audio("./CANCIONES/01 Break On Through (To The Other Side).mp3")

audio.currentTime = 245


const play = document.getElementById('play')
const pause = document.getElementById('pause')
const mute = document.getElementById('mute')
const sound = document.getElementById('sound')

play.addEventListener('click', () => {
  audio.play()
})

pause.addEventListener('click', () => {
  audio.pause()
})

mute.addEventListener('click', () => {
  audio.volume = 0
})

sound.addEventListener('click', () => {
  audio.volume = 0.1
})

search.addEventListener('click', () => {
  audio.src = input.value
})

audio.addEventListener('ended', () => {
  alert('termino el audio, paso al siguiente')
  audio.src = "./CANCIONES/01 Break On Through (To The Other Side).mp3"
  audio.play()
})















