import fs from 'fs';


export const model = () => {
const books = JSON.parse(fs.readFileSync('./data/books.json'));
 
   
  return {books};
};
