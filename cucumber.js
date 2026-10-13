const { format } = require("node:util");


module.exports={
default: {
    paths  : ["Features/fillHotelDetails.feature"],
    require: ['StepDefinition/hotelSelection.js',"Features/support/hooks.js"],
    format : ["progress"]

    }
}