var index, table = document.getElementById('Table');
            for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].cells[4].onclick = function remove()
                {
                    var c = confirm("do you want to delete this row");
                    if(c === true)
                    {
                        index = this.parentElement.rowIndex;
                        table.deleteRow(index);
                    }
                    
                    //console.log(index);
                };
                
            }

            
            //Delete the data
            // function onDelete(td) {
            //     if (confirm('Do you want to delete this record?')) {
            //         row = td.parentElement.parentElement;
            //         document.getElementById('Table').deleteRow(row.rowIndex);
            //         resetForm();
            //     }
            // }




            // const formEl= document.querySelector('form');
            // const tbodyEl=document.querySelector('tbody');

            // function onAddWbesite(e){
            //     e.preventDefault();
            //     const id= document.getElementById('id').value;
            //     const cover= document.getElementById('cover').value;
            //     const bookname= document.getElementById('bname').value;
            //     const author= document.getElementById('author').value;
            //     const price= document.getElementById('price').value;
            //     const quantity= document.getElementById('quantity').value;
            //     tbodyEl.innerHTML+= `
            //     <tr>
            //      <td>${id}</td>
            //      <td>${cover}}</td>
            //      <td>${bookname}</td>
            //      <td>${author}</td>
            //      <td>${price}</td>
            //      <td>${quantity}</td>
            //      </tr>
            
            //     `;
            // }

            // form.addEventListener("add", add);
          


            // let btnAdd = document.querySelector('button');
            // let table = document.querySelector('table');
            // let nameInput = document.querySelector('#name');
            // let ageInput = document.querySelector('#age');
            // let countryInput = document.querySelector('#country');
            // btnAdd.addEventListener('click', () => {
            // let name = nameInput.value;
            // let age = ageInput.value;
            // let country = countryInput.value;
            // let template = `
            //     <tr>
            //           <td>${id}</td>
            //           <td>${cover}}</td>
            //           <td>${bookname}</td>
            //           <td>${author}</td>
            //           <td>${price}</td>
            //           <td>${quantity}</td>
            //     </tr>`;
            // table.innerHTML += template;
            // });
        
        
  var entry=document.getElementById ("add") ;
 entry. addEventListener ("click", displayDetails);

var row=1;
function displayDetails(){
    var id= document.getElementById("id") .value;
    var cover = document. getElementById("cover") . value;
    var bookname= document.getElementById ("bname"). value;
var author= document.getElementById ("author"). value;

if(!id || !cover || !bookname || !author || !price ||!quantity) {
alert("Please fill all the boxes") ;
return;

}

var display = document.getElementById("Table");
var newrow= display.insertRow(row);
var cell1= newrow.inserCell(0);
var cell2= newrow.inserCell(1);
var cell3= newrow.inserCell(2);
var cell4= newrow.inserCell(3);
var cell5= newrow.inserCell(4);
var cell6= newrow.inserCell(5);



cell1.innerHTML= id;
cell2.innerHTML= cover;
cell3.innerHTML= bookname;
cell4.innerHTML= author;
cell5.innerHTML= id;
cell6.innerHTML= id;
row++;
}
