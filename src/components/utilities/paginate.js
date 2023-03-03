const paginate = (cards) => {
  const itemsPerPage = 8;
  const numberOfPages = Math.ceil(cards.length / itemsPerPage);

  const newCards = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return cards.slice(start, start + itemsPerPage);
  });

  return newCards;
};

export default paginate;
