class MyPromise{

    state = 'pending'
    value = undefined  //成功后的值
    reason = undefined //失败后的值

    
    resolveCallbacks = [] // pending 状态下，存储成功的回调
    rejectCallbacks = [] // pending 状态下，存储失败的回调

    constructor(fn){

        const resolveHandler = (value) =>{
            if(this.state ==='pending'){
                this.state = 'fufilled'
                this.value = value
                this.resolveCallbacks.forEach(fn => fn(this.value))
            }
        }

        const rejectHandler = (reason) => {
            if(this.state ==='pending'){
                this.state = 'rejected' 
                this.reason = reason
                this.rejectCallbacks.forEach(fn => fn(this.reason))
            }
        }

        try {
            fn(resolveHandler, rejectHandler)
        } catch (err) {
            rejectHandler(err)
        }
    }

    then(fn1,fn2){}


}