let id;
function tog(){
    alert('hellow world')
}
function toggler(func, delay) {
    if(id){
        clearInterval(id)
    }
    id = setTimeout(() => {
        func()
    }, delay);
}