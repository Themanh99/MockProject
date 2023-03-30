import React from 'react';
import './ButtonTop.css';


function ButtonTop(props) {

    const mybutton = document.getElementById("btn-top");
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function topFunction() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <button className='button-top' id='btn-top' onClick={topFunction}>Go to top</button>
    );
}

export default ButtonTop;