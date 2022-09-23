const add = document.querySelectorAll('.add');

add.forEach(e => {
    e.addEventListener('click', () => {
        const p = e.previousElementSibling.lastElementChild;
        const itemadd = e.firstElementChild;
        const itemrmv = e.lastElementChild;
        e.classList.toggle('none');
        itemrmv.classList.toggle('show');
        itemadd.classList.toggle('hide');
        p.classList.toggle('show');
    })

});