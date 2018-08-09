const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, '..', '..', '..', 'models', 'users.json');
let users = require(filePath);

//models
users.getIndex = (key, value) => users.findIndex(user => user[key] === value) || -1;
users.findOne = (key, value) => users.filter(user => user[key] === value)[0] || {};
users.removeOne = (key, value) => users.splice(users.getIndex(key, value), 1) || [];
users.createOne = (object) => users.push(object);

//controller
exports.showList = (req, res) => res.json(users);
exports.showOne = (req, res) => res.json(users.findOne('id', parseInt(req.params.id, 10)));
exports.destroy = (req, res) => {
    users.removeOne('id', parseInt(req.params.id, 10));
    fs.writeFile(filePath, JSON.stringify(users, undefined, 2), 'UTF-8', function (err) {
        if (err) { return console.log(err) }
        res.json({ msg: 'user removed' });
    });
};

exports.create = (req, res) => {
    users.createOne({
        id: users.length,
        name: req.body.name
    });
    fs.writeFile(filePath, JSON.stringify(users, undefined, 2), 'UTF-8', function (err) {
        if (err) { return console.log(err) }
        res.json({ msg: 'user registered' });
    });
};