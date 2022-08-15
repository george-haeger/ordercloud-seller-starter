
function findUser(db, username, callback) {
    const collection = db.collection('user');
    collection.findOne({username}, callback);
}

function authUser(db, username, password, hash, callback) {
    const collection = db.collection('user');
    bcrypt.compare(password, hash, callback);
}

export default (req, res) => {
if (req.method === 'POST') {
//login
    try {
        console.log(req.body.username);
        console.log(req.body.email);
    //assert.notEqual(null, req.body.email, 'Email required');
    //assert.notEqual(null, req.body.password, 'Password required');
    } catch (bodyError) {
    res.status(403).send(bodyError.message);
}


const email = req.body.username;
const password = req.body.password;

    findUser()

    authUser()

}
}