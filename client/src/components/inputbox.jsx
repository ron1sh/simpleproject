export default function Inputbox({query,setquery,onsearch}) {
    const handlekeydown=(e)=>{
        if(e.key==="Enter"){
            onsearch();
        }
    }
  return (
    <div className="flex border items-center border-gray-300 rounded-full overflow-hidden  bg-white px-3 w-full h-8">
      
      <input
        type="text"
        placeholder="Search..."
        value={query}
        className=" py-2 outline-none border-none flex-1 min-w-0" onChange={(e)=>setquery(e.target.value)} onKeyDown={handlekeydown}
      />

      <button className="text-gray-500 hover:text-blue-500 hover:cursor-pointer" onClick={onsearch}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
      </button>

    </div>
  );
}