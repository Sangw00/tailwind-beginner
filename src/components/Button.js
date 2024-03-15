


 export default function Button(props){

    const name = props.name;
    return (
        <div class="text-center mt-6 ">
    <button type="submit" class=" relative inline-flex content-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-400 group-hover:from-cyan-400 group-hover:to-blue-200 hover:text-white dark:text-white  focus:outline-none">
        <span class=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {name}
        </span>
    </button>
</div>

    )
 }