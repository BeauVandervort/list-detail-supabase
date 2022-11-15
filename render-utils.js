export function renderCatCard(cat) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('cat-card');

    p.textContent = cat.name;
    img.src = `./assets/${cat.breed}.jpeg`;
    a.href = `../detail/?id=${cat.id}`;

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderCatDetail(cat) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const breedEl = document.createElement('p');
    const ageAndBreedEl = document.createElement('div');

    div.classList.add('cat-detail');

    nameEl.textContent = cat.name;
    nameEl.classList.add('name');

    descriptionEl.textContent = cat.description;
    descriptionEl.classList.add('description');

    ageEl.textContent = `${cat.age} years old`;
    ageEl.classList.add('age');

    breedEl.textContent = cat.breed;
    breedEl.classList.add('breed');

    ageAndBreedEl.classList.add('age-and-breed');

    ageAndBreedEl.append(ageEl, breedEl);

    img.src = `../assets/${cat.breed}.jpeg`;

    div.append(nameEl, img, ageAndBreedEl, descriptionEl);

    return div;
}
