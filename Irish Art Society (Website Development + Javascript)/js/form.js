let total =0;
$('#runtotal').val(formatCurrency(total));
$('li').addClass('hot'); 


function formatCurrency(num) {
   /*Unicode Character 'EURO SIGN' \u20ac*/
    num = num.toString().replace(/\u20ac|\,/g,'');
    if(isNaN(num))
    {num = "0";}
    sign = (num == (num = Math.abs(num)));
    num = num.toFixed(2);
    elements= num.split(".");
    num = elements[0];
    cents = elements[1];
    for (let i = 0; i < Math.floor((num.length-(1+i))/3); i++)
     {num = num.substring(0,num.length-(4*i+3))+','+
      num.substring(num.length-(4*0+3));
     }
    return (((sign)?'':'-') + '\u20ac' + num + '.' + cents)
 }

let runtotal = 0;
       $('#people').on('click',  function() {
  var amount = prompt("How many trips do you wish to attend" , "1");
  costprice = amount * parseFloat($(this).attr('value'));
  runtotal += costprice;
  $('#runtotal').val(formatCurrency(runtotal));
        $('#userSelection input').append(amount + " " + $(this).text() + " " + formatCurrency(costprice)  + '<br>');
      });
  
      $(this).animate({
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {
        $(this).remove();
      });



  