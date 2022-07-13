



window.addEventListener( "load", () => {

    /* properties */
    var lnks = document.querySelectorAll( "lnk" );

    /* functions */
    function print( v ) { console.log( v ) }


    /* events */

    lnks.forEach( v => {
        v.addEventListener( "click", event => {
            window.open( v.innerText, "_blank" );
        } );
    } );



    
} );