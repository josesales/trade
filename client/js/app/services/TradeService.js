class TradeService {
    getTradesFromWeek(callback) {

        let xhr = new XMLHttpRequest();
		xhr.open('GET', 'trades/week');

		xhr.onreadystatechange = () => {

			//Request concluded and reply is ready
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					console.log("Geting the trades from the server.");

					callback(null, JSON.parse(xhr.responseText).map(object =>
						new Trade(new Date(object.date), object.amount, object.value)));
                        
				} else {
					console.log(xhr.responseText);
                    callback("It was not possible to get the trades from the week.");
				}

			}

		}

		xhr.send();
    }

    getTradesFromOneWeekBefore(callback) {
        
        let xhr = new XMLHttpRequest();
		xhr.open('GET', 'trades/week');

		xhr.onreadystatechange = () => {

			//Request concluded and reply is ready
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					console.log("Geting the trades from the server.");

					callback(null, JSON.parse(xhr.responseText).map(object =>
						new Trade(new Date(object.date), object.amount, object.value)));
                        
				} else {
					console.log(xhr.responseText);
                    callback("It was not possible to get the trades from one week before.");
				}

			}

		}

		xhr.send();
    }

    getTradesFromTwoWeeksBefore(callback) {
        
        let xhr = new XMLHttpRequest();
		xhr.open('GET', 'trades/week');

		xhr.onreadystatechange = () => {

			//Request concluded and reply is ready
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					console.log("Geting the trades from the server.");

					callback(null, JSON.parse(xhr.responseText).map(object =>
						new Trade(new Date(object.date), object.amount, object.value)));
                        
				} else {
					console.log(xhr.responseText);
                    callback("It was not possible to get the trades from  2 weeks before.");
				}

			}

		}

		xhr.send();
    }
}