import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';

function myfooter(){
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright <FontAwesomeIcon icon={faCopyright}/> {year}</p>
        </footer>
    );
}

export default myfooter;