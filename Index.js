const jsonfile = require('jsonfile');
const moment = require('moment');
const simplegit = require('simple-git');

const File_path = './data.json';
const Date = moment().format();
const data = {
   date:Date
}
jsonfile.writeFile(File_path, data);

simplegit().add([File_path]).commit("first commit", { '--date': Date }).push();
