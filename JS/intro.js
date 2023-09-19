const a = 10;
var b = 20;
var c = 30;
console.log(a)
document.write(b,"</br>")
document.write("The value of a is ",a)
// alert(c)
var name = "kk";
name += " ram";
name += ",Reddy";
document.write("<br>",name,"<br>")
var arr = ['kk','ram',false]
document.write(arr,"<br>")
document.write(arr[1]," ",arr[2],"<br>")
var obj = [{
	'name':'kk',
	'rollno':'L6',
	'college':'AEC',
	'branch':'ECE'
},
{
	'name':'reddy',
	'rollno':'P1',
	'college':'AEC',
	'branch':'ECE'
},
{
	'name':'siva',
	'rollno':'P7',
	'college':'AEC',
	'branch':'ECE'
},
{
	'name':'ram',
	'rollno':'P1',
	'college':'AEC',
	'branch':'ECE'
},
{
	'name':'maddy',
	'rollno':'K7',
	'college':'AEC',
	'branch':'ECE',
	'col':'extra'
}]
document.write("<br>")
// document.write(obj.name+"<br>"+obj.rollno+"<br>"+obj.college+"<br>"+obj.branch+"<br>")
// document.write(obj[0].name+"<br>")
// document.write(obj[1].name)
// for (var i = 0; i < obj.length; i++) {
// 	document.write("<br>"+obj[i].name," ")
// 	document.write("<br>"+obj[i].rollno," ")
// 	document.write("<br>"+obj[i].college," ")
// 	document.write("<br>"+obj[i].branch," ")
// }
for (var i = 0; i < obj.length; i++) {
	for(let keys in obj[i]){
		document.write(obj[i][keys]+" ")
	}
	document.write("<br>")
}
for (var i = 0; i < obj.length; i++) {
	for(let keys in obj[i]){
		console.log(obj[i][keys]+" ")
	}
	console.log(" ")
}