// Set the date we're counting down to
var countDownDate = new Date("Oct 4, 2023 4:0:0").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = `<div class="day">
           <div class="value_countdown value_day"> 
                   ${days}
           </div>
           <p>Days</p> 
       </div>
       <div class="hour day">
          <div class="value_countdown value_hour" >
                 ${hours} 
          </div>
         <p>Hours</p>
       </div>
        <div class="minute day">
          <div class="value_countdown value_minute">
              ${minutes} 
          </div>
          <p>Minutes</p>
        </div>
        <div class="second day">
            <div class="value_countdown value_second">
            ${seconds} 
            </div>
            <p>Seconds</p>
         </div>
            `;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// dropdown
document.addEventListener('DOMContentLoaded', function () {
    var dropdownBtn = document.querySelector('.btn__AllCte');
    var dropdownContent = document.querySelector('.dropdown__content');

    dropdownBtn.addEventListener('click', function () {
        dropdownContent.classList.toggle('open');
    });
});

//kiem tra ki tu 
document.addEventListener('DOMContentLoaded', function () {
    var contentText = document.querySelector('.text_content');
  var maxLeght=20;
  var text = contentText.textContent;
  if(text.length>maxLeght)
  {
    text = text.substring(0 , maxLeght)+ '...';
  }
  contentText.textContent = text;
});