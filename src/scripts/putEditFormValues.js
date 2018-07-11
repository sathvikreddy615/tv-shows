
const Database = require("./dbCollection");

const PutEditFormValues = Object.create({}, {
    putEditFormData: {
        value: () => {
            let editNameVal = document.querySelector("#editNameVal").value;
            let editPlotVal = document.querySelector("#editPlotVal").value;
            let editSeasonsVal = document.querySelector("#editSeasonsVal").value;

            Database.putShows(3, editNameVal, editPlotVal, editSeasonsVal)
                .then(updatedShow => {
                    console.log(updatedShow);
                })
        }
    }
})

module.exports = PutEditFormValues; // exports to editFormCreator.js
