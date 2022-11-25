import { useState } from "react";

const SearchBar = () => {
    const [focusBox, setFocusBox] = useState(false);
    const focusHandler = () => {
        setFocusBox(!focusBox);
    };

    return (
        <div className="relative z-40">
            <input
                type="text"
                placeholder="Search by city, region or state"
                onFocus={focusHandler}
                onBlur={focusHandler}
                className="bg-white bg-opacity-50 focus:bg-opacity-100 border-[1px] border-white outline-none px-4 py-2 rounded-md sm:w-[500px] w-[300px] placeholder-white"
            />
            {focusBox && (
                <div className="bg-white px-4 py-4 absolute top-[2.4rem] left-0 w-full text-[12px] border-t-[1px] border-t-black search_drop_shadow rounded-br-md rounded-bl-md">
                    <h2 className="uppercase text-gray-400 font-bold">Most searched</h2>
                    <div className="my-4 flex items-center gap-2 flex-wrap">
                        <button className="bg-[#F6F6F6] rounded-lg px-2 py-1">
                            Bihar
                        </button>
                        <button className="bg-[#F6F6F6] rounded-lg px-2 py-1">Noida</button>
                        <button className="bg-[#F6F6F6] rounded-lg px-2 py-1">Mumbai</button>
                        <button className="bg-[#F6F6F6] rounded-lg px-2 py-1">Patna</button>
                        <button className="bg-[#F6F6F6] rounded-lg px-2 py-1">Bangalore</button>
                        <button className="bg-[#F6F6F6] rounded-lg px-2 py-1">Hyderabad</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchBar;
