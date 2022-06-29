// **
// 
// Viene fornita una piccola tabella che rappresenta i membri di un team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede
// 
// **

const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

console.log(members);

drawTeam(members, 'members-container');

function drawTeam( membersList, htmlContainerId ){
    const mainWrapper = document.getElementById(htmlContainerId);
    mainWrapper.innerHTML = "";

    for (let i = 0; i < membersList.length; i++) {
        const currentElement = membersList[i];

        mainWrapper.innerHTML += `<div class="member-card">
                <div class="member-image">
                    <img src="./img/${currentElement.image}" alt="image of a member">
                </div>
                <div class="member-text">
                    <h3>${currentElement.name}</h3>
                    <p>${currentElement.role}</p>
                </div> 
        `;
    }
}