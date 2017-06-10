class View {

	constructor(element) {
		this._element = element;
	}

	template() {
		throw new Error("_Template method must to be implemented");
	}

	update(model) {
		this._element.innerHTML = this.template(model);
	}

}

