const numberOfParticipants = parseInt(prompt('enter a number of participants: '));

let namesOfParticipants = [];

for (let i=0; i<numberOfParticipants; i++){
    namesOfParticipants.push(prompt(`Enter a name of a participant ${i+1}: `));
}
namesOfParticipants.sort();
const list = document.getElementById("list");
const ol = document.createElement("ol");

namesOfParticipants.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    ol.appendChild(li);
});

list.appendChild(ol);

