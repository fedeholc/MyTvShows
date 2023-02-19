import { TvIcon } from "@heroicons/react/24/solid";

export default function Sidebar(props) {
  let selected = "px-4 py-3 rounded font-bold bg-blue-900 text-white";
  let unselected = "px-4 py-3 rounded text-black";
  let menuItemStyle = [];

  // viene el array con true o false según el item que esté seleccionado
  // según eso se aplica el estilo para que aparezca como seleccionado en la sidebar
  props.menuItems[0]
    ? (menuItemStyle[0] = selected)
    : (menuItemStyle[0] = unselected);

  props.menuItems[1]
    ? (menuItemStyle[1] = selected)
    : (menuItemStyle[1] = unselected);

  return (
    <>
      <div className="flex flex-row text-2xl font-bold text-blue-900 border-b mb-4 p-4">
        MyTVShows <TvIcon className="ml-2 h-8"/>
      </div>
      <ul>
        <li className={menuItemStyle[0]}>
          <button onClick={() => props.menu(0)}>Series guardadas</button>
        </li>
        <li className={menuItemStyle[1]}>
          <button onClick={() => props.menu(1)}>Buscar series</button>
        </li>
      </ul>
    </>
  );
}
