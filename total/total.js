function preloader(){
    setTimeout(function(){
    document.querySelector(".preloader").style.height= "0px";
    document.querySelector(".bar").style.height = "0px";
    document.querySelector(".mainbtn").style.display = "none";
},3000)};



fetch('https://corona-api.com/timeline')
.then((response) => {
  return response.json();
})
.then((Data) => {
   
    // document.querySelector("h1").innerHTML = "total :"+ Data.data.summary.total+" deaths : "+Data.data.summary.deaths;
    document.querySelector("#totalCases").innerHTML = Data.data[0].confirmed;
    document.querySelector("#totalDeaths").innerHTML = Data.data[0].deaths;
    document.querySelector("#totalRecovered").innerHTML = Data.data[0].recovered;

})





