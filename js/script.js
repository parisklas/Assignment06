// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let empForm = document.getElementById('addForm');
let employees = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = 0;
document.getElementById('empCount').innerHTML;

// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let ext = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const row = employees.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell();
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellDeleteBtn = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let newId = document.createTextNode(id);
    let newName = document.createTextNode(name);
    let newExt = document.createTextNode(ext);
    let newEmail = document.createTextNode(email);
    let newDepartment = document.createTextNode(department);

    cellId.appendChild(newId);
    cellName.appendChild(newName);
    cellExt.appendChild(newExt);
    cellEmail.appendChild(newEmail);
    cellDepartment.appendChild(newDepartment);

    employees.appendChild(row);

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    let textDelete = document.createTextNode('X');
    cellDeleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    cellDeleteBtn.appendChild(textDelete);
    employees.appendChild(deleteBtn);
    // RESET THE FORM
    empForm.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount++
    console.log(empCount);
})

// DELETE EMPLOYEE

employees.addEventListener('click', (e) => {
    console.log('button pressed');
    if (confirm('Are you sure you want to delete this employee?')) {
        employees.deleteRow(e.target.deleteBtn.rowIndex)
    }
})

