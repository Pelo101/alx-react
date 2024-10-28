import $ from 'jquery';
import _  from 'lodash'

$('body').append('<p>Holberton Dashboars</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter(){
    count += 1;
    $('#count').html(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));