const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, '..', '..', '..', 'models', 'dummy.json');
let dummys = require(filePath);


//TODO  dummy post insert function need to update
//models
dummys.getIndex = (key, value) => dummy.findIndex(user => dummy[key] === value) || -1;
dummys.findOne = (key, value) => dummy.filter(user => dummy[key] === value)[0] || {};
dummys.removeOne = (key, value) => dummy.splice(dummys.getIndex(key, value), 1) || [];
dummys.createOne = (object) => dummy.push(object);

//controller
exports.showList = (req, res) => res.json(dummys);
exports.showOne = (req, res) => res.json(dummys.findOne('id', parseInt(req.params.id, 10)));
exports.destroy = (req, res) => {
    dummys.removeOne('id', parseInt(req.params.id, 10));
    fs.writeFile(filePath, JSON.stringify(dummys, undefined, 2), 'UTF-8', function (err) {
        if (err) { return console.log(err) }
        res.json({ msg: 'dummy removed' });
    });
};

exports.create = (req, res) => {
    dummys.createOne({
        id: dummys.length,
        name: req.body.name
    });
    fs.writeFile(filePath, JSON.stringify(dummys, undefined, 2), 'UTF-8', function (err) {
        if (err) { return console.log(err) }
        res.json({ msg: 'dummy registered' });
    });
};