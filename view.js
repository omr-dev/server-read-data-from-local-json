export const view = ({books}) => {
  return `
  <h1>There ara ${books.length} books.</h1>
  <ol>
  ${books.map((book) => `<li>${book.title}</li>`).join("")}
  </ol>
  `;
};
