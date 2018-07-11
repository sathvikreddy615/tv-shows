const Database = require("./dbCollection");

const GetEditData = Object.create({}, {
    getEditFormData: {
        value: () => {
            const editShowId = event.target.parentNode.id;
            console.log(editShowId);
            Database.getShowId(editShowId)
            .then(data => {
                const EditFormCreator = require("./editFormCreator");
                EditFormCreator.createEditForm(editShowId,data.name, data.show, data.seasons);
            });
        }
    }
})

module.exports = GetEditData;
