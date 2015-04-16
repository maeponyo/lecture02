var three = function(a){
	if(isNaN(a)){
		return a;
	} 
	else if(a % 3 == 0){
		return "buzz";
	}
	return a;
}