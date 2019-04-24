var express = require('express')
var app = express();
const customers = [
    { id: 1, name: 'Customer A' },
    { id: 2, name: 'Customer B' },
    { id: 3, name: 'Customer C' },
];
app.use(express.json());
app.get('/', function (req, res) {
    res.send(customers);
    //res.sendFile(__dirname+'/welcome.html');
});

app.get('/api/customer/name/:name', function (req, res) {
    res.send('Customer : ' + req.query.id + " name " + req.params.name);
})


app.get('/api/customer/:id', (req, res) => {
    let customer = customers.find(c => c.id ===
        parseInt(req.params.id));
    res.send(customer);
});

app.post('/api/customer', (req, res) => {
    const customer = {
        id: customers.length + 1,
        name: req.body.name
    };
    customers.push(customer);
    res.send(customer);
});


app.listen(3000, () => {
    console.log("Server started listening");
})