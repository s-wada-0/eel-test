'use strict'

async function doPythonFunc() {
    let val = await eel.python_function()();
    console.log(val);
    $(".return-box").append("<p>" + val + "</p>");
}
