var table = document.getElementById('mytable');
var input = document.getElementById('myinput');
var tableData = data;
$('th').click(function(){
  var table = $(this).parents('table').eq(0)
  var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
  this.asc = !this.asc
  if (!this.asc){rows = rows.reverse()}
  for (var i = 0; i < rows.length; i++){table.append(rows[i])}
})
function comparer(index) {
  return function(a, b) {
    var valA = getCellValue(a, index), valB = getCellValue(b, index)
    return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
  }
}
function getCellValue(row, index){ return $(row).children('td').eq(index).text() }
populateTable();
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
input.addEventListener('keyup', function(event) {
  filterTable();
});
$("#all").val(null).trigger("change");
function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("types");
  filter = input.value.toUpperCase();
  table = document.getElementById("mytable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    td2 = tr[i].getElementsByTagName("td")[4];
    td3 = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
        if (td2) {
          if (td2.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
            if (td3) {
              if (td3.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
        }
      }
    }
  }
}
//Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon//
function navFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}