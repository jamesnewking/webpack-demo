import $ from 'jquery';
import './style.css';

$('#login').click(()=>{
    console.log('Button clicked');

    import('./helpers').then( resp => {
        console.log('Import response', resp);

        const { login, addToDom } = resp;
        const result1 =  login('Peter','GNC');
        const result2 = login('Hacker','GNC');
        addToDom('h1', result1, 'green');
        addToDom('h1', result2, 'red');


    })
});

