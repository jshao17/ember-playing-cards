export default function randomElement(arr) {
  var i = Math.floor(Math.random() * arr.length);
  return arr[i];
}
