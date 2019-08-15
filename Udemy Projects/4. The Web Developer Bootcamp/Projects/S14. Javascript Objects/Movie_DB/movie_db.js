var movieDB = [
    {
        title: "In Bruges",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Mad Max Fury Road",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Les Miserables",
        hasWatched: false,
        rating: 3.5
    }
]

function listMovieDB() {
    movieDB.forEach(function (movie) {
        var sent = "You have ";
        if (movie.hasWatched) {
            sent += "watched ";
        } else {
            sent += "not seen ";
        }
        console.log(sent + "\"" + movie.title + "\" - " + movie.rating + " stars");
    })
}

// Alternative method

function buildString(movie){
    var sent = "You have ";
    if (movie.hasWatched){
        sent += "watched ";
    } else {
        sent += "not seen ";
    }
    sent += "\"" + movie.title + "\" - ";
    sent += movie.rating + " stars";
    return sent;
}

// On console
//movies.forEach(function(movie){ console.log(buildString(movie));});