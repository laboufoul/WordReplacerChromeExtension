const text = document.querySelectorAll('*');

for (let i=0; i < text.length; i++){
  if (text[i].innerHTML.includes('dog')){
    text[i].innerHTML = text[i].innerHTML.replace('dog', 'CODE' )
  }
}




