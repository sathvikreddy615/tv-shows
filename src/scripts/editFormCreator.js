// creates a form for user to enter TV Show data

const DeleteShowData = require("./deleteShowData");
const PutEditFormValues = require("./putEditFormValues");

const EditFormCreator = Object.create({}, {
    createEditForm: {
        value: () => {
            const editFormContainer = document.querySelector("#editFormContainer");

            let inputContainer = document.createElement("div");
            inputContainer.id = "editInputContainer";

            let editNameEl = document.createElement("input");
            editNameEl.id = "editNameVal";
            editNameEl.type = "text";
            editNameEl.placeholder = "Name of Show";

            let editPlotEl = document.createElement("input");
            editPlotEl.id = "editPlotVal";
            editPlotEl.type = "text";
            editPlotEl.placeholder = "Plot Summary";

            let editSeasonsEl = document.createElement("input");
            editSeasonsEl.id = "editSeasonsVal";
            editSeasonsEl.type = "number";
            editSeasonsEl.placeholder = "# of Seasons";

            inputContainer.appendChild(editNameEl);
            inputContainer.appendChild(editPlotEl);
            inputContainer.appendChild(editSeasonsEl);

            let saveBtn = document.createElement("button");
            saveBtn.id = "saveBtn";
            saveBtn.textContent = "Save Show";
            saveBtn.addEventListener("click", PutEditFormValues.putEditFormData);

            let deleteBtn = document.createElement("button");
            deleteBtn.id = "deleteBtn";
            deleteBtn.textContent = "Delete Show";
            deleteBtn.addEventListener("click", DeleteShowData.removeShow)

            editFormContainer.appendChild(inputContainer);
            editFormContainer.appendChild(saveBtn);
            editFormContainer.appendChild(deleteBtn);
        }
    }
})

module.exports = EditFormCreator; // exports to cardCreator.js and putEditFormValues.js
