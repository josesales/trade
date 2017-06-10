class MessageView extends View {
	
	constructor(message) {
		super(message);
	}

	template(message) {
		return message.text ? `<p class="${message.type}">${message.text}</p>` : '';
	}

}

