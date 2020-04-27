//just to create element and put it some where for practice

//var h= document.createElement('h1')
//var myValue= document.createTextNode('Hello World!')
//h.appendChild(myValue)
//document.querySelector('h1').appendChild(h);


//now just to know how while loop works check in console
//var value=5;
//while (value>0) {
 //   console.log(value);
  //  value--;
    
//}
//now comes the todo app
 var ul = document.getElementById('list');
 var li; 
var addButton = document.getElementById('add');
 addButton.addEventListener('click',addItem);
var removeButton= document.getElementById('remove');
 removeButton.addEventListener('click', removeItem);
function addItem(){
   //  console.log('add button clicked ');
 var input = document.getElementById('input');
 var item  = input.value;
 ul = document.getElementById('list');
 var TextNode = document.createTextNode(item)
if (item ==='') {
    return false;
    //add a p tag and assign   avalue of 'enter your todo'
}else
{
     // create li
    li= document.createElement('li');
    //create checkbox
    var checkbox = document.createElement('input')
    checkbox.type='checkbox';
     checkbox.setAttribute('id','check');

     // create label
     var label= document.createElement('label');
     label.setAttribute('for', 'item ');//optional 

// add these elements on web page
ul.appendChild(label);
li.appendChild(checkbox);
label.appendChild(TextNode);
li.appendChild(label);
ul.insertBefore(li,ul.childNodes[0]);

setTimeout(() => {
    li.className='visual';
}, 2);
// li.className='visual';
input.value='';
}
}
function removeItem(){
  //  console.log('remove  button clicked ');
   li = ul.children
  for (let index = 0; index < li.length; index++) {
  while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index])
  }
    //const element = li [index];
   // console.log(element);
     }
}

var dt = new Date();

document.getElementById("datetime").innerHTML = dt.toLocaleString();
