import { Link } from "react-router-dom";

export default function Items(props){

    const icon=props.icon;
    const name=props.name;
    const to=props.to;

    return (
        <li>
            <Link to={to} className="flex flex-row items-center  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-blue-500 hover:border-b border-gray-200">
        {icon}
              <span className="text-sm font-medium  dark:bg-gray-700 dark:text-white">
        {name}
              </span>
            </Link>
          </li>
          
    )
}