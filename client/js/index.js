var fields = [
    document.querySelector("#date"),
    document.querySelector("#amount"),
    document.querySelector("#value"),
];

console.log(fields);
var tBody = document.querySelector("table tbody");

var cleanFields = function (fields) {
    fields[0].value = '';
    fields[1].value = 1;
    fields[2].value = 0;

    fields[0].focus();
};

//Insert the datas in the grid
document.querySelector('.form').addEventListener('submit', function (event) {

    event.preventDefault();
    var tr = document.createElement('tr');

    fields.forEach(function (field) {
        var td = document.createElement('td');
        td.textContent = field.value;
        tr.appendChild(td);
    });

    var tdTotalAmount = document.createElement('td');
    tdTotalAmount.textContent = fields[1].value * fields[2].value;
    tr.appendChild(tdTotalAmount);

    tBody.appendChild(tr);
    cleanFields(fields);
});