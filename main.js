
class Song {
  constructor(nombre, artista, duracion, año, genero, cover, urlSong) {
    this.nombre = nombre;
    this.artista = artista;
    this.duracion = duracion;
    this.año = año;
    this.genero = genero;
    this.cover = cover;
    this.urlSong = urlSong
  }


}
/* PARA REVISAR */

getSongName()
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
}


class Playlist {

  constructor(nombre, listaCanciones, ordenEscucha) {
    this.nombre = nombre;
    this.listaCanciones = listaCanciones;
    this.ordenEscucha = ordenEscucha;
  }
}

/* PARA REVISAR */
getPlaylistName()

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

  });
}

class Reproductor {
  catalogodeCanciones;
  currentSong;
  audio;
  filtroDeCanciones;
  currentPlaylist;


  /* COMPLETAR CATALOGO CANCIONES  eliminar las etiquetas */
  constructor() {
    this.catalogodeCanciones = [
      new Song(nombre: "Break On Through", artista: "The Doors", duracion: "00:02:29", año: "1967", genero: "Rock"),
      new Song(nombre: "B.Y.O.B", artista: "System of a Down", duracion: "00:04:16", año: "2005", genero: "Trash Metal"),
      new Song(nombre: "Cementery Gates", artista: "Pantera", duracion: "00:07:02", año: "2003", genero: "Metal"),
      new Song(nombre: "Reptilia", artista: "The Strokes", duracion: "00:03:29", año: "2003", genero: "Alternative"),
      new Song(nombre: "St.Anger", artista: "Metallica", duracion: "00:07:21", año: "2003", genero: "Nu Metal"),
      new Song(nombre: "Cessio", artista: "Sal y Mileto", duracion: "00:09:30", año: "2001", genero: "Rock Experimental"),
      new Song(nombre: "Duality", artista: "Slipknot", duracion: "00:04:12", año: "2004", genero: "Metal"),
      new Song(nombre: "Santa Monica", artista: "Theory of a Deadman", duracion: "00:04:06", año: "2005", genero: "Rock"),
      new Song(nombre: "Hoy tengo ganas de ti", artista: "Alejandro Fernandez", duracion: "00:04:51", año: "2013", genero: "Balada Pop"),
      new Song(nombre: "Love Don't let Me Go", artista: "David Guetta", duracion: "00:03:36", año: "2002", genero: "Electronica"),
      new Song(nombre: "Sexy Bitch", artista: "David Guetta", duracion: "00:03:15", año: "2009", genero: "Electro Pop"),
      new Song(nombre: "This One´s for you (feat. Zara larsson)", artista: "David Guetta", duracion: "00:03:27", año: "2016", genero: "EDM"),
      new Song(nombre: "When Love Takes Over", artista: "David Guetta", duracion: "00:03:11", año: "2009", genero: "Electronica"),
      new Song(nombre: "Electrónica", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "Film Out", artista: "BTS", duracion: "3:34", año: "2021", genero: "K-POP"),
      new Song(nombre: "GUETTE", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "GIVEN-TAKEN", artista: "ENHYPEN", duracion: "3:03", año: "2020", genero: "K-POP"),
      new Song(nombre: "Mi ex tenía Razón", artista: "Karol G", duracion: "00:02:41", año: "2023", genero: "Pop"),
      new Song(nombre: "Maps", artista: "Maroon 5", duracion: "00:03:09", año: "2014", genero: "Pop rock"),
      new Song(nombre: "Memories", artista: "Maroon 5", duracion: "00:03:15", año: "2019", genero: "Reggae fusión"),
      new Song(nombre: "Sugar", artista: "Maroon 5", duracion: "00:05:02", año: "2015", genero: "Pop rock"),
      new Song(nombre: "Just Give me a Reason", artista: "Pink", duracion: "00:04:03", año: "2012", genero: "Pop"),
      new Song(nombre: "I'm not the only one", artista: "Sam Smith", duracion: "00:03:24", año: "2014", genero: "Soul"),
      new Song(nombre: "Too Good At Goodbyes", artista: "Sam Smith", duracion: "00:03:21", año: "2018", genero: "Pop orquestal"),
      new Song(nombre: "Unholy", artista: "Sam Smith", duracion: "00:04:35", año: "2023", genero: "Dance Pop"),
      new Song(nombre: "Writing's on the Wall", artista: "Sam Smith", duracion: "00:04:45", año: "2015", genero: "Pop"),
      new Song(nombre: "There's Nothing Holdin' me Back", artista: "Shawn Mendes", duracion: "00:03:28", año: "2016", genero: "Pop"),
      new Song(nombre: "Sheluvme", artista: "Tai Verdes", duracion: "2:30", año: "2022", genero: "POP"),
      new Song(nombre: "TOPLINE (Feat, Tiger JK", artista: "SKZ", duracion: "2023", año: "3:23", genero: "K-POP"),
      new Song(nombre: "You Should be Sad", artista: "Halsey", duracion: "3:25", año: "2020", genero: "POP")


    ];

    this.mostrarCanciones();
    this.currentPlaylist = 'Busqueda';
    this.currentSong = this.catalogodeCanciones[0];
    this.audio = new Audio();


    //Listener on click of id buscar  (PROFE)
    let buscar = document.getElementById('Buscar');
    buscar.addEventListener('click', () => {
      this.buscarCancion(document.getElementById("search").value);

    });

    let play = document.getElementById('Play');
    play.addEventListener('click', () => {
      this.buscarCancion(document.getElementById("Play").value);

    });



  }
}


/*  METODOS */

/* Method that gets all the song  names and place them  in #canciones div   (HTML-CSS) completar*/
mostrarCanciones = function () {
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



/* Method to search a song by name with regex*/

buscarCancion = function (inputUser) {
  inputUser = inputUser.trim(inputUser);
  inputUser = inputUser.toLowerxase();
  let canciones = document.getElementById("resBusqueda");
  canciones.innerHTML = '';
  let resNombre = this.catalogodeCanciones.filter(song => song.nombre.match(inputUser));
  let resAlbum = this.catalogodeCanciones.filter(song => song.album.match(inputUser));
  let resArtista = this.catalogodeCanciones.filter(song => song.artista.match(inputUser));
  let filtroDeCanciones = [...resNombre, ...resAlbum, ...resArtista];


  filtroDeCanciones = [... new Set(filtroDeCanciones)]
  this.mostrarBusqueda(filtroDeCanciones);
}

// change cover

cambioPortada = function () {
  const portada = document.getElementById("portada");
  portada.src = "/portadas/" + this.currentSong.cover;

}




/* Method to play current song if #play button is clicked */

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

}


/* Method to pause current song if #PAUSE button is clicked */

pause = function () {
  let pauseButton = document.getElementsByClassName("pause");
  pauseButton.addEventListener("click", () => {
    let currentSong = this.getCurrentSong();
    let audio = new Audio(currentSong.urlSong);
    audio.pause();
  });

}

/* Method to stop current song if #STOP button is clicked */

stop = function () {
  let stopButton = document.getElementsByClassName("stop");
  stopButton.addEventListener("click", () => {
    let currentSong = this.getCurrentSong();
    let audio = new Audio(currentSong.urlSong);
    audio.pause();
    audio.currenTime = 0;
  });

}

let Reproductor = new Reproductor();
let favoritos = new Playlist("favoritos", [], "shuffle");
let playlist1 = new Playlist("Playlist1", [], "shuffle");


















