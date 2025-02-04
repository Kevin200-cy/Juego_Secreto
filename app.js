// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const lista = document.getElementById("listaAmigos");

    if (input.value.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(input.value.trim());

    const li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li);

    input.value = "";
}

