
const input = document.getElementById('input')
const boton = document.getElementById('boton-buscar')
const lista = document.getElementById('lista')

const canciones = ['cancion de duki', 'cancion de emilia', 'cancion de tini ', 'otra de duki']

boton.addEventListener('click', function () {
  const valor = input.value


  const cancionesQueCumplen = canciones.filter(c => c.includes(valor))

  lista.innerHTML = cancionesQueCumplen.map(cancionQueCumplio => `<li>${cancionQueCumplio}</li>`)
  if (cancionesQueCumplen.length === 0) {
    lista.innerHTML = '<li>No se encontraron canciones</li>'
  }
})


class Song {
  constructor(nombre, artista, duracion, año, genero) {
    this.nombre = nombre;
    this.artista = artista;
    this.duracion = duracion;
    this.año = año;
    this.genero = genero;
  }


}
/* PARA REVISAR */

/* getSongName () : string {
  return `${this.nombre};
}

getSongArtist () : string {
  return `${this.artista};
}

getSongDuration () : string {
  return `${this.duration};
}
getSongYear () : string {
  return `${this.año};
}
getSongGenre () : string {
  return `${this.genero};
} */


class Playlist {

  constructor(nombre, listaCanciones, ordenEscucha) {
    this.nombre = nombre;
    this.listaCanciones = listaCanciones;
    this.ordenEscucha = ordenEscucha;
  }
}

/* PARA REVISAR */
/* getPlaylistName() {
  return this.nombre;

}

getPlaylistSongs(){
  return this.listaCanciones;
}

getPlaylistListeningOrder(){
  return this.ordenEscucha;
}



addSongToPLaylist(song): void {
  this.listaCanciones.push(song);

}

removeSongFromPlaylist(song): void {
  this.listaCanciones = this.listaCanciones.filter(s > s !== song);
}

shufflePlaylist(): void {
  this.listaCanciones = this.listaCanciones.sort(() => Math.random() - 0.5);
}

playPlaylist() : void {
  this.listaCanciones.forEach(song => {
    console.log(`Playing : ${song.nombre}`);

  });
} */

class Reproductor {
  catalogodeCanciones;
  currentSong;
  currentPlaylist;


  /* COMPLETAR CATALOGO CANCIONES */
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
      new Song(nombre: "Hoy tengo ganas de ti", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "Love Don't let Me Go", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "Sexy Bitch", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "This One´s for you (feat. Zara larsson)", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "When Love Takes Over", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "Electrónica", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "Film Out", artista: "BTS", duracion: "3:34", año: "2021", genero: "K-POP"),
      new Song(nombre: "GUETTE", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "GIVEN-TAKEN", artista: "ENHYPEN", duracion: "3:03", año: "2020", genero: "K-POP"),
      new Song(nombre: "Mi ex tenía Razón", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "Maps", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "Memories", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "Sugar", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "Pink", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "I'm not the only one", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "Too Good At Goodbyes", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "Unholy", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "Writing's on the Wall", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "There's NOthing Holdin' me Back", artista: "...", duracion: "", año: "", genero: ""),
      new Song(nombre: "Sheluvme", artista: "Tai Verdes", duracion: "2:30", año: "2022", genero: "POP"),
      new Song(nombre: "TOPLINE (Feat, Tiger JK", artista: "SKZ", duracion: "2023", año: "3:23", genero: "K-POP"),
      new Song(nombre: "You Should be Sad", artista: "Halsey", duracion: "3:25", año: "2020", genero: "POP")


    ];

    this.mostrarCanciones();
    this.play = this.play.blind(this);
    /* let PlayButton: HTMLElement = document.getElementsByClassName(elementClass: "play");
    PlayButton.addEventListener(type: "click",this.play, options:"false"); */
    this.currentSong = this.catalogodeCanciones[0];
  }
}


/*  METODOS */

/* Method that gets all the song  names and place them  in #canciones div   (LIST DIV?)*/
mostrarCanciones = function(): void {
  let canciones : HTMLElement = document.getElementsByClassName(elementClass: "list");
  this.catalogodeCancione.forEach(song => {
    lista.innerHTML += `<p class= "cancion"> ${song.nombre}</p>`;
    
  });

}


/* Method to search a song by name with regex*/

buscarCancion = function(songName){
  return this.catalogodeCanciones.find(song => song.nombre === songName);
}

/* Method to search a song by author*/

buscarAutor = function(songAuthor){
  return this.catalogodeCanciones.find(song => song.artista === songAuthor);
}



/* Method to play current song if #play button is clicked */

play = function(): void {
  let audio : HTMLAudioElement = new Audio(this.currentSong.urlSong);
  audio.play();
  ;

}


/* Method to pause current song if #PAUSE button is clicked */

pause = function(): void {
  let pauseButton : HTMLElement = document.getElementsByClassName(elementClass: "pause");
  pauseButton.addEventListener(type: "click", listener: () :void =>{
    let currentSong = this.getCurrentSong();
    let audio : HTMLAudioElement = new Audio(currentSong.urlSong);
    audio.pause();
  });

}

/* Method to stop current song if #STOP button is clicked */

stop = function(): void {
  let stopButton : HTMLElement = document.getElementsByClassName(elementClass: "stop");
  stopButton.addEventListener(type: "click", listener: () :void =>{
    let currentSong = this.getCurrentSong();
    audio.pause();
    audio.currenTime = 0;
  });

}




















