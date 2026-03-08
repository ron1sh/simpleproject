import Inputbox from "./inputbox";
import { useState } from "react";

export default function Template() {
    const [query, setquery] = useState("");
    const [data, setdata] = useState(null);
    const [error, seterror] = useState(false);

    const handlesearch = async () => {
        const trimmedquery = query.trim();
        if (!trimmedquery) return;

        seterror(false);
        
        try {
            const response = await fetch(`http://localhost:5000/${trimmedquery.toLowerCase()}`);
            
            if (!response.ok) {
                setdata(null);
                seterror(true);
                return;
            }

            const result = await response.json();
            setdata(result);
            seterror(false);
        } catch (err) {
            console.error(err);
            setdata(null);
            seterror(true);
        }
    };

    return (
        <div className="bg-tempback rounded-[0.3rem] w-[30rem] h-[40rem] flex flex-col items-center shadow-[0px_0px_11px_-8px_#ffffff] px-[1.2em] py-[1.2em] overflow-hidden">
            <div className="w-full flex-shrink-0 mb-4">
                <Inputbox query={query} setquery={setquery} onsearch={handlesearch} />
            </div>

            <div className="text-white flex flex-col items-center w-full flex-1 min-h-0 justify-center">
                {data ? (
                    <>
                        <img 
                            src={`http://localhost:5000${data.picture.replace('./', '/')}`} 
                            alt={data.name} 
                            className="rounded-[0.3em] max-w-full max-h-[80%] object-contain" 
                        />
                        <p className="mt-4 text-xl font-bold">{data.name}</p>
                        <p className="opacity-70">ID: {data.id}</p>
                    </>
                ) : error ? (
                    <p className="text-red-400 font-semibold text-center">
                        This movie with the name "{query}" does not exist or it does?
                    </p>
                ) : (
                    <p className="opacity-50">Search for a movie</p>
                )}
            </div>
        </div>
    );
}