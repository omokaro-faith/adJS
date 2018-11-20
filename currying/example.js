let dragon =
  (name) => 
    (size) =>
      (element) => (`${name} is a ${size} dragon that breathes ${element}`);

let output = dragon('Karo')('large')('ice');
console.log(output); // Karo is a large dragon that breathes ice
