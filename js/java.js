let color = [50, 170, 170]; 
let size = 17;

for (let i = 0; i < 5; i++) {
  const rad = document.createElement("p");
  rad.textContent = "Rad " + (i + 1);
  rad.style.fontSize = size + "px";
  rad.style.textAlign = "center";
  rad.style.padding = "0.5%";
  rad.style.background = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
  rad.style.color = "Red";
  rad.style.width = "98%";
  rad.style.borderRadius = "5px";
  
  
  document.body.appendChild(rad);
  
  size += 6;
  color[0] -= 60;
  color[1] += 20;
  color[2] -= 10;
}




let container = document.createElement("div")
container.classList.add('container-grid');
document.body.appendChild(container)
container.style.display = "grid"
container.style.gridTemplateColumns = "auto auto auto"
container.style.borderStyle = "solid"
container.style.borderColor = "black"
container.style.height = "30%"
container.style.width = "88%"
container.style.padding = "5%"
container.style.display = 'flex';
container.style.justifyContent = 'space-between';
container.style.position = 'absolute';
container.style.bottom = '30px';




col1 = document.createElement("div")
col1.classList.add('col');
container.appendChild(col1)
col1.style.width = "10%"


col2 = document.createElement("div")
col2.classList.add('col');
container.appendChild(col2)
col2.style.width = "10%"


col3 = document.createElement("div")
col3.classList.add('col');
container.appendChild(col3)
col3.style.width = "10%"






let row1 = document.createElement("div")
row1.classList.add('row');
col1.appendChild(row1)
row1.style.height = "100%"
row1.style.background = "red"


for (let i = 0; i <= 9; i++) {
    const num1 = document.createElement("numbers");
    num1.classList.add('num1');
    num1.textContent = i;
    const li = document.createElement("li");
    
    
    if (i % 2 === 0) {
      num1.style.backgroundColor = "black";
      num1.style.color = "white";
    } else {
      num1.style.backgroundColor = "white";
      num1.style.color = "black";
    }
    if (i === 4) {
        num1.style.backgroundColor = ""; 
      }
    

    row1.appendChild(li);
    li.appendChild(num1);
    li.style.listStyleType = "none";
    num1.style.padding = "2.2%"
    li.style.padding = "1%"
    li.style.textAlign = "Center"
    li.style.display = "flex"
    li.style.flexWrap = "wrap"
    num1.style.width = "100%"
    
}





let row2 = document.createElement("div")
row2.classList.add('row');
col2.appendChild(row2)
row2.style.height = "100%"
row2.style.background = "lightblue"
row2.style.display = "flex"
row2.style.display = "inline-block"
row2.style.flexWrap = "wrap"
row2.style.width = "100%"

for (let i = 9; i >= 0; i--) {
    const num1 = document.createElement("numbers");
    num1.classList.add('num1');
    num1.textContent = i;
    const li = document.createElement("li");
    
    if (i % 2 === 0) {
      num1.style.backgroundColor = "black";
      num1.style.color = "white";
    } else {
      num1.style.backgroundColor = "white";
      num1.style.color = "black";
    }
    if (i === 8) {
        num1.style.backgroundColor = ""; 
      }


    row2.appendChild(li);
    li.appendChild(num1);
    li.style.listStyleType = "none";
    num1.style.padding = "2.2%"
    li.style.padding = "1%"
    li.style.textAlign = "Center"
    li.style.display = "flex"
    li.style.flexWrap = "wrap"
    num1.style.width = "100%"
    
    }





let row3 = document.createElement("div")
row3.classList.add('row');
col3.appendChild(row3)
row3.style.height = "100%"
row3.style.background = "green"

const arraynum = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

for (let i = 0; i < arraynum.length; i++) {
  const num1 = document.createElement("numbers");
  num1.classList.add('num1');
  num1.textContent = arraynum[i];
  const li = document.createElement("li");

  if (i % 2 === 0) {
    num1.style.backgroundColor = "black";
    num1.style.color = "white";
  } else {
    num1.style.backgroundColor = "white";
    num1.style.color = "black";
  }

  if (i === 5) {
    num1.style.backgroundColor = ""; 
  }

  row3.appendChild(li);
  li.appendChild(num1);
  li.style.listStyleType = "none";
  num1.style.padding = "2.2%";
  li.style.padding = "1%";
  li.style.textAlign = "center";
  li.style.display = "flex";
  li.style.flexWrap = "wrap";
  num1.style.width = "100%";
  
}