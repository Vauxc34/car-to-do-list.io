//filtering

var myArray = [
  {'brand':'Ford', 'model':'Focus' ,'production':'1998'},
  {'brand':'Mazda', 'model':'MX-5' , 'production':'2005'},
  {'brand':'Skoda', 'model':'Citigo', 'production':'2011'},
  {'brand':'Saab', 'model':'900' , 'production':'1992'},
  {'brand':'Volkswagen', 'model':'Polo', 'production':'1996'},
  {'brand':'Fiat', 'model':'Seicento', 'production':'2000'},
]

$('th').on('click', function(){
var column = $(this).data('column')
var order = $(this).data('order')
var text = $(this).html()
text = text.substring(0, text.length - 1)

if(order == 'desc'){
  $(this).data('order', "asc")
  myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
  text += '&#9660'

}else{
  $(this).data('order', "desc")
  myArray = myArray.sort((a,b) => a[column] < b[column] ? 1 : -1)
  text += '&#9650'

}
$(this).html(text)
buildTable(myArray)
})

function buildTable(data){
  var table = document.getElementById('actual-table-1')
  table.innerHTML = ''
  for (var i = 0; i < data.length; i++){
    var row = `<tr>
            <td>${data[i].brand}</td>
            <td>${data[i].model}</td>
            <td>${data[i].production}</td>
          </tr>`
    table.innerHTML += row
  
  
  }
  }

buildTable(myArray)

// search



  // add/delete item's

const firstinput = document.getElementById("input-field-name-1")
const secondinput = document.getElementById("input-field-name-2")
const thirdinput = document.getElementById("input-field-name-3")

const add_btn = document.getElementById("button-add-item")

const rm_btn = document.getElementById("button-delete-item")

const table_ = document.getElementById("actual-table-1")

const row = document.querySelector('td')

add_btn.addEventListener('click', () => {

var row = table_.insertRow(0)

var cell1 = row.insertCell(0)
var cell2 = row.insertCell(0)
var cell3 = row.insertCell(0)

cell1.innerHTML = firstinput.value
cell2.innerHTML = secondinput.value
cell3.innerHTML = thirdinput.value

if(firstinput.value == '' || secondinput.value == '' || thirdinput.value == '') {

  cell1.innerHTML = "nie podano roku produkcji."
  cell2.innerHTML = "nie podano modelu pojazdu."
  cell3.innerHTML = "nie podano marki pojazdu."

}


})

rm_btn.addEventListener("click", () => {

  table_.deleteRow(0);
  
  
  })

$("#input-search").keyup(function () {
  var value = $(this).val();

  if (value.length){
      $("table tr").each(function (index) {
          if (index != 0) {

              $row = $(this);

              $row.find("td").each(function () {

              var cell = $(this).text();

              if (cell.indexOf(value) < 0) {
                  $row.hide();
              } else {
                  $row.show();
                  return false;
          }

      });
  }
});
}
else{
  
  $("table tr").show();

}
});