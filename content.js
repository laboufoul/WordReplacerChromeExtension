function replaceTextInNode(node) {
   if (node.nodeType === 3) { // Text node
     node.nodeValue = node.nodeValue.replace(/dog/gi, 'CODE');
   } else {
     node.childNodes.forEach(replaceTextInNode);
   }
 }
 
replaceTextInNode(document.body);




