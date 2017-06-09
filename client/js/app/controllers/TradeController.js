class TradeController {

	constructor() {

		let $ = document.querySelector.bind(document);

		this._inputDate = $("#date");
		this._inputAmount = $("#amount");
		this._inputValue = $("#value");
		this._tradeList = new TradeList();
	}
	put(event) {

		event.preventDefault();
		console.log("Put method called");

		this._tradeList.put(this._makeTrade());
		this._cleanForm();
		console.log(this._tradeList.trades);
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