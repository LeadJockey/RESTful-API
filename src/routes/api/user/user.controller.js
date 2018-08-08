let users = [
    { id: 0, name: 'shawn' },
    { id: 1, name: 'alice' },
    { id: 2, name: 'bek' },
    { id: 3, name: 'chris' }
];

users.getIndex = (key, value) => users.findIndex(user => user[key] === value) || -1;
users.findOne = (key, value) => users.filter(user => user[key] === value)[0] || {};
users.removeOne = (key, value) => users.splice(users.getIndex(key, value), 1) || [];
users.createOne = (object) => users.push(object);

exports.showList = (req, res) => res.json(users);
exports.showOne = (req, res) => res.json(users.findOne('id', parseInt(req.params.id, 10)));
exports.destroy = (req, res) => {
    const id = parseInt(req.params.id, 10);
    users.removeOne('id', id);
    res.json({msg:`user(id:${id}) removed`});
    res.redirect('/users');
};
exports.create = (req, res) => {
    users.createOne({
        id: users.length,
        name: req.body.name
    });
    res.json({msg:`user(id:${req.body.name}) registered`});
    res.redirect('/users');
};