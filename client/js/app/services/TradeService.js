class TradeService {

	getTradesFromWeek() {

		return new Promise((resolve, reject) => {

			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'trades/week');

			xhr.onreadystatechange = () => {

				//Request concluded and reply is ready
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						console.log("Geting the trades from the server.");

						resolve(JSON.parse(xhr.responseText).map(object =>
							new Trade(new Date(object.date), object.amount, object.value)));

					} else {
						console.log(xhr.responseText);
						reject("It was not possible to get the trades from the week.");
					}

				}

			}

			xhr.send();
		});
	}

	getTradesFromOneWeekBefore() {

		return new Promise((resolve, reject) => {

			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'trades/oneWeekBefore');

			xhr.onreadystatechange = () => {

				//Request concluded and reply is ready
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						console.log("Geting the trades from the server.");

						resolve(JSON.parse(xhr.responseText).map(object =>
							new Trade(new Date(object.date), object.amount, object.value)));

					} else {
						console.log(xhr.responseText);
						reject("It was not possible to get the trades from one week before.");
					}

				}

			}

			xhr.send();
		});
	}

	getTradesFromTwoWeeksBefore() {

		return new Promise((resolve, reject) => {

			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'trades/twoWeeksBefore');

			xhr.onreadystatechange = () => {

				//Request concluded and reply is ready
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						console.log("Geting the trades from the server.");

						resolve(JSON.parse(xhr.responseText).map(object =>
							new Trade(new Date(object.date), object.amount, object.value)));

					} else {
						console.log(xhr.responseText);
						reject("It was not possible to get the trades from  2 weeks before.");
					}

				}

			}

			xhr.send();
		});
	}

}