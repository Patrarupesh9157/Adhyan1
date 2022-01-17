const hour = document.querySelector('#hr');
const minute = document.querySelector('#min');
const second = document.querySelector('#sec');
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');


setInterval(()=>
{
	let d =new Date();
	let hh = d.getHours()*30;
	let mm = d.getMinutes()*6;
	let ss = d.getSeconds()*6;

	hour.style.transform=`rotateZ(${(hh)+(mm/12)}deg)`;
	minute.style.transform=`rotateZ(${mm}deg)`;
	second.style.transform=`rotateZ(${ss}deg)`;
})
icon.onclick=function () {
	search.classList.toggle('active')
}

		// const hr = document.querySelector('#hr');
		// const mn = document.querySelector('#min');
		// const sc = document.querySelector('#sec');
		// setInterval(()=>{
		// 	let day =new Date();
		// 	let hh = day.getHours()*30;
		// 	let mm = day.getMinutes()*6;
		// 	let ss = day.getSeconds()*6;

		// 	hr.style.transform=`rotateZ(${(hh)+(mm/12)}deg)`;
		// 	mn.style.transform=`rotateZ(${mm}deg)`;
		// 	sc.style.transform=`rotateZ(${ss}deg)`;

		// })
