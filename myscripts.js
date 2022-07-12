
  function getRnd(min, max, dp) {
    if (dp == 0) {
      return ((Math.random() * (max - min + 1)) + min).toFixed(dp)
    } else {
      return ((Math.random() * (max - min)) + min).toFixed(dp)
    }
   }

  function generateRow(valueName, tableID, min, max, dp){
    
    if (document.getElementById(valueName).value.length == 0) {
      document.getElementById(tableID).innerHTML = getRnd(min, max, dp);
    } else {
      document.getElementById(tableID).innerHTML = document.getElementById(valueName).value;
    }

    }
  
  function generateRowBP() {

    if (document.getElementById("sbp").value.length == 0) {
      var systolic = getRnd(110, 130, 0);
    } else {
      var systolic = document.getElementById("sbp").value;
    }

    if (document.getElementById("dbp").value.length == 0) {
      var diastolic = getRnd(70, 90, 0);
    } else {
      var diastolic = document.getElementById("dbp").value;
    }

    document.getElementById("BPTable").innerHTML = systolic+"/"+diastolic;

    }

  var posNegArray = ['Positive (+)', 'Negative (-)'];
  var urineArray = ['Darker', 'Normal', 'Lighter'];

  function generateRowArray(valueName, tableID, arrayName) {

    x = document.getElementById(valueName);

    if (x.value == "random") {
      var rand = Math.floor(Math.random()*arrayName.length);
      var rValue = arrayName[rand];
      document.getElementById(tableID).innerHTML = rValue;

    } else {
      document.getElementById(tableID).innerHTML = x.options[x.selectedIndex].text;
  }}

  function generateTable(targetTable){

    if (targetTable == "biochem") {
      generateRow('sodium', 'NaTable', 135, 145, 0);
      generateRow('potassium', 'KTable', 3.5, 5, 1);
      generateRow('chlorine', 'ClTable', 95, 110, 0);
      generateRow('bicarb', 'BiTable', 22,32,0);
      generateRow('urea', 'UreaTable', 2,8,1);
      generateRow('creatinine', 'CrTable',60,120,0);
      generateRow('calcium', 'CaTable', 2.1,2.6,1);
      generateRow('phosphate', 'POTable', 0.8,1.5,1);
      generateRow('urineSodium', 'UNaTable',20,200,0);
      generateRow('urineOsmolality', 'UOTable',80,800,0);
      generateRow('eGFR', 'eGFRTable', 89.5,89.5,0);
    } 

    if (targetTable == "vitals") {
      generateRow('hr', 'hrTable', 60, 100, 0);
      generateRowBP();
      generateRow('rr', 'RespTable', 12, 16, 0);
      generateRow('temp', 'tempTable', 36.8, 37.2, 1); 
    } 

    if (targetTable == "hepBSerology") {
      generateRowArray('HBsAg', 'HBsAgTable', posNegArray);
      generateRowArray('aHBs', 'aHBsTable', posNegArray);
      generateRowArray('aHBc', 'aHBcTable', posNegArray);
    }

  }

  function hideTables() {
    document.getElementById("pleaseSelect").style.display = "none";
    document.getElementById("vitals").style.display = "none";
    document.getElementById("biochem").style.display = "none";
    document.getElementById("hepBSerology").style.display = "none";
  }

  function showSection(sectionName) {
    hideTables();
    document.getElementById(sectionName).style.display = "block";
  }

  function refreshPage() {
    window.location.reload()
  }
