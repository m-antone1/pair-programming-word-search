const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const trLetters = transpose(letters);
    const verticalJoin = trLetters.map(cl => cl.join(''));
    let result = false;
    for (const l of horizontalJoin) {
      if (l.includes(word)) {
        result = true;
      }
    }
    for (const c of verticalJoin) {
      if (c.includes(word)) {
        result = true;
      }
    }
   
    return result;
  };

module.exports = wordSearch
