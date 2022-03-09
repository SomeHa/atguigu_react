
function add({one, two}:{one:number,two:number}){
    return one + two
}

const total = add({one:1,two:2})

function get({one} : {one: number}){
    return one
}

const getOne = get({one: 1})


//type alias 类型别名