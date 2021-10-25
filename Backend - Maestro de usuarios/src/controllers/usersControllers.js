
listUser = (req,res) => {
    console.log(req.params);
    userModel.find().then ((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
});

};

getUser = (req,res) => {
    console.log(req.params);
    userModel.find({_userId: req.params.userId }).then ((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
});
};

createUser = (req,res) => {
    console.log(req.params, req.body, req.headers);
    userModel.create(
        {
        userId: "22222"
        }
        ).then((data) =>{
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
};

modifyUser = (req, res) =>{
    console.log(req.params, req.body, req.headers);
    userModel.findByIdAndUpdate(req.params.userId, req.body).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
};

deleteUser = (req,res) =>{
    console.log(req.params);
    userModel.findByIdAndDelete(req.params.userId).then(data => {
        res.json(data);
        }).catch(err => {
            res.send(err);
        });
};

module.exports ={    
    listUser,
    getUser,
    createUser,
    modifyUser,
    deleteUser
}