
let todo =[]
let todoOb ={}
let result 

const addInput = () =>{
    let input = document.getElementById('Input').value
    if(input==""){
        return
    }
    addtoOb(input)
    document.getElementById('Input').value = ''
    render()
}
const remove = (i) =>{
    
    todo.splice(i,1)




    render()
}
const done = (i) => {
                        console.log(`switched to ${!todo[i].done}`
                    )
                        todo[i].done = !todo[i].done
    render()
}
const addtoOb = (text) => {


    const todoOb = {
        text,
        done: false,
        id: Date.now()
    }
    todo.push(todoOb)
}
// const Completed = () =>{
    
//     for(let i = 0; i<todo.length;i++){
//         if(todo[i].done){
//             console.log("dung r")
//             return true
//         }
//         else{
//             console.log("sai r")

//             return false
//         }
//     }
// }
const checkBox = () => {
    console.log(document.getElementById('check').checked)    
    render()
}
const render = () => {
    result=''



    result = todo.map((item,index) =>{
        if(document.getElementById('check').checked){
            if(!todo[index].done){
                    console.log('dc r')
            return `<li> ${item.text} <a href='#' onclick="remove(${index})"> x </a> <a href='#' onclick='done(${index})'>Done</a>  </li> ` 
            }
            else{

            }
        }
        else{
            console.log('box not checked')
            if(todo[index].done){
                console.log("striked")
                return `<li> ${item.text.strike()} <a href='#' onclick="remove(${index})"> x </a> <a href='#' onclick='done(${index})'>Done</a>  </li> ` 
            }
            else{
                return `<li> ${item.text} <a href='#' onclick="remove(${index})"> x </a> <a href='#' onclick='done(${index})'>Done</a>  </li> ` 
        }
        }

  
    })
    document.getElementById("result").innerHTML= result.join('')
    console.log('===========================')
}

