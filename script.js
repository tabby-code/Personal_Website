const name = "Hello, I'm Joanna ･ ༝ ･";
const title = document.getElementById("title");
let i = 0;

function typeWriter() {
    if (i < name.length){
        title.textContent += name[i];
        i++;
        setTimeout(typeWriter, 150);
    }
}
typeWriter();