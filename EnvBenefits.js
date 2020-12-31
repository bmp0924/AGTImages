$.getJSON('https://monitoringapi.solaredge.com/site/807090/envBenefits?systemUnits=Imperial&api_key=DGOC7JJM5HFA27892BEP9Y64EYVFD9PZ&callback=?' , function(data)
          
  {
  console.log( "success" );
  console.log(data);

  $.each(data,function(index,value){
    console.log(value);
      var trees = value.treesPlanted;
      var co2 = value.gasEmissionSaved.co2;
      var units = value.gasEmissionSaved.units;

    trees = Math.round(trees * 100) / 10
    
    $('.trees').text(trees);
    $('.c02').text(co2 + ' '+ units+ 's');
  });
});