const funcs = []

for(let i = 0; i < 10; i++) { //let possui escopo de bloco diferente do var
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()