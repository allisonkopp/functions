const duplicates = arr =>
  arr.reduce((acc, x, i) => {
    const current = arr.indexOf(x);
    if (current !== i && !acc.includes(x)) acc.push(x);
    return acc;
  }, []);

duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']); //[4, 3, 1]
duplicates([0, 1, 2, 3, 4, 5]); // []
