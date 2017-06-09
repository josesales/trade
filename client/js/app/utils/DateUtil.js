class DateUtil {

    constructor() {
         throw new Error("DateUtil has not instance"); 
    }
    static dateTotext(date) {

        let day = date.getDate();
        let month = date.getMonth() + 1;

        day = day >= 10 ? day : '0' + day;
        month = month >= 10 ? month : '0' + month;

        return day + '/' + month + '/' + date.getFullYear();
    }

    static textToDate(text) {

            // Check if the text has the correct format (YYYY-MM-DD) 
            if(!/\d{4}-\d{2}-\d{2}/.test(text)) {
                throw new Error("Text must to have the YYYY-MM-DD format");
            }
         return new Date(...text.split('-').map((value, index) => value - index % 2));
    }

}