import { useState,useEffect} from 'react'

export default function useStore(store){
  const [storeState,setStoreState] = useState(store.getState())
  useEffect(()=>{
    const onGlobalStateChange = ()=>{
      setStoreState(store.getState())
    }
    store.listen(onGlobalStateChange)
    return ()=>{
      store.unlisten(onGlobalStateChange)
    }
  },[])
  return storeState
}