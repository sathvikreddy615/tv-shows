// this file will query show data from database and print it to card

const Database = require("./dbCollection");
const CardCreator = require("./cardCreator");

const GetShowDataAndPrintCards = Object.create({}, {
    queryDataAndPrint: {
        value: () => {
            Database.getShows()
                .then(data => {
                    console.log(data);
                    for (let i in data) {
                        CardCreator.createCard(data[i].name, data[i].show, data[i].seasons); // calls cardCreator function with arguments passed to it
                    }
                })
        }
    }
})

module.exports = GetShowDataAndPrintCards;
