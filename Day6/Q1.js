class Movie {
    constructor(movieName, studioName, movieRating = "PG") {
        this.movieName = movieName;
        this.studioName = studioName;
        this.movieRating = movieRating;
    } 

 getPG(movies, movieRating) {
    let filterMovies = [];

    movies.forEach(movie => {
        if(movie.movieRating === movieRating){
            filterMovies.push(movie)
        }
        
    }) 
    return filterMovies
 }   
}

let movies = [];

  let movie1 = new Movie("Captain America", "Marvel", "PG13" );
  let movie2 = new Movie("Home Alone 3", "20th Century", "PG" );
  let movie3 = new Movie("The Dark Knight", "Warner Bros", "PG13")
  let movie4 = new Movie("The Matrix", "Warner Bros", "R")
  let movie5 = new Movie("Back to the Future", "Universal Pictures", "PG");
  let movie6 = new Movie("Casino Royale", "Eon Productions", "PG13")
  let movie7 = new Movie("Gladiator", "Universal Pictures", "R")
  let movie8 = new Movie("It's a Wonderful Life", "Paramount Pictures", "PG");
  let movie9 = new Movie("Terminator 2: Judgment Day", "TriStar Pictures", "R")
  let movie10 = new Movie("Jurassic Park", "Universal Pictures", "PG13") 

     movies.push(movie1 ,movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10)


     let findMovieRating = new Movie("movie", "studio", "rating")

     console.log(findMovieRating.getPG(movies, "PG"))