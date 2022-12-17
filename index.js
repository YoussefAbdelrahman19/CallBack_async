
let url = 'https://jsonplaceholder.typicode.com/todos';
function getUsers(callback){
    fetch(url).then(function (res){
        // console.log(res.json());
        return res.json();
    }).then(function (data){
        //will pass the data to callback fn
      // console.log(data);
      callback(data);
    }).catch((err)=>{
        console.log(err);
    })

}
getUsers((data)=>{
    console.log(data[0]);
})
console.log(__dirname +"jjjdjj")
console.log('djjdjj');