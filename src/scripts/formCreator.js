// creates a form for user to enter TV Show data

const FormCreator = Object.create({}, {
    createForm: {
        value: () => {
            const formContainer = document.querySelector("#formContainer");

            let inputContainer = document.createElement("div");
            inputContainer.id = "inputContainer";

            let nameEl = document.createElement("input");
            nameEl.id = "nameVal";
            nameEl.type = "text";
            nameEl.placeholder = "Name of Show";

            let plotEl = document.createElement("input");
            plotEl.id = "plotVal";
            plotEl.type = "text";
            plotEl.placeholder = "Plot Summary";

            let seasonsEl = document.createElement("input");
            seasonsEl.id = "seasonsVal";
            seasonsEl.type = "number";
            seasonsEl.placeholder = "# of Seasons";

            inputContainer.appendChild(nameEl);
            inputContainer.appendChild(plotEl);
            inputContainer.appendChild(seasonsEl);

            let saveBtn = document.createElement("button");
            saveBtn.id = "saveBtn";
            saveBtn.textContent = "Save Show";

            formContainer.appendChild(inputContainer);
            formContainer.appendChild(saveBtn);
        }
    }
})

module.exports = FormCreator; // exports to getFormValues.js
