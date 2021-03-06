function gitData(){
    const userName=document.getElementById("uname").value;
    const url='https://api.github.com/users/'+userName+'/repos';
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then(data=>{
        table=document.createElement("TABLE");
        table.border="1";
        table.width="800";
        table.align="center"
        row=table.insertRow(-1)
        cellH1=row.insertCell(-1)
        cellH2=row.insertCell(-1)
        cellH3=row.insertCell(-1)
        cellH1.innerHTML="USERNAME"
        cellH2.innerHTML="REPOSITORY"
        cellH3.innerHTML="DESCRIPTION"
          data.forEach((ele)=>{
          row1=table.insertRow(-1);
          cell1=row1.insertCell(-1)
          cell2=row1.insertCell(-1)
          cell3=row1.insertCell(-1)
          cell1.innerHTML=ele.owner.login
          cell2.innerHTML=ele.name
          cell3.innerHTML=ele.description 
          })
        var divtab=document.getElementById("restable");
        divtab.append(table); 
        console.log(data)
    })
    }
    