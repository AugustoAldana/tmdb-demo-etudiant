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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCl7XHJcblxyXG4gICAgbGV0IGNvbm5leGlvbiA9IG5ldyBNb3ZpZURCKCk7XHJcblxyXG4gICAgY29ubmV4aW9uLnJlcXVldGVEZXJuaWVyRmlsbSgpO1xyXG59KVxyXG5cclxuXHJcblxyXG5jbGFzcyBNb3ZpZURCICAge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdGV1clwiKTtcclxuXHJcbiAgICAgICAgLy8gY2xlXHJcbiAgICAgICAgdGhpcy5BUElrZXkgPSBcIjFjMmIzMjg2NDc3Mzg4YjQ0ODQxMzc4ZmJhYzljOWY1XCI7XHJcblxyXG4gICAgICAgIC8vIGxhbmd1ZVxyXG4gICAgICAgIHRoaXMubGFuZyA9IFwiZnItQ0FcIjtcclxuXHJcbiAgICAgICAgLy8gc2l0ZVxyXG4gICAgICAgIHRoaXMuYmFzZVVSTCA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvM1wiO1xyXG5cclxuICAgICAgICAvLyBpbWFnZXNcclxuICAgICAgICB0aGlzLmltZ1BhdGggPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL1wiO1xyXG5cclxuICAgICAgICAvLyBxdWFudGl0ZSBkZSBmaWxtc1xyXG4gICAgICAgIHRoaXMudG90YWxGaWxtID0gODtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWV0ZURlcm5pZXJGaWxtKCl7XHJcblxyXG4gICAgICAgIGxldCByZXF1ZXRlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIC8vdGhpcyA9IE1vdmllREJcclxuICAgICAgICByZXF1ZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsIHRoaXMucmV0b3VyUmVxdWV0ZURlcm5pZXJGaWxtLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvLyByZXF1ZXRlLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9MWMyYjMyODY0NzczODhiNDQ4NDEzNzhmYmFjOWM5ZjUmbGFuZ3VhZ2U9ZnItQ0EmcGFnZT0xXCIpO1xyXG4gICAgICAgICAgICByZXF1ZXRlLm9wZW4oXCJHRVRcIiwgdGhpcy5iYXNlVVJMICsgXCIvbW92aWUvbm93X3BsYXlpbmc/YXBpX2tleT1cIiArIHRoaXMuQVBJa2V5ICsgXCImbGFuZ3VhZ2U9XCIgKyB0aGlzLmxhbmcgKyBcIiZwYWdlPTFcIik7XHJcblxyXG5cclxuICAgICAgICByZXF1ZXRlLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXRvdXJSZXF1ZXRlRGVybmllckZpbG0oZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXRvdXIgZGVybmllciBGaWxtXCIpO1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGxldCBkYXRhO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQucmVzcG9uc2VUZXh0KTtcclxuXHJcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UodGFyZ2V0LnJlc3BvbnNlVGV4dCkucmVzdWx0cztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWZmaWNoZURlcm5pZXJGaWxtKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmZmljaGVEZXJuaWVyRmlsbShkYXRhKXtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbaV0udGl0bGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhW2ldLm92ZXJ2aWV3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
