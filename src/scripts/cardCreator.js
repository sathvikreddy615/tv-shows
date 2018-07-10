// file that creates cards for TV Show data to be displayed on

const DeleteShowData = require("./deleteShowData");

const CardCreator = Object.create({}, {
    createCard: {
        value: (showName, showPlot, showSeasons) => {
            const formContainer = document.querySelector("#formContainer");

            const card = document.createElement("div");
            card.setAttribute("class", "card");

            const nameEl = document.createElement("p");
            nameEl.textContent = showName;
            nameEl.setAttribute("class", "cardName");

            const plotEl = document.createElement("p");
            plotEl.textContent = showPlot;
            plotEl.setAttribute("class", "cardPlot");

            const seasonsEl = document.createElement("p");
            seasonsEl.textContent = showSeasons;
            seasonsEl.setAttribute("class", "cardSeasons");

            // const checkBoxContainer = document.createElement("div");
            // checkBoxContainer.setAttribute("class", "checkBoxContainer");

            const checkBox = document.createElement("input");
            checkBox.setAttribute("class", "checkBox");
            checkBox.type = "checkbox";

            let deleteBtn = document.createElement("button");
            deleteBtn.id = "deleteBtn";
            deleteBtn.textContent = "Delete Show";
            deleteBtn.addEventListener("click", DeleteShowData.removeShow)

            // checkBoxContainer.appendChild(checkBox);

            card.appendChild(nameEl);
            card.appendChild(plotEl);
            card.appendChild(seasonsEl);
            card.appendChild(checkBox);
            card.appendChild(deleteBtn);

            cardContainer.appendChild(card);
        }
    }
})

module.exports = CardCreator;
