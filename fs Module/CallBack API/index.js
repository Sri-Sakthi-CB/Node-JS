import * as fs from "fs";


fs.mkdir("c:\\node", function(error){
    if(error) throw error;
    console.log("Created!");
});