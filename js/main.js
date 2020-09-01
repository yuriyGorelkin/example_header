function clickMenu (trigger, elSelector) {

    const btn = document.querySelector(trigger),
          menu = document.querySelector(elSelector);

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.toggle('open');
    })
}

clickMenu('.dots', '.dynamic-nav-menu');

