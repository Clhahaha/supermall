// *************************************************
export function debounce(func,delay=100){//刷新频繁防抖动函数封装处理
    let timer=null
    return function(...args){
      if(timer){
        clearTimeout(timer)
        }
      timer=setTimeout(()=>{
        func.apply(this,args)
      },delay)
    }
  }
  // *************************************************