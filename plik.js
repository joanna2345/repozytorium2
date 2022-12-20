const imie = ["Joanna Piatczyc"];

const body = document.querySelector("body");

for (let i=0; i<imie.length; i++)
{
const h1 = document.createElement("h1");
h1.innerText = `${imie[i]}`;
h1.classList.add("userClass");
body.appendChild(h1);
}
