import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner.jsx";

export default function Buscador(props) {
  const [resultadoBusqueda, setResultadoBusqueda] = useState();
  const [cadenaBusqueda, setCadenaBusqueda] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setCadenaBusqueda(event.target.value);
  };

  async function handleClickBuscar() {
    try {
      setIsLoading(true);

      const data = await (
        await fetch(`https://omdbapi.com/?apikey=1a55c3a8&s=${cadenaBusqueda}`)
      ).json();

      console.log("data:", data);
      // todo: acá falta atrapar el error, como cuando devuelve que hay muchos resultados, ej. buscando "us"
      if (data.Search) {
        setResultadoBusqueda(data.Search.filter((e) => e.Type === "series"));
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  function isSaved(serieID) {
    let a = props.datosSeries.filter((e) => e.imdbID === serieID);
    console.log(a);
    return a.length;
  }

  function Resultados(props) {
    function BotonGuardar(props) {
      return (
        <button
          className="text-sm border-1 border border-slate-600 rounded px-1 py-0.5 hover:text-white hover:bg-slate-600"
          onClick={() => props.handleAdd(props.serieID)}
        >
          Guardar
        </button>
      );
    }

    const botonGuardar2 = (
      <p className="text-sm disabled border-1 border bg-gray-200 text-gray-800 rounded px-1 py-0.5 ">
        Guardardo
      </p>
    );

    if (props.resu !== undefined) {
      return (
        <div className="component--resultados px-4">
          <p className="pb-1 pt-4">Resultados:</p>

          {props.resu.map((e) => (
            <div key={e.imdbID} className="py-2 ">
              <div className="flex flex-row shadow-md rounded-md bg-neutral-100 h-20">
                <img
                  className="rounded-l-md  w-2/12 object-cover "
                  src={e.Poster}
                  alt={e.Title}
                  /* height="100px" */
                />

                <div className="flex flex-col  flex-grow px-3  pt-1  ">
                  <div className="text-1xl font-bold p-0.5">
                    <a
                      target="_blank"
                      href={"https://www.imdb.com/title/" + e.imdbID}
                    >
                      {`${e.Title} (${e.Year})`}
                    </a>
                  </div>
                </div>
                <div className="flex flex-col  self-end  p-2 rounded-br-md">
                  {isSaved(e.imdbID) > 0 ? (
                    botonGuardar2
                  ) : (
                    <BotonGuardar
                      handleAdd={props.handleAdd}
                      serieID={e.imdbID}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

  return (
    <>
      <div className="py-6">
        <div className="px-4  flex flex-row flex-wrap justify-center">
          <div className="py-4">Ingrese el nombre de la serie: </div>
          <div>
            <input
              type="text"
              className="border-1 border border-slate-400 rounded-md mr-2 px-2 py-0.5 focus:outline-slate-600	"
              name="busca"
              onChange={handleChange}
            />
            <button
              onClick={handleClickBuscar}
              type="button"
              className="rounded bg-slate-600 mx-2 px-2 py-0.5 text-white"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Resultados resu={resultadoBusqueda} handleAdd={props.handleAdd} />
      )}
    </>
  );
}
