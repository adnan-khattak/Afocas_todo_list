var form = document.querySelector('#form');
var ul = document.querySelector('#list');
// console.log(ul);
form.addEventListener('submit', runevent);
ul.addEventListener('click', removeitem)
var filter = document.querySelector('#filter');
filter.addEventListener('keyup', filteritem);


function runevent(e){
e.preventDefault();
// console.log(1);
var input = document.querySelector('#input').value;

var li= document.createElement('li');

li.className = 'item'

li.appendChild(document.createTextNode(input));
ul.appendChild(li);

// Adding Button
var remove = document.createElement('button');
remove.className = 'delete';
remove.appendChild(document.createTextNode('X'));
li.appendChild(remove);

}
function removeitem(e){
  if(e.target.classList.contains('delete')){
    // console.log(1);
   if(confirm('Are you Sure?')){
    var li = e.target.parentElement;
    ul.removeChild(li);
   }
  }
}

function filteritem(){
  // e.preventDefault();
var text = e.target.value.toLowerCase();
var listitem = ul.getElementsByTagName('li');
console.log(listitem);
// var array = Array.from(listitem);
// console.log(array);

// if(itemname.toLowerCase().indexOf(text) != -1){
  //   text.style.display = 'block';
  // }else{
    //   text.style.display = 'none';
    // }
  }