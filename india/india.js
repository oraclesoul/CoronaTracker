fetch('https://api.rootnet.in/covid19-in/stats/latest')
.then((response)=>{
  return response.json();
})
.then((IndiaData)=>{
   let select = document.querySelector("select");
  DATA = IndiaData.data.regional;
  // data.regional

//   IndiaData.data.regional.forEach((state,i)=>{
//        select.innerHTML+= "<option value="+i+">"+state.loc+"</option>";
//   }) 
  
  
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  
    var stats = [['State','Conformed Cases','Deaths']];
    
    DATA.forEach((state)=>{
      stats.push([state.loc,state.confirmedCasesIndian,state.deaths])})
  
    var data = google.visualization.arrayToDataTable(stats);

  var options = {
    chart: {
      title: 'Conformed Cases in india',
      subtitle: 'Cases in Different States',
    },
    bars: 'vertical', // Required
    titleTextStyle: {color: 'blue'},
    colors:['blue','red']
  };

  var chart = new google.charts.Bar(document.getElementById('barchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
    
}


 let table = document.querySelector("table");
 DATA.forEach((state)=>{
     table.innerHTML+="<td>"+state.loc+"</td><td>"+state.confirmedCasesIndian+"</td><td>"+state.deaths+"</td><td>"+state.discharged+"</td>";
 })



})
