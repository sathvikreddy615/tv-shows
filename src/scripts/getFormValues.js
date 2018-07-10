// gets values from input fiels in form

const FormCreator = require("./formCreator"); // importing the function that creates the input form

FormCreator.createForm(); // calling the function that creates the input form

const GetFormValues = Object.create({}, {
    getFormData: {
        value: () => {
            let nameVal = document.querySelector("#nameVal").value;

            let plotVal = document.querySelector("#plotVal").value;

            let seasonsVal = document.querySelector("#seasonsVal").value;

            const newObject = {
                nameVal,
                plotVal,
                seasonsVal
            };

            return newObject;

        }
    },

});

module.exports = GetFormValues;
