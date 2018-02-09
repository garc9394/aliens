var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search_datetime");

$datetimeInput.addEventListener('keypress', function (event) {
  var key = event.which || event.keyCode;
  if (key === 13) {
    handleSearchButtonClick();
  }
});
$searchBtn.addEventListener("click", handleSearchButtonClick);

var filteredData = dataSet;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    var data = filteredData[i];
    var fields = Object.keys(data);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
}

function handleSearchButtonClick() {
  var filterDatetime = $datetimeInput.value.trim().toLowerCase();

  filteredData = dataSet.filter(function(data) {
    var dataDatetime = data.datetime.toLowerCase();

    return dataDatetime === filterDatetime;
  });
  renderTable();
}

renderTable();