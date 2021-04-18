function CovidData(){
    const country=document.getElementById("countryName").value;
    const url='https://api.covid19api.com/live/country/'+country;
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then(data=>{
        
        table=document.createElement("TABLE");
        table.border="1";
        row=table.insertRow(-1)
        cellH1=row.insertCell(-1)
        cellH2=row.insertCell(-1)
        cellH3=row.insertCell(-1)
        cellH4=row.insertCell(-1)
        cellH5=row.insertCell(-1)
        cellH1.innerHTML="DATE"
        cellH2.innerHTML="STATE"
        cellH3.innerHTML="ACTIVE"
        cellH4.innerHTML="DEATHS"
        cellH5.innerHTML="RECOVERED"
        
    
          data.forEach((ele)=>{
          row1=table.insertRow(-1);
          cell1=row1.insertCell(-1)
          cell2=row1.insertCell(-1)
          cell3=row1.insertCell(-1)
          cell4=row1.insertCell(-1)
          cell5=row1.insertCell(-1)
          cell1.innerHTML=ele.Date
          cell2.innerHTML=ele.Province
          cell3.innerHTML=ele.Active
          cell4.innerHTML=ele.Deaths
          cell5.innerHTML=ele.Recovered
          
          })
        var divtab=document.getElementById("restable");
        divtab.append(table);
        
    })
    }
    