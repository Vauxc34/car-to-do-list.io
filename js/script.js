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

$('#input-search').on('keyup', function(){

  var value = $(this).val()
  console.log(value)
  var data = Search(value, myArray)
  buildTable(data)
 
 })

function Search(value, data) {

  var filteredData = []
  
  for (var i = 0; i < data.lenght; i++) {
  
    value = value.toLowerCase()
    var name = data[i].name.toLowerCase()
  
    if (name.includes(value)) {
      filteredData.push(data[i])
    }
  
  }
  
  }

  // add/delete item's

const firstinput = document.getElementById("input-field-name-1")
const secondinput = document.getElementById("input-field-name-2")
const thirdinput = document.getElementById("input-field-name-3")

const add_btn = document.getElementById("button2")

const rm_btn = document.getElementById("button1")

const table_ = document.getElementById("actual-table-1")

add_btn.addEventListener('click', () => {

  const new_ = document.createElement("tr")
  table_.appendChild(new_)

  new_.className = "eo"

  adding = false

  if(table_.appendChild(new_)) {

    const new_1 = document.createElement("td")
    new_.appendChild(new_1)
    new_1.textContent = firstinput.value

    const new_2 = document.createElement('td')
    new_.appendChild(new_2)
    new_2.textContent = secondinput.value

    const new_3 = document.createElement('td')
    new_.appendChild(new_3)
    new_3.textContent = thirdinput.value

    
  
  }

  rm_btn.addEventListener("click", () => {

  table_.remove(new_)
  
  
  })

})




