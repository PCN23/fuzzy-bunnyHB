import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    await createBunny({
        name: data.get('bunny-name'),
        family_id: data.get('family-id'),

    });
    window.location.href = '../families';
    form.reset();
});

window.addEventListener('load', async (e) => {
    const families = await getFamilies();
    const selectEl = document.querySelector('select');
    for (let family of families) {
        const option = document.createElement('option');
        option.value = family.id;
        option.textContent = family.name;
        selectEl.append(option);

    }

});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
