function processFormData() {
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let sex = document.querySelector('input[name="sex"]:checked').value;
  
  insertData(firstName, lastName, sex);
  
  document.getElementById("first").value = '';
  document.getElementById("last").value = '';
  let radios = document.querySelectorAll('input[name="sex"]');
  radios.forEach(radio => {
  radio.checked = false;
  });
  
  function insertData(firstName, lastName, sex) {
    let table = document.getElementById("dataTable");
    
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    // let cell4 = newRow.insertCell(3);
//     let cell5 = newRow.insertCell(4);
//     let cell6 = newRow.insertCell(5);
//     let cell7 = newRow.insertCell(6);
//     let cell8 = newRow.insertCell(7);
//     let cell9 = newRow.insertCell(8);
//     let cell10 = newRow.insertCell(9);
    
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = sex;
  }
}