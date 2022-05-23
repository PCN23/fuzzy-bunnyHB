export function renderWorkshop(families) {
    const div = document.createElement('div');
    div.classList.add('families-container');
    const h2 = document.createElement('h2');
    h2.textContent = families.name;

    const ul = document.createElement('ul');
    for (let participant of families.participants){
        const li = document.createElement('li');
        li.textContent = `${participant.name}`;
        ul.append(li);
    }
    div.append(h2, ul);

    return div;
}