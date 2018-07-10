// files that communicates with JSON API

const $ = require("jquery");

const Database = Object.create({}, {
    getShows: {
        value: () => {
            return $.ajax("http://localhost:3000/shows");
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
    editShows: {
        value: (editName, editShow, editSeasons) => {
            return $.ajax({
                url: "http://localhost:3000/shows",
                method: "PUT",
                data: {
                    name: editName,
                    show: editShow,
                    seasons: editSeasons
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

module.exports = Database;
