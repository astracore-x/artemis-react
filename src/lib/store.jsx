import {createContext,useContext,useState,useEffect} from 'react';
import {seed} from './data';
import {STORAGE_KEY} from './model';
const Context=createContext(null);
export function StoreProvider({children}){
 const [data,setData]=useState(()=>{try{const stored=JSON.parse(localStorage.getItem(STORAGE_KEY));return stored?{...structuredClone(seed),...stored}:structuredClone(seed)}catch{return structuredClone(seed)}});
 const [storageError,setStorageError]=useState('');
 useEffect(()=>{try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data));setStorageError('')}catch{setStorageError('Your browser could not save changes. Export your data before closing this page.')}},[data]);
 const update=(key,value)=>setData(d=>({...d,[key]:typeof value==='function'?value(d[key]):value}));
 const audit=(record,before,after,actor='Platform Admin')=>setData(d=>({...d,audit:[{id:crypto.randomUUID(),record,before,after,actor,time:new Date().toISOString()},...d.audit]}));
 const reset=()=>setData(structuredClone(seed));
 return <Context.Provider value={{data,update,audit,reset,storageError}}>{children}</Context.Provider>
}
export const useStore=()=>useContext(Context);
