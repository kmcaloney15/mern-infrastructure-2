//this is the token getting returned 

module.exports = {
    create
}

function create(req, res){
    //Baby Step...
    res.json({
        user: {
            name: req.body.name,
            email: req.body.email
        }
    })
}