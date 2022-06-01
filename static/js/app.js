var table = document.getElementById('mytable');
var input = document.getElementById('myinput');
var tableData = data;
var caretUpClassName = 'fa fa-caret-up';
var caretDownClassName = 'fa fa-caret-down';

const sort_by = (field, reverse, primer) => {

  const key = primer ?
    function(x) {
      return primer(x[field]);
    } :
    function(x) {
      return x[field];
    };

  reverse = !reverse ? 1 : -1;



  return function(a, b) {
    
    return a = key(a)?key(a):'', b = key(b)?key(b):'', reverse * ((a > b) - (b > a));
  
  }
 
};


function clearArrow() {
  let carets = document.getElementsByClassName('caret');
  for (let caret of carets) {
    caret.className = "caret";
  }
}


function toggleArrow(event) {
  let element = event.target;
  let caret, field, reverse;
  if (element.tagName === 'SPAN') {
    caret = element.getElementsByClassName('caret')[0];
    field = element.id
  }
  else {
    caret = element;
    field = element.parentElement.id
  }

  let iconClassName = caret.className;
  clearArrow();
  if (iconClassName.includes(caretUpClassName)) {
    caret.className = `caret ${caretDownClassName}`;
    reverse = false;
  } else {
    reverse = true;
    caret.className = `caret ${caretUpClassName}`;
  }

  tableData.sort(sort_by(field, reverse));
  populateTable();
}


function populateTable() {
  table.innerHTML = '';
  for (let data of tableData) {
    let row = table.insertRow(-1);

    let strain = row.insertCell(0);
    strain.innerHTML = data.strain;

    let THC = row.insertCell(1);
    THC.innerHTML = data.THC;

    let CBD = row.insertCell(2);
    CBD.innerHTML = data.CBD;

    let Indica = row.insertCell(3);
    Indica.innerHTML = data.Indica;

    let Sativa = row.insertCell(4);
    Sativa.innerHTML = data.Sativa;

    let Hybrid = row.insertCell(5);
    Hybrid.innerHTML = data.Hybrid;
  }
  
  filterTable();
}


function filterTable() {
  let filter = input.value.toUpperCase();
  rows = table.getElementsByTagName("TR");
  let flag = false;

  for (let row of rows) {
    let cells = row.getElementsByTagName("TD");
    for (let cell of cells) {
      if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
        if (filter) {
          cell.style.backgroundColor = 'yellow';
        } else {
          cell.style.backgroundColor = '';
        }

        flag = true;
      } else {
        cell.style.backgroundColor = '';
      }
    }

    if (flag) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }

    flag = false;
  }
}


populateTable();

let tableColumns = document.getElementsByClassName('table-column');

for (let column of tableColumns) {
  column.addEventListener('click', function(event) {
    toggleArrow(event);
  });
}

input.addEventListener('keyup', function(event) {
  filterTable();
});
//Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon//
function navFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}