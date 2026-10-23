const { format } = require("node:util");


module.exports={
default: {
    paths  : ["Features/**/*.feature"],
    require: ['StepDefinition/**/*.js',"Features/support/hooks.js"],
    format : ["progress"],
    formatoptions:["allure-results","async-await"]

    }
}