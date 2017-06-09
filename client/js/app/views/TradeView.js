class TradeView {
	
	constructor(element) {
		this._element = element;
	}
	
	_template(tradeList) {
		return `	
		<table class="table table-hover table-bordered">
		    <thead>
		        <tr>
		            <th>DATE</th>
		            <th>AMOUNT</th>
		            <th>VALUE</th>
		            <th>TOTAL AMOUNT</th>
		        </tr>
		    </thead>
	
		    <tbody>
		    ${tradeList.trades.map(() =>
		    )}
		    </tbody>
	
		    <tfoot>
		    </tfoot>
		</table>
		`;
	}
	
	update(tradeList) {
		this._element.innerHTML = this._template(tradeList);
	}
	
}

