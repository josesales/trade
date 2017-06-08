class TradeController {
	
	constructor() {
		
		let $ = document.querySelector.bind(document);
		
		this.date = $("#date").value;
		this.amount = $("#amount").value;
		this.value = $("#value").value;
	}
	put(event) {
		event.preventDefault();
		console.log("Put method called");
		console.log("Properties : " + date );
	}
} 