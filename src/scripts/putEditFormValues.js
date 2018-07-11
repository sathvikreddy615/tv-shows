
const Database = require("./dbCollection");
const GetEditFormValues = require("./getEditFormValues");

const PutEditFormValues = Object.create({}, {
    putEditFormData: {
        value: () => {
            const editFormData = GetEditFormValues.getEditFormData();
            console.log(editFormData);

            const showId = event.target.parentNode.id;

            Database.putShows(3, editFormData.editNameVal, editFormData.editPlotVal, editFormData.editSeasonsVal)
            .then(updatedShow => {
                console.log(updatedShow);
            })
        }
    }
})

module.exports = PutEditFormValues; // exports to editFormCreator.js
