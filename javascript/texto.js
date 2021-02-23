/*cambiar modo oscuro-claro*/
const btnGifos3 = document.getElementById("btn3")
const btnGifos2 = document.getElementById("btn2") 
const btnGifos = document.getElementById("btn1")
const botonFavo = document.getElementById("btnVerMas")
const botonFavo2 = document.getElementById("btnVerMas2")
const botonFavo3 = document.getElementById("btnVerMas3")
const botonFavo4 = document.getElementById("btnVerMas4")
const equisBusqueda = document.getElementById("equisBusqueda")
let cronometro = document.getElementById("cronometro")
let equisHamburguesa = document.getElementById("equisHamburguesa")
let menuHamburguesa = document.getElementById("menuHamburguesa")
let botonGrabar = document.getElementById("byButton-grabar")
let botonCrear = document.querySelector(".myButtonCrear")
let botonSubir = document.getElementById("byButton-subir")
let botonFinalizar = document.getElementById("byButton-finalizar")
let cinta = document.getElementById("cintaCrear")
let containerCrear = document.getElementById("container-crear")
let aDarkMode = document.getElementById("nocturno");
let aRectanguloDark = document.getElementById("inicio")
let aRectanguloDark2 = document.getElementById("final")
let main = document.getElementById("main")
let menu =  document.getElementById("menuPrincipal")
let titulo = document.getElementById("titulo")
let barra= document.getElementById("barra")
let buscar = document.getElementById("btn")
let logo = document.getElementById("logo")
let crear = document.getElementById("crear")
let trending = document.getElementById("trending1")
let parrafo_uno = document.getElementById("palabras")
let trendingGifos = document.getElementById("trendingGifos")
let parrafo_dos = document.getElementById("parrafo2")
let lineaFinal = document.getElementById("linea-final")
let textoFinal = document.getElementById("textoFinal")
let facebook = document.getElementById("facebook")
let twitter = document.getElementById("twitter")
let instagram = document.getElementById("instagram")
let slider_derecha = document.getElementById("slider2")
let slider_izquierda =  document.getElementById("slider1")
let containerBuscar = document.getElementById("contenedorBuscar")
let expandir = document.getElementById("expandir")
let lupa1 = document.getElementById("lupa1")
let lupa2 = document.getElementById("lupa2")
let lupa3 = document.getElementById("lupa3")
let lupa4 = document.getElementById("lupa4")
let titleMyGifos = document.getElementById("title_MisGifos")
let titleFavorites = document.getElementById("title-favoritos")
let camara = document.getElementById("camaraCrear")
let tituloCrear = document.getElementById("tituloCrear")
let tituloCrear2 = document.getElementById("tituloCrear2")
let parrafoCrear = document.getElementById("parrafoCrear3")
let parrafoCrear2 = document.getElementById("parrafoCrear4")
let parrafoCrear3 = document.getElementById("parrafo_crear1")
let parrafoCrear4 = document.getElementById("parrafo_crear2")
let accesoCam = document.getElementById("acceso_cam")
let rectanguloCrear = document.getElementById("rectanguloCrear")
let repetir = document.getElementById("repetir_captura")
let pasoapaso1 = document.getElementById("pasoapaso1")
let pasoapaso2 = document.getElementById("pasoapaso2")
let pasoapaso3 = document.getElementById("pasoapaso3")
let menuPrincipal = document.getElementById("menuPrincipal")
modoNocturno = false
crear.addEventListener("mouseover",e => {crear.src="imagenes/CTA-crear-gifo-hover.svg"})
crear.addEventListener("mouseout",e => {crear.src="imagenes/button-crear-gifo.svg"})
facebook.addEventListener("mouseover", e => {facebook.src="imagenes/icon_facebook_hover.svg"})
facebook.addEventListener("mouseout", e =>{facebook.src="imagenes/icon_facebook.svg"})
twitter.addEventListener("mouseover", e => {twitter.src="imagenes/icon-twitter-hover.svg"})
twitter.addEventListener("mouseout", e =>{twitter.src="imagenes/icon-twitter.svg"})
instagram.addEventListener("mouseover", e => {instagram.src="imagenes/icon_instagram-hover.svg"})
instagram.addEventListener("mouseout", e =>{instagram.src="imagenes/icon_instagram.svg"})
slider_derecha.addEventListener("mouseover", e => {slider_derecha.src="imagenes/Button-Slider-right-hover.svg"})
slider_derecha.addEventListener("mouseout", e =>{slider_derecha.src="imagenes/Button-Slider-right.svg"})
slider_izquierda.addEventListener("mouseover", e => {slider_izquierda.src="imagenes/button-slider-left-hover.svg"})
slider_izquierda.addEventListener("mouseout", e =>{slider_izquierda.src="imagenes/button-slider-left.svg"})


aDarkMode.addEventListener("click", e => {
    
    btnMisGifos.classList.remove("active")
    btnFav.classList.remove("active")
    let cuerpoweb = document.body
    if (modoNocturno===false){
        botonFavo.classList.add("myButtonGifos-oscuro")
        botonFavo2.classList.add("myButtonGifos-oscuro")
        botonFavo3.classList.add("myButtonGifos-oscuro")
        botonFavo4.classList.add("myButtonGifos-oscuro")
        equisBusqueda.src="imagenes/close-modo-noct.svg"
        btnGifos.classList.add("myButtonGifos-oscuro")
        btnGifos2.classList.add("myButtonGifos-oscuro")
        btnGifos3.classList.add("myButtonGifos-oscuro")
        cronometro.classList.add("cronometro-oscuro")
        menuPrincipal.classList.add("menu-oscuro")
        pasoapaso1.classList.add("pasoapaso-oscuro")
        pasoapaso2.classList.add("pasoapaso-oscuro")
        pasoapaso3.classList.add("pasoapaso-oscuro")
        repetir.classList.add("repetirCaptura-oscuro")
        botonFinalizar.classList.add("myButtonCrear-oscuro")
        botonSubir.classList.add("myButtonCrear-oscuro")
        botonGrabar.classList.add("myButtonCrear-oscuro")
        botonCrear.classList.add("myButtonCrear-oscuro")
        rectanguloCrear.classList.add("rectangulo-crea-oscuro")
        accesoCam.classList.add("accesoCam-oscuro")
        parrafoCrear.classList.add("parrafoCrear1-oscuro")
        parrafoCrear2.classList.add("parrafoCrear2-oscuro")
        parrafoCrear3.classList.add("parrafoCrear3-oscuro")
        parrafoCrear4.classList.add("parrafoCrear4-oscuro")
        tituloCrear.classList.add("titulo-crear-oscuro")
        tituloCrear2.classList.add("titulo-crear2-oscuro")
        cinta.src="imagenes/pelicula-modo-noc.svg"
        containerCrear.classList.add("containerCrear-oscuro")
        titleFavorites.classList.add("titleFavoritos-oscuro")
        aDarkMode.classList.add("active")
        cuerpoweb.classList.add("oscuro");
        titleMyGifos.classList.add("titleMisGifos-oscuro")
        expandir.classList.add("expandir-oscuro")
        aRectanguloDark.classList.add("rectangulo_oscuro")
        aRectanguloDark2.classList.add("rectangulo_oscuro")
        containerBuscar.classList.add("container-buscar-oscuro")
        main.classList.add("main_oscuro")
        menu.classList.add("menu_oscuro")
        titulo.classList.add("titulo_oscuro")
        barra.classList.add("buscar_oscuro")
        menuHamburguesa.src="imagenes/burger-modo-noct.svg"
        equisHamburguesa.src="imagenes/close-modo-noct.svg"
        camara.src="imagenes/camara-modo-noc.svg"
        buscar.src="imagenes/icon-search-mod-noc.svg"
        lupa1.src="imagenes/icon-search-mod-noc.svg"
        lupa2.src="imagenes/icon-search-mod-noc.svg"
        lupa3.src="imagenes/icon-search-mod-noc.svg"
        lupa4.src="imagenes/icon-search-mod-noc.svg"
        logo.src="imagenes/Logo-modo-noc.svg"
        crear.src="imagenes/CTA-crear-gifo-modo-noc.svg"
        slider_derecha.src="imagenes/button-slider-right-md-noct.svg"
        slider_izquierda.src="imagenes/button-slider-left-md-noct.svg"
        crear.addEventListener("mouseover", e => {crear.src="imagenes/CTA-crear-gifo-hover-modo-noc.svg"})
        crear.addEventListener("mouseout", e =>{crear.src="imagenes/CTA-crear-gifo-modo-noc.svg"})
        facebook.addEventListener("mouseover", e => {facebook.src="imagenes/icon_facebook_noc.svg"})
        facebook.addEventListener("mouseout", e =>{facebook.src="imagenes/icon_facebook.svg"})
        twitter.addEventListener("mouseover", e => {twitter.src="imagenes/icon_twitter_noc.svg"})
        twitter.addEventListener("mouseout", e =>{twitter.src="imagenes/icon-twitter.svg"})
        instagram.addEventListener("mouseover", e => {instagram.src="imagenes/icon_instagram_noc.svg"})
        instagram.addEventListener("mouseout", e =>{instagram.src="imagenes/icon_instagram.svg"})
        slider_derecha.addEventListener("mouseover", e => {slider_derecha.src="imagenes/button-slider-right-md-noct.svg"})
        slider_derecha.addEventListener("mouseout", e =>{slider_derecha.src="imagenes/button-slider-right-md-noct.svg"})
        slider_izquierda.addEventListener("mouseover", e => {slider_izquierda.src="imagenes/button-slider-left-md-noct.svg"})
        slider_izquierda.addEventListener("mouseout", e =>{slider_izquierda.src="imagenes/button-slider-left-md-noct.svg"})
        trending.classList.add("trending_oscuro")
        parrafo_uno.classList.add("parrafo-uno_oscuro")
        trendingGifos.classList.add("trending-gifos-oscuro")
        parrafo_dos.classList.add("parrafo-dos-oscuro")
        lineaFinal.classList.add("texto-oscuro")
        textoFinal.classList.add("texto-final-oscuro")
        aDarkMode.textContent = "MODO DIURNO";
        modoNocturno = true;
        
    } else{
        botonFavo.classList.remove("myButtonGifos-oscuro")
        botonFavo2.classList.remove("myButtonGifos-oscuro")
        botonFavo3.classList.remove("myButtonGifos-oscuro")
        botonFavo4.classList.remove("myButtonGifos-oscuro")
        equisBusqueda.src="imagenes/close.svg"
        btnGifos.classList.remove("myButtonGifos-oscuro")
        btnGifos2.classList.remove("myButtonGifos-oscuro")
        btnGifos3.classList.remove("myButtonGifos-oscuro")
        botonFinalizar.classList.remove("myButtonCrear-oscuro")
        cronometro.classList.remove("cronometro-oscuro")
        menuPrincipal.classList.remove("menu-oscuro")
        equisHamburguesa.src="imagenes/close.svg"
        menuHamburguesa.src="imagenes/burger.svg"
        pasoapaso1.classList.remove("pasoapaso-oscuro")
        pasoapaso2.classList.remove("pasoapaso-oscuro")
        pasoapaso3.classList.remove("pasoapaso-oscuro")
        repetir.classList.remove("repetirCaptura-oscuro")
        botonSubir.classList.remove("myButtonCrear-oscuro")
        botonGrabar.classList.remove("myButtonCrear-oscuro")
        botonCrear.classList.remove("myButtonCrear-oscuro")
        rectanguloCrear.classList.add("rectangulo")
        rectanguloCrear.classList.remove("rectangulo-crea-oscuro")
        accesoCam.classList.remove("accesoCam-oscuro")
        parrafoCrear.classList.remove("parrafoCrear1-oscuro")
        parrafoCrear.classList.remove("parrafoCrear1-oscuro")
        parrafoCrear2.classList.remove("parrafoCrear2-oscuro")
        parrafoCrear3.classList.remove("parrafoCrear2-oscuro")
        parrafoCrear4.classList.remove("parrafoCrear1-oscuro")
        tituloCrear.classList.remove("titulo-crear-oscuro")
        tituloCrear2.classList.remove("titulo-crear2-oscuro")
        cinta.src="imagenes/pelicula.svg"
        camara.src="imagenes/camara.svg"
        containerCrear.classList.remove("containerCrear-oscuro")
        titleFavorites.classList.remove("titleFavoritos-oscuro")
        titleMyGifos.classList.remove("titleMisGifos-oscuro")
        containerBuscar.classList.remove("container-buscar-oscuro")
        aDarkMode.classList.remove("active")
        cuerpoweb.classList.remove("oscuro");
        expandir.classList.remove("expandir-oscuro")
        aRectanguloDark.classList.remove("rectangulo_oscuro")
        aRectanguloDark2.classList.remove("rectangulo_oscuro")
        main.classList.remove("main_oscuro")
        menu.classList.remove("menu_oscuro")
        titulo.classList.remove("titulo_oscuro")
        barra.classList.remove("buscar_oscuro")
        buscar.src="imagenes/icon-search.svg"
        lupa1.src="imagenes/icon-search.svg"
        lupa2.src="imagenes/icon-search.svg"
        lupa3.src="imagenes/icon-search.svg"
        lupa4.src="imagenes/icon-search.svg"
        logo.src="imagenes/logo-desktop.svg"
        crear.src="imagenes/button-crear-gifo.svg"
        slider_derecha.src="imagenes/Button-Slider-right.svg"
        slider_izquierda.src="imagenes/button-slider-left.svg"
        crear.addEventListener("mouseover", e => {crear.src="imagenes/CTA-crear-gifo-hover.svg"})
        crear.addEventListener("mouseout", e =>{crear.src="imagenes/button-crear-gifo.svg"})
        facebook.addEventListener("mouseover", e => {facebook.src="imagenes/icon_facebook_hover.svg"})
        facebook.addEventListener("mouseout", e =>{facebook.src="imagenes/icon_facebook.svg"})
        twitter.addEventListener("mouseover", e => {twitter.src="imagenes/icon-twitter-hover.svg"})
        twitter.addEventListener("mouseout", e =>{twitter.src="imagenes/icon-twitter.svg"})
        instagram.addEventListener("mouseover", e => {instagram.src="imagenes/icon_instagram-hover.svg"})
        instagram.addEventListener("mouseout", e =>{instagram.src="imagenes/icon_instagram.svg"})
        slider_derecha.addEventListener("mouseover", e => {slider_derecha.src="imagenes/Button-Slider-right-hover.svg"})
        slider_derecha.addEventListener("mouseout", e =>{slider_derecha.src="imagenes/Button-Slider-right.svg"})
        slider_izquierda.addEventListener("mouseover", e => {slider_izquierda.src="imagenes/button-slider-left-hover.svg"})
        slider_izquierda.addEventListener("mouseout", e =>{slider_izquierda.src="imagenes/button-slider-left.svg"})
        trending.classList.remove("trending_oscuro")
        parrafo_uno.classList.remove("parrafo-uno_oscuro")
        trendingGifos.classList.remove("trending-gifos-oscuro")
        parrafo_dos.classList.remove("parrafo-dos-oscuro")
        lineaFinal.classList.remove("texto-oscuro")
        textoFinal.classList.remove("texto-final-oscuro")
        modoNocturno = false;
        aDarkMode.textContent = "MODO NOCTURNO"
    }
} )

/*general*/

const logoPrincipal = document.getElementById("logo")
logoPrincipal.addEventListener("click",e => {
  document.getElementById("seccionUno").style.display = "block"
  document.getElementById("main").style.display = "block"
  document.getElementById("seccionDos").style.display = "none"
  document.getElementById("seccionFavoritos").style.display ="none"
  document.getElementById("seccionMisGifos").style.display = "none"
  btnMisGifos.classList.remove("active")
  btnFav.classList.remove("active")
  aDarkMode.classList.remove("active")
  crear.addEventListener("mouseover",e => {crear.src="imagenes/CTA-crear-gifo-hover.svg"})
  crear.addEventListener("mouseout",e => {crear.src="imagenes/button-crear-gifo.svg"})
  crear.src="imagenes/button-crear-gifo.svg"
  if (modoNocturno===true){
    crear.addEventListener("mouseover", e => {crear.src="imagenes/CTA-crear-gifo-hover-modo-noc.svg"})
    crear.addEventListener("mouseout", e =>{crear.src="imagenes/CTA-crear-gifo-modo-noc.svg"})
    crear.src="imagenes/CTA-crear-gifo-modo-noc.svg"
  }
})

/*trending words*/

const API_KEY = 'Xm4wSExENS3RmSKBEjP0FpEy6BruKJPR'
let palabras = document.getElementById("palabras")

getTrendings = async () => {
  const response = await fetch(`https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`)
  const json = await response.json()

  return json.data
}

showTrendings = trendings => {
  for (let i = 0; i < 4; i++){
      const trending = trendings[i]
      let palabra = document.createElement("p")
      palabra.textContent = (trending+",")
      palabras.appendChild(palabra) 
      palabra.addEventListener("click", e => {
        inputSearch.value = trending
        buscarGif(trending)
      })      
  }
  const trending = trendings[4]
  let palabra = document.createElement("p")
  palabra.textContent = trending
  palabras.appendChild(palabra)
  palabra.addEventListener("click", e => {
    inputSearch.value = trending
    buscarGif(trending)
  })
}

getTrendings()
  .then(response => showTrendings(response))

/*trending gifs*/

let tGifs = document.getElementById("grilla1")


getTrendingsGifs = async () => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=Xm4wSExENS3RmSKBEjP0FpEy6BruKJPR&limit=12&rating=g`)
  const json = await response.json()

  return json.data
}

showTrendingsGifs = trendingsGifs => {
  for (let i = 0; i < 3; i++){
      
      const trendingGifs = trendingsGifs[i]
      let divCorazon = document.createElement("div")
      let corazonUndido = document.createElement("img")
      let div = document.createElement("div")
      let gif = document.createElement("img")
      let divHover = document.createElement("div")
      let titleTrendingGif = document.createElement("p")
      let userTrendingGif = document.createElement("p")
      let corazon = document.createElement("img")
      let expandir = document.createElement("img")
      let descargar = document.createElement("img")
      let aUrl = document.createElement("a")
      corazonUndido.setAttribute("src","imagenes/icon-fav-active.svg")
      divCorazon.appendChild(corazon)
      expandir.setAttribute("src","imagenes/icon-max-normal.svg")
      descargar.setAttribute("src","imagenes/icon-download.svg")
      corazon.classList.add("btnHover")
      expandir.classList.add("btnHover")
      descargar.classList.add("btnHover")
      divHover.classList.add("hoverGifs")
      corazon.setAttribute("id","corazon")
      divHover.appendChild(divCorazon)
      divHover.appendChild(descargar)
      divHover.appendChild(expandir)
      titleTrendingGif.textContent = trendingGifs.title
      userTrendingGif.textContent = trendingGifs.username
      divHover.appendChild(userTrendingGif)
      divHover.appendChild(titleTrendingGif)
      userTrendingGif.classList.add("userTrendingGif")
      titleTrendingGif.classList.add("titleTrendingGif")
      gif.setAttribute("src", trendingGifs.images.downsized.url)
      gif.setAttribute("id", "gifsTrending") 
      div.setAttribute("id", "divGif")
      div.appendChild(gif)
      div.appendChild(divHover)
      tGifs.appendChild(div)
      descargar.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
      descargar.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
      expandir.addEventListener("mouseover", () => {expandir.src="imagenes/icon-max-hover.svg"})
      expandir.addEventListener("mouseout", () => {expandir.src="imagenes/icon-max-normal.svg"})

      async function downloadGif (trendingGifs){
        let a = document.createElement("a")
        let resp = await fetch (trendingGifs.images.downsized.url)
        let file = await resp.blob()

        a.download = trendingGifs.title + ".gif"
        a.href = window.URL.createObjectURL(file)
        a.click()
        a.remove()
      }

      const downloadGifCallBack = () => {
        downloadGif (trendingGifs)
      }

      descargar.addEventListener("click", downloadGifCallBack)


      gif.addEventListener("click" , () => {
        corazonUndido.classList.remove("corazonUndido")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",trendingGifs.images.downsized.url)
        titleExp.textContent = trendingGifs.title
        userExp.textContent = trendingGifs.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        divBotones.appendChild(descargarExp)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (trendingGifs){
          let a = document.createElement("a")
          let resp = await fetch (trendingGifs.images.downsized.url)
          let file = await resp.blob()
  
          a.download = trendingGifs.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
  
        const downloadGifCallBack = () => {
          downloadGif (trendingGifs)
        }
  
        descargarExp.addEventListener("click", downloadGifCallBack)
        

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === trendingGifs.id)
        var eliminar = trendingGifs.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(trendingGifs)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
    })

     /*mostrar gifs en favoritos*/

     const isExist = favs.filter(fav => fav.id === trendingGifs.id)
     var eliminar = trendingGifs.id
 
     console.log(isExist)
     if (isExist.length > 0){
       corazon.setAttribute("src","imagenes/icon-fav-hover.svg")
       divCorazon.appendChild(corazonUndido)
       corazonUndido.classList.add("corazonUndidoTrend")
       corazonUndido.style.display="block"
       
       corazonUndido.addEventListener("click", () =>{
        corazonUndido.classList.remove("corazonUndido")
         favs.splice(getIndice(eliminar),1)
         function getIndice(eliminar){
           var indice = -1
           favs.filter(function(dato,i){
             if(dato.id===eliminar){
               indice=i
             }
           })
           return indice
         }
         window-localStorage.setItem("favorites", JSON.stringify(favs)) 
       })
     }else{
       corazon.setAttribute("src","imagenes/icon-fav.svg")
       corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
       corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
       corazon.addEventListener("click", e => {
         corazonUndido.style.display="block"
         corazon.setAttribute("src","imagenes/icon-fav-hover.svg")
         divCorazon.appendChild(corazonUndido)
         corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
         corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
         corazonUndido.addEventListener("click", () =>{
           corazon.setAttribute("src","imagenes/icon-fav.svg")
           corazonUndido.style.display="none"
           corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
           corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
           favs.splice(getIndice(eliminar),1)
           function getIndice(eliminar){
             var indice = -1
             favs.filter(function(dato,i){
               if(dato.id===eliminar){
                 indice=i
               }
             })
             return indice
           }
           window-localStorage.setItem("favorites", JSON.stringify(favs)) 
         })
         addFav(trendingGifs)
       })
     }
 
      /*expandir gifs*/

      expandir.addEventListener("click", e => {
        corazonUndido.classList.remove("corazonUndido")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",trendingGifs.images.downsized.url)
        titleExp.textContent = trendingGifs.title
        userExp.textContent = trendingGifs.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divBotones.appendChild(descargarExp)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/
        
        async function downloadGif (trendingGifs){
          let a = document.createElement("a")
          let resp = await fetch (trendingGifs.images.downsized.url)
          let file = await resp.blob()
  
          a.download = trendingGifs.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
  
        const downloadGifCallBack = () => {
          downloadGif (trendingGifs)
        }
  
        descargarExp.addEventListener("click", downloadGifCallBack)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === trendingGifs.id)
        var eliminar = trendingGifs.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            corazonUndido.classList.remove("corazonUndido")
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(trendingGifs)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
      })

  } 
}



getTrendingsGifs()
  .then(response => showTrendingsGifs(response))


/*buscar gifs*/

const inputSearch = document.getElementById("inputSearch")
const searchForm = document.getElementById("barra")
const resultados = document.getElementById("resultados")
const containerResultados = document.getElementById("containerResultados")
const containerTituloSinResultados = document.getElementById("tituloSinResultados")

const searchGifs = async (query) => {
  const response = await fetch (`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=48`)
  const json = await response.json()

  return json.data
}

/*funcion para agregar Gifs a favoritos*/

const persistFavs =JSON.parse(window.localStorage.getItem("favorites"))
let favs = []




if(persistFavs!==null){

  console.log(persistFavs.length)
  console.log(favs.length)

    if (persistFavs.length > 0){
      favs = persistFavs
    }

    if (persistFavs.length < 1){
      
      document.getElementById("boxFavVacio").style.display ="block"
      document.getElementById("boxFavoritos").style.display="none"
      document.getElementById("boxFavoritos2").style.display="none"
      document.getElementById("boxFavoritos3").style.display="none"
      document.getElementById("boxFavoritos4").style.display="none"
      document.getElementById("btnVerMas").style.display="none"
      document.getElementById("btnVerMas2").style.display="none"
      document.getElementById("btnVerMas3").style.display="none"
      document.getElementById("btnVerMas4").style.display="none"
      
    }

    let i = 0;
    while(i < persistFavs.length) {
      let persistFav = persistFavs[i]
      const div = document.createElement("div")
      const gif = document.createElement("img")
      let corazonUndido = document.createElement("img")
      let divCorazon = document.createElement("div")
      let divHover = document.createElement("div")
      let titleBuscarGif = document.createElement("p")
      let userBuscarGif = document.createElement("p")
      let corazon = document.createElement("img")
      let expandir = document.createElement("img")
      let descargar = document.createElement("img")
      corazonUndido.classList.add("corazonUndidoFav")
      corazonUndido.setAttribute("src","imagenes/icon-fav-active.svg")
      div.classList.add("divGifBuscar")
      divHover.classList.add("hoverGifsBuscar")
      corazon.classList.add("btnHoverBuscar")
      expandir.classList.add("btnHoverBuscar")
      descargar.classList.add("btnHoverBuscar")
      corazon.setAttribute("src" ,"imagenes/icon-fav-hover.svg")
      expandir.setAttribute("src","imagenes/icon-max-normal.svg")
      descargar.setAttribute("src","imagenes/icon-download.svg")
      divCorazon.appendChild(corazonUndido)
      divCorazon.appendChild(corazon)
      corazon.setAttribute("id","corazonBusqueda")
      userBuscarGif.textContent = persistFav.user
      titleBuscarGif.textContent = persistFav.title
      gif.classList.add("gifFavorito")
      userBuscarGif.classList.add("userBuscarGif")
      titleBuscarGif.classList.add("titleBuscarGif")
      divHover.appendChild(divCorazon)
      divHover.appendChild(expandir)
      divHover.appendChild(descargar)
      divHover.appendChild(userBuscarGif)
      divHover.appendChild(titleBuscarGif)
      div.appendChild(gif)
      div.appendChild(divHover) 
      gif.setAttribute("src", persistFav.img)
      document.getElementById("boxFavoritos").appendChild(div)
      corazonUndido.addEventListener("click", () =>{
        var eliminar = persistFav.id   
        favs.splice(getIndice(eliminar),1)
        function getIndice(eliminar){
          var indice = -1
          favs.filter(function(dato,i){
            if(dato.id===eliminar){
              indice=i
            }
          })
          return indice
        }
        window-localStorage.setItem("favorites", JSON.stringify(favs)) 
      })

      descargar.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
      descargar.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
      expandir.addEventListener("mouseover", () => {expandir.src="imagenes/icon-max-hover.svg"})
      expandir.addEventListener("mouseout", () => {expandir.src="imagenes/icon-max-normal.svg"})

      async function downloadGif (persistFav){
        let a = document.createElement("a")
        let resp = await fetch (persistFav.img)
        let file = await resp.blob()

        a.download = persistFav.title + ".gif"
        a.href = window.URL.createObjectURL(file)
        a.click()
        a.remove()
      }

      const downloadGifCallBack = () => {
        downloadGif (persistFav)
      }

      descargar.addEventListener("click", downloadGifCallBack)

      gif.addEventListener("click" , () => {
        corazonUndido.classList.remove("corazonUndidoFav")
        corazonUndido.classList.remove("corazonUndido")
            corazonUndido.classList.add("corazonUndidoExp")
            let bodyExpandir = document.getElementById("expandir")
            document.getElementById("todo").style.display = "none"
            let equis = document.createElement("img")
            let gifExp = document.createElement("img")
            let containerExpandir = document.createElement("div")
            let sliderExpIzq = document.createElement("img")
            let divGifExp = document.createElement("div")
            let sliderExpDer = document.createElement("img")
            let divCorazon = document.createElement("div")
            let corazonExp = document.createElement("img")
            let descargarExp = document.createElement("img")
            let userExp = document.createElement("p")
            let titleExp = document.createElement("p")
            let divUltimo = document.createElement("div")
            divCorazon.classList.add("divCorazon")
            divCorazon.appendChild(corazonExp)
            divUltimo.classList.add("divUltimo")
            equis.classList.add("equisExp")
            gifExp.classList.add("gifExp")
            containerExpandir.classList.add("containerExpandir")
            sliderExpIzq.classList.add("sliderExpIzq")
            divGifExp.classList.add("divGifExp")
            sliderExpDer.classList.add("sliderExpDer")
            corazonExp.classList.add("corazonExp")
            descargarExp.classList.add("descargarExp")
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            gifExp.setAttribute("src",persistFav.img)
            titleExp.textContent = persistFav.title
            userExp.textContent = persistFav.user
            equis.setAttribute("src", "imagenes/close.svg")
            corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
            descargarExp.setAttribute("src", "imagenes/icon-download.svg")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            bodyExpandir.appendChild(equis)
            bodyExpandir.appendChild(containerExpandir)
            containerExpandir.appendChild(sliderExpIzq)
            containerExpandir.appendChild(divGifExp)
            divGifExp.appendChild(gifExp)
            containerExpandir.appendChild(sliderExpDer)
            let divParrafos = document.createElement("div")
            divParrafos.appendChild(userExp)
            divParrafos.appendChild(titleExp)
            let divBotones = document.createElement("div")
            divBotones.classList.add("divBotones")
            divBotones.appendChild(divCorazon)
            divUltimo.appendChild(divParrafos)
            divUltimo.appendChild(divBotones)
            bodyExpandir.appendChild(divUltimo)
            descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
            descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

            /*funionalidad de los botones*/

            async function downloadGif (persistFav){
              let a = document.createElement("a")
              let resp = await fetch (persistFav.img)
              let file = await resp.blob()
      
              a.download = persistFav.title + ".gif"
              a.href = window.URL.createObjectURL(file)
              a.click()
              a.remove()
            }
      
            const downloadGifCallBack = () => {
              downloadGif (persistFav)
            }
      
            descargarExp.addEventListener("click", downloadGifCallBack)

            divBotones.appendChild(descargarExp)
            console.log(persistFav)
            /*mostrar gifs en favoritos*/

            const isExist = favs.filter(fav => fav.id === persistFav.id)
            var eliminar = persistFav.id
        
            console.log(isExist)
            if (isExist.length > 0){
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
              divCorazon.appendChild(corazonUndido)
              corazonUndido.classList.add("corazonUndidoExp")
              corazonUndido.style.display="block"
              corazonUndido.classList.remove("corazonUndidoTrend")
              corazonUndido.setAttribute("id","corazonUndido_Exp")
              corazonUndido.addEventListener("click", () =>{
                
                favs.splice(getIndice(eliminar),1)
                function getIndice(eliminar){
                  var indice = -1
                  favs.filter(function(dato,i){
                    if(dato.id===eliminar){
                      indice=i
                    }
                  })
                  return indice
                }
                window-localStorage.setItem("favorites", JSON.stringify(favs)) 
              })
            }else{
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              corazonExp.addEventListener("click", e => {
                corazonUndido.style.display="block"
                corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
                divCorazon.appendChild(corazonUndido)
                corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonUndido.addEventListener("click", () =>{
                  corazonExp.setAttribute("src","imagenes/icon-fav.svg")
                  corazonUndido.style.display="none"
                  corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                  corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
                  favs.splice(getIndice(eliminar),1)
                  function getIndice(eliminar){
                    var indice = -1
                    favs.filter(function(dato,i){
                      if(dato.id===eliminar){
                        indice=i
                      }
                    })
                    return indice
                  }
                  window-localStorage.setItem("favorites", JSON.stringify(favs)) 
                })
                addFav(persistFav)
              })
            }


          /*modo nocturno*/
          if (modoNocturno===true){
            userExp.classList.add("userExp-nocturno")
            titleExp.classList.add("titleExp-nocturno")
            userExp.classList.remove("userExp")
            titleExp.classList.remove("titleExp")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
            sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
            equis.setAttribute("src", "imagenes/close-modo-noct.svg")
          }else{
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            userExp.classList.remove("userExp-nocturno")
            titleExp.classList.remove("titleExp-nocturno")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            equis.setAttribute("src", "imagenes/close.svg")
            }
            

            /*cerrar gif expandido*/

            equis.addEventListener("click", e => {
              document.getElementById("todo").style.display = "block"
              document.getElementById("expandir").innerHTML = ""
          })
      })
      
      expandir.addEventListener("click" , () => {
        corazonUndido.classList.remove("corazonUndidoFav")
        corazonUndido.classList.remove("corazonUndido")
            corazonUndido.classList.add("corazonUndidoExp")
            let bodyExpandir = document.getElementById("expandir")
            document.getElementById("todo").style.display = "none"
            let equis = document.createElement("img")
            let gifExp = document.createElement("img")
            let containerExpandir = document.createElement("div")
            let sliderExpIzq = document.createElement("img")
            let divGifExp = document.createElement("div")
            let sliderExpDer = document.createElement("img")
            let divCorazon = document.createElement("div")
            let corazonExp = document.createElement("img")
            let descargarExp = document.createElement("img")
            let userExp = document.createElement("p")
            let titleExp = document.createElement("p")
            let divUltimo = document.createElement("div")
            divCorazon.classList.add("divCorazon")
            divCorazon.appendChild(corazonExp)
            divUltimo.classList.add("divUltimo")
            equis.classList.add("equisExp")
            gifExp.classList.add("gifExp")
            containerExpandir.classList.add("containerExpandir")
            sliderExpIzq.classList.add("sliderExpIzq")
            divGifExp.classList.add("divGifExp")
            sliderExpDer.classList.add("sliderExpDer")
            corazonExp.classList.add("corazonExp")
            descargarExp.classList.add("descargarExp")
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            gifExp.setAttribute("src",persistFav.img)
            titleExp.textContent = persistFav.title
            userExp.textContent = persistFav.user
            equis.setAttribute("src", "imagenes/close.svg")
            corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
            descargarExp.setAttribute("src", "imagenes/icon-download.svg")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            bodyExpandir.appendChild(equis)
            bodyExpandir.appendChild(containerExpandir)
            containerExpandir.appendChild(sliderExpIzq)
            containerExpandir.appendChild(divGifExp)
            divGifExp.appendChild(gifExp)
            containerExpandir.appendChild(sliderExpDer)
            let divParrafos = document.createElement("div")
            divParrafos.appendChild(userExp)
            divParrafos.appendChild(titleExp)
            let divBotones = document.createElement("div")
            divBotones.classList.add("divBotones")
            divBotones.appendChild(divCorazon)
            divUltimo.appendChild(divParrafos)
            divUltimo.appendChild(divBotones)
            bodyExpandir.appendChild(divUltimo)
            descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
            descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

            /*funionalidad de los botones*/
            async function downloadGif (persistFav){
              let a = document.createElement("a")
              let resp = await fetch (persistFav.img)
              let file = await resp.blob()
      
              a.download = persistFav.title + ".gif"
              a.href = window.URL.createObjectURL(file)
              a.click()
              a.remove()
            }
      
            const downloadGifCallBack = () => {
              downloadGif (persistFav)
            }
      
            descargarExp.addEventListener("click", downloadGifCallBack)

            divBotones.appendChild(descargarExp)
            /*mostrar gifs en favoritos*/

            const isExist = favs.filter(fav => fav.id === persistFav.id)
            var eliminar = persistFav.id
        
            console.log(isExist)
            if (isExist.length > 0){
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
              divCorazon.appendChild(corazonUndido)
              corazonUndido.classList.add("corazonUndidoExp")
              corazonUndido.style.display="block"
              corazonUndido.classList.remove("corazonUndidoTrend")
              corazonUndido.setAttribute("id","corazonUndido_Exp")
              corazonUndido.addEventListener("click", () =>{
                
                favs.splice(getIndice(eliminar),1)
                function getIndice(eliminar){
                  var indice = -1
                  favs.filter(function(dato,i){
                    if(dato.id===eliminar){
                      indice=i
                    }
                  })
                  return indice
                }
                window-localStorage.setItem("favorites", JSON.stringify(favs)) 
              })
            }else{
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              corazonExp.addEventListener("click", e => {
                corazonUndido.style.display="block"
                corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
                divCorazon.appendChild(corazonUndido)
                corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonUndido.addEventListener("click", () =>{
                  corazonExp.setAttribute("src","imagenes/icon-fav.svg")
                  corazonUndido.style.display="none"
                  corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                  corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
                  favs.splice(getIndice(eliminar),1)
                  function getIndice(eliminar){
                    var indice = -1
                    favs.filter(function(dato,i){
                      if(dato.id===eliminar){
                        indice=i
                      }
                    })
                    return indice
                  }
                  window-localStorage.setItem("favorites", JSON.stringify(favs)) 
                })
                addFav(persistFav)
              })
            }


          /*modo nocturno*/
          if (modoNocturno===true){
            userExp.classList.add("userExp-nocturno")
            titleExp.classList.add("titleExp-nocturno")
            userExp.classList.remove("userExp")
            titleExp.classList.remove("titleExp")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
            sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
            equis.setAttribute("src", "imagenes/close-modo-noct.svg")
          }else{
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            userExp.classList.remove("userExp-nocturno")
            titleExp.classList.remove("titleExp-nocturno")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            equis.setAttribute("src", "imagenes/close.svg")
            }
            

            /*cerrar gif expandido*/

            equis.addEventListener("click", e => {
              document.getElementById("todo").style.display = "block"
              document.getElementById("expandir").innerHTML = ""
          })
      })


        if (i == 11){
            break;
        } 
        i++;
    }


    while(i < persistFavs.length) {
      let persistFav = persistFavs[i]
      const div = document.createElement("div")
      const gif = document.createElement("img")
      let corazonUndido = document.createElement("img")
      let divCorazon = document.createElement("div")
      let divHover = document.createElement("div")
      let titleBuscarGif = document.createElement("p")
      let userBuscarGif = document.createElement("p")
      let corazon = document.createElement("img")
      let expandir = document.createElement("img")
      let descargar = document.createElement("img")
      corazonUndido.classList.add("corazonUndidoFav")
      corazonUndido.setAttribute("src","imagenes/icon-fav-active.svg")
      div.classList.add("divGifBuscar")
      divHover.classList.add("hoverGifsBuscar")
      corazon.classList.add("btnHoverBuscar")
      expandir.classList.add("btnHoverBuscar")
      descargar.classList.add("btnHoverBuscar")
      corazon.setAttribute("src" ,"imagenes/icon-fav-hover.svg")
      expandir.setAttribute("src","imagenes/icon-max-normal.svg")
      descargar.setAttribute("src","imagenes/icon-download.svg")
      divCorazon.appendChild(corazonUndido)
      divCorazon.appendChild(corazon)
      corazon.setAttribute("id","corazonBusqueda")
      userBuscarGif.textContent = persistFav.user
      titleBuscarGif.textContent = persistFav.title
      gif.classList.add("gifFavorito")
      userBuscarGif.classList.add("userBuscarGif")
      titleBuscarGif.classList.add("titleBuscarGif")
      divHover.appendChild(divCorazon)
      divHover.appendChild(expandir)
      divHover.appendChild(descargar)
      divHover.appendChild(userBuscarGif)
      divHover.appendChild(titleBuscarGif)
      div.appendChild(gif)
      div.appendChild(divHover) 
      gif.setAttribute("src", persistFav.img)
      document.getElementById("boxFavoritos2").appendChild(div)
      corazonUndido.addEventListener("click", () =>{
        var eliminar = persistFav.id   
        favs.splice(getIndice(eliminar),1)
        function getIndice(eliminar){
          var indice = -1
          favs.filter(function(dato,i){
            if(dato.id===eliminar){
              indice=i
            }
          })
          return indice
        }
        window-localStorage.setItem("favorites", JSON.stringify(favs)) 
      })

      async function downloadGif (persistFav){
        let a = document.createElement("a")
        let resp = await fetch (persistFav.img)
        let file = await resp.blob()

        a.download = persistFav.title + ".gif"
        a.href = window.URL.createObjectURL(file)
        a.click()
        a.remove()
      }

      const downloadGifCallBack = () => {
        downloadGif (persistFav)
      }

      descargar.addEventListener("click", downloadGifCallBack)


      descargar.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
      descargar.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
      expandir.addEventListener("mouseover", () => {expandir.src="imagenes/icon-max-hover.svg"})
      expandir.addEventListener("mouseout", () => {expandir.src="imagenes/icon-max-normal.svg"})

      gif.addEventListener("click" , () => {
        corazonUndido.classList.remove("corazonUndidoFav")
        corazonUndido.classList.remove("corazonUndido")
            corazonUndido.classList.add("corazonUndidoExp")
            let bodyExpandir = document.getElementById("expandir")
            document.getElementById("todo").style.display = "none"
            let equis = document.createElement("img")
            let gifExp = document.createElement("img")
            let containerExpandir = document.createElement("div")
            let sliderExpIzq = document.createElement("img")
            let divGifExp = document.createElement("div")
            let sliderExpDer = document.createElement("img")
            let divCorazon = document.createElement("div")
            let corazonExp = document.createElement("img")
            let descargarExp = document.createElement("img")
            let userExp = document.createElement("p")
            let titleExp = document.createElement("p")
            let divUltimo = document.createElement("div")
            divCorazon.classList.add("divCorazon")
            divCorazon.appendChild(corazonExp)
            divUltimo.classList.add("divUltimo")
            equis.classList.add("equisExp")
            gifExp.classList.add("gifExp")
            containerExpandir.classList.add("containerExpandir")
            sliderExpIzq.classList.add("sliderExpIzq")
            divGifExp.classList.add("divGifExp")
            sliderExpDer.classList.add("sliderExpDer")
            corazonExp.classList.add("corazonExp")
            descargarExp.classList.add("descargarExp")
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            gifExp.setAttribute("src",persistFav.img)
            titleExp.textContent = persistFav.title
            userExp.textContent = persistFav.user
            equis.setAttribute("src", "imagenes/close.svg")
            corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
            descargarExp.setAttribute("src", "imagenes/icon-download.svg")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            bodyExpandir.appendChild(equis)
            bodyExpandir.appendChild(containerExpandir)
            containerExpandir.appendChild(sliderExpIzq)
            containerExpandir.appendChild(divGifExp)
            divGifExp.appendChild(gifExp)
            containerExpandir.appendChild(sliderExpDer)
            let divParrafos = document.createElement("div")
            divParrafos.appendChild(userExp)
            divParrafos.appendChild(titleExp)
            let divBotones = document.createElement("div")
            divBotones.classList.add("divBotones")
            divBotones.appendChild(divCorazon)
            divUltimo.appendChild(divParrafos)
            divUltimo.appendChild(divBotones)
            bodyExpandir.appendChild(divUltimo)
            descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
            descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

            /*funionalidad de los botones*/

            async function downloadGif (persistFav){
              let a = document.createElement("a")
              let resp = await fetch (persistFav.img)
              let file = await resp.blob()
      
              a.download = persistFav.title + ".gif"
              a.href = window.URL.createObjectURL(file)
              a.click()
              a.remove()
            }
      
            const downloadGifCallBack = () => {
              downloadGif (persistFav)
            }
      
            descargarExp.addEventListener("click", downloadGifCallBack)
      
            divBotones.appendChild(descargarExp)
            /*mostrar gifs en favoritos*/

            const isExist = favs.filter(fav => fav.id === persistFav.id)
            var eliminar = persistFav.id
        
            console.log(isExist)
            if (isExist.length > 0){
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
              divCorazon.appendChild(corazonUndido)
              corazonUndido.classList.add("corazonUndidoExp")
              corazonUndido.style.display="block"
              corazonUndido.classList.remove("corazonUndidoTrend")
              corazonUndido.setAttribute("id","corazonUndido_Exp")
              corazonUndido.addEventListener("click", () =>{
                
                favs.splice(getIndice(eliminar),1)
                function getIndice(eliminar){
                  var indice = -1
                  favs.filter(function(dato,i){
                    if(dato.id===eliminar){
                      indice=i
                    }
                  })
                  return indice
                }
                window-localStorage.setItem("favorites", JSON.stringify(favs)) 
              })
            }else{
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              corazonExp.addEventListener("click", e => {
                corazonUndido.style.display="block"
                corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
                divCorazon.appendChild(corazonUndido)
                corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonUndido.addEventListener("click", () =>{
                  corazonExp.setAttribute("src","imagenes/icon-fav.svg")
                  corazonUndido.style.display="none"
                  corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                  corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
                  favs.splice(getIndice(eliminar),1)
                  function getIndice(eliminar){
                    var indice = -1
                    favs.filter(function(dato,i){
                      if(dato.id===eliminar){
                        indice=i
                      }
                    })
                    return indice
                  }
                  window-localStorage.setItem("favorites", JSON.stringify(favs)) 
                })
                addFav(persistFav)
              })
            }


          /*modo nocturno*/
          if (modoNocturno===true){
            userExp.classList.add("userExp-nocturno")
            titleExp.classList.add("titleExp-nocturno")
            userExp.classList.remove("userExp")
            titleExp.classList.remove("titleExp")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
            sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
            equis.setAttribute("src", "imagenes/close-modo-noct.svg")
          }else{
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            userExp.classList.remove("userExp-nocturno")
            titleExp.classList.remove("titleExp-nocturno")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            equis.setAttribute("src", "imagenes/close.svg")
            }
            

            /*cerrar gif expandido*/

            equis.addEventListener("click", e => {
              document.getElementById("todo").style.display = "block"
              document.getElementById("expandir").innerHTML = ""
          })
      })
      
      expandir.addEventListener("click" , () => {
        corazonUndido.classList.remove("corazonUndidoFav")
        corazonUndido.classList.remove("corazonUndido")
            corazonUndido.classList.add("corazonUndidoExp")
            let bodyExpandir = document.getElementById("expandir")
            document.getElementById("todo").style.display = "none"
            let equis = document.createElement("img")
            let gifExp = document.createElement("img")
            let containerExpandir = document.createElement("div")
            let sliderExpIzq = document.createElement("img")
            let divGifExp = document.createElement("div")
            let sliderExpDer = document.createElement("img")
            let divCorazon = document.createElement("div")
            let corazonExp = document.createElement("img")
            let descargarExp = document.createElement("img")
            let userExp = document.createElement("p")
            let titleExp = document.createElement("p")
            let divUltimo = document.createElement("div")
            divCorazon.classList.add("divCorazon")
            divCorazon.appendChild(corazonExp)
            divUltimo.classList.add("divUltimo")
            equis.classList.add("equisExp")
            gifExp.classList.add("gifExp")
            containerExpandir.classList.add("containerExpandir")
            sliderExpIzq.classList.add("sliderExpIzq")
            divGifExp.classList.add("divGifExp")
            sliderExpDer.classList.add("sliderExpDer")
            corazonExp.classList.add("corazonExp")
            descargarExp.classList.add("descargarExp")
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            gifExp.setAttribute("src",persistFav.img)
            titleExp.textContent = persistFav.title
            userExp.textContent = persistFav.user
            equis.setAttribute("src", "imagenes/close.svg")
            corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
            descargarExp.setAttribute("src", "imagenes/icon-download.svg")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            bodyExpandir.appendChild(equis)
            bodyExpandir.appendChild(containerExpandir)
            containerExpandir.appendChild(sliderExpIzq)
            containerExpandir.appendChild(divGifExp)
            divGifExp.appendChild(gifExp)
            containerExpandir.appendChild(sliderExpDer)
            let divParrafos = document.createElement("div")
            divParrafos.appendChild(userExp)
            divParrafos.appendChild(titleExp)
            let divBotones = document.createElement("div")
            divBotones.classList.add("divBotones")
            divBotones.appendChild(divCorazon)
            divUltimo.appendChild(divParrafos)
            divUltimo.appendChild(divBotones)
            bodyExpandir.appendChild(divUltimo)
            descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
            descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

            /*funionalidad de los botones*/

            async function downloadGif (persistFav){
              let a = document.createElement("a")
              let resp = await fetch (persistFav.img)
              let file = await resp.blob()
      
              a.download = persistFav.title + ".gif"
              a.href = window.URL.createObjectURL(file)
              a.click()
              a.remove()
            }
      
            const downloadGifCallBack = () => {
              downloadGif (persistFav)
            }
      
            descargarExp.addEventListener("click", downloadGifCallBack)
      
            divBotones.appendChild(descargarExp)

            /*mostrar gifs en favoritos*/

            const isExist = favs.filter(fav => fav.id === persistFav.id)
            var eliminar = persistFav.id
        
            console.log(isExist)
            if (isExist.length > 0){
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
              divCorazon.appendChild(corazonUndido)
              corazonUndido.classList.add("corazonUndidoExp")
              corazonUndido.style.display="block"
              corazonUndido.classList.remove("corazonUndidoTrend")
              corazonUndido.setAttribute("id","corazonUndido_Exp")
              corazonUndido.addEventListener("click", () =>{
                
                favs.splice(getIndice(eliminar),1)
                function getIndice(eliminar){
                  var indice = -1
                  favs.filter(function(dato,i){
                    if(dato.id===eliminar){
                      indice=i
                    }
                  })
                  return indice
                }
                window-localStorage.setItem("favorites", JSON.stringify(favs)) 
              })
            }else{
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              corazonExp.addEventListener("click", e => {
                corazonUndido.style.display="block"
                corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
                divCorazon.appendChild(corazonUndido)
                corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonUndido.addEventListener("click", () =>{
                  corazonExp.setAttribute("src","imagenes/icon-fav.svg")
                  corazonUndido.style.display="none"
                  corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                  corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
                  favs.splice(getIndice(eliminar),1)
                  function getIndice(eliminar){
                    var indice = -1
                    favs.filter(function(dato,i){
                      if(dato.id===eliminar){
                        indice=i
                      }
                    })
                    return indice
                  }
                  window-localStorage.setItem("favorites", JSON.stringify(favs)) 
                })
                addFav(persistFav)
              })
            }


          /*modo nocturno*/
          if (modoNocturno===true){
            userExp.classList.add("userExp-nocturno")
            titleExp.classList.add("titleExp-nocturno")
            userExp.classList.remove("userExp")
            titleExp.classList.remove("titleExp")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
            sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
            equis.setAttribute("src", "imagenes/close-modo-noct.svg")
          }else{
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            userExp.classList.remove("userExp-nocturno")
            titleExp.classList.remove("titleExp-nocturno")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            equis.setAttribute("src", "imagenes/close.svg")
            }
            

            /*cerrar gif expandido*/

            equis.addEventListener("click", e => {
              document.getElementById("todo").style.display = "block"
              document.getElementById("expandir").innerHTML = ""
          })
      })


        if (i == 22){
            break;
        } 
        i++;
    }


    while(i < persistFavs.length) {
      let persistFav = persistFavs[i]
      const div = document.createElement("div")
      const gif = document.createElement("img")
      let corazonUndido = document.createElement("img")
      let divCorazon = document.createElement("div")
      let divHover = document.createElement("div")
      let titleBuscarGif = document.createElement("p")
      let userBuscarGif = document.createElement("p")
      let corazon = document.createElement("img")
      let expandir = document.createElement("img")
      let descargar = document.createElement("img")
      corazonUndido.classList.add("corazonUndidoFav")
      corazonUndido.setAttribute("src","imagenes/icon-fav-active.svg")
      div.classList.add("divGifBuscar")
      divHover.classList.add("hoverGifsBuscar")
      corazon.classList.add("btnHoverBuscar")
      expandir.classList.add("btnHoverBuscar")
      descargar.classList.add("btnHoverBuscar")
      corazon.setAttribute("src" ,"imagenes/icon-fav-hover.svg")
      expandir.setAttribute("src","imagenes/icon-max-normal.svg")
      descargar.setAttribute("src","imagenes/icon-download.svg")
      divCorazon.appendChild(corazonUndido)
      divCorazon.appendChild(corazon)
      corazon.setAttribute("id","corazonBusqueda")
      userBuscarGif.textContent = persistFav.user
      titleBuscarGif.textContent = persistFav.title
      gif.classList.add("gifFavorito")
      userBuscarGif.classList.add("userBuscarGif")
      titleBuscarGif.classList.add("titleBuscarGif")
      divHover.appendChild(divCorazon)
      divHover.appendChild(expandir)
      divHover.appendChild(descargar)
      divHover.appendChild(userBuscarGif)
      divHover.appendChild(titleBuscarGif)
      div.appendChild(gif)
      div.appendChild(divHover) 
      gif.setAttribute("src", persistFav.img)
      document.getElementById("boxFavoritos3").appendChild(div)
      corazonUndido.addEventListener("click", () =>{
        var eliminar = persistFav.id   
        favs.splice(getIndice(eliminar),1)
        function getIndice(eliminar){
          var indice = -1
          favs.filter(function(dato,i){
            if(dato.id===eliminar){
              indice=i
            }
          })
          return indice
        }
        window-localStorage.setItem("favorites", JSON.stringify(favs)) 
      })

      descargar.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
      descargar.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
      expandir.addEventListener("mouseover", () => {expandir.src="imagenes/icon-max-hover.svg"})
      expandir.addEventListener("mouseout", () => {expandir.src="imagenes/icon-max-normal.svg"})

      async function downloadGif (persistFav){
        let a = document.createElement("a")
        let resp = await fetch (persistFav.img)
        let file = await resp.blob()

        a.download = persistFav.title + ".gif"
        a.href = window.URL.createObjectURL(file)
        a.click()
        a.remove()
      }

      const downloadGifCallBack = () => {
        downloadGif (persistFav)
      }

      descargar.addEventListener("click", downloadGifCallBack)

      gif.addEventListener("click" , () => {
        corazonUndido.classList.remove("corazonUndidoFav")
        corazonUndido.classList.remove("corazonUndido")
            corazonUndido.classList.add("corazonUndidoExp")
            let bodyExpandir = document.getElementById("expandir")
            document.getElementById("todo").style.display = "none"
            let equis = document.createElement("img")
            let gifExp = document.createElement("img")
            let containerExpandir = document.createElement("div")
            let sliderExpIzq = document.createElement("img")
            let divGifExp = document.createElement("div")
            let sliderExpDer = document.createElement("img")
            let divCorazon = document.createElement("div")
            let corazonExp = document.createElement("img")
            let descargarExp = document.createElement("img")
            let userExp = document.createElement("p")
            let titleExp = document.createElement("p")
            let divUltimo = document.createElement("div")
            divCorazon.classList.add("divCorazon")
            divCorazon.appendChild(corazonExp)
            divUltimo.classList.add("divUltimo")
            equis.classList.add("equisExp")
            gifExp.classList.add("gifExp")
            containerExpandir.classList.add("containerExpandir")
            sliderExpIzq.classList.add("sliderExpIzq")
            divGifExp.classList.add("divGifExp")
            sliderExpDer.classList.add("sliderExpDer")
            corazonExp.classList.add("corazonExp")
            descargarExp.classList.add("descargarExp")
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            gifExp.setAttribute("src",persistFav.img)
            titleExp.textContent = persistFav.title
            userExp.textContent = persistFav.user
            equis.setAttribute("src", "imagenes/close.svg")
            corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
            descargarExp.setAttribute("src", "imagenes/icon-download.svg")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            bodyExpandir.appendChild(equis)
            bodyExpandir.appendChild(containerExpandir)
            containerExpandir.appendChild(sliderExpIzq)
            containerExpandir.appendChild(divGifExp)
            divGifExp.appendChild(gifExp)
            containerExpandir.appendChild(sliderExpDer)
            let divParrafos = document.createElement("div")
            divParrafos.appendChild(userExp)
            divParrafos.appendChild(titleExp)
            let divBotones = document.createElement("div")
            divBotones.classList.add("divBotones")
            divBotones.appendChild(divCorazon)
            divUltimo.appendChild(divParrafos)
            divUltimo.appendChild(divBotones)
            bodyExpandir.appendChild(divUltimo)
            descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
            descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

            /*funionalidad de los botones*/

            async function downloadGif (persistFav){
              let a = document.createElement("a")
              let resp = await fetch (persistFav.img)
              let file = await resp.blob()
      
              a.download = persistFav.title + ".gif"
              a.href = window.URL.createObjectURL(file)
              a.click()
              a.remove()
            }
      
            const downloadGifCallBack = () => {
              downloadGif (persistFav)
            }
      
            descargarExp.addEventListener("click", downloadGifCallBack)
      
            divBotones.appendChild(descargarExp)

            /*mostrar gifs en favoritos*/

            const isExist = favs.filter(fav => fav.id === persistFav.id)
            var eliminar = persistFav.id
        
            console.log(isExist)
            if (isExist.length > 0){
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
              divCorazon.appendChild(corazonUndido)
              corazonUndido.classList.add("corazonUndidoExp")
              corazonUndido.style.display="block"
              corazonUndido.classList.remove("corazonUndidoTrend")
              corazonUndido.setAttribute("id","corazonUndido_Exp")
              corazonUndido.addEventListener("click", () =>{
                
                favs.splice(getIndice(eliminar),1)
                function getIndice(eliminar){
                  var indice = -1
                  favs.filter(function(dato,i){
                    if(dato.id===eliminar){
                      indice=i
                    }
                  })
                  return indice
                }
                window-localStorage.setItem("favorites", JSON.stringify(favs)) 
              })
            }else{
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              corazonExp.addEventListener("click", e => {
                corazonUndido.style.display="block"
                corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
                divCorazon.appendChild(corazonUndido)
                corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonUndido.addEventListener("click", () =>{
                  corazonExp.setAttribute("src","imagenes/icon-fav.svg")
                  corazonUndido.style.display="none"
                  corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                  corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
                  favs.splice(getIndice(eliminar),1)
                  function getIndice(eliminar){
                    var indice = -1
                    favs.filter(function(dato,i){
                      if(dato.id===eliminar){
                        indice=i
                      }
                    })
                    return indice
                  }
                  window-localStorage.setItem("favorites", JSON.stringify(favs)) 
                })
                addFav(persistFav)
              })
            }


          /*modo nocturno*/
          if (modoNocturno===true){
            userExp.classList.add("userExp-nocturno")
            titleExp.classList.add("titleExp-nocturno")
            userExp.classList.remove("userExp")
            titleExp.classList.remove("titleExp")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
            sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
            equis.setAttribute("src", "imagenes/close-modo-noct.svg")
          }else{
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            userExp.classList.remove("userExp-nocturno")
            titleExp.classList.remove("titleExp-nocturno")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            equis.setAttribute("src", "imagenes/close.svg")
            }
            

            /*cerrar gif expandido*/

            equis.addEventListener("click", e => {
              document.getElementById("todo").style.display = "block"
              document.getElementById("expandir").innerHTML = ""
          })
      })
      
      expandir.addEventListener("click" , () => {
        corazonUndido.classList.remove("corazonUndidoFav")
        corazonUndido.classList.remove("corazonUndido")
            corazonUndido.classList.add("corazonUndidoExp")
            let bodyExpandir = document.getElementById("expandir")
            document.getElementById("todo").style.display = "none"
            let equis = document.createElement("img")
            let gifExp = document.createElement("img")
            let containerExpandir = document.createElement("div")
            let sliderExpIzq = document.createElement("img")
            let divGifExp = document.createElement("div")
            let sliderExpDer = document.createElement("img")
            let divCorazon = document.createElement("div")
            let corazonExp = document.createElement("img")
            let descargarExp = document.createElement("img")
            let userExp = document.createElement("p")
            let titleExp = document.createElement("p")
            let divUltimo = document.createElement("div")
            divCorazon.classList.add("divCorazon")
            divCorazon.appendChild(corazonExp)
            divUltimo.classList.add("divUltimo")
            equis.classList.add("equisExp")
            gifExp.classList.add("gifExp")
            containerExpandir.classList.add("containerExpandir")
            sliderExpIzq.classList.add("sliderExpIzq")
            divGifExp.classList.add("divGifExp")
            sliderExpDer.classList.add("sliderExpDer")
            corazonExp.classList.add("corazonExp")
            descargarExp.classList.add("descargarExp")
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            gifExp.setAttribute("src",persistFav.img)
            titleExp.textContent = persistFav.title
            userExp.textContent = persistFav.user
            equis.setAttribute("src", "imagenes/close.svg")
            corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
            descargarExp.setAttribute("src", "imagenes/icon-download.svg")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            bodyExpandir.appendChild(equis)
            bodyExpandir.appendChild(containerExpandir)
            containerExpandir.appendChild(sliderExpIzq)
            containerExpandir.appendChild(divGifExp)
            divGifExp.appendChild(gifExp)
            containerExpandir.appendChild(sliderExpDer)
            let divParrafos = document.createElement("div")
            divParrafos.appendChild(userExp)
            divParrafos.appendChild(titleExp)
            let divBotones = document.createElement("div")
            divBotones.classList.add("divBotones")
            divBotones.appendChild(divCorazon)
            divUltimo.appendChild(divParrafos)
            divUltimo.appendChild(divBotones)
            bodyExpandir.appendChild(divUltimo)
            descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
            descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

            /*funionalidad de los botones*/

            async function downloadGif (persistFav){
              let a = document.createElement("a")
              let resp = await fetch (persistFav.img)
              let file = await resp.blob()
      
              a.download = persistFav.title + ".gif"
              a.href = window.URL.createObjectURL(file)
              a.click()
              a.remove()
            }
      
            const downloadGifCallBack = () => {
              downloadGif (persistFav)
            }
      
            descargarExp.addEventListener("click", downloadGifCallBack)
      
            divBotones.appendChild(descargarExp)

            /*mostrar gifs en favoritos*/

            const isExist = favs.filter(fav => fav.id === persistFav.id)
            var eliminar = persistFav.id
        
            console.log(isExist)
            if (isExist.length > 0){
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
              divCorazon.appendChild(corazonUndido)
              corazonUndido.classList.add("corazonUndidoExp")
              corazonUndido.style.display="block"
              corazonUndido.classList.remove("corazonUndidoTrend")
              corazonUndido.setAttribute("id","corazonUndido_Exp")
              corazonUndido.addEventListener("click", () =>{
                
                favs.splice(getIndice(eliminar),1)
                function getIndice(eliminar){
                  var indice = -1
                  favs.filter(function(dato,i){
                    if(dato.id===eliminar){
                      indice=i
                    }
                  })
                  return indice
                }
                window-localStorage.setItem("favorites", JSON.stringify(favs)) 
              })
            }else{
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              corazonExp.addEventListener("click", e => {
                corazonUndido.style.display="block"
                corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
                divCorazon.appendChild(corazonUndido)
                corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonUndido.addEventListener("click", () =>{
                  corazonExp.setAttribute("src","imagenes/icon-fav.svg")
                  corazonUndido.style.display="none"
                  corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                  corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
                  favs.splice(getIndice(eliminar),1)
                  function getIndice(eliminar){
                    var indice = -1
                    favs.filter(function(dato,i){
                      if(dato.id===eliminar){
                        indice=i
                      }
                    })
                    return indice
                  }
                  window-localStorage.setItem("favorites", JSON.stringify(favs)) 
                })
                addFav(persistFav)
              })
            }


          /*modo nocturno*/
          if (modoNocturno===true){
            userExp.classList.add("userExp-nocturno")
            titleExp.classList.add("titleExp-nocturno")
            userExp.classList.remove("userExp")
            titleExp.classList.remove("titleExp")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
            sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
            equis.setAttribute("src", "imagenes/close-modo-noct.svg")
          }else{
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            userExp.classList.remove("userExp-nocturno")
            titleExp.classList.remove("titleExp-nocturno")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            equis.setAttribute("src", "imagenes/close.svg")
            }
            

            /*cerrar gif expandido*/

            equis.addEventListener("click", e => {
              document.getElementById("todo").style.display = "block"
              document.getElementById("expandir").innerHTML = ""
          })
      })


        if (i == 33){
            break;
        } 
        i++;
    }

    while(i < persistFavs.length) {
      let persistFav = persistFavs[i]
      const div = document.createElement("div")
      const gif = document.createElement("img")
      let corazonUndido = document.createElement("img")
      let divCorazon = document.createElement("div")
      let divHover = document.createElement("div")
      let titleBuscarGif = document.createElement("p")
      let userBuscarGif = document.createElement("p")
      let corazon = document.createElement("img")
      let expandir = document.createElement("img")
      let descargar = document.createElement("img")
      corazonUndido.classList.add("corazonUndidoFav")
      corazonUndido.setAttribute("src","imagenes/icon-fav-active.svg")
      div.classList.add("divGifBuscar")
      divHover.classList.add("hoverGifsBuscar")
      corazon.classList.add("btnHoverBuscar")
      expandir.classList.add("btnHoverBuscar")
      descargar.classList.add("btnHoverBuscar")
      corazon.setAttribute("src" ,"imagenes/icon-fav-hover.svg")
      expandir.setAttribute("src","imagenes/icon-max-normal.svg")
      descargar.setAttribute("src","imagenes/icon-download.svg")
      divCorazon.appendChild(corazonUndido)
      divCorazon.appendChild(corazon)
      corazon.setAttribute("id","corazonBusqueda")
      userBuscarGif.textContent = persistFav.user
      titleBuscarGif.textContent = persistFav.title
      gif.classList.add("gifFavorito")
      userBuscarGif.classList.add("userBuscarGif")
      titleBuscarGif.classList.add("titleBuscarGif")
      divHover.appendChild(divCorazon)
      divHover.appendChild(expandir)
      divHover.appendChild(descargar)
      divHover.appendChild(userBuscarGif)
      divHover.appendChild(titleBuscarGif)
      div.appendChild(gif)
      div.appendChild(divHover) 
      gif.setAttribute("src", persistFav.img)
      document.getElementById("boxFavoritos4").appendChild(div)
      corazonUndido.addEventListener("click", () =>{
        var eliminar = persistFav.id   
        favs.splice(getIndice(eliminar),1)
        function getIndice(eliminar){
          var indice = -1
          favs.filter(function(dato,i){
            if(dato.id===eliminar){
              indice=i
            }
          })
          return indice
        }
        window-localStorage.setItem("favorites", JSON.stringify(favs)) 
      })

      descargar.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
      descargar.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
      expandir.addEventListener("mouseover", () => {expandir.src="imagenes/icon-max-hover.svg"})
      expandir.addEventListener("mouseout", () => {expandir.src="imagenes/icon-max-normal.svg"})

      async function downloadGif (persistFav){
        let a = document.createElement("a")
        let resp = await fetch (persistFav.img)
        let file = await resp.blob()

        a.download = persistFav.title + ".gif"
        a.href = window.URL.createObjectURL(file)
        a.click()
        a.remove()
      }

      const downloadGifCallBack = () => {
        downloadGif (persistFav)
      }

      descargar.addEventListener("click", downloadGifCallBack)


      gif.addEventListener("click" , () => {
        corazonUndido.classList.remove("corazonUndidoFav")
        corazonUndido.classList.remove("corazonUndido")
            corazonUndido.classList.add("corazonUndidoExp")
            let bodyExpandir = document.getElementById("expandir")
            document.getElementById("todo").style.display = "none"
            let equis = document.createElement("img")
            let gifExp = document.createElement("img")
            let containerExpandir = document.createElement("div")
            let sliderExpIzq = document.createElement("img")
            let divGifExp = document.createElement("div")
            let sliderExpDer = document.createElement("img")
            let divCorazon = document.createElement("div")
            let corazonExp = document.createElement("img")
            let descargarExp = document.createElement("img")
            let userExp = document.createElement("p")
            let titleExp = document.createElement("p")
            let divUltimo = document.createElement("div")
            divCorazon.classList.add("divCorazon")
            divCorazon.appendChild(corazonExp)
            divUltimo.classList.add("divUltimo")
            equis.classList.add("equisExp")
            gifExp.classList.add("gifExp")
            containerExpandir.classList.add("containerExpandir")
            sliderExpIzq.classList.add("sliderExpIzq")
            divGifExp.classList.add("divGifExp")
            sliderExpDer.classList.add("sliderExpDer")
            corazonExp.classList.add("corazonExp")
            descargarExp.classList.add("descargarExp")
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            gifExp.setAttribute("src",persistFav.img)
            titleExp.textContent = persistFav.title
            userExp.textContent = persistFav.user
            equis.setAttribute("src", "imagenes/close.svg")
            corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
            descargarExp.setAttribute("src", "imagenes/icon-download.svg")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            bodyExpandir.appendChild(equis)
            bodyExpandir.appendChild(containerExpandir)
            containerExpandir.appendChild(sliderExpIzq)
            containerExpandir.appendChild(divGifExp)
            divGifExp.appendChild(gifExp)
            containerExpandir.appendChild(sliderExpDer)
            let divParrafos = document.createElement("div")
            divParrafos.appendChild(userExp)
            divParrafos.appendChild(titleExp)
            let divBotones = document.createElement("div")
            divBotones.classList.add("divBotones")
            divBotones.appendChild(divCorazon)
            divUltimo.appendChild(divParrafos)
            divUltimo.appendChild(divBotones)
            bodyExpandir.appendChild(divUltimo)
            descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
            descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

            /*funionalidad de los botones*/

            async function downloadGif (persistFav){
              let a = document.createElement("a")
              let resp = await fetch (persistFav.img)
              let file = await resp.blob()
      
              a.download = persistFav.title + ".gif"
              a.href = window.URL.createObjectURL(file)
              a.click()
              a.remove()
            }
      
            const downloadGifCallBack = () => {
              downloadGif (persistFav)
            }
      
            descargarExp.addEventListener("click", downloadGifCallBack)
      
            divBotones.appendChild(descargarExp)

            /*mostrar gifs en favoritos*/

            const isExist = favs.filter(fav => fav.id === persistFav.id)
            var eliminar = persistFav.id
        
            console.log(isExist)
            if (isExist.length > 0){
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
              divCorazon.appendChild(corazonUndido)
              corazonUndido.classList.add("corazonUndidoExp")
              corazonUndido.style.display="block"
              corazonUndido.classList.remove("corazonUndidoTrend")
              corazonUndido.setAttribute("id","corazonUndido_Exp")
              corazonUndido.addEventListener("click", () =>{
                
                favs.splice(getIndice(eliminar),1)
                function getIndice(eliminar){
                  var indice = -1
                  favs.filter(function(dato,i){
                    if(dato.id===eliminar){
                      indice=i
                    }
                  })
                  return indice
                }
                window-localStorage.setItem("favorites", JSON.stringify(favs)) 
              })
            }else{
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              corazonExp.addEventListener("click", e => {
                corazonUndido.style.display="block"
                corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
                divCorazon.appendChild(corazonUndido)
                corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonUndido.addEventListener("click", () =>{
                  corazonExp.setAttribute("src","imagenes/icon-fav.svg")
                  corazonUndido.style.display="none"
                  corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                  corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
                  favs.splice(getIndice(eliminar),1)
                  function getIndice(eliminar){
                    var indice = -1
                    favs.filter(function(dato,i){
                      if(dato.id===eliminar){
                        indice=i
                      }
                    })
                    return indice
                  }
                  window-localStorage.setItem("favorites", JSON.stringify(favs)) 
                })
                addFav(persistFav)
              })
            }


          /*modo nocturno*/
          if (modoNocturno===true){
            userExp.classList.add("userExp-nocturno")
            titleExp.classList.add("titleExp-nocturno")
            userExp.classList.remove("userExp")
            titleExp.classList.remove("titleExp")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
            sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
            equis.setAttribute("src", "imagenes/close-modo-noct.svg")
          }else{
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            userExp.classList.remove("userExp-nocturno")
            titleExp.classList.remove("titleExp-nocturno")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            equis.setAttribute("src", "imagenes/close.svg")
            }
            

            /*cerrar gif expandido*/

            equis.addEventListener("click", e => {
              document.getElementById("todo").style.display = "block"
              document.getElementById("expandir").innerHTML = ""
          })
      })
      
      expandir.addEventListener("click" , () => {
        corazonUndido.classList.remove("corazonUndidoFav")
        corazonUndido.classList.remove("corazonUndido")
            corazonUndido.classList.add("corazonUndidoExp")
            let bodyExpandir = document.getElementById("expandir")
            document.getElementById("todo").style.display = "none"
            let equis = document.createElement("img")
            let gifExp = document.createElement("img")
            let containerExpandir = document.createElement("div")
            let sliderExpIzq = document.createElement("img")
            let divGifExp = document.createElement("div")
            let sliderExpDer = document.createElement("img")
            let divCorazon = document.createElement("div")
            let corazonExp = document.createElement("img")
            let descargarExp = document.createElement("img")
            let userExp = document.createElement("p")
            let titleExp = document.createElement("p")
            let divUltimo = document.createElement("div")
            divCorazon.classList.add("divCorazon")
            divCorazon.appendChild(corazonExp)
            divUltimo.classList.add("divUltimo")
            equis.classList.add("equisExp")
            gifExp.classList.add("gifExp")
            containerExpandir.classList.add("containerExpandir")
            sliderExpIzq.classList.add("sliderExpIzq")
            divGifExp.classList.add("divGifExp")
            sliderExpDer.classList.add("sliderExpDer")
            corazonExp.classList.add("corazonExp")
            descargarExp.classList.add("descargarExp")
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            gifExp.setAttribute("src",persistFav.img)
            titleExp.textContent = persistFav.title
            userExp.textContent = persistFav.user
            equis.setAttribute("src", "imagenes/close.svg")
            corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
            descargarExp.setAttribute("src", "imagenes/icon-download.svg")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            bodyExpandir.appendChild(equis)
            bodyExpandir.appendChild(containerExpandir)
            containerExpandir.appendChild(sliderExpIzq)
            containerExpandir.appendChild(divGifExp)
            divGifExp.appendChild(gifExp)
            containerExpandir.appendChild(sliderExpDer)
            let divParrafos = document.createElement("div")
            divParrafos.appendChild(userExp)
            divParrafos.appendChild(titleExp)
            let divBotones = document.createElement("div")
            divBotones.classList.add("divBotones")
            divBotones.appendChild(divCorazon)
            divUltimo.appendChild(divParrafos)
            divUltimo.appendChild(divBotones)
            bodyExpandir.appendChild(divUltimo)
            descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
            descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

            /*funionalidad de los botones*/

            async function downloadGif (persistFav){
              let a = document.createElement("a")
              let resp = await fetch (persistFav.img)
              let file = await resp.blob()
      
              a.download = persistFav.title + ".gif"
              a.href = window.URL.createObjectURL(file)
              a.click()
              a.remove()
            }
      
            const downloadGifCallBack = () => {
              downloadGif (persistFav)
            }
      
            descargarExp.addEventListener("click", downloadGifCallBack)
      
            divBotones.appendChild(descargarExp)

            
            /*mostrar gifs en favoritos*/

            const isExist = favs.filter(fav => fav.id === persistFav.id)
            var eliminar = persistFav.id
        
            console.log(isExist)
            if (isExist.length > 0){
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
              divCorazon.appendChild(corazonUndido)
              corazonUndido.classList.add("corazonUndidoExp")
              corazonUndido.style.display="block"
              corazonUndido.classList.remove("corazonUndidoTrend")
              corazonUndido.setAttribute("id","corazonUndido_Exp")
              corazonUndido.addEventListener("click", () =>{
                
                favs.splice(getIndice(eliminar),1)
                function getIndice(eliminar){
                  var indice = -1
                  favs.filter(function(dato,i){
                    if(dato.id===eliminar){
                      indice=i
                    }
                  })
                  return indice
                }
                window-localStorage.setItem("favorites", JSON.stringify(favs)) 
              })
            }else{
              corazonUndido.classList.remove("corazonUndido")
              corazonUndido.classList.add("corazonUndidoExp")
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              corazonExp.addEventListener("click", e => {
                corazonUndido.style.display="block"
                corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
                divCorazon.appendChild(corazonUndido)
                corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                corazonUndido.addEventListener("click", () =>{
                  corazonExp.setAttribute("src","imagenes/icon-fav.svg")
                  corazonUndido.style.display="none"
                  corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
                  corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
                  favs.splice(getIndice(eliminar),1)
                  function getIndice(eliminar){
                    var indice = -1
                    favs.filter(function(dato,i){
                      if(dato.id===eliminar){
                        indice=i
                      }
                    })
                    return indice
                  }
                  window-localStorage.setItem("favorites", JSON.stringify(favs)) 
                })
                addFav(persistFav)
              })
            }


          /*modo nocturno*/
          if (modoNocturno===true){
            userExp.classList.add("userExp-nocturno")
            titleExp.classList.add("titleExp-nocturno")
            userExp.classList.remove("userExp")
            titleExp.classList.remove("titleExp")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
            sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
            equis.setAttribute("src", "imagenes/close-modo-noct.svg")
          }else{
            userExp.classList.add("userExp")
            titleExp.classList.add("titleExp")
            userExp.classList.remove("userExp-nocturno")
            titleExp.classList.remove("titleExp-nocturno")
            sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
            sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
            equis.setAttribute("src", "imagenes/close.svg")
            }
            

            /*cerrar gif expandido*/

            equis.addEventListener("click", e => {
              document.getElementById("todo").style.display = "block"
              document.getElementById("expandir").innerHTML = ""
          })
      })


        if (i == 46){
            break;
        } 
        i++;
    }
}


const botonFav = document.getElementById("btnVerMas")
const botonFav2 = document.getElementById("btnVerMas2")
const botonFav3 = document.getElementById("btnVerMas3")
const botonFav4 = document.getElementById("btnVerMas4")

botonFav.addEventListener("click" , () => {
  document.getElementById("boxFavoritos2").style.display="grid"
  document.getElementById("boxFavVacio").style.display ="none"
  botonFav.style.display="none"
  botonFav2.style.display="flex"
  botonFav2.addEventListener("click" , () => {
    document.getElementById("boxFavoritos3").style.display="grid"
    document.getElementById("boxFavVacio").style.display ="none"
    botonFav2.style.display="none"
    botonFav3.style.display="flex"
    botonFav3.addEventListener("click" ,  () => {
      document.getElementById("boxFavoritos4").style.display="grid"
      document.getElementById("boxFavVacio").style.display ="none"
      botonFav3.style.display="none"
    })
  })
})

const addFav = searchingGifs => {
  const newFav = {
    user: searchingGifs.username,
    title: searchingGifs.title,
    img: searchingGifs.images.original.url,
    id: searchingGifs.id,
    url: searchingGifs.url,
  }
  console.log(newFav)
  favs.push(newFav)
  window-localStorage.setItem("favorites", JSON.stringify(favs))
  
}


const showGifs = gifs => {

  /*busqueda sin resultado*/

  if (gifs.length < 1){
    resultados.innerHTML = ""
    document.getElementById("lineaGris").style.display = "none"
    document.getElementById("sinResultados").style.display ="block"
    let titulo = document.createElement("p")
    titulo.textContent = inputSearch.value
    containerTituloSinResultados.appendChild(titulo)
    return;
  }

  /*busqueda con resultado*/

  const nueva_grilla=document.getElementById("nueva-grilla")
  document.getElementById("sinResultados").style.display ="none"
  document.getElementById("containerTrending").style.display="block"
  for (let i = 0; i < 12; i++){
    const searchingGifs = gifs[i]
    let gif = document.createElement("img")
    let div = document.createElement("div")
    let divHover = document.createElement("div")
    let divCorazon = document.createElement("div")
    let titleBuscarGif = document.createElement("p")
    let userBuscarGif = document.createElement("p")
    let corazon = document.createElement("img")
    let expandir = document.createElement("img")
    let descargar = document.createElement("img")
    let corazonUndido = document.createElement("img")
    corazonUndido.setAttribute("src","imagenes/icon-fav-active.svg")
    divCorazon.appendChild(corazon)
    div.classList.add("divGifBuscar")
    divHover.classList.add("hoverGifsBuscar")
    corazon.classList.add("btnHoverBuscar")
    expandir.classList.add("btnHoverBuscar")
    descargar.classList.add("btnHoverBuscar")
    
    expandir.setAttribute("src","imagenes/icon-max-normal.svg")
    descargar.setAttribute("src","imagenes/icon-download.svg")
    corazon.setAttribute("id","corazonBusqueda")
    userBuscarGif.textContent = searchingGifs.username
    titleBuscarGif.textContent = searchingGifs.title
    gif.setAttribute("src", searchingGifs.images.original.url)
    gif.classList.add("gifBuscar")
    userBuscarGif.classList.add("userBuscarGif")
    titleBuscarGif.classList.add("titleBuscarGif")
    divHover.appendChild(divCorazon)
    divHover.appendChild(expandir)

    async function downloadGif (searchingGifs){
      let a = document.createElement("a")
      let resp = await fetch (searchingGifs.images.original.url)
      let file = await resp.blob()

      a.download =searchingGifs.title + ".gif"
      a.href = window.URL.createObjectURL(file)
      a.click()
      a.remove()
    }

    const downloadGifCallBack = () => {
      downloadGif (searchingGifs)
    }

    descargar.addEventListener("click", downloadGifCallBack)

    divHover.appendChild(descargar)
    
    divHover.appendChild(userBuscarGif)
    divHover.appendChild(titleBuscarGif)
    div.appendChild(gif)
    div.appendChild(divHover) 
    nueva_grilla.appendChild(div)
    descargar.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
    descargar.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
    expandir.addEventListener("mouseover", () => {expandir.src="imagenes/icon-max-hover.svg"})
    expandir.addEventListener("mouseout", () => {expandir.src="imagenes/icon-max-normal.svg"})

    
    


    gif.addEventListener("click" , () => {
        corazonUndido.classList.remove("corazonUndido")
        corazonUndido.classList.add("corazonUndidoExp")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",searchingGifs.images.downsized.url)
        titleExp.textContent = searchingGifs.title
        userExp.textContent = searchingGifs.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (searchingGifs){
          let a = document.createElement("a")
          let resp = await fetch (searchingGifs.images.original.url)
          let file = await resp.blob()
    
          a.download =searchingGifs.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (searchingGifs)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === searchingGifs.id)
        var eliminar = searchingGifs.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(searchingGifs)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
  })
     

    /*mostrar gifs en favoritos*/

    const isExist = favs.filter(fav => fav.id === searchingGifs.id)
    var eliminar = searchingGifs.id

    console.log(isExist)
    if (isExist.length > 0){
      corazon.setAttribute("src","imagenes/icon-fav-hover.svg")
      divCorazon.appendChild(corazonUndido)
      corazonUndido.classList.add("corazonUndido")
      corazonUndido.style.display="block"
      
      corazonUndido.addEventListener("click", () =>{
        
        favs.splice(getIndice(eliminar),1)
        function getIndice(eliminar){
          var indice = -1
          favs.filter(function(dato,i){
            if(dato.id===eliminar){
              indice=i
            }
          })
          return indice
        }
        window-localStorage.setItem("favorites", JSON.stringify(favs)) 
      })
    }else{
      corazon.setAttribute("src","imagenes/icon-fav.svg")
      corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
      corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
      corazon.addEventListener("click", e => {
        corazonUndido.style.display="block"
        corazon.setAttribute("src","imagenes/icon-fav-hover.svg")
        divCorazon.appendChild(corazonUndido)
        corazonUndido.classList.add("corazonUndido")
        corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonUndido.addEventListener("click", () =>{
          corazon.setAttribute("src","imagenes/icon-fav.svg")
          corazonUndido.style.display="none"
          corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          favs.splice(getIndice(eliminar),1)
          function getIndice(eliminar){
            var indice = -1
            favs.filter(function(dato,i){
              if(dato.id===eliminar){
                indice=i
              }
            })
            return indice
          }
          window-localStorage.setItem("favorites", JSON.stringify(favs)) 
        })
        addFav(searchingGifs)
      })
    }

    /*expandir gifs*/
   expandir.addEventListener("click", e => {
        corazonUndido.classList.remove("corazonUndido")
        corazonUndido.classList.add("corazonUndidoExp")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",searchingGifs.images.downsized.url)
        titleExp.textContent = searchingGifs.title
        userExp.textContent = searchingGifs.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (searchingGifs){
          let a = document.createElement("a")
          let resp = await fetch (searchingGifs.images.original.url)
          let file = await resp.blob()
    
          a.download =searchingGifs.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (searchingGifs)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === searchingGifs.id)
        var eliminar = searchingGifs.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonUndido.classList.remove("corazonUndido")
            corazonUndido.classList.add("corazonUndidoExp")
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(searchingGifs)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
    })
  }
}

const showGifs2 = gifs => {
  const nueva_grilla2=document.getElementById("nueva-grilla2")
  for (let i = 12; i < 24; i++){
    const searchingGifs = gifs[i]
    let divCorazon = document.createElement("div")
    let corazonUndido = document.createElement("img")
    let gif = document.createElement("img")
    let div = document.createElement("div")
    let divHover = document.createElement("div")
    let titleBuscarGif = document.createElement("p")
    let userBuscarGif = document.createElement("p")
    let corazon = document.createElement("img")
    let expandir = document.createElement("img")
    let descargar = document.createElement("img")
    corazonUndido.classList.remove("corazonUndido")
    corazonUndido.setAttribute("src","imagenes/icon-fav-active.svg")
    divCorazon.appendChild(corazon)
    userBuscarGif.textContent = searchingGifs.username
    titleBuscarGif.textContent = searchingGifs.title
    userBuscarGif.classList.add("userBuscarGif")
    titleBuscarGif.classList.add("titleBuscarGif")
    div.classList.add("divGifBuscar")
    divHover.classList.add("hoverGifsBuscar")
    corazon.classList.add("btnHoverBuscar")
    expandir.classList.add("btnHoverBuscar")
    descargar.classList.add("btnHoverBuscar")
    corazon.setAttribute("src","imagenes/icon-fav.svg")
    expandir.setAttribute("src","imagenes/icon-max-normal.svg")
    descargar.setAttribute("src","imagenes/icon-download.svg")
    corazon.setAttribute("id","corazonBusqueda2")
    gif.classList.add("gifBuscar")
    gif.setAttribute("src", searchingGifs.images.original.url) 
    divHover.appendChild(divCorazon)
    divHover.appendChild(expandir)
    
    async function downloadGif (searchingGifs){
      let a = document.createElement("a")
      let resp = await fetch (searchingGifs.images.original.url)
      let file = await resp.blob()

      a.download =searchingGifs.title + ".gif"
      a.href = window.URL.createObjectURL(file)
      a.click()
      a.remove()
    }

    const downloadGifCallBack = () => {
      downloadGif (searchingGifs)
    }

    descargar.addEventListener("click", downloadGifCallBack)

    divHover.appendChild(descargar)

    divHover.appendChild(userBuscarGif)
    divHover.appendChild(titleBuscarGif)
    div.appendChild(divHover)
    div.appendChild(gif)
    nueva_grilla2.appendChild(div)
    descargar.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
    descargar.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
    expandir.addEventListener("mouseover", () => {expandir.src="imagenes/icon-max-hover.svg"})
    expandir.addEventListener("mouseout", () => {expandir.src="imagenes/icon-max-normal.svg"})
    gif.addEventListener("click" , () => {
        corazonUndido.classList.remove("corazonUndido")
        corazonUndido.classList.add("corazonUndidoExp")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",searchingGifs.images.downsized.url)
        titleExp.textContent = searchingGifs.title
        userExp.textContent = searchingGifs.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (searchingGifs){
          let a = document.createElement("a")
          let resp = await fetch (searchingGifs.images.original.url)
          let file = await resp.blob()
    
          a.download =searchingGifs.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (searchingGifs)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === searchingGifs.id)
        var eliminar = searchingGifs.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(searchingGifs)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
  })

    /*mostrar gifs en favoritos*/

    const isExist = favs.filter(fav => fav.id === searchingGifs.id)
    var eliminar = searchingGifs.id

    console.log(isExist)
    if (isExist.length > 0){
      corazon.setAttribute("src","imagenes/icon-fav-hover.svg")
      divCorazon.appendChild(corazonUndido)
      corazonUndido.classList.add("corazonUndido")
      corazonUndido.style.display="block"
      
      corazonUndido.addEventListener("click", () =>{
        
        favs.splice(getIndice(eliminar),1)
        function getIndice(eliminar){
          var indice = -1
          favs.filter(function(dato,i){
            if(dato.id===eliminar){
              indice=i
            }
          })
          return indice
        }
        window-localStorage.setItem("favorites", JSON.stringify(favs)) 
      })
    }else{
      corazon.setAttribute("src","imagenes/icon-fav.svg")
      corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
      corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
      corazon.addEventListener("click", e => {
        corazonUndido.style.display="block"
        corazon.setAttribute("src","imagenes/icon-fav-hover.svg")
        divCorazon.appendChild(corazonUndido)
        corazonUndido.classList.add("corazonUndido")
        corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonUndido.addEventListener("click", () =>{
          corazon.setAttribute("src","imagenes/icon-fav.svg")
          corazonUndido.style.display="none"
          corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          favs.splice(getIndice(eliminar),1)
          function getIndice(eliminar){
            var indice = -1
            favs.filter(function(dato,i){
              if(dato.id===eliminar){
                indice=i
              }
            })
            return indice
          }
          window-localStorage.setItem("favorites", JSON.stringify(favs)) 
        })
        addFav(searchingGifs)
      })
    }

    /*expandir gifs*/

    expandir.addEventListener("click", e => {
        corazonUndido.classList.remove("corazonUndido")
        corazonUndido.classList.add("corazonUndidoExp")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",searchingGifs.images.downsized.url)
        titleExp.textContent = searchingGifs.title
        userExp.textContent = searchingGifs.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (searchingGifs){
          let a = document.createElement("a")
          let resp = await fetch (searchingGifs.images.original.url)
          let file = await resp.blob()
    
          a.download =searchingGifs.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (searchingGifs)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === searchingGifs.id)
        var eliminar = searchingGifs.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(searchingGifs)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })

    })
  }
}

const showGifs3 = gifs => {
  const nueva_grilla3=document.getElementById("nueva-grilla3")
  for (let i = 24; i < 36; i++){
    const searchingGifs = gifs[i]
    let divCorazon = document.createElement("div")
    let corazonUndido = document.createElement("img")
    let gif = document.createElement("img")
    let div = document.createElement("div")
    let divHover = document.createElement("div")
    let titleBuscarGif = document.createElement("p")
    let userBuscarGif = document.createElement("p")
    let corazon = document.createElement("img")
    let expandir = document.createElement("img")
    let descargar = document.createElement("img")
    corazonUndido.setAttribute("src","imagenes/icon-fav-active.svg")
    corazonUndido.classList.remove("corazonUndido")
    divCorazon.appendChild(corazon)
    userBuscarGif.textContent = searchingGifs.username
    titleBuscarGif.textContent = searchingGifs.title
    userBuscarGif.classList.add("userBuscarGif")
    titleBuscarGif.classList.add("titleBuscarGif")
    div.classList.add("divGifBuscar")
    divHover.classList.add("hoverGifsBuscar")
    corazon.classList.add("btnHoverBuscar")
    expandir.classList.add("btnHoverBuscar")
    descargar.classList.add("btnHoverBuscar")
    expandir.setAttribute("src","imagenes/icon-max-normal.svg")
    descargar.setAttribute("src","imagenes/icon-download.svg")
    corazon.setAttribute("id","corazonBusqueda3")
    gif.classList.add("gifBuscar")
    divHover.appendChild(divCorazon)
    divHover.appendChild(expandir)
    
    async function downloadGif (searchingGifs){
      let a = document.createElement("a")
      let resp = await fetch (searchingGifs.images.original.url)
      let file = await resp.blob()

      a.download =searchingGifs.title + ".gif"
      a.href = window.URL.createObjectURL(file)
      a.click()
      a.remove()
    }

    const downloadGifCallBack = () => {
      downloadGif (searchingGifs)
    }

    descargar.addEventListener("click", downloadGifCallBack)

    divHover.appendChild(descargar)

    divHover.appendChild(userBuscarGif)
    divHover.appendChild(titleBuscarGif)
    div.appendChild(divHover)
    gif.setAttribute("src", searchingGifs.images.original.url) 
    div.appendChild(gif)
    nueva_grilla3.appendChild(div)
    descargar.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
    descargar.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
    expandir.addEventListener("mouseover", () => {expandir.src="imagenes/icon-max-hover.svg"})
    expandir.addEventListener("mouseout", () => {expandir.src="imagenes/icon-max-normal.svg"})
    gif.addEventListener("click" , () => {
        corazonUndido.classList.remove("corazonUndido")
        corazonUndido.classList.add("corazonUndidoExp")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",searchingGifs.images.downsized.url)
        titleExp.textContent = searchingGifs.title
        userExp.textContent = searchingGifs.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (searchingGifs){
          let a = document.createElement("a")
          let resp = await fetch (searchingGifs.images.original.url)
          let file = await resp.blob()
    
          a.download =searchingGifs.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (searchingGifs)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === searchingGifs.id)
        var eliminar = searchingGifs.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonUndido.classList.add("corazonUndido")
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(searchingGifs)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
  })

   /*mostrar gifs en favoritos*/

   const isExist = favs.filter(fav => fav.id === searchingGifs.id)
   var eliminar = searchingGifs.id

   console.log(isExist)
   if (isExist.length > 0){
     corazon.setAttribute("src","imagenes/icon-fav-hover.svg")
     divCorazon.appendChild(corazonUndido)
     corazonUndido.classList.add("corazonUndido")
     corazonUndido.style.display="block"
     
     corazonUndido.addEventListener("click", () =>{
       
       favs.splice(getIndice(eliminar),1)
       function getIndice(eliminar){
         var indice = -1
         favs.filter(function(dato,i){
           if(dato.id===eliminar){
             indice=i
           }
         })
         return indice
       }
       window-localStorage.setItem("favorites", JSON.stringify(favs)) 
     })
   }else{
     corazon.setAttribute("src","imagenes/icon-fav.svg")
     corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
     corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
     corazon.addEventListener("click", e => {
       corazonUndido.style.display="block"
       corazon.setAttribute("src","imagenes/icon-fav-hover.svg")
       divCorazon.appendChild(corazonUndido)
       corazonUndido.classList.add("corazonUndido")
       corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
       corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
       corazonUndido.addEventListener("click", () =>{
         corazon.setAttribute("src","imagenes/icon-fav.svg")
         corazonUndido.style.display="none"
         corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
         corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
         favs.splice(getIndice(eliminar),1)
         function getIndice(eliminar){
           var indice = -1
           favs.filter(function(dato,i){
             if(dato.id===eliminar){
               indice=i
             }
           })
           return indice
         }
         window-localStorage.setItem("favorites", JSON.stringify(favs)) 
       })
       addFav(searchingGifs)
     })
   }

    /*expandir gifs*/
    expandir.addEventListener("click", e => {
        corazonUndido.classList.remove("corazonUndido")
        corazonUndido.classList.add("corazonUndidoExp")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",searchingGifs.images.downsized.url)
        titleExp.textContent = searchingGifs.title
        userExp.textContent = searchingGifs.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (searchingGifs){
          let a = document.createElement("a")
          let resp = await fetch (searchingGifs.images.original.url)
          let file = await resp.blob()
    
          a.download =searchingGifs.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (searchingGifs)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === searchingGifs.id)
        var eliminar = searchingGifs.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(searchingGifs)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })

    })
  }
}

const showGifs4 = gifs => {
  const nueva_grilla4=document.getElementById("nueva-grilla4")
  for (let i = 36; i < 48; i++){
    const searchingGifs = gifs[i]
    let divCorazon = document.createElement("div")
    let corazonUndido = document.createElement("img")
    let gif = document.createElement("img")
    let div = document.createElement("div")
    let divHover = document.createElement("div")
    let titleBuscarGif = document.createElement("p")
    let userBuscarGif = document.createElement("p")
    let corazon = document.createElement("img")
    let expandir = document.createElement("img")
    let descargar = document.createElement("img")
    corazonUndido.setAttribute("src","imagenes/icon-fav-active.svg")
    divCorazon.appendChild(corazon)
    userBuscarGif.textContent = searchingGifs.username
    titleBuscarGif.textContent = searchingGifs.title
    userBuscarGif.classList.add("userBuscarGif")
    titleBuscarGif.classList.add("titleBuscarGif")
    div.classList.add("divGifBuscar")
    divHover.classList.add("hoverGifsBuscar")
    corazon.classList.add("btnHoverBuscar")
    expandir.classList.add("btnHoverBuscar")
    descargar.classList.add("btnHoverBuscar")
    expandir.setAttribute("src","imagenes/icon-max-normal.svg")
    descargar.setAttribute("src","imagenes/icon-download.svg")
    corazon.setAttribute("id","corazonBusqueda4")
    gif.classList.add("gifBuscar")
    divHover.appendChild(divCorazon)
    divHover.appendChild(expandir)

      async function downloadGif (searchingGifs){
      let a = document.createElement("a")
      let resp = await fetch (searchingGifs.images.original.url)
      let file = await resp.blob()

      a.download =searchingGifs.title + ".gif"
      a.href = window.URL.createObjectURL(file)
      a.click()
      a.remove()
    }

    const downloadGifCallBack = () => {
      downloadGif (searchingGifs)
    }

    descargar.addEventListener("click", downloadGifCallBack)

    divHover.appendChild(descargar)

    divHover.appendChild(userBuscarGif)
    divHover.appendChild(titleBuscarGif)
    div.appendChild(divHover)
    gif.setAttribute("src", searchingGifs.images.original.url) 
    div.appendChild(gif)
    nueva_grilla4.appendChild(div)
    descargar.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
    descargar.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
    expandir.addEventListener("mouseover", () => {expandir.src="imagenes/icon-max-hover.svg"})
    expandir.addEventListener("mouseout", () => {expandir.src="imagenes/icon-max-normal.svg"})
    gif.addEventListener("click" , () => {
      corazonUndido.classList.remove("corazonUndido")
        corazonUndido.classList.add("corazonUndidoExp")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",searchingGifs.images.downsized.url)
        titleExp.textContent = searchingGifs.title
        userExp.textContent = searchingGifs.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (searchingGifs){
          let a = document.createElement("a")
          let resp = await fetch (searchingGifs.images.original.url)
          let file = await resp.blob()
    
          a.download =searchingGifs.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (searchingGifs)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === searchingGifs.id)
        var eliminar = searchingGifs.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
          
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(searchingGifs)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
  })

    /*mostrar gifs en favoritos*/

    const isExist = favs.filter(fav => fav.id === searchingGifs.id)
    var eliminar = searchingGifs.id

    console.log(isExist)
    if (isExist.length > 0){
      corazon.setAttribute("src","imagenes/icon-fav-hover.svg")
      divCorazon.appendChild(corazonUndido)
      corazonUndido.classList.add("corazonUndido")
      corazonUndido.style.display="block"
      
      corazonUndido.addEventListener("click", () =>{
        
        favs.splice(getIndice(eliminar),1)
        function getIndice(eliminar){
          var indice = -1
          favs.filter(function(dato,i){
            if(dato.id===eliminar){
              indice=i
            }
          })
          return indice
        }
        window-localStorage.setItem("favorites", JSON.stringify(favs)) 
      })
    }else{
      corazon.setAttribute("src","imagenes/icon-fav.svg")
      corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
      corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
      corazon.addEventListener("click", e => {
        corazonUndido.style.display="block"
        corazon.setAttribute("src","imagenes/icon-fav-hover.svg")
        divCorazon.appendChild(corazonUndido)
        corazonUndido.classList.add("corazonUndido")
        corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonUndido.addEventListener("click", () =>{
          corazon.setAttribute("src","imagenes/icon-fav.svg")
          corazonUndido.style.display="none"
          corazon.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazon.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          favs.splice(getIndice(eliminar),1)
          function getIndice(eliminar){
            var indice = -1
            favs.filter(function(dato,i){
              if(dato.id===eliminar){
                indice=i
              }
            })
            return indice
          }
          window-localStorage.setItem("favorites", JSON.stringify(favs)) 
        })
        addFav(searchingGifs)
      })
    }

    /*expandir gifs*/

    expandir.addEventListener("click", e => {
      corazonUndido.classList.remove("corazonUndido")
        corazonUndido.classList.add("corazonUndidoExp")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",searchingGifs.images.downsized.url)
        titleExp.textContent = searchingGifs.title
        userExp.textContent = searchingGifs.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (searchingGifs){
          let a = document.createElement("a")
          let resp = await fetch (searchingGifs.images.original.url)
          let file = await resp.blob()
    
          a.download =searchingGifs.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (searchingGifs)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === searchingGifs.id)
        var eliminar = searchingGifs.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
        
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(searchingGifs)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })

    })
  }
}

searchForm.addEventListener("submit", async (e)=> {
  e.preventDefault()
  buscarGif(inputSearch.value)
  document.getElementById("equisBusqueda").style.display="none"
})



/*mostrar sugerencias en busqueda y cambiar la barra de busqueda*/

const suggestions_List = document.getElementById("suggestions-list")
const contenedorBusqueda = document.getElementById("contenedorBuscar")
const botonBuscar = document.getElementById("submit")
const buscarHide = document.getElementById("hideBuscar")
const lupaHide = document.getElementById("lupas")
const lineaGris = document.getElementById("lineaGris")

const searchSuggestion = async(query) => {
  const url = `https://api.giphy.com/v1/tags/related/${query}?api_key=${API_KEY}`
  const response = await fetch(url)
  const json = await response.json()

  return json.data
} 

const showSuggestions = suggestion => {
  suggestions_List.innerHTML = ""
  for (i=0; i < 4 ; i++){
    const suggestions = suggestion[i]
    let item = document.createElement("li")
    item.textContent = suggestions.name
    suggestions_List.appendChild(item)
    item.classList.add("sugerencia")
    item.addEventListener("click", e => {
      document.getElementById("equisBusqueda").style.display="none"
      inputSearch.value = suggestions.name
      buscarGif(suggestions.name)
      console.log(inputSearch.value)
    })   
  }
}



inputSearch.addEventListener("keyup", async () => {



/*poner barra normal cuando el input este vacio*/

  if(inputSearch.value == ""){
    contenedorBusqueda.classList.remove("expandir")
    inputSearch.classList.remove("barra-busqueda-expandir")
    botonBuscar.classList.remove("submit-expandir")
    buscar.src="imagenes/icon-search.svg"
    buscarHide.classList.remove("buscarShow")
    lupaHide.classList.remove("lupasShow")
    lineaGris.classList.remove("showLinea")
    document.getElementById("equisBusqueda").style.display="none"
    suggestions_List.innerHTML = ""
    document.getElementById("containerTrending").style.display="block"
    return;
  }

  /*mostrar sugestions y cambiar barra de busqueda*/
  const suggestion = await searchSuggestion(inputSearch.value)
  showSuggestions(suggestion)
  contenedorBusqueda.classList.add("expandir")
  inputSearch.classList.add("barra-busqueda-expandir")
  botonBuscar.classList.add("submit-expandir")
  buscar.src="imagenes/icon-search.svg"
  lupaHide.classList.add("lupasShow")
  lineaGris.classList.add("showLinea")
  document.getElementById("equisBusqueda").style.display="flex"
  document.getElementById("containerTrending").style.display="none"
  document.getElementById("equisBusqueda").addEventListener("click", () => {
    inputSearch.value=""
    document.getElementById("containerTrending").style.display="block"
    contenedorBusqueda.classList.remove("expandir")
    inputSearch.classList.remove("barra-busqueda-expandir")
    botonBuscar.classList.remove("submit-expandir")
    buscar.src="imagenes/icon-search.svg"
    buscarHide.classList.remove("buscarShow")
    lupaHide.classList.remove("lupasShow")
    lineaGris.classList.remove("showLinea")
    document.getElementById("equisBusqueda").style.display="none"
    suggestions_List.innerHTML = ""
  })
})

/*funcion para buscar gifs*/

const buscarGif = async (query) => {
  document.getElementById("containerTrending").style.display="block"
  resultados.innerHTML = ""
  suggestions_List.innerHTML = ""
  contenedorBusqueda.classList.remove("expandir")
  inputSearch.classList.remove("barra-busqueda-expandir")
  botonBuscar.classList.remove("submit-expandir")
  buscar.src="imagenes/icon-search.svg"
  buscarHide.classList.remove("buscarShow")
  lupaHide.classList.remove("lupasShow")
  lineaGris.classList.remove("showLinea")
  let titulo = document.createElement("h2")
  titulo.textContent = inputSearch.value
  titulo.classList.add("titulo-busqueda")
  titulo.setAttribute("id","busqueda-titulo")
  resultados.appendChild(titulo)
  
  /*modo nocturno*/
  
    if (modoNocturno===true){
      titulo.classList.add("titulo-busqueda-oscuro")
      titulo.classList.remove("titulo-busqueda")
    }else{
      titulo.classList.remove("titulo-busqueda-oscuro")
      titulo.classList.add("titulo-busqueda")
      }

  const contenedor = document.createElement("div")
  resultados.appendChild(contenedor)
  contenedor.classList.add("busqueda")
  contenedor.setAttribute("id","nueva-grilla")
  let boton = document.createElement("a")
  boton.textContent = "VER MÁS"
  boton.classList.add("myButton")
  resultados.appendChild(boton)

  if(modoNocturno===true){
    boton.classList.add("myButton-oscuro")
    boton.classList.remove("myButton")
  }else{
    boton.classList.remove("myButton-oscuro")
    boton.classList.add("myButton")
  }

  boton.addEventListener("click", e => {
    boton.remove()
    const contenedor2 = document.createElement("div")
    resultados.appendChild(contenedor2)
    contenedor2.classList.add("busqueda2")
    contenedor2.setAttribute("id","nueva-grilla2")
    let boton2 = document.createElement("a")
    boton2.textContent = "VER MÁS"
    boton2.classList.add("myButton")
    resultados.appendChild(boton2)

    if(modoNocturno===true){
      boton2.classList.add("myButton-oscuro")
      boton2.classList.remove("myButton")
    }else{
      boton2.classList.remove("myButton-oscuro")
      boton2.classList.add("myButton")
    }


    showGifs2(gifs)
    boton2.addEventListener("click", e => {
      boton2.remove()
      const contenedor3 = document.createElement("div")
      resultados.appendChild(contenedor3)
      contenedor3.classList.add("busqueda2")
      contenedor3.setAttribute("id","nueva-grilla3")
      let boton3 = document.createElement("a")
      boton3.textContent = "VER MÁS"
      boton3.classList.add("myButton")
      resultados.appendChild(boton3)

      if(modoNocturno===true){
        boton3.classList.add("myButton-oscuro")
        boton3.classList.remove("myButton")
      }else{
        boton3.classList.remove("myButton-oscuro")
        boton3.classList.add("myButton")
      }

      showGifs3(gifs)
      boton3.addEventListener("click", e => {
        boton3.remove()
        const contenedor4 = document.createElement("div")
        resultados.appendChild(contenedor4)
        contenedor4.classList.add("busqueda2")
        contenedor4.setAttribute("id","nueva-grilla4")
        let boton4 = document.createElement("a")
        boton4.textContent = "BORRAR"
        boton4.classList.add("myButton")
        resultados.appendChild(boton4)

        if(modoNocturno===true){
          boton4.classList.add("myButton-oscuro")
          boton4.classList.remove("myButton")
        }else{
          boton4.classList.remove("myButton-oscuro")
          boton4.classList.add("myButton")
        }

        showGifs4(gifs)
        boton4.addEventListener("click", e => {
          resultados.innerHTML = ""
          document.getElementById("containerTrending").style.display="block"
        })
      })
    })
  })
 
  const gifs = await searchGifs(query) 
  showGifs(gifs)

}

/*crear GIFO*/

const video = document.querySelector("video")
const btnComenzar = document.getElementById("byButton-crear")
const btnGrabar = document.getElementById("byButton-grabar")
const containerActions = document.getElementById("crearActions")
let gifos = []
const myGifos = JSON.parse(localStorage.getItem("myGifos"))
const containerVideo = document.getElementById("divVideo")
const containerGifos = document.getElementById("boxMisGifos")
const containerGifos2 = document.getElementById("boxMisGifos2")
const containerGifos3 = document.getElementById("boxMisGifos3")
const containerGifos4 = document.getElementById("boxMisGifos4")
const seccionMisGifos = document.getElementById("seccionMisGifos")

const calculateTimeDuration = (secs) => {
  var hr = Math.floor(secs/3600);
  var min = Math.floor((secs - hr * 3600)/60);
  var sec = Math.floor(secs - hr * 3600 - min * 60);
  if(min < 10){
    min = "0" + min;
  }
  if (sec < 10){
    sec = "0" + sec;
  }
  return hr + ":" + min + ":" + sec;
}





const showGifos = finalGifos =>{

  /*gifos vista vacia*/

  const vacio = document.getElementById("containerGifos_vacio")
  console.log(vacio)

  if (gifos.length < 1){
    document.getElementById("boxMisGifos").style.display ="none"
    vacio.style.display ="block"
    document.getElementById("btn1").style.display="none"
    const imgGifos = createElement("img")
    imgGifos.src = "imagenes/icon-mis-gifos-sin-contenido.svg"
    document.getElementById("seccionMisGifos").appendChild(imgGifos)
    return;
  }

  
  for (let i = 0; i < 12; i++){
    document.getElementById("boxMisGifos").style.display ="grid"
    document.getElementById("containerGifos_vacio").style.display ="none"
    const finalGifo = finalGifos[i]
    let corazonUndido = document.createElement("img")
    corazonUndido.setAttribute("src","imagenes/icon-fav-active.svg")
    const divGif = document.createElement("div")
    const divHover = document.createElement("div")
    const gif = document.createElement("img")
    const trash = document.createElement("img")
    const descargar = document.createElement("img")
    const expandir = document.createElement("img")
    const titleGifo = document.createElement("p")
    const userGifo = document.createElement("p")
    divGif.classList.add("divGif")
    divHover.classList.add("hoverGifos")
    trash.classList.add("btnHoverGifo")
    expandir.classList.add("btnHoverGifo")
    descargar.classList.add("btnHoverGifo")
    trash.setAttribute("id","basuraGifo")
    titleGifo.textContent = finalGifo.title
    userGifo.textContent = finalGifo.username
    userGifo.classList.add("userGifo")
    titleGifo.classList.add("titleGifo")
    trash.setAttribute("src","imagenes/icon-trash-normal.svg")
    descargar.setAttribute("src","imagenes/icon-download.svg")
    expandir.setAttribute("src","imagenes/icon-max-normal.svg")
    gif.setAttribute("src", finalGifo.images.original.url)
    gif.classList.add("gifo")
    divHover.appendChild(trash)
    divHover.appendChild(descargar)
    divHover.appendChild(expandir)
    divHover.appendChild(titleGifo)
    divHover.appendChild(userGifo)
    divGif.appendChild(gif)
    divGif.appendChild(divHover)
    containerGifos.appendChild(divGif)
    descargar.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
    descargar.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
    expandir.addEventListener("mouseover", () => {expandir.src="imagenes/icon-max-hover.svg"})
    expandir.addEventListener("mouseout", () => {expandir.src="imagenes/icon-max-normal.svg"})
    trash.addEventListener("mouseover", () => {trash.src="imagenes/icon-trash-hover.svg"})
    trash.addEventListener("mouseout", () => {trash.src="imagenes/icon-trash-normal.svg"})

    async function downloadGif (finalGifo){
      let a = document.createElement("a")
      let resp = await fetch (finalGifo.images.original.url)
      let file = await resp.blob()

      a.download =finalGifo.title + ".gif"
      a.href = window.URL.createObjectURL(file)
      a.click()
      a.remove()
    }

    const downloadGifCallBack = () => {
      downloadGif (finalGifo)
    }

    descargar.addEventListener("click", downloadGifCallBack)

    
    
    gif.addEventListener("click", () => {
      corazonUndido.classList.remove("corazonUndido")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",finalGifo.images.downsized.url)
        titleExp.textContent = finalGifo.title
        userExp.textContent = finalGifo.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (finalGifo){
          let a = document.createElement("a")
          let resp = await fetch (finalGifo.images.original.url)
          let file = await resp.blob()
    
          a.download =finalGifo.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (finalGifo)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === finalGifo.id)
        var eliminar = finalGifo.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(finalGifo)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
    })

    

      /*expandir gifs*/

      expandir.addEventListener("click", e => {
        corazonUndido.classList.remove("corazonUndido")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",finalGifo.images.downsized.url)
        titleExp.textContent = finalGifo.title
        userExp.textContent = finalGifo.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (finalGifo){
          let a = document.createElement("a")
          let resp = await fetch (finalGifo.images.original.url)
          let file = await resp.blob()
    
          a.download =finalGifo.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (finalGifo)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === finalGifo.id)
        var eliminar = finalGifo.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            console.log(favs)
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(finalGifo)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
  
      })


    /*borrar gifo*/
    let indice = gifos.indexOf(finalGifo.id)
    trash.addEventListener("click", () =>{
      gifos.splice(indice,1)
      window-localStorage.setItem("myGifos", JSON.stringify(gifos)) 
    })


  }
  
}

const showGifos2 = finalGifos => {
  for (let i = 12; i < 24; i++){
    document.getElementById("containerGifos_vacio").style.display ="none"
    const finalGifo = finalGifos[i]
    let corazonUndido = document.createElement("img")
    corazonUndido.setAttribute("src","imagenes/icon-fav-active.svg")
    const divGif = document.createElement("div")
    const divHover = document.createElement("div")
    const gif = document.createElement("img")
    const trash = document.createElement("img")
    const descargar = document.createElement("img")
    const expandir = document.createElement("img")
    const titleGifo = document.createElement("p")
    const userGifo = document.createElement("p")
    divGif.classList.add("divGif")
    divHover.classList.add("hoverGifos")
    trash.classList.add("btnHoverGifo")
    expandir.classList.add("btnHoverGifo")
    descargar.classList.add("btnHoverGifo")
    trash.setAttribute("id","basuraGifo")
    titleGifo.textContent = finalGifo.title
    userGifo.textContent = finalGifo.username
    userGifo.classList.add("userGifo")
    titleGifo.classList.add("titleGifo")
    trash.setAttribute("src","imagenes/icon-trash-normal.svg")
    descargar.setAttribute("src","imagenes/icon-download.svg")
    expandir.setAttribute("src","imagenes/icon-max-normal.svg")
    gif.setAttribute("src", finalGifo.images.original.url)
    gif.classList.add("gifo")
    divHover.appendChild(trash)
    divHover.appendChild(descargar)
    divHover.appendChild(expandir)
    divHover.appendChild(titleGifo)
    divHover.appendChild(userGifo)
    divGif.appendChild(gif)
    divGif.appendChild(divHover)
    containerGifos2.appendChild(divGif)
    descargar.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
    descargar.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
    expandir.addEventListener("mouseover", () => {expandir.src="imagenes/icon-max-hover.svg"})
    expandir.addEventListener("mouseout", () => {expandir.src="imagenes/icon-max-normal.svg"})
    trash.addEventListener("mouseover", () => {trash.src="imagenes/icon-trash-hover.svg"})
    trash.addEventListener("mouseout", () => {trash.src="imagenes/icon-trash-normal.svg"})

    async function downloadGif (finalGifo){
      let a = document.createElement("a")
      let resp = await fetch (finalGifo.images.original.url)
      let file = await resp.blob()

      a.download =finalGifo.title + ".gif"
      a.href = window.URL.createObjectURL(file)
      a.click()
      a.remove()
    }

    const downloadGifCallBack = () => {
      downloadGif (finalGifo)
    }

    descargar.addEventListener("click", downloadGifCallBack)

    

    gif.addEventListener("click", () => {
      corazonUndido.classList.remove("corazonUndido")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",finalGifo.images.downsized.url)
        titleExp.textContent = finalGifo.title
        userExp.textContent = finalGifo.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (finalGifo){
          let a = document.createElement("a")
          let resp = await fetch (finalGifo.images.original.url)
          let file = await resp.blob()
    
          a.download =finalGifo.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (finalGifo)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === finalGifo.id)
        var eliminar = finalGifo.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(finalGifo)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
    })

    

      /*expandir gifs*/

      expandir.addEventListener("click", e => {
        corazonUndido.classList.remove("corazonUndido")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",finalGifo.images.downsized.url)
        titleExp.textContent = finalGifo.title
        userExp.textContent = finalGifo.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (finalGifo){
          let a = document.createElement("a")
          let resp = await fetch (finalGifo.images.original.url)
          let file = await resp.blob()
    
          a.download =finalGifo.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (finalGifo)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === finalGifo.id)
        var eliminar = finalGifo.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            console.log(favs)
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(finalGifo)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
  
      })


    /*borrar gifo*/
    let indice = gifos.indexOf(finalGifo.id)
    trash.addEventListener("click", () =>{
      gifos.splice(indice,1)
      window-localStorage.setItem("myGifos", JSON.stringify(gifos)) 
    })


  }
}

const showGifos3 = finalGifos => {
  for (let i = 24; i < 36; i++){
    document.getElementById("boxMisGifos").style.display ="grid"
    document.getElementById("containerGifos_vacio").style.display ="none"
    const finalGifo = finalGifos[i]
    let corazonUndido = document.createElement("img")
    corazonUndido.setAttribute("src","imagenes/icon-fav-active.svg")
    const divGif = document.createElement("div")
    const divHover = document.createElement("div")
    const gif = document.createElement("img")
    const trash = document.createElement("img")
    const descargar = document.createElement("img")
    const expandir = document.createElement("img")
    const titleGifo = document.createElement("p")
    const userGifo = document.createElement("p")
    divGif.classList.add("divGif")
    divHover.classList.add("hoverGifos")
    trash.classList.add("btnHoverGifo")
    expandir.classList.add("btnHoverGifo")
    descargar.classList.add("btnHoverGifo")
    trash.setAttribute("id","basuraGifo")
    titleGifo.textContent = finalGifo.title
    userGifo.textContent = finalGifo.username
    userGifo.classList.add("userGifo")
    titleGifo.classList.add("titleGifo")
    trash.setAttribute("src","imagenes/icon-trash-normal.svg")
    descargar.setAttribute("src","imagenes/icon-download.svg")
    expandir.setAttribute("src","imagenes/icon-max-normal.svg")
    gif.setAttribute("src", finalGifo.images.original.url)
    gif.classList.add("gifo")
    divHover.appendChild(trash)
    divHover.appendChild(descargar)
    divHover.appendChild(expandir)
    divHover.appendChild(titleGifo)
    divHover.appendChild(userGifo)
    divGif.appendChild(gif)
    divGif.appendChild(divHover)
    containerGifos3.appendChild(divGif)
    descargar.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
    descargar.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
    expandir.addEventListener("mouseover", () => {expandir.src="imagenes/icon-max-hover.svg"})
    expandir.addEventListener("mouseout", () => {expandir.src="imagenes/icon-max-normal.svg"})
    trash.addEventListener("mouseover", () => {trash.src="imagenes/icon-trash-hover.svg"})
    trash.addEventListener("mouseout", () => {trash.src="imagenes/icon-trash-normal.svg"})

    async function downloadGif (finalGifo){
      let a = document.createElement("a")
      let resp = await fetch (finalGifo.images.original.url)
      let file = await resp.blob()

      a.download =finalGifo.title + ".gif"
      a.href = window.URL.createObjectURL(file)
      a.click()
      a.remove()
    }

    const downloadGifCallBack = () => {
      downloadGif (finalGifo)
    }

    descargarExp.addEventListener("click", downloadGifCallBack)


    gif.addEventListener("click", () => {
      corazonUndido.classList.remove("corazonUndido")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",finalGifo.images.downsized.url)
        titleExp.textContent = finalGifo.title
        userExp.textContent = finalGifo.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (finalGifo){
          let a = document.createElement("a")
          let resp = await fetch (finalGifo.images.original.url)
          let file = await resp.blob()
    
          a.download =finalGifo.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (finalGifo)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === finalGifo.id)
        var eliminar = finalGifo.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(finalGifo)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
    })

    

      /*expandir gifs*/

      expandir.addEventListener("click", e => {
        corazonUndido.classList.remove("corazonUndido")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",finalGifo.images.downsized.url)
        titleExp.textContent = finalGifo.title
        userExp.textContent = finalGifo.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (finalGifo){
          let a = document.createElement("a")
          let resp = await fetch (finalGifo.images.original.url)
          let file = await resp.blob()
    
          a.download =finalGifo.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (finalGifo)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === finalGifo.id)
        var eliminar = finalGifo.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            console.log(favs)
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(finalGifo)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
  
      })


    /*borrar gifo*/
    let indice = gifos.indexOf(finalGifo.id)
    trash.addEventListener("click", () =>{
      gifos.splice(indice,1)
      window-localStorage.setItem("myGifos", JSON.stringify(gifos)) 
    })


  }
}

const showGifos4 = finalGifos => {
  for (let i = 36; i < finalGifos.length; i++){
    document.getElementById("boxMisGifos").style.display ="grid"
    document.getElementById("containerGifos_vacio").style.display ="none"
    const finalGifo = finalGifos[i]
    console.log(finalGifo)
    let corazonUndido = document.createElement("img")
    corazonUndido.setAttribute("src","imagenes/icon-fav-active.svg")
    const divGif = document.createElement("div")
    const divHover = document.createElement("div")
    const gif = document.createElement("img")
    const trash = document.createElement("img")
    const descargar = document.createElement("img")
    const expandir = document.createElement("img")
    const titleGifo = document.createElement("p")
    const userGifo = document.createElement("p")
    divGif.classList.add("divGif")
    divHover.classList.add("hoverGifos")
    trash.classList.add("btnHoverGifo")
    expandir.classList.add("btnHoverGifo")
    descargar.classList.add("btnHoverGifo")
    trash.setAttribute("id","basuraGifo")
    titleGifo.textContent = finalGifo.title
    userGifo.textContent = finalGifo.username
    userGifo.classList.add("userGifo")
    titleGifo.classList.add("titleGifo")
    trash.setAttribute("src","imagenes/icon-trash-normal.svg")
    descargar.setAttribute("src","imagenes/icon-download.svg")
    expandir.setAttribute("src","imagenes/icon-max-normal.svg")
    gif.setAttribute("src", finalGifo.images.original.url)
    gif.classList.add("gifo")
    divHover.appendChild(trash)
    divHover.appendChild(descargar)
    divHover.appendChild(expandir)
    divHover.appendChild(titleGifo)
    divHover.appendChild(userGifo)
    divGif.appendChild(gif)
    divGif.appendChild(divHover)
    containerGifos4.appendChild(divGif)
    descargar.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
    descargar.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
    expandir.addEventListener("mouseover", () => {expandir.src="imagenes/icon-max-hover.svg"})
    expandir.addEventListener("mouseout", () => {expandir.src="imagenes/icon-max-normal.svg"})
    trash.addEventListener("mouseover", () => {trash.src="imagenes/icon-trash-hover.svg"})
    trash.addEventListener("mouseout", () => {trash.src="imagenes/icon-trash-normal.svg"})

    async function downloadGif (finalGifo){
      let a = document.createElement("a")
      let resp = await fetch (finalGifo.images.original.url)
      let file = await resp.blob()

      a.download =finalGifo.title + ".gif"
      a.href = window.URL.createObjectURL(file)
      a.click()
      a.remove()
    }

    const downloadGifCallBack = () => {
      downloadGif (finalGifo)
    }

    descargar.addEventListener("click", downloadGifCallBack)


    gif.addEventListener("click", () => {
      corazonUndido.classList.remove("corazonUndido")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",finalGifo.images.downsized.url)
        titleExp.textContent = finalGifo.title
        userExp.textContent = finalGifo.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        async function downloadGif (finalGifo){
          let a = document.createElement("a")
          let resp = await fetch (finalGifo.images.original.url)
          let file = await resp.blob()
    
          a.download =finalGifo.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (finalGifo)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === finalGifo.id)
        var eliminar = finalGifo.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(finalGifo)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
    })

    

      /*expandir gifs*/

      expandir.addEventListener("click", e => {
        corazonUndido.classList.remove("corazonUndido")
        let bodyExpandir = document.getElementById("expandir")
        document.getElementById("todo").style.display = "none"
        let equis = document.createElement("img")
        let gifExp = document.createElement("img")
        let containerExpandir = document.createElement("div")
        let sliderExpIzq = document.createElement("img")
        let divGifExp = document.createElement("div")
        let sliderExpDer = document.createElement("img")
        let divCorazon = document.createElement("div")
        let corazonExp = document.createElement("img")
        let descargarExp = document.createElement("img")
        let userExp = document.createElement("p")
        let titleExp = document.createElement("p")
        let divUltimo = document.createElement("div")
        divCorazon.classList.add("divCorazon")
        divCorazon.appendChild(corazonExp)
        divUltimo.classList.add("divUltimo")
        equis.classList.add("equisExp")
        gifExp.classList.add("gifExp")
        containerExpandir.classList.add("containerExpandir")
        sliderExpIzq.classList.add("sliderExpIzq")
        divGifExp.classList.add("divGifExp")
        sliderExpDer.classList.add("sliderExpDer")
        corazonExp.classList.add("corazonExp")
        descargarExp.classList.add("descargarExp")
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        gifExp.setAttribute("src",finalGifo.images.downsized.url)
        titleExp.textContent = finalGifo.title
        userExp.textContent = finalGifo.username
        equis.setAttribute("src", "imagenes/close.svg")
        corazonExp.setAttribute("src", "imagenes/icon-fav.svg")
        descargarExp.setAttribute("src", "imagenes/icon-download.svg")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        bodyExpandir.appendChild(equis)
        bodyExpandir.appendChild(containerExpandir)
        containerExpandir.appendChild(sliderExpIzq)
        containerExpandir.appendChild(divGifExp)
        divGifExp.appendChild(gifExp)
        containerExpandir.appendChild(sliderExpDer)
        let divParrafos = document.createElement("div")
        divParrafos.appendChild(userExp)
        divParrafos.appendChild(titleExp)
        let divBotones = document.createElement("div")
        divBotones.classList.add("divBotones")
        divBotones.appendChild(divCorazon)
        divUltimo.appendChild(divParrafos)
        divUltimo.appendChild(divBotones)
        bodyExpandir.appendChild(divUltimo)
        descargarExp.addEventListener("mouseover", () => {descargar.src="imagenes/icon-download-hover.svg"})
        descargarExp.addEventListener("mouseout", () => {descargar.src="imagenes/icon-download.svg"})
        corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
        corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})

        /*funionalidad de los botones*/

        
        async function downloadGif (finalGifo){
          let a = document.createElement("a")
          let resp = await fetch (finalGifo.images.original.url)
          let file = await resp.blob()
    
          a.download =finalGifo.title + ".gif"
          a.href = window.URL.createObjectURL(file)
          a.click()
          a.remove()
        }
    
        const downloadGifCallBack = () => {
          downloadGif (finalGifo)
        }
    
        descargarExp.addEventListener("click", downloadGifCallBack)
    
        divBotones.appendChild(descargarExp)

         /*mostrar gifs en favoritos*/

        const isExist = favs.filter(fav => fav.id === finalGifo.id)
        var eliminar = finalGifo.id
    
        console.log(isExist)
        if (isExist.length > 0){
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
          divCorazon.appendChild(corazonUndido)
          corazonUndido.classList.add("corazonUndidoExp")
          corazonUndido.style.display="block"
          corazonUndido.classList.remove("corazonUndidoTrend")
          corazonUndido.setAttribute("id","corazonUndido_Exp")
          corazonUndido.addEventListener("click", () =>{
            console.log(favs)
            favs.splice(getIndice(eliminar),1)
            function getIndice(eliminar){
              var indice = -1
              favs.filter(function(dato,i){
                if(dato.id===eliminar){
                  indice=i
                }
              })
              return indice
            }
            window-localStorage.setItem("favorites", JSON.stringify(favs)) 
          })
        }else{
          corazonUndido.classList.remove("corazonUndido")
          corazonUndido.classList.add("corazonUndidoExp")
          corazonExp.setAttribute("src","imagenes/icon-fav.svg")
          corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
          corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
          corazonExp.addEventListener("click", e => {
            corazonUndido.style.display="block"
            corazonExp.setAttribute("src","imagenes/icon-fav-hover.svg")
            divCorazon.appendChild(corazonUndido)
            corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav-hover.svg"})
            corazonUndido.addEventListener("click", () =>{
              corazonExp.setAttribute("src","imagenes/icon-fav.svg")
              corazonUndido.style.display="none"
              corazonExp.addEventListener("mouseover", () => {corazon.src="imagenes/icon-fav-hover.svg"})
              corazonExp.addEventListener("mouseout", () => {corazon.src="imagenes/icon-fav.svg"})
              favs.splice(getIndice(eliminar),1)
              function getIndice(eliminar){
                var indice = -1
                favs.filter(function(dato,i){
                  if(dato.id===eliminar){
                    indice=i
                  }
                })
                return indice
              }
              window-localStorage.setItem("favorites", JSON.stringify(favs)) 
            })
            addFav(finalGifo)
          })
        }


       /*modo nocturno*/
       if (modoNocturno===true){
        userExp.classList.add("userExp-nocturno")
        titleExp.classList.add("titleExp-nocturno")
        userExp.classList.remove("userExp")
        titleExp.classList.remove("titleExp")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left-md-noct.svg")
        sliderExpDer.setAttribute("src","imagenes/button-slider-right-md-noct.svg")
        equis.setAttribute("src", "imagenes/close-modo-noct.svg")
      }else{
        userExp.classList.add("userExp")
        titleExp.classList.add("titleExp")
        userExp.classList.remove("userExp-nocturno")
        titleExp.classList.remove("titleExp-nocturno")
        sliderExpIzq.setAttribute("src", "imagenes/button-slider-left.svg")
        sliderExpDer.setAttribute("src","imagenes/Button-Slider-right.svg")
        equis.setAttribute("src", "imagenes/close.svg")
        }
        

        /*cerrar gif expandido*/

        equis.addEventListener("click", e => {
          document.getElementById("todo").style.display = "block"
          document.getElementById("expandir").innerHTML = ""
      })
  
      })


    /*borrar gifo*/
    let indice = gifos.indexOf(finalGifo.id)
    trash.addEventListener("click", () =>{
      gifos.splice(indice,1)
      window-localStorage.setItem("myGifos", JSON.stringify(gifos)) 
    })


  }
}
  const botonGifos3 = document.getElementById("btn3")
  const botonGifos2 = document.getElementById("btn2") 
  const botonGifos = document.getElementById("btn1")
  botonGifos.style.display="block"
  botonGifos.addEventListener("click", () => {
    containerGifos2.style.display="grid"
    botonGifos.style.display="none" 
    botonGifos2.style.display="block"
    botonGifos2.addEventListener("click", () => {
      botonGifos2.style.display="none"
      containerGifos3.style.display="grid"
      botonGifos2.style.display="block"
      botonGifos3.addEventListener("click", () => {
        botonGifos3.style.display="none"
        containerGifos4.style.display="grid"
      })
    })
  })


async function getId(gifos){
  let myId= ""
  for (let i = 0; i < gifos.length-1; i++){  
      const gifo = gifos[i]
      myId = myId + gifo+","          
  }
  let i = gifos.length
  const gifo = gifos[i-1]
  myId = myId + gifo
  console.log(myId)
  
  const getGifos = async (query) => {
    const url = `https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${query}`
    const response = await fetch(url)
    const json = response.json()

    return json
  }

  const myGifos = await getGifos(myId)
  let finalGifos = myGifos.data

  showGifos(finalGifos)
  showGifos2(finalGifos)
  showGifos3(finalGifos)
  showGifos4(finalGifos)

}

if (myGifos!==null&&myGifos.length > 0){
    gifos = myGifos
  }
  

getId(gifos)
const pasoa_Paso1 = document.getElementById("pasoapaso1")
const pasoa_Paso2 = document.getElementById("pasoapaso2")
const pasoa_Paso3 = document.getElementById("pasoapaso3")
const btnCrear = document.getElementById("crear")
const crearGIFOSInfoTimer = document.getElementById("cronometro")
btnCrear.addEventListener("click", e => {
  btnMisGifos.classList.remove("active")
  btnFav.classList.remove("active")
  aDarkMode.classList.remove("active")
  crear.src="imagenes/CTA-crear-gifo-active.svg"
  document.getElementById("seccionUno").style.display = "none"
  document.getElementById("main").style.display = "none"
  document.getElementById("seccionDos").style.display = "block"
  crear.addEventListener("mouseover",e => {crear.src="imagenes/CTA-crear-gifo-active.svg"})
  crear.addEventListener("mouseout",e => {crear.src="imagenes/CTA-crear-gifo-active.svg"})
  document.getElementById("seccionMisGifos").style.display = "none"
  document.getElementById("seccionFavoritos").style.display ="none"
  video.style.display = "none"
  document.getElementById("tituloCrear").style.display="block"
  document.getElementById("tituloCrear2").style.display="block"
  document.getElementById("parrafoCrear3").style.display="block"
  document.getElementById("parrafoCrear4").style.display="block"
  document.getElementById("byButton-subir").style.display="none"
  document.getElementById("byButton-crear").style.display="block"
})


function getStreamAndRecord () { 

  

  navigator.mediaDevices.getUserMedia({
  audio: false,
  video: {
     height: { max: 340 }
  }
})
  .then( stream => {
    video.srcObject = stream;
    video.play()

    const recorder = RecordRTC(stream, {
      type: 'gif',
      frameRate: 1,
      quality: 10,
      width: 360,
      hidden: 240,
      onGifRecordingStarted: function() {
      console.log('started')
    }
    })

    recorder.startRecording()

    dateStarted = new Date().getTime();
    (function looper() {
      crearGIFOSInfoTimer.innerHTML = calculateTimeDuration(
        (new Date().getTime() - dateStarted) / 1000
      );
      setTimeout(looper, 1000);
    })();

    const btnStop = document.getElementById("byButton-finalizar")
    const btnSubir = document.getElementById("byButton-subir")
    btnStop.addEventListener("click", e => {
      crearGIFOSInfoTimer.style.display = "none"
      btnStop.style.display="none"
      document.getElementById("repetir_captura").style.display="block"
      document.getElementById("repetir_captura").addEventListener("click", () => {
        
        pasoa_Paso1.classList.add("hover-gifos")
        pasoa_Paso1.classList.remove("pasoapaso")
        pasoa_Paso2.classList.remove("hover-gifos")
        pasoa_Paso2.classList.add("pasoapaso")
        crear.src="imagenes/CTA-crear-gifo-active.svg"
        document.getElementById("seccionUno").style.display = "none"
        document.getElementById("main").style.display = "none"
        document.getElementById("seccionDos").style.display = "block"
        crear.addEventListener("mouseover",e => {crear.src="imagenes/CTA-crear-gifo-active.svg"})
        crear.addEventListener("mouseout",e => {crear.src="imagenes/CTA-crear-gifo-active.svg"})
        document.getElementById("seccionMisGifos").style.display = "none"
        document.getElementById("seccionFavoritos").style.display ="none"
        video.style.display = "none"
        document.getElementById("tituloCrear").style.display="block"
        document.getElementById("tituloCrear2").style.display="block"
        document.getElementById("parrafoCrear3").style.display="block"
        document.getElementById("parrafoCrear4").style.display="block"
        document.getElementById("byButton-subir").style.display="none"
        document.getElementById("byButton-crear").style.display="block"
        document.querySelector(".containerBordes1").style.display="flex"
        document.querySelector(".containerBordes2").style.display="flex"
        document.getElementById("repetir_captura").style.display="none"
      })
      document.getElementById("byButton-subir").style.display ="block"
      recorder.stopRecording( async ()=>{
        let blob = recorder.getBlob();
        const data = new FormData()
        data.append("file", blob, "mygif.gif")
        console.log(data.get("file"))
        btnSubir.addEventListener("click",  async e =>{
          
          const response = await fetch (`https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`, {
            method: "POST",
            body: data
          })
  
          const response_json = await response.json()
          console.log(response_json)
          console.log(response_json.data.id)
          let newIdGifo = response_json.data.id
          console.log(newIdGifo)
          gifos.push(newIdGifo)
          console.log(gifos)
          window.localStorage.setItem("myGifos",JSON.stringify(gifos))  
          btnSubir.style.display="none"
          document.getElementById("repetir_captura").style.display="none"

          const getUrl = async (query) => {
            const response = await fetch(`https://api.giphy.com/v1/gifs/${query}?api_key=${API_KEY}`)
            const json = response.json()
        
            return json
          }
        
          const myGifoId = await getUrl(newIdGifo)
          let finalId = myGifoId.data
          console.log(finalId)

          
          pasoa_Paso2.classList.remove("hover-gifos")
          pasoa_Paso2.classList.add("pasoapaso")
          pasoa_Paso3.classList.add("hover-gifos")
          pasoa_Paso3.classList.remove("pasoapaso")
          const div_video = document.createElement("div")
          div_video.classList.add("hoverVideo")
          const parrafoVideo = document.createElement("p")
          const imgVideo = document.createElement("img")
          parrafoVideo.classList.add("parrafoVideo")
          imgVideo.classList.add("imgVideo")
          imgVideo.setAttribute("src", "imagenes/loader.svg")
          parrafoVideo.textContent="Estamos cargando tu GIFO"
          div_video.appendChild(imgVideo)
          div_video.appendChild(parrafoVideo)
          containerVideo.appendChild(div_video)
          const check = document.createElement("img")
          check.setAttribute("src", "imagenes/ok.svg")
          const gifoSubido = document.createElement("p")
          gifoSubido.textContent="GIFO subido con exito"
          check.classList.add("checkGifos")
          gifoSubido.classList.add("gifoSubido")
          const aUrl = document.createElement("a")
          const descargarGifo = document.createElement("img")
          const urlGifo = document.createElement("img")
          descargarGifo.setAttribute("src", "imagenes/icon-download.svg")
          urlGifo.setAttribute("src", "imagenes/icon-link-normal.svg")
          aUrl.setAttribute("href", finalId.url)
          aUrl.appendChild(urlGifo)
          descargarGifo.setAttribute("id", "descargarGifo")
          urlGifo.classList.add("btnGifos")
          descargarGifo.classList.add("btnGifos")
          setTimeout(() => {
            div_video.appendChild(descargarGifo)
            div_video.appendChild(aUrl)
            div_video.appendChild(check)
            div_video.appendChild(gifoSubido)
            descargarGifo.addEventListener("mouseover", () => {descargarGifo.src="imagenes/icon-download-hover.svg"})
            descargarGifo.addEventListener("mouseout", () => {descargarGifo.src="imagenes/icon-download.svg"})
            urlGifo.addEventListener("mouseover", () => {urlGifo.src="imagenes/icon-link-hover.svg"})
            urlGifo.addEventListener("mouseout", () => {urlGifo.src="imagenes/icon-link-normal.svg"})

            async function downloadGif (finalId){
              let a = document.createElement("a")
              let resp = await fetch (finalId.images.original.url)
              let file = await resp.blob()
        
              a.download =finalId.title + ".gif"
              a.href = window.URL.createObjectURL(file)
              a.click()
              a.remove()
            }
        
            const downloadGifCallBack = () => {
              downloadGif (finalId)
            }
        
            descargarGifo.addEventListener("click", downloadGifCallBack)
        
            imgVideo.style.display="none"
            parrafoVideo.style.display="none"
          }, 3000);
          
          
        })
      })
      
    })
    containerActions.appendChild(btnStop)


  })
}

const recordVideo = () => {
  /*obtener video*/
  getStreamAndRecord ()

}



btnComenzar.addEventListener("click", e => {
  modoNocturno=false
  if (modoNocturno===false){
    pasoa_Paso1.classList.add("hover-gifos-oscuro")
    pasoa_Paso1.classList.remove("pasoapaso")
    pasoa_Paso1.classList.remove("hover-gifos")
    modoNocturno=true
  }

  pasoa_Paso1.classList.add("hover-gifos")
  pasoa_Paso1.classList.remove("pasoapaso")
  pasoa_Paso1.classList.remove("hover-gifos-oscuro")
  document.getElementById("tituloCrear").style.display="none"
  document.getElementById("tituloCrear2").style.display="none"
  document.getElementById("parrafoCrear3").style.display="none"
  document.getElementById("parrafoCrear4").style.display="none"
  document.getElementById("acceso_cam").style.display="flex"
  document.getElementById("parrafo_crear1").style.display="block"
  document.getElementById("parrafo_crear2").style.display="block"
  document.getElementById("byButton-crear").style.display="none"
  document.getElementById("byButton-grabar").style.display="block"
  btnGrabar.addEventListener("click", e =>{
    crearGIFOSInfoTimer.style.display = "block"
    document.getElementById("byButton-finalizar").style.display="block"
    document.querySelector(".containerBordes1").style.display="none"
    document.querySelector(".containerBordes2").style.display="none"
    pasoa_Paso1.classList.remove("hover-gifos")
    pasoa_Paso1.classList.add("pasoapaso")
    pasoa_Paso2.classList.add("hover-gifos")

    pasoa_Paso2.classList.remove("pasoapaso")
    document.querySelector("video").style.display="block"
    document.getElementById("acceso_cam").style.display="none"
    document.getElementById("parrafo_crear1").style.display="none"
    document.getElementById("parrafo_crear2").style.display="none"
    document.getElementById("byButton-grabar").style.display="none"
    recordVideo()
  })

})

/*mis gifos*/

const btnMisGifos = document.getElementById("btnMisGifos")
btnMisGifos.addEventListener("click", e => {
  document.getElementById("seccionUno").style.display = "none"
  document.getElementById("seccionMisGifos").style.display = "block"
  document.getElementById("seccionFavoritos").style.display ="none"
  document.getElementById("seccionDos").style.display = "none"
  document.getElementById("main").style.display = "block"
  btnFav.classList.remove("active")
  btnMisGifos.classList.add("active")
  aDarkMode.classList.remove("active")
  crear.addEventListener("mouseover",e => {crear.src="imagenes/CTA-crear-gifo-hover.svg"})
  crear.addEventListener("mouseout",e => {crear.src="imagenes/button-crear-gifo.svg"})
  crear.src="imagenes/button-crear-gifo.svg"
  if (modoNocturno===true){
    crear.addEventListener("mouseover", e => {crear.src="imagenes/CTA-crear-gifo-hover-modo-noc.svg"})
    crear.addEventListener("mouseout", e =>{crear.src="imagenes/CTA-crear-gifo-modo-noc.svg"})
    crear.src="imagenes/CTA-crear-gifo-modo-noc.svg"
  }
})

/*favoritos*/

const btnFav = document.getElementById("btnFav")
btnFav.addEventListener("click", e =>{
  btnFav.classList.add("active")
  document.getElementById("seccionUno").style.display = "none"
  document.getElementById("seccionFavoritos").style.display ="block"
  document.getElementById("seccionMisGifos").style.display = "none"
  document.getElementById("seccionDos").style.display = "none"
  document.getElementById("main").style.display = "block"
  btnMisGifos.classList.remove("active")
  aDarkMode.classList.remove("active")
  crear.addEventListener("mouseover",e => {crear.src="imagenes/CTA-crear-gifo-hover.svg"})
  crear.addEventListener("mouseout",e => {crear.src="imagenes/button-crear-gifo.svg"})
  crear.src="imagenes/button-crear-gifo.svg"
  if (modoNocturno===true){
    crear.addEventListener("mouseover", e => {crear.src="imagenes/CTA-crear-gifo-hover-modo-noc.svg"})
    crear.addEventListener("mouseout", e =>{crear.src="imagenes/CTA-crear-gifo-modo-noc.svg"})
    crear.src="imagenes/CTA-crear-gifo-modo-noc.svg"
  }
})

