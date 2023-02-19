import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Buscador from "./Buscador";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { ref, set, push, child, get, remove } from "firebase/database";
import { databaseFirebase } from "./MyFirebase";
import ListaSeries from "./ListaSeries";

export async function getSerieData(serieID) {
  let dataCompleta = {};
  let dataSerie = await fetch(
    `https://www.omdbapi.com/?apikey=1a55c3a8&i=${serieID}`
  )
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
      setErrorMessage("Error: No se pudieron cargar los datos (1)");
    });

  //hay que checkiar que sea una serie (data2.totalSeasons distinto de undefined) y que si es una serie
  // tenga la info de las temporadas (distinto de N/A)
  if (dataSerie.totalSeasons !== "N/A" && dataSerie.totalSeasons) {
    let dataSeasons = await (
      await fetch(
        `https://www.omdbapi.com/?apikey=1a55c3a8&i=${serieID}&season=${dataSerie.totalSeasons}`
      )
    ).json();

    dataCompleta = {
      Title: dataSerie.Title,
      Poster: dataSerie.Poster,
      imdbID: serieID,
      Year: dataSerie.Year,
      TotalSeasons: dataSerie.totalSeasons,
      LastEpisode:
        dataSeasons.Episodes[dataSeasons.Episodes.length - 1].Episode,
      LastEpisodeReleased:
        dataSeasons.Episodes[dataSeasons.Episodes.length - 1].Released,
    };
  } else {
    dataCompleta = {
      Title: dataSerie.Title,
      Poster: dataSerie.Poster,
      imdbID: serieID,
      Year: dataSerie.Year,
      TotalSeasons: dataSerie.totalSeasons,
      LastEpisode: "N/A", // TODO: ¿qué poner?
      LastEpisodeReleased: "N/A",
    };
  }

  return dataCompleta;
}

function App() {
  const [sidebarMenu, SetSidebarMenu] = useState([true, false]);
  const [ordenLista, SetOrdenLista] = useState("");
  const [datosMisSeries, setDatosMisSeries] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleMenu(item) {
    //al clickear en un item del menu lo pone como true que sea visible en la pagina principal y al resto false para que no
    SetSidebarMenu((prev) => {
      let newmenu = sidebarMenu.map((e, i) => (i === item ? true : false));
      return newmenu;
    });
  }

  async function handleClickBorrar(Key) {
    await remove(ref(databaseFirebase, "series/" + Key));
    setDatosMisSeries((prev) => prev.filter((e) => e.Key !== Key));
  }

  async function handleAddNewSerie(serieID) {
    // obtiene una nueva Key y guarda registro en Firebase
    const newPostKey = push(child(ref(databaseFirebase), "series")).key;
    set(ref(databaseFirebase, "series/" + newPostKey), { imdbID: serieID });

    // busca la info de temporadas y último capítulo luego guarda en State
    let dataTemp = await getSerieData(serieID);
    let dataSerieToAdd = { Key: newPostKey, ...dataTemp };
    setDatosMisSeries((prev) => [...prev, dataSerieToAdd]);
  }

  async function CargarDatosMisSeries() {
    try {
      setIsLoading(true);

      // TODO: manejo de errores
      // * Carga los datos de IDs guardados en FireBase
      let data = [];
      await get(child(ref(databaseFirebase), `series`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            snapshot.forEach((e) => {
              data.push({ Key: e.key, imdbID: e.val().imdbID });
            });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage("Error: No se pudieron cargar los datos (1)");
        });

      // * Para cada serie busca datos de la serie, y total de temporadas
      // * Luego si está esa última info busca el dato del último episodio
      // * de la última temporada.
      // TODO: que hacer si no recibe info.

      let dataSeries = [{}];
      for (let i = 0; i < data.length; i++) {
        let dataTemp = await getSerieData(data[i].imdbID);
        dataSeries[i] = { Key: data[i].Key, ...dataTemp };
      }

      setDatosMisSeries(dataSeries);
      setIsLoading(false);
    } catch (err) {
      console.log(err, rr.message);
      setErrorMessage("Error (global)");
      setIsLoading(false);
    }
  }

  //función para probar un dropdown para ordenar la lista de series
  function OrdenarListaSeries() {
    function ordenarTitulo() {
      let datosSeries = [...datosMisSeries];

      if (ordenLista !== "TituloZA") {
        SetOrdenLista("TituloZA");
        datosSeries.sort((a, b) => {
          if (a.Title < b.Title) {
            return -1;
          } else if (a.Title > b.Title) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        SetOrdenLista("TituloAZ");
        datosSeries.sort((a, b) => {
          if (a.Title < b.Title) {
            return 1;
          } else if (a.Title > b.Title) {
            return -1;
          } else {
            return 0;
          }
        });
      }

      setDatosMisSeries(datosSeries);

      console.log(datosSeries);
    }

    function ordenarEpisodio() {
      let datosSeries = [...datosMisSeries];

      // todo: no está ordenando por fecha sino que compara strings, por eso el 0 es siempre menor a las fechas y el 3 es mayor, ya que todos los demás años empiezan con 1 o 2.

      datosSeries.sort((a, b) => {
        if (ordenLista !== "EpisodioZA") {
          let uno =
            a.LastEpisodeReleased == "N/A" ? "0" : a.LastEpisodeReleased;
          let otro =
            b.LastEpisodeReleased == "N/A" ? "0" : b.LastEpisodeReleased;
          SetOrdenLista("EpisodioZA");
          if (uno > otro) {
            return -1;
          } else if (uno < otro) {
            return 1;
          } else {
            return 0;
          }
        } else {
          let uno =
            a.LastEpisodeReleased == "N/A" ? "3" : a.LastEpisodeReleased;
          let otro =
            b.LastEpisodeReleased == "N/A" ? "3" : b.LastEpisodeReleased;
          SetOrdenLista("EpisodioAZ");
          if (uno > otro) {
            return 1;
          } else if (uno < otro) {
            return -1;
          } else {
            return 0;
          }
        }
      });

      setDatosMisSeries(datosSeries);
    }
    return (
      <div className="flex flex-row justify-end font-bold text-xs pr-4">
        <div className="mr-1">Ordenar por:</div>
        <button
          className="mr-1 font-normal text-xs hover:text-blue-900"
          onClick={ordenarTitulo}
        >
          Título
        </button>
        <div className="font-normal text-xs">|</div>
        <button
          className="ml-1 text-xs font-normal hover:text-blue-900"
          onClick={ordenarEpisodio}
        >
          Último episodio
        </button>
      </div>
    );
  }

  function Misseries1() {
    return (
      <div className="py-5">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div>
            <OrdenarListaSeries />
            <ListaSeries
              datosSeries={datosMisSeries}
              handleBorrar={handleClickBorrar}
            />
          </div>
        )}
        <p>{errorMessage}</p>
      </div>
    );
  }

  // ? tendría que cargar los valores iniciales con lazy state initialization?
  // ? NO, daba error al querer usar datosMisSeries sin estar cargado
  // ? en cambio al ponerlo en useEffect lo carga antes de hacer el render de la parte
  // ? que lo va a usar.
  useEffect(() => {
    CargarDatosMisSeries();
  }, []);

  return (
    <div className="bg-white flex flex-row justify-center  ">
      <div className="basis-[250px] bg-neutral-100 flex-shrink-0 px-4 border-x border-slate-400 sticky top-0 h-screen">
        <Sidebar menu={handleMenu} menuItems={sidebarMenu} />
      </div>
      <div className="border-r border-slate-400 basis-[600px]   min-h-screen pb-4 flex-shrink-0  px-4  ">
        {sidebarMenu[0] ? <Misseries1 /> : ""}
        {sidebarMenu[1] ? (
          <Buscador
            datosSeries={datosMisSeries}
            handleAdd={handleAddNewSerie}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
