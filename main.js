let num=prompt("enter your Number");

let palindrome=()=>{
	let c=0;
	let temp=num;
	
    for(i=0; i<=num; i++){
		b=num%10;
		num=parseInt(num/10);
		c=c*10+b;
	}
	if(c==temp){
		document.write(`${temp} it was palindrome`);
	}
	else{
	    document.write(`${temp} it was not palindrome`);
	}
	
	
}
palindrome()