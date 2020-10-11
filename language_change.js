'use strict';

const languagePage = {
    'English': '',
    'Norsk': 'norsk.html'
};

function changeLanguage({ target }) {
    window.location.href = `${window.location.href.match(/(https?:\/\/)?[^/?#]+(?:\/inova)?/)[0]}/${languagePage[target.value]}`;
}
