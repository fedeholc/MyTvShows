import { TrashIcon } from "@heroicons/react/24/solid";



function CardSeries(props) {
  let infoTemporadas = "";
  if (parseInt(props.datoss.TotalSeasons) == 1) {
    infoTemporadas = "1 temporada";
  } else if (parseInt(props.datoss.TotalSeasons) > 1) {
    infoTemporadas = parseInt(props.datoss.TotalSeasons) + " temporadas";
  } else {
    infoTemporadas = "";
  }

  let infoEpisodio = "";
  if (
    props.datoss.TotalSeasons == "N/A" ||
    props.datoss.LastEpisodeReleased == "N/A"
  ) {
    infoEpisodio = "Sin información del último episodio.";
  } else {
    infoEpisodio =
      "Último Episodio: S" +
      props.datoss.TotalSeasons +
      "E" +
      props.datoss.LastEpisode +
      ", emitido el " +
      props.datoss.LastEpisodeReleased;
  }

  return (
    <div
      key={props.datoss.Key}
      className="flex flex-row shadow-md  rounded-md bg-neutral-100 h-28"
    >
      <img
        className="rounded-l-md  w-2/12 object-cover "
        src={props.datoss.Poster}
        alt={props.datoss.Title}
        /* height="100px" */
      />

      <div className="flex flex-col  flex-grow px-3  pt-1  ">
        <div className="text-lg font-black p-0.5">
          <a
            target="_blank"
            href={"https://www.imdb.com/title/" + props.datoss.imdbID}
          >
            {props.datoss.Title}{" "}
          </a>
        </div>

        <div className="text-md text-gray-800 font-light p-0.5">
          {infoTemporadas} ({props.datoss.Year})
        </div>
        <div className="text-sm text-gray-800 font-light p-0.5">
          {infoEpisodio}
        </div>
      </div>
      <div className="flex flex-col  items-end  p-2 rounded-br-md">
        <button
          className=" font text-xs border-gray-200  "
          onClick={() => props.handleBorrar(props.datoss.Key)}
        >
          <TrashIcon className="h-5 w-5 text-blue-800/20 hover:text-blue-800" />
        </button>
      </div>
    </div>
  );
}

export default function ListaSeries(props) {
  let datosS = props.datosSeries;
  if (datosS) {
    let devolver = (
      <div className="">
        {datosS.map((e) => (
          <div key={e.Key} className="p-2 px-4">
            <CardSeries datoss={e} handleBorrar={props.handleBorrar} />
          </div>
        ))}
      </div>
    );
    return <>{devolver}</>;
  } else {
    return <></>;
  }
}
