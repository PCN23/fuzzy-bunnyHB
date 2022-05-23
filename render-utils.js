export function renderWorkshop(family) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = family.name;

    const ul = document.createElement('ul');
    for (let participant of family.participants){
        const li = document.createElement('li');
        li.textContent = participant.name;
        ul.append(li);
    }
    div.append(h2, ul);

    return div;
}