import { useState } from "react"
function Hooks(){
    // const [cnt,setCnt] = useState(0);
    // const [name,getName] = useState('');
    const [arr,setArr] = useState(['apple','mango','banana','guva'])
    const [fruitname,setFruitname] = useState('');
    const filterFruits=()=>{
        console.log(fruitname)
        console.log(arr)
        let output = arr.filter((ele,i)=>{
            return (ele===fruitname)
        })
        if(output.length === 0){
            console.log('Not Found')
            setArr(['apple','mango','banana','guva'])
        }
        else{
            setArr(output)
        }
    }
    return(
         <div>
             {/* <h1 style={{color:'lightblue',backgroundColor:'green'}}>React Hooks</h1>
             <p>Count is {cnt}</p>
             <button onClick={()=>setCnt(cnt+1)}>Increase</button>
             <button onClick={()=>setCnt(cnt-1)}>Decrease</button>
             <br /><br />
             <input type="text" onChange={(ele)=>getName(ele.target.value)} />
             <h5>Good Morning {name}</h5> */}
            <input type="text" onChange={(e) => setFruitname(e.target.value)} />
            <button onClick={filterFruits}>Find</button>
            <br />
            <ul style={{'display':'inline-block'}}>
                {
                    arr.map((ele)=>{
                        return(<li>{ele}</li>)
                    })
                }
            </ul>
        </div>
    )
}
export default Hooks