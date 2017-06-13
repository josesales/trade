/* A simple code, just to provide the service for the application*/

var api = require('../api');

module.exports  = function(app) {
    
    app.route('/trades/week')
        .get(api.weekList);
        
    app.route('/trades/oneWeekBefore')
        .get(api.oneWeekBeforeList);
        
    app.route('/trades/twoWeeksBefore')
        .get(api.twoWeeksBeforeList);  
        
    app.route('/trades')
        .post(api.importTrade);          
};