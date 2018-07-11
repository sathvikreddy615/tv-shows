const Database = require("./dbCollection");

const RemoveShowCard = Object.create({}, {
    removeShow: {
        value: () => {
            if (event.target) {
                event.target.parentNode.remove();
                // how to change boolean value from false to true in JSON
            }
        }
    }
})

module.exports = RemoveShowCard; // exports to cardCreator.js
