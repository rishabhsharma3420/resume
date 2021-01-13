function move(card, index) {
    setTimeout(function () {
        card.classList.toggle('loaded');
    }, 100 * index);
};

function fade(card, index) {
    setTimeout(function () {
        card.querySelector('.content').classList.toggle('loaded');
    }, 1 * index);
}

function load() {
    // converting nodelist to array for some browsers
    const cards = [].slice.call(document.querySelectorAll('.card'));
    cards.forEach(move);
    setTimeout(function () {
        cards.forEach(fade);
    }, 1 * cards.length);
}
