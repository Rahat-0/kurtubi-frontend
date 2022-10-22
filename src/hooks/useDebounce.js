const useDebounce = () => {
  return (cb, delay)=>{
    let timer ;
    return ()=>{
      if(timer){
          clearTimeout(timer)
      }
     timer = setTimeout(() => {
         return cb()
      }, delay);
    }
  }
    
}

export default useDebounce