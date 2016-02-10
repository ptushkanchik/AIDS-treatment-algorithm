if(!Element.prototype.remove){
	Element.prototype.remove = function(){
		var x = this;
		var y = this.parentNode;
		y.removeChild(x);
		}	
}
