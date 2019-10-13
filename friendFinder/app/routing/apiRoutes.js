var friends = require("../data/friends.js")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });



    app.post("/api/friends", function (req, res) {
        

        var friendScores = req.body.scores;
        console.log(friendScores);
        var scores = [];

        
        for (var i = 0; i < friends.length; i++) {
            var minScoresDifference = 0;
            var maxScoresDifference = 40;
            
            for (var x = 0; x < friendScores.length; x++) {
                minScoresDifference += (Math.abs(parseInt(friends[i].scores[x]) - parseInt(friendScores[x])));
            }
            scores.push(minScoresDifference)
        }
        console.log(scores)
        var indexOfSmallestValue = indexOfSmallest(scores)
        var bestFriend = friends[indexOfSmallestValue]
        console.log(indexOfSmallestValue)
        friends.push(req.body);
        res.json(bestFriend);

    });



}

function indexOfSmallest(a) {return a.indexOf(Math.min.apply(Math, a));}