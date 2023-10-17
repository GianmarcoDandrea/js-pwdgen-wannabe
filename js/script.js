// RACCOLTA DATI
const user_name = prompt("Inserisci il tuo nome");
console.log(user_name, typeof user_name);

const user_surname = prompt("Inserisci il tuo cognome");
console.log(user_surname, typeof user_surname);

const fav_color = prompt("Inserisci il tuo colore preferito");
console.log(fav_color, typeof fav_color);

// LOGICA DEL PROGRAMMA
const password = `${user_name}${user_surname}${fav_color}21`;
console.log(password, typeof password);

//OUTPUT

document.getElementById("newpassword").innerHTML = password;