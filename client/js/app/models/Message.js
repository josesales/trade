class Message {

    constructor(text = '', type = 'alert alert-info') {
        this._type = type;
        this._text = text;
    }

    get text() {
        return this._text;
    }

    set text(text) {
        this._text = text;
    }

    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }

}