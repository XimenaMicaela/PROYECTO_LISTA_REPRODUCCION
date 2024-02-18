/* auth */

if (!localStorage.getItem('isLogged')) {
  window.location.href = './usuario.html';
}

/* CONTENIDO NUEVO */


/* SONGS*/

class Product {
  static idCounter = 0;
  constructor({ name, artista, duracion, anio, genero, urlSong, image, isFavorite = false, inCart = false }) {
    this.id = Product.idCounter++;
    this.name = name;
   
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
    this.name = name;
    this.products = products;
    this.container = container;
    this.order=[];
  }

  renderList() {
    if (this.products.length === 0){
      this.container.innerHTML = `<p class="productsError">Playlist vacía</p>`
    }else{
       this.container.innerHTML = this.products.map((p) => `
     <div class="product" onclick="changeCurrentProduct(${p.id})">
                <div class="left-product">
                  <img src=${p.image} alt="song" />
                  <h4>${p.name}</h4>     
                </div>
              </div>
    `)}
    
  }

  searchProduct(query) {
    const results = this.products.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) || 
      p.artista.toLowerCase().includes(query.toLowerCase()) || 
      p.genero.toLowerCase().includes(query.toLowerCase())
    );
    if (results.length === 0) {
      this.container.innerHTML = `<p class="productsError">Playlist empty</p>`;
    } else {
      this.container.innerHTML = results.map((p) => `
        <div class="product" onclick="changeCurrentProduct(${p.id})">
          <div class="left-product">
            <img src=${p.image} alt="song" />
            <h4>${p.name}</h4>
            <p>Artista: ${p.artista}</p>
            <p>Género: ${p.genero}</p>
          </div>
        </div>
      `).join('');
    }
  }
  

  addProduct(product) {
    if (this.name === 'Favorites') {
      product.isFavorite = true;
      this.order.push(product.id); // Agregar el ID del producto al historial de reproducción
    }
    if (this.name === 'cart') product.inCart = true;
    this.products.push(product);
    this.renderList();
  }

  removeProduct(product) {
    if (this.name === 'Favorites') {
      product.isFavorite = false;
      const index = this.order.indexOf(product.id);
      if (index !== -1) this.order.splice(index, 1); // Eliminar el ID del producto del historial de reproducción
    }
    if (this.name === 'cart') product.inCart = false;
    const index = this.products.indexOf(product);
    if (index === -1) return;
    this.products.splice(index, 1);
    this.renderList();
  }
}

/* REPRODUCTOR */

const allProducts = [
  new Product({ name: "Break On Through", artista: "The Doors", duracion: "00:02:29", anio: "1967", genero: "Rock", image: "./IMG/THEDOORS.png", urlSong: "./CANCIONES/01 Break On Through (To The Other Side).mp3" }),
  new Product({ name: "B.Y.O.B", artista: "System of a Down", duracion: "00:04:16", anio: "2005", genero: "Trash Metal", image: "./IMG/SYSTEMOFADOWN.png", urlSong: "./CANCIONES//02 B.Y.O.B..mp3" }),
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
  new Product({ name: "Electrónica", artista: "Electronica", duracion: "2:45", anio: "2000", genero: "pop", image: "./IMG/ELECTRONICA.jpg", urlSong: "./CANCIONES/Electronic - Electrónica.mp3" }),
  new Product({ name: "Film Out", artista: "BTS", duracion: "3:34", anio: "2021", genero: "K-POP", image: "./IMG/FILM_OUT.jpg", urlSong: "./CANCIONES/Film Out..mp3" }),
  new Product({ name: "GUETTE", artista: "GAMBI", duracion: "2:45", anio: "2000", genero: "pop", image: "./IMG/BALADA.jpg", urlSong: "./CANCIONES/Gambi - GUETTE.mp3" }),
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
  new Product({ name: "TOPLINE (Feat, Tiger JK", artista: "SKZ", duracion: "2023", anio: "3:23", genero: "K-POP", image: "./IMG/SCLASS.jpg", urlSong: "./CANCIONES/TOPLINE.mp3" }),
  new Product({ name: "You Should be Sad", artista: "Halsey", duracion: "3:25", anio: "2020", genero: "POP", image: "./IMG/Halsey-Manic.png", urlSong: "./CANCIONES/Youshouldbesad.mp3" })

]



/* Current song */

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

const audio = new Audio();
let isPlaying = false;

function changeCurrentProduct(id) {
  const product = allProducts.find(p => p.id === id); 
  currentProduct = product;
  audio.src = product.urlSong; // Actualizar la URL del objeto Audio
  audio.pause(); // Pausar la reproducción actual
  audio.load(); // Recargar el audio con la nueva URL
  isPlaying = false;
 /*  audio.play(); // Iniciar la reproducción del nuevo audio */
  
  productContainer.innerHTML = `
        <img class="product-img" src="${product.image}" alt="song" />
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

function playNextAudio() {
  const currentIndex = allProducts.indexOf(currentProduct);
  const currentList = currentProductList(); // Obtener la lista actual (Favorites, cart, etc.)
  const nextIndex = (currentIndex + 1) % currentList.order.length;
  const nextProductId = currentList.order[nextIndex];
  changeCurrentProduct(nextProductId);
}

function playPreviousAudio() {
  const currentIndex = allProducts.indexOf(currentProduct);
  const currentList = currentProductList(); // Obtener la lista actual (Favorites, cart, etc.)
  const previousIndex = (currentIndex - 1 + currentList.order.length) % currentList.order.length;
  const previousProductId = currentList.order[previousIndex];
  changeCurrentProduct(previousProductId);
}



play.addEventListener('click', () => {
  console.log("Play");
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
});

pause.addEventListener('click', () => {
  console.log("Pause");
  audio.pause();
  isPlaying = false;
});

mute.addEventListener('click', () => {
  if (audio.volume === 0) {
    // If audio is muted, unmute it
    audio.volume = 1;
    // Change the icon to indicate sound is on
    document.getElementById('mute').innerHTML = '<i class="bi bi-volume-mute"></i>';
  } else {
    // If audio is not muted, mute it
    audio.volume = 0;
    // Change the icon to indicate sound is off
    document.getElementById('mute').innerHTML = '<i class="bi bi-volume-mute"></i>';
  }
});


/* sound.addEventListener('click', () => {
  currentAudio.volume = 0.1;
}); */

search.addEventListener('click', () => {
  currentAudio.src = input.value;
});


/* currentAudio.addEventListener('ended', () => {
  alert('Terminó el audio, pasando al siguiente');
  playNextAudio();
});
 */

document.getElementById('backward').addEventListener('click', () => {
  console.log("Prev");
  
  playPreviousAudio();
});

document.getElementById('forward').addEventListener('click', () => {
  console.log("next");
  playNextAudio();
});

function currentProductList() {
  // Determinar la lista actual basándose en la variable currentProduct
  if (favorites.products.includes(currentProduct)) {
    return favorites;
  } else if (cart.products.includes(currentProduct)) {
    return cart;
  } else {
    return products; // O cualquier otra lógica que uses para determinar la lista actual
  }
}
























