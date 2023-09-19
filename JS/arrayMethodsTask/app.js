let student=['kesava','Bhavya','ram','readdy'];
document.write("map: ");
let stu=student.map(function(data,i){
document.write(data+" ");
})
document.write("<br><br>");


let num=[101,212,121,64,65,66,69];
document.write("filter: ");
document.write(num);
let even_nums=num.filter(function(ele){
	return ele%2==0;
})
document.write(even_nums);
document.write("<br><br>");


let order=["tomato","onion","brinjal","carrot","beans","bondam"];
document.write(order.sort());
document.write("<br><br>");


let salaries=[250000,960000,890000];
document.write(salaries);
document.write("<br>");
document.write("The increments are:");
salaries.forEach(function(money,i,arr){
var increament=arr[i]/10;
document.write(increament+" ");
arr[i]=money+increament;
})
document.write("<br>");
document.write(salaries);
document.write("<br><br>");


let veg = ["tomato","onion","carrot","brinjal"];
document.write("The values of fruits1 array: "+veg+"</br>");
let fru = ["apple","mango","banana","guava"];
document.write("The values of fruits1 array= "+fru+"</br>");
document.write("concat: "+veg.concat(fru));
document.write("<br><br>");


let marks=[67,56,78,99,85];
let res=marks.every(function(marks){
	return marks>=35;
})
document.write("every: "+res);
document.write("<br><br>");


let rollnums=[573,574,584,594];
let existRolls=rollnums.some(function(rolls,i,index){
		return rolls==575;
	})
document.write("some: "+existRolls);
document.write("<br><br>");


document.write("includes: "+veg.includes("cucumber"));
document.write("<br><br>");


let a=["Have a good day"," greetings"];
document.write("join: "+a.join());
document.write("<br><br>");


let numbers=[575,89,45,11];
document.write("reduce: "+numbers.reduce(fun));
function fun(total, num){
	return total - num;
}
document.write("<br><br>");


let names=['mounika','lalli','kavya','kesava'];
let getname=names.find(function(name){
	return name.endsWith('i');
})
document.write("find: "+getname);
document.write("<br><br>");


let ages = [9, 11, 19, 22];
document.write("findIndex: "+ages.findIndex(checkAge));
function checkAge(age){
   	return age > 18;
}
document.write("<br><br>");


document.write("indexOf: "+veg.indexOf("kaakarakai"));
document.write("<br><br>");


document.write("fill: "+veg.fill("kiwi",2));//add the element for specified number of times
document.write("<br><br>");


document.write("slice: "+fru.slice(1,2));
document.write("<br><br>");


document.write("reverse: "+fru.reverse(1,2));
document.write("<br><br>");


document.write("push: "+fru.push("papaya","promogranate"));
document.write("<br><br>");


document.write("pop: "+fru.pop());
document.write("<br><br>");


document.write("shift: "+fru.shift());
document.write("<br><br>");


document.write("unshift: "+fru.unshift("kiwi","grapes"));
document.write("<br><br>");