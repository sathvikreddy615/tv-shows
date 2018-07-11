const Database = require("./dbCollection");

const RemoveShowCard = Object.create({}, {
    removeShow: {
        value: () => {
            if (event.target.className === "checkBox") {
                let watchedShowId = event.target.parentNode.id;
                Database.archiveWatchedShows(watchedShowId);
            }
        }
    }
})

module.exports = RemoveShowCard; // exports to cardCreator.js
