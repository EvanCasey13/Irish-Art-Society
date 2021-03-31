$(document).ready(function() {


const 
	employee =[
        {
         
	        'eventname': "The National Gallery of Ireland",
	        'eventlocation': "Merrion Square, Dublin",
	        'date':'12/12/2019'
	        
        },
        {
          
		    'eventname': "2019 People's Art Exhibitions",
		    'eventlocation': "St. Stephen's Green Dublin Ireland",
		    'date':'01/12/2019'
		   
	    },
        {
          
		    'eventname': "Walker Art Gallery",
		    'eventlocation': "Liverpool",
		    'date':'23/01/2020'
	    }
  ];

let template   = Handlebars.compile($("#emp-template").html());
let theCompiledHtml = template(employee);
$("#content-placeholder").html(theCompiledHtml);

$('#newempform').submit(function(evt) {
	evt.preventDefault();
    newemp= {
	 eventname:$('#eventname').val(),
	 eventlocation:$('#eventlocation').val(),
	 date:$('#date').val()
    }
    employee.push(newemp);

    let theCompiledHtml = template(employee);
    $("#content-placeholder").html(theCompiledHtml);

    $('.empModal').modal('hide');
    $('input[type="text"]').each(function() {
		$(this).val("");
    });
    $('input[type="email"]').val("");
});

$("#btncall").on('click', function(){
		$(".empModal").modal('show');
});

});



