document.addEventListener("DOMContentLoaded", function (){

    let connexion = new MovieDB();

    connexion.requeteDernierFilm();
})



class MovieDB   {

    constructor() {

        console.log("Constructeur");

        // cle
        this.APIkey = "1c2b3286477388b44841378fbac9c9f5";

        // langue
        this.lang = "fr-CA";

        // site
        this.baseURL = "https://api.themoviedb.org/3";

        // images
        this.imgPath = "https://image.tmdb.org/t/p/";

        // quantite de films
        this.totalFilm = 8;

    }

    requeteDernierFilm(){

        let requete = new XMLHttpRequest();

        //this = MovieDB
        requete.addEventListener("loadend", this.retourRequeteDernierFilm.bind(this));

        // requete.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=1c2b3286477388b44841378fbac9c9f5&language=fr-CA&page=1");
            requete.open("GET", this.baseURL + "/movie/now_playing?api_key=" + this.APIkey + "&language=" + this.lang + "&page=1");


        requete.send();
    }

    retourRequeteDernierFilm(e){
        console.log("Retour dernier Film");

        let target = e.currentTarget;
        let data;

        // console.log(target.responseText);

        data = JSON.parse(target.responseText).results;

        console.log(data);

        this.afficheDernierFilm(data);
    }

    afficheDernierFilm(data){

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);
            console.log(data[i].overview);
        }

    }

}
