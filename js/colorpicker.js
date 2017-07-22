function colorPicker( arr, c = ['0', '0', '0'] ) {
  function pick( a, b, i ) {
    a.addEventListener( "input", function() {
      if( a.value ) { c[i] = b.value = a.value; }
      document.body.style.backgroundColor
        = 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')';
    } );
  }

  arr.forEach( function( ele, i ) {
    var number = document.querySelector( ele );
    var range = document.getElementsByName( ele )[0];
    pick( number, range, i );
    pick( range, number, i );
  } );
 }
