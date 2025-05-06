import {useState} from 'react';        //hooks useState concept
 
function AddRemove(){
          const [counter,setCounter]=useState(10);
         
          const addValue =()=>{
                   if(counter <20)
                   {
                   setCounter(counter+1);
                    //console.log(`Add: ${counter}`)
                   }
                   else
                   {
                    alert("your value is more than 20")
                   }
          }
          const removeValue=()=>{
                    if(counter>0)
                              {
                              setCounter(counter-1);
                               //console.log(`remove: ${counter}`)
                              }
                              else
                              {
                               alert("your value is less  than 0")
                              }
                   
                
          }
return(
          <>
                    <h1>it is useState:{counter}</h1>
                    <button onClick={addValue}>Add</button>
                    <button onClick={removeValue}>remove</button>
          </>
)

}
export default AddRemove;
