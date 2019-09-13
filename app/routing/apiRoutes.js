module.exports = function(app, friends, path){
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        var newFriend = req.body;
        console.log(newFriend);
        friends.push(newFriend);
    });

}