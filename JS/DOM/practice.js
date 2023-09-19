let d = document
// let a = d.getElementsByClassName('topic')
// a[0].style.textTransform = 'lowercase'
// // a[0].innerHTML = 'hyper text markup language'
// a[1].innerHTML = 'cascading style sheet'
// a[2].innerHTML = 'java script'
// a[3].innerHTML = 'boot strap frame work'
// a[0].style.color='red'
// a[1].style.color='green'
// a[2].style.color='pink'
// a[3].style.color='violet'

//table
// let t = d.getElementById('table')
// for (var i = 0; i < 3; i++) {

// 	var row=t.insertRow(i);	

// 	for (var j = 0; j < 3; j++) {
// 		var cell = row.insertCell(j);
// 		cell.textContent = i + j ;
// 	}
// }
let t = d.getElementsByTagName('td')
let cnt = 0
for (var i = 0; i < t.length; i++) {
	t[i].innerText = t.length-cnt
	cnt++
}

let ps = d.querySelectorAll('li')
ps[0].innerText='aditya engineering college'
ps[1].innerText='aditya college of engineering and technology'