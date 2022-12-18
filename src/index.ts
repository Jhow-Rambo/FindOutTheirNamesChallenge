import { filterNames } from "./services/filterNames";

const csv = require('csv-parser')
const fs = require('fs')
const names = [];

fs.createReadStream('src/data/names.csv')
  .pipe(csv())
  .on('data', (data) => names.push(data.first_name))
  .on('end', () => {
    filterNames(names)
  });