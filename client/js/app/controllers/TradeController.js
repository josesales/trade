class TradeController {

	constructor() {

		let $ = document.querySelector.bind(document);

		this._inputDate = $("#date");
		this._inputAmount = $("#amount");
		this._inputValue = $("#value");

		this._tradeView = new TradeView($("#tradeView"));
		this._tradeList = new Bind(new TradeList(), this._tradeView, 'put', 'clean');

		this._messageView = new MessageView($("#messageView"));
		this._message = new Bind(new Message(), this._messageView, 'text', 'type');
	}

	put(event) {

		event.preventDefault();
		console.log("Put method called");

		this._tradeList.put(this._makeTrade());

		this._cleanForm();
		console.log(this._tradeList.trades);
		this._message.text = "Trade added with success!";
		this._message.type = 'alert alert-success';
	}

	importTrades() {

		let tradeService = new TradeService();

		//Making promisses to avoid callback hell
		Promise.all([tradeService.getTradesFromWeek(), tradeService.getTradesFromOneWeekBefore(),
		tradeService.getTradesFromTwoWeeksBefore()]).then(trades => {

			trades.reduce((allTradesArray, tradeArray) => allTradesArray.concat(tradeArray), [])
				.forEach(trade => this._tradeList.put(trade));

			this._message.text = "Trades imported with success!";
			this._message.type = 'alert alert-success';
		}).catch(error => {
			this._message.text = error;
			this._message.type = 'alert alert-warning';
		});

	}

	_makeTrade() {

		return new Trade(DateUtil.textToDate(this._inputDate.value),
			this._inputAmount.value,
			this._inputValue.value);
	}

	_cleanForm() {

		this._inputDate.value = '';
		this._inputAmount.value = 1;
		this._inputValue.value = 0.0;

		this._inputDate.focus();
	}

	clean() {

		console.log("Clean method called");

		this._tradeList.clean();
		this._cleanForm();
		this._message.text = "Trades erased as requested.";
		this._message.type = 'alert alert-warning';
	}
} 