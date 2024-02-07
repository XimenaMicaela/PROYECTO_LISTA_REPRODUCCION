
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
      new Song(nombre:"...", artista : "...", duracion: "", año : "", genero: "")

    ]
    this.mostrarCanciones();
    this.currentSong = this.catalogodeCanciones[0];
  }
}


/*  METODOS */


















