function tog(){
    let count = document.getElementById('count').textContent || 0
    count = +count + 1;
    console.log(count)
    document.getElementById('count').textContent = count;
}
let timerId;
function toggler(func, delay) {
    if (timerId) {
		return
	}
	timerId  =  setTimeout(function () {
		func()
		timerId  =  undefined;
	}, delay)
}
document.getElementById('btn').addEventListener('click',function(){
    toggler(tog, 1000)
})