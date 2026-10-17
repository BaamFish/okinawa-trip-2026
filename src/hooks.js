import {useState} from 'react';
export function readStored(key,fallback){try{const raw=localStorage.getItem(key);if(raw===null)return fallback;const value=JSON.parse(raw);if(typeof fallback==='number')return Number.isInteger(value)&&value>=1&&value<=4?value:fallback;if(fallback&&typeof fallback==='object')return value&&typeof value==='object'&&!Array.isArray(value)?value:fallback;return value??fallback}catch{return fallback}}
export function useStored(key,fallback){const [value,setValue]=useState(()=>readStored(key,fallback));const [error,setError]=useState(false);const save=next=>setValue(old=>{const updated=typeof next==='function'?next(old):next;try{localStorage.setItem(key,JSON.stringify(updated));setError(false)}catch{setError(true)}return updated});return [value,save,error]}

