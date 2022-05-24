export function renderBunny(families) {
    const div = document.createElement('div');
    div.classList.add('families-container');
    const h2 = document.createElement('h2');
    h2.textContent = families.name;


    div.append(h2);

    return div;
}

export function renderOption(families) {
    const option = document.createElement('option');
    option.value = families.id;
    option.textContent = families.name;
    return option;
}

export async function createBunny(bunnies) {
    
}