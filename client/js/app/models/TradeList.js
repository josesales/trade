//A list of trade in order to keep the trade unchanged. Since a simple array can be easily changed.
class TradeList {
    constructor(callBack) {
        this._trades = [];
        this._callBack = callBack;
    }

    put(trade) {
        this._trades.push(trade);
    }

    get trades() {
        return [].concat(this._trades);
    }

    clean() {
        this._trades = [];
    }

}