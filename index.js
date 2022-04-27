function searchMovie(){
    let inp= document.getElementById('movie').value;
    if(inp.length===0){
        document.getElementById('searchResult').textContent = null;
    } else {
        let k = `Searching for ${document.getElementById('movie').value}`;
        document.getElementById('searchResult').textContent = k;
    }
}
let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function() {
        func()
    }, delay);
}