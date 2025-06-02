const replaceableString = '2233';
const newString = replaceableString.replace('3', '4');
const anotherString = replaceableString.replace(/3/g, 4);
const onemoreString = replaceableString.replaceAll('3', '4');
console.log(replaceableString);
console.log(newString);
console.log(anotherString);
console.log(onemoreString);

String.prototype.replaceall = function(search, replacement) {
  if (typeof search !== "string") {
    throw new TypeError("Not a string");
  }
  if (typeof replacement !== "string") {
    throw new TypeError("Not a string");
  }
  const escSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const regex = new RegExp(escSearch, 'g');
  return this.replace(regex, replacement);
};

const text = "hello , hello , hello";
const result = text.replaceAll("hello", "hi");

console.log(result);

