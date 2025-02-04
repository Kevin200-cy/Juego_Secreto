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

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos en la lista.</li>";
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

