class Message {

    constructor(text = '', type = 'alert alert-info') {
        this._text = text;
        this._type = type;
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