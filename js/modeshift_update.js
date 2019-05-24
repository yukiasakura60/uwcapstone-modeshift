
window.onload= setTimeout(
    function() {
    if ( window.orientation == 0 || window.orientation == 180 ) {  
      if (confirm ('New updates available. Would you like to refresh it now?')){ 
        $('#live-updates').click();
        wait();
      }else{
         // alert("Your website is not refreshed.");
      }  
    }
}, 10000);

function wait() {
  // document.getElementById('se-pre-con').style.display='block';
  $("#se-pre-con").fadeIn("slow");
  setTimeout(
    function() {
      runSequence();
      // $("#line-1").fadeIn("slow");
      // $("#update-1").fadeIn("slow");
      // $("#update-2").fadeIn("slow");

      // $("#se-pre-con").fadeOut("slow");
    }, 2000);
}


/**
 * Sequence runner
 * @param {integer} i
 */
function runSequence(i) {
    // If i is null/false set it to 0
    i = ! i ? 0 : i;

    // Run animation on item i
    var promise = fade(i);

    // Use the promise to queue up the next item
    // by calling this function again when the
    // animation is complete
    promise.then(function() {
        if (i < updates.length-1) {
          runSequence(++i);
        }
    });
}

var updates = [$("#line-1"),$("#update-1"),$("#update-2"),$("#se-pre-con")];

/**
 * Fade in a specific indexed div element
 * @param {integer} i
 * @return {object} $.promise
 */
function fade(i)
{
  if (i == updates.length-1) {
    return updates[i]
        .fadeOut(400).promise();
  } else if (i == updates.length-2) {
    return updates[i]
        .fadeIn(600)
        .promise();
  } else {
    return updates[i]
        .fadeIn(400)
        .delay(400)
        .promise();
  }
}

// document.getElementById('line-1').style='';
// document.getElementById('update-1').style='';
// document.getElementById('update-2').style='';

// window.location =  
// document.getElementById('se-pre-con').style="display: none;";