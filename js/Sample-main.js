$('#home').on('pageinit', function(){
	//code needed for home page goes here
	
});	
		
$('#additem').on('pageinit', function(){

		var ideaForm = $('#recordideaform'),
			errorslink = $('#errorslink')
			;
		    ideaForm.validate({
			invalidHandler: function(form, validator) {
				errorslink.click();
				for(var key in validator.submitted) {
					var label = $('label[for^="' + key +'"]').not('[generated]');
					var legend = label.closest('fieldset').find('ui-controlgroup-label');
					var fieldName = legend.length ? legend.text() : label.text();
					html += '<li>' + fieldName +'</li>';
				};
				$("#ideaformerrors ul").html(html);
			},
			submitHandler: function() {
		var data = ideaForm.serializeArray();
			storeData(data);
		}
	});
	
	function a(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	
	
	//any other code needed for addItem page goes here
	
});
//Find value of checkboxes
function getiPhoneValues() {
		if($('iPhone').checked) {
			iPhoneValues = $("iPhone").value;
		}else {
			iPhoneValues= "No";
		}
	}
		function getiPadValues() {
			if($("iPad").checked) {
				iPadValues = $("iPad").value;
			}else {
				iPadValues = "No";
			}
	}
//The functions below can go inside or outside the pageinit function for the page in which it is needed.

//function autoFillData		
var autofillData = function (){
	for(var n in json) {
			var id = Math.floor(Math.random() *100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		} 
};

//function getData
var getData = function(){
	toggleControls("on");
	if(localStorage.length === 0) {
		alert("There is no data in local storage so default data will be added.");
		autoFillData();
	}
};

//function storeData
var storeData = function(key){
	if(!key) {
			var id	=Math.floor(Math.random() *100000001);
		}else {
			id = key;
 
		}
	getiPhoneValues();
	getiPadValues();
	var item = {};
		item.idea 			=["Idea:", $('#ideaIdea').val()];
		item.date			=["Today's Date;", $('#ideadate').val()];
		item.category		=["Choose a Category:", $('#ideacategory').val()];
		item.iPhone			=["iPhone", iPhoneValues];
		item.iPad			=["iPad", iPadValues];
		item.priority 		=["priority:", $('#ideapriority').val()];
		item.notes			=["Notes:",$('#notes').val()];
				
	localStorage.setItem(id, JSON.stringify(item));
	alert("Idea Saved!");	
	}
			
//function deleteItem			
var	deleteItem = function (){
	var ask = confirm("Are you sure you want to delete this idea?");
		if(ask) {
			localStorage.removeItem(this.key);
			window.location.reload();
		}else {
			alert("Idea was not deleted");
		}		
};

//function clearLocal					
var clearLocal = function() {
		if(localStorage.length === 0) {
			alert("There is no data to clear");
		}else {
			localStorage.clear();
			alert("Data cleared");
			window.location.reload();
			return false;
		}
};

//Set click events
//	var displayLink = $("displayLink");
//	displayLink.addEventListener("click", getData);
//	var clearLink = $("clearLink");
//	clearLink.addEventListener("click", clearLocal);
//	var submit = $("submit");
//	submit.addEventListener("click", validate);


