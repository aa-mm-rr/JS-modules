let dogNames = [];
for (i=0; i<=5; i++){
    dogNames.push(prompt(`enter the name of the dog ${i+1}`));
}
dogNames.sort().reverse();
const list = document.getElementById('names');
const ul = document.createElement("ul")

dogNames.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
});

list.appendChild(ul);