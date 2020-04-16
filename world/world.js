var Data;
fetch('https://corona-api.com/countries')
.then((response)=>{
  return response.json();
})
.then((worldData)=>{
   Data = worldData;
  var table = document.querySelector("table");
  var totalCountries = document.querySelector("#tatalCountries");
  // totalCountries.innerHTML = worldData.data.length;
   
  worldData.data.forEach((country)=>{
       table.innerHTML+= "<tr><td>"+country.name+"</td><td>"+country.latest_data.confirmed+"</td><td>"+country.latest_data.deaths+"</td><td>"+country.latest_data.recovered+"</td>";
  })

})



google.charts.load('current', {
  'packages':['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var stats = [['Country','Conformed Cases']];
  Data.data.forEach((country)=>{
      stats.push([country.name,country.latest_data.confirmed])
  })
  var data = google.visualization.arrayToDataTable(stats);



  var options = {
    
    colorAxis: { colors: ['white', 'blue'] }
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}