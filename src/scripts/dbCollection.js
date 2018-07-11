// files that communicates with JSON API

const $ = require("jquery");

const Database = Object.create({}, {
    getShows: {
        value: () => {
            return $.ajax("http://localhost:3000/shows");
        }
    },
    getShowId: {
        value: id => {
            return $.ajax(`http://localhost:3000/shows/${id}`)
        }
    },
    postShows: {
        value: (newName, newShow, newSeasons) => {
            return $.ajax({
                url: "http://localhost:3000/shows",
                method: "POST",
                data: {
                    name: newName,
                    show: newShow,
                    seasons: newSeasons
                }
            })
        }
    },
    putShows: {
        value: (id, editName, editShow, editSeasons) => {
            return $.ajax({
                url: `http://localhost:3000/shows/${id}`,
                method: "PUT",
                data: {
                    name: editName,
                    show: editShow,
                    seasons: editSeasons
                }
            })
        }
    },
    archiveWatchedShows: {
        value: id => {
            return $.ajax({
                url: `http://localhost:3000/shows/${id}`,
                method: "PATCH",
                data: {
                    watched: true
                }
            })
        }
    },
    deleteShows: {
        value: id => {
            return $.ajax({
                url: `http://localhost:3000/shows/${id}`,
                method: "DELETE",
            })
        }
    }
})

module.exports = Database; // exports to many
