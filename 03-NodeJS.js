const getShape = (n) => {
  n % 2 == 0 && n % 3 == 0
    ? console.log("CIRCLE STAR")
    : n % 2 == 0
    ? console.log("CIRCLE")
    : n % 3 == 0
    ? console.log("STAR")
    : console.log(null);
};

getShape(4);
getShape(5);
getShape(6);
getShape(9);
