class TradeController {

	constructor() {

		let $ = document.querySelector.bind(document);

		this._inputDate = $("#date");
		this._inputAmount = $("#amount");
		this._inputValue = $("#value");
		this._tradeList = new TradeList();
		this._tradeView = new TradeView($("#tradeView"));
		this._tradeView.update(this._tradeList);
		this._message = new Message();
		this._messageView = new MessageView($("#messageView"));
		this._messageView.update(this._message, 'alert alert-success');
	}

	put(event) {

		event.preventDefault();
		console.log("Put method called");

		this._tradeList.put(this._makeTrade());
		this._tradeView.update(this._tradeList);
		
		this._cleanForm();
		console.log(this._tradeList.trades);
		this._message.text = "Trade added with success!";
		this._message.type = "alert alert-success";
		this._messageView.update(this._message);
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
} 