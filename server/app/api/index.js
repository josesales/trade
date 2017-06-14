/* A simple code, just to provide the service for the application*/
var api = {}

var currentDate = new Date();
var oneWeekBefore = new Date();
oneWeekBefore.setDate(currentDate.getDate() - 7);
var twoWeeksBefore = new Date();
twoWeeksBefore.setDate(currentDate.getDate() - 14);

var trades = [
    { date: currentDate, amount: 1, value: 150 },
    { date: currentDate, amount: 2, value: 250 },
    { date: currentDate, amount: 3, value: 350 },
    { date: oneWeekBefore, amount: 1, value: 450 },
    { date: oneWeekBefore, amount: 2, value: 550 },
    { date: oneWeekBefore, amount: 3, value: 650 },
    { date: twoWeeksBefore, amount: 1, value: 750 },
    { date: twoWeeksBefore, amount: 2, value: 950 },
    { date: twoWeeksBefore, amount: 3, value: 950 }
];


api.weekList = function (req, res) {
    var currentTrades = trades.filter(function (trade) {
        return trade.date > oneWeekBefore;
    });
    res.json(currentTrades);
};

api.oneWeekBeforeList = function (req, res) {

    var oneWeekBeforeTrades = trades.filter(function (trade) {
        return trade.date < currentDate && trade.date >= oneWeekBefore;
    });
    console.log(oneWeekBeforeTrades)
    res.json(oneWeekBeforeTrades);

};

api.twoWeeksBeforeList = function (req, res) {

    var twoWeeksBeforeTrades = trades.filter(function (trade) {
        return trade.date <= twoWeeksBefore;
    });
    res.json(twoWeeksBeforeTrades);

};

api.importTrade = function (req, res) {

    console.log(req.body);
    req.body.date = new Date(req.body.date.replace(/-/g, '/'));
    trades.push(req.body);
    res.status(200).json("Trade received");
};



module.exports = api;