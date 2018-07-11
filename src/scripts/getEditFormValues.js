

const GetEditFormValues = Object.create({}, {
    getEditFormData: {
        value: () => {
            const EditFormCreator = require("./editFormCreator");
            EditFormCreator.createEditForm();

            let editNameVal = document.querySelector("#editNameVal").value;
            console.log(editNameVal);

            let editPlotVal = document.querySelector("#editPlotVal").value;
            console.log(editPlotVal);

            let editSeasonsVal = document.querySelector("#editSeasonsVal").value;
            console.log(editSeasonsVal);

            const newObject = {
                editNameVal,
                editPlotVal,
                editSeasonsVal
            }

            return newObject;
        }
    }
})

module.exports = GetEditFormValues; // exports to putEditFormValues.js
