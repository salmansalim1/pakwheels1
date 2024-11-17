import Link from "next/link"

export default function Civic(){
    return (
        <div>
        <div className=" text-black" > 
        <div>
            <h1 className="text-align: text-center text-3xl mb-8" ><u>Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs</u></h1>
            <img src="/Civic.jpg" alt="Honda Civic" className="mx-auto" width={300} height={300}/>
            <div className="flex justify-center gap-4 mb-4 mt-4">
            <button className="bg-blue-800 text-white rounded-2xl px-2 py-2"> Book a Test Drive</button>
            <button className=" bg-blue-800 text-white rounded-2xl px-2 py-2">Request Bank Finance</button>
            <button className=" bg-blue-800 text-white rounded-2xl px-2 py-2">Visit Place</button>
            <button className=" bg-blue-800 text-white rounded-2xl px-2 py-2">Car Inspection</button>
            </div>
            <div>
            <h2 className="text-align: text-center text-3xl mb-10"><b>Vehicle Description</b></h2>
            <ol>



            <pre><b>Number of Doors</b> 4   <b>Engine</b> 1800cc    <b>Condition</b>10/10     <b>driven</b> 1500KM      <b>Suspension Type</b> Hard Suspension</pre>
            <br/>
            <pre><b>Average</b> 9KM/liter      <b>Transmission</b> Automatic     <b>Fuel Type</b> High Octane</pre>
            
                 </ol></div>

            <h2 className="flex justify-center text-green-900 mt-20 text-2xl"><b>PKR 90,000,000</b></h2>
            <div className="flex justify-center gap-4 mt-4 ">
            <Link href = "/Form"><button className="rounded-2xl px-2 py-2 bg-blue-800 text-white" >  Make Payment</button></Link></div>
        



        </div>
        
        </div>
        
        </div>
     
        
    )
}