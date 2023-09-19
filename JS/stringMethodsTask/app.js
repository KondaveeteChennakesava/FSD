let d =  document
var str = 'javascript task'
document.write("Original string: "+str+"<br><br>")


// substr() method
let subStr = str.substr(-4)
document.write("substr of -4 is: "+subStr+"<br><br>")


//substring() method
let subString = str.substring(0,10)
document.write("substring() of 0,10 is: "+subString+"<br><br>")


//replace() method
let r = str.replace('javascript','bootstrap')
document.write("javascript is replaced: "+r+"<br><br>")


//indexOf() method
let index = str.indexOf('task')
document.write("index of task is: "+index+"<br><br>")


//slice() method
let sli = str.slice(4)
document.write("After slicing from 4th index: "+sli+"<br><br>")


//includes() method<br>
let inc = str.includes('css')
document.write("Is css there in original string? "+inc+"<br><br>")


//lastIndexOf() method
let lio = str.lastIndexOf('task')
document.write("Last index of task is: "+lio+"<br><br>")


//concat() method
let con = str.concat(' Medium')
document.write("Medium is added to original string: "+con+"<br><br>")


//toUpperCase() method
let up = str.toUpperCase()
document.write("String is transformed to upper case: "+up+"<br><br>")


//toLowerCase() method
let low = str.toLowerCase()
document.write("String is transformed to lower case: "+low+"<br><br>")


//trim() method
let trim = str.trim()
document.write("Sting is trimmed: "+trim+"<br><br>")


//charAt() method
let chr = str.charAt(11)
document.write("Character at 11th index is: "+chr+"<br><br>")


//split() method
let spl = str.split()
document.write("String is splitted by space: "+spl+"<br><br>")


//toString() method
let num = 96
document.write("Number 96 is converted in string: "+num.toString()+"<br><br>")


//charCodeAt() method
let char = str.charCodeAt<br>(0)
document.write("ASCII code of j is: "+char+"<br><br>")


//search() method
let search = str.search('task')
document.write("Index of search is: "+search+"<br><br>")