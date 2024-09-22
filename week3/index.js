var http = require("http");
var employee = require("./Employee");
console.log("Lab 03 - NodeJs");


const port = process.env.PORT || 8081;
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    } else {
        res.setHeader("Content-Type", "application/json");
        if (req.url === '/') {
            res.setHeader("Content-Type", "text/html");
            return res.end("<h1>Welcome to Lab Exercise 03</h1>");
        }

        if (req.url === '/employee') {
            return res.end(JSON.stringify(employee));
        }

        if (req.url === '/employee/names') {
            const employeeNames = employee
                .map(emp => `${emp.firstName} ${emp.lastName}`)
                .sort(); 
            return res.end(JSON.stringify(employeeNames));
        }

        if (req.url === '/employee/totalsalary') {
            const totalSalary = employee.reduce((sum, emp) => sum + emp.Salary, 0);
            return res.end(JSON.stringify(totalSalary));
        }        

        res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
