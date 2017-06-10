class TradeView extends View {

	constructor(tradeList) {
		super(tradeList);
	}

	template(tradeList) {
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
		    ${tradeList.trades.map((trade) =>

				`
					<tr>
						<td> ${DateUtil.dateTotext(trade.date)} </td>
						<td> ${trade.amount} </td>
						<td> ${trade.value} </td>
						<td> ${trade.totalValue} </td>
					</tr>
				`

			).join('')}
		    </tbody>
	
	<tfoot>
		<td colspan="3"></td>
		<td>${
			tradeList.trades.reduce((total, trade) => total + trade.totalValue, 0.0)
			}
		</td>
	</tfoot>
		</table>
	`;
	}

}

