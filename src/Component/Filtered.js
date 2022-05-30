import { useState } from "react";
import Select from "react-select";

const Filtered = ({filteredHandler,selected}) => {
    const options=[
        {value: "All" , Label:"All"},
        {value: "isCompelted" , Label:"isCompelted"},
        {value: "NotCompleted" , Label:"NotCompleted"},
    ]

    // const filteredHandler=(e)=>{
    //     console.log(e.value);
    // }
    
    return ( 
        <section className=" flex items-center  ">
            
            <Select
            className=" text-emerald-700 mr-2"
             value={selected}
             options={options}
             onChange={(e)=>filteredHandler(e)}
            
            />
            <span className=" text-sm"> : نمایش بر اساس  </span>
        </section>
     );
}
 
export default Filtered;