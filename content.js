const text = document.getElementsByTagName("*");

for (let i=0; i < text.length; i++){
  if (text[i].innerHTML.includes('amazon')){
    text[i].innerHTML = text[i].innerHTML.replace('amazon', 'https://www.etsy.com/' )
  }
}




