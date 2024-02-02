// ADD Item 0
const liComeco = document.createElement("li");
const item0 = document.createTextNode("Item 0");

liComeco.appendChild(item0);

const currentUl = document.getElementById("lista");

currentUl.insertAdjacentElement("afterbegin", liComeco);

// ADD Item 5
const liFim = document.createElement("li");
const item5 = document.createTextNode("Item 5");

liFim.appendChild(item5);

currentUl.insertAdjacentElement("beforeend", liFim);
