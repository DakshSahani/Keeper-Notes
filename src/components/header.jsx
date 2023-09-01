import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faNoteSticky} from "@fortawesome/free-solid-svg-icons";

// let contStyle = {
//     backgroundColor:"#f5ba13",
//     width:"100%",
//     height:"100px"
// }

function heading(){
    return(
    <header>
        <h1><FontAwesomeIcon icon={faNoteSticky} />Keeper</h1>
    </header>
    );
}

export default heading;