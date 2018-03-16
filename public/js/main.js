$(function(){

	var $d = $('#d');


	$('#save').on('click', function(){	
	
	var blog = req.body.blog.body;

	$.ajax({
		type:'POST',
		url:'/blogs',
		dataType: JSON,
		data: blog,		
		success: function(blog){
			console.log('saved order..' + blog);
		},
		error: function(){
			alert('error saving order');
		}
	}).done(function(blog){
		console.log(blog);
	});
	});

	// delete

	$d.delegate('.delete', 'click', function(){

	var $item = $('div .item');		

	$.ajax({
		type:'DELETE',
		url:'/blogs/'+ $(this).attr('data-id'),
		success: function(blog){
			redirect('/blogs');
		},
		error: function(){
			alert('error deleting');
		}
	});
	});

});