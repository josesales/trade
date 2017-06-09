//A list of trade in order to keep the trade unchanged. Since a simple array can be easily changed.
class TradeList {
    constructor() {
        this._trades = [];
        // Object.freeze(this);
    }

    put(trade) {
        this._trades.push(trade);
    }

    get trades() {
        return this._trades;
    }

}