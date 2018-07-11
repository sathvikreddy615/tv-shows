const PostFormValues = require("./postFormValues");

const EventHandler = Object.create({}, {
    saveBtnClick: {
        value: () => {
           const saveBtn = document.querySelector("#saveBtn");
           saveBtn.addEventListener("click", PostFormValues.postFormData);
        }
    }
})

module.exports = EventHandler; // exports to main.js
