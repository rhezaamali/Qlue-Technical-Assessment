const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./server1.json", "utf-8"));

const improved = (input) => {
  let obj = {
    h: [],
    d: [],
  };

  input.forEach((el) => {
    let keyArr = [];
    let values = [];
    for (let key in el) {
      values.push(el[key]);
      keyArr.push(key);
    }

    if (keyArr !== obj.h && obj.h.length < keyArr.length) {
      obj.h = keyArr;
    }

    obj.d.push(values);
    console.log(el, "<<<<< el");
  });

  obj.d.forEach((el, index) => {
    if (el.length < obj.h.length) {
      let diff = obj.h.length - el.length;
      for (let i = 0; i < diff; i++) {
        obj.d[index].push(null);
      }
    }
  });

  return obj;
};

fs.writeFileSync(
  "./server2.json",
  JSON.stringify(improved(data), null, 2),
  "utf-8"
);
