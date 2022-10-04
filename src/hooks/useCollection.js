import { useEffect,useState } from "react";
import { db } from "../firebase/config";
import { collection,onSnapshot } from "firebase/firestore";

export const useCollection=(col)=>{

    const[belgeler,setBelgeler]=useState(null)
    const[hata,setHata]=useState(null)

    useEffect(()=>{
        let ref=collection(db,col);
        const unsubscribe=onSnapshot(ref,snapshot=>{
            let sonuclar=[];

            snapshot.docChanges.forEach(doc=>{
                sonuclar.push({...doc.data(),id:doc.id})
            })


            setBelgeler(sonuclar);
            setHata(null)
        },error=>{
            console.log(error);
            setHata('Veriler getirilemedi');
        })

        return ()=>unsubscribe()
    },[col])
     return {belgeler,hata}
}