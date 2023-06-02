// Create JSON object any detail
// E.g. EmployeeData = {{fname:”abc”, lname:”xyz”, id: 1}, {fname:”abc”, lname:”xyz”, id: 2}}
// Apply CURD operation on that JSON Data.


var EmployeeData = [
    { "fname": "abc", "lname": "xyz", "id": "1" },
    { "fname": "abc", "lname": "xyz", "id": "2" }
];

//CRUD 1.CREATE 2.READ 3.UPDATE 4.DELETE


//1.CREATE
function addEmployee(employee) {
    EmployeeData.push(employee);
}


//2.READ
function getEmployee(id) {
    return EmployeeData.find(function (employee) {
        return employee.id === id
    });
}

function getAllEmployee() {
    return EmployeeData;
}

//3.UPDATE
function updateEmployee(id, updatedEmployee) {
    var employeeIndex = employeeData.findIndex(function (employee) {
        return employee.id === id;
    });

    if (employeeIndex !== -1) {
        employeeData[employeeIndex] = updatedEmployee;
    }
}

//DELETE
function deleteEmployee(id) {
    var exployeeIndex = employeeData.findIndex(function (employee) {
        return employee.id === id;
    });
    if (employeeIndex !== -1) {
        employeeData.splice(employeeIndex, 1);
    }
}

