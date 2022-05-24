export function renderBunny(families) {
    const div = document.createElement('div');
    div.classList.add('families-container');
    const h2 = document.createElement('h2');
    h2.textContent = families.name;

    const ul = document.createElement('ul');
    for (let bunny of families.loving_families){
        const li = document.createElement('li');
        li.textContent = `${bunny.name}`;
        ul.append(li);
    }
    div.append(h2, ul);

    return div;
}