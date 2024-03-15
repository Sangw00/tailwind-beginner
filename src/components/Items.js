

export default function Items(props){

    const icon=props.icon;
    const name=props.name;
    const link=props.link;

    return (
        <li>
            <a href={link} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-blue -500">
        {icon}
              <span className="text-sm font-medium">
        {name}
              </span>
            </a>
          </li>
    )
}