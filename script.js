// Classe che rappresenta un utente con nome, cognome, età e località
class User {
  // Il costruttore inizializza le proprietà dell'utente
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName; // Nome
    this.lastName = lastName; // Cognome
    this.age = age; // Età
    this.location = location; // Località
  }

  // Metodo che confronta l'età con un altro utente e restituisce una frase
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}

// Creo due oggetti utente di esempio
const utente1 = new User("Mario", "Rossi", 30, "Roma"); // Primo utente
const utente2 = new User("Luca", "Bianchi", 25, "Milano"); // Secondo utente
const utente3 = new User("Anna", "Verdi", 30, "Napoli"); // Terzo utente

// Verifico il confronto tra le età
console.log(utente1.compareAge(utente2)); // Mario è più vecchio di Luca
console.log(utente2.compareAge(utente1)); // Luca è più giovane di Mario
console.log(utente1.compareAge(utente3)); // Mario e Anna hanno la stessa età

// Classe che rappresenta un animale domestico
class Pet {
  // Il costruttore inizializza le proprietà dell'animale
  constructor(petName, ownerName, species, breed) {
    this.petName = petName; // Nome dell'animale
    this.ownerName = ownerName; // Nome del proprietario
    this.species = species; // Specie (cane, gatto, ecc.)
    this.breed = breed; // Razza (labrador, soriano, ecc.)
  }

  // Metodo che verifica se due animali hanno lo stesso proprietario
  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

// Array per memorizzare gli animali creati
const pets = [];

// Seleziono il form e la lista dal DOM
const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");

// Funzione per aggiungere un animale alla lista visiva
function aggiornaLista() {
  petList.innerHTML = "";
  pets.forEach((pet, index) => {
    // Creo un elemento di lista per ogni animale
    const li = document.createElement("li");
    li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - Proprietario: ${pet.ownerName}`;
    petList.appendChild(li);
  });
}

// Gestisco l'invio del form per creare una nuova istanza di Pet
petForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Impedisco il refresh della pagina

  // Raccolgo i dati dal form
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  // Creo una nuova istanza di Pet
  const nuovoPet = new Pet(petName, ownerName, species, breed);
  pets.push(nuovoPet); // Aggiungo l'animale all'array

  aggiornaLista(); // Aggiorno la lista visiva

  petForm.reset(); // Resetto il form
});

// Esempio di utilizzo del metodo hasSameOwner (puoi vedere il risultato in console)
// const petA = new Pet('Fido', 'Mario', 'cane', 'labrador');
// const petB = new Pet('Micio', 'Mario', 'gatto', 'soriano');
// console.log(petA.hasSameOwner(petB)); // true
