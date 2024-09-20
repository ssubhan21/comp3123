
let employees = [
    { id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary: 5000 },
    { id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary: 4000 },
    { id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary: 5500 },
    { id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary: 9000 }
];

function getAllEmployees() {
    return employees;
}


function getEmployeeById(id) {
    return employees.find(employee => employee.id === id);
}

// Function to add a new employee
function addEmployee(employee) {
    employees.push(employee);
}

// Function to update an employee's information
function updateEmployee(id, updatedInfo) {
    const index = employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
        employees[index] = { ...employees[index], ...updatedInfo };
    }
}

// Function to remove an employee
function removeEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
}

// Exporting functions
module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    removeEmployee
};
