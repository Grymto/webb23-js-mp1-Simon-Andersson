let hueValue = 120;
let size = 17;

for (let i = 0; i < 5; i++) {
  const rad = document.createElement("p");
  rad.textContent = "Rad " + (i + 1);
  rad.style.fontSize = size + "px";
  rad.style.fontWeight = "bold";
  rad.style.textAlign = "center";

  rad.style.background = `hsl(${hueValue}, 90%, 85%)`;
  rad.style.color = "#9096F8";

  document.body.appendChild(rad);

  size += 6;
  hueValue += 20;
}

const container = document.createElement("div");
container.classList.add("container-grid");
document.body.appendChild(container);
container.style.borderStyle = "solid";
container.style.borderColor = "black";
container.style.display = "flex";
container.style.justifyContent = "space-between";
container.style.paddingLeft = "15%";
container.style.paddingRight = "15%";
container.style.paddingTop = "5%";
container.style.paddingBottom = "5%";

const arrayNum = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

for (let iCol = 1; iCol <= 3; iCol++) {
  const col = document.createElement("div");
  col.classList.add("col");
  container.appendChild(col);
  col.style.width = "10%";
  col.style.height = "100%";
  col.style.background = "#A8A8F0";
  col.style.padding = "2%";

  for (let iRow = 0; iRow <= 9; iRow++) {
    const row = document.createElement("div");
    row.classList.add("row");
    col.appendChild(row);
    row.style.height = "10%";
    row.style.padding = "2px"
    row.style.display = "flex";

    if (iCol == 1) {
      i = iRow;
      row.textContent = i;
      row.style.justifyContent = "left";
    }

    if (iCol == 2) {
      i = 9 - iRow;
      row.textContent = i;
      row.style.justifyContent = "center";
    }

    if (iCol == 3) {
      i = iRow;
      row.textContent = arrayNum[i];
      row.style.justifyContent = "right";
    }

    if (i % 2 === 0) {
      row.style.background = "black";
      row.style.color = "white";
    } else {
      row.style.background = "white";
      row.style.color = "black";
    }

    if (iCol == 1 && i == 4) {
      row.style.background = "";
    }

    if (iCol == 2 && i == 8) {
      row.style.background = "";
    }

    if (iCol == 3 && i == 5) {
      row.style.background = "";
    }
  }
}