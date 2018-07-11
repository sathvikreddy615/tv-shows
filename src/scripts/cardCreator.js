// file that creates cards for TV Show data to be displayed on
const EditFormCreator = require("./editFormCreator");
const DeleteShowData = require("./deleteShowData");
const RemoveShowCard = require("./removeShowCard");

const CardCreator = Object.create({}, {
    createCard: {
        value: (showId, showName, showPlot, showSeasons) => {
            const cardContainer = document.querySelector("#cardContainer");

            const card = document.createElement("div");
            card.setAttribute("class", "card");
            card.id = `${showId}`;

            const nameEl = document.createElement("a");
            nameEl.textContent = showName;
            nameEl.href = "#";
            nameEl.setAttribute("class", "cardName");
            nameEl.addEventListener("click", EditFormCreator.createEditForm)

            const plotEl = document.createElement("p");
            plotEl.textContent = showPlot;
            plotEl.setAttribute("class", "cardPlot");

            const seasonsEl = document.createElement("p");
            seasonsEl.textContent = showSeasons;
            seasonsEl.setAttribute("class", "cardSeasons");

            const checkBox = document.createElement("input");
            checkBox.setAttribute("class", "checkBox");
            checkBox.type = "checkbox";
            checkBox.addEventListener("click", RemoveShowCard.removeShow);

            let deleteBtn = document.createElement("button");
            deleteBtn.id = "deleteBtn";
            deleteBtn.textContent = "Delete Show";
            deleteBtn.addEventListener("click", DeleteShowData.removeShow)

            card.appendChild(nameEl);
            card.appendChild(plotEl);
            card.appendChild(seasonsEl);
            card.appendChild(checkBox);
            card.appendChild(deleteBtn);

            cardContainer.appendChild(card);
        }
    }
})

module.exports = CardCreator; // exports to getShowDataAndPrintCards.js
