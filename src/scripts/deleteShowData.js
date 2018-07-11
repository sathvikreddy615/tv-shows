// files that removes show from database when user has finished watching the show

const Database = require("./dbCollection");

const DeleteShowData = Object.create({}, {
    removeShow: {
        value: () => {
            const showId = event.target.parentNode.id;
            Database.deleteShows(showId)
                .then(data => {
                    console.log(data);
                })
        }
    }
})

module.exports = DeleteShowData; // exports to cardCreator.js