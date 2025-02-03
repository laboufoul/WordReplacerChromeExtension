// Get all the elements that you care about into an array
//let elements = Array.prototype.slice.call(document.querySelectorAll("p, h1, header"));
const elements = document.querySelectorAll('*');
let arr = Array.from(elements);

function swap(){
  arr.forEach(function(el){
    // Do the replace on the element
    el.textContent = el.textContent.replace('This', 'coding');
  });
};



