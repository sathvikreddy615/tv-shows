// posts form data into database

const Database = require("./dbCollection");
const GetFormValues = require("./getFormValues"); // imports the file that gets the form's values

const PostFormValues = Object.create({}, {
    postFormData: {
        value: () => {
            const formData = GetFormValues.getFormData(); // call function that gets the form values and store it in a variable

            Database.postShows(formData.nameVal, formData.plotVal, formData.seasonsVal)
            .then(data => {
                console.log(data);
            })
        }
    }
})

module.exports = PostFormValues; // exports to eventHandlers.js
