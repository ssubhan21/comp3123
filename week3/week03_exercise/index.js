var http = require("http");
const Employee = require('./Employee.js'); // Import the Employee module

console.log("Lab 03 - NodeJs");


const port = process.env.PORT || 9059;

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        return res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    }

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end("<h1>Welcome to Lab Exercise 03</h1>");
    }

    if (req.url === '/employee') {
        const employees = Employee.getAllEmployees();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(employees));
    }

    if (req.url === '/employee/names') {
        const employees = Employee.getAllEmployees();
        const names = employees.map(emp => `${emp.firstName} ${emp.lastName}`).sort();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(names));
    }

    if (req.url === '/employee/totalsalary') {
        const employees = Employee.getAllEmployees();
        const totalSalary = employees.reduce((sum, emp) => sum + emp.Salary, 0);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ total_salary: totalSalary }));
    }
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
