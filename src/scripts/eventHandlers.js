const PostFormValues = require("./postFormValues");

const EventHandler = Object.create({}, {
    saveBtnClick: {
        value: () => {
           const saveBtn = document.querySelector("#saveBtn");
           saveBtn.addEventListener("click", PostFormValues.postFormData);
        }
    },
    deleteBtnClick: {
        value: () => {
            const deleteBtn = document.querySelector("#deletebtn");
            deleteBtn.addEventListener("click", () => {});
        }
    }
})

module.exports = EventHandler;
