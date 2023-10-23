import React,{useState,useEffect} from 'react'

export default function useFatch(url) {

    const [Data,SetData]=useState(null);
    const [AError,SetAError]=useState(null);
    const [IsLoading,SetIsLoading]=useState(true);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error("found a error");
            }
            else{
                return res.json();
            }
        })
        .then((data)=>{
            SetData(data);
            SetIsLoading(false);
            SetAError(null);
        })
        .catch((error)=>{
            SetAError(error.message);
            SetIsLoading(false)
        })
    },[url])

  return {Data,AError,IsLoading};
}


//my second practice
// import React,{useState,useEffect} from 'react'

// export default function useFatch(url) {
//     const [Data,SetData]=useState(null);
//     const [IsLoading,SetIsLoading]=useState(true);
//     const [AError,SetAError]=useState(null)
//     useEffect(()=>{
//         fetch(url)
//         .then((response)=>{
//             if(!response.ok){
//                 throw Error("data dont found");
//             }else{
//                 return response.json();
//             }
//         })
//         .then((data)=>{
//             SetData(data);
//             SetIsLoading(false);
//             SetAError(null);
//         })
//         .catch((error)=>{
//             SetAError(error.message);
//             SetIsLoading(false);
//         })
//     },[])
//     return {Data,AError,IsLoading}
// }
