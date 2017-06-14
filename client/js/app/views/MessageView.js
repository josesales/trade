class MessageView extends View {
	
	constructor(message) {
		super(message);
	}

	template(message) {
		return message.text ? `<p class="alert alert-info">${message.text}</p>` : '';
	}

}

