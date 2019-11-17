var pelis = [
       {
    " Nombre " :  " Regreso al futuro " ,
    " Genero " : " Acción "
    },
    {
    " Nombre " : " Los increibles 2 " ,
    " Genero " : " Animación "
    },
    {
    " Nombre " : " Los increibles 1 " ,
    " Genero " : " Animación "
    },
    {
    "nombre" : "El juego de Ender",
    "genero": "Aventuras",
    },
    {
    "nombre": "los inmortales",
    "genero": "ficcion",
    },
    {
    "nombre": "capitan america",
    "genero": "ficcion",
    },
    {
    "nombre": "X men",
    "genero": "ficcion",
    },
    {
    "nombre": "Anabelle",
    "genero": "terror",
    },
    {
    "nombre": "death note",
    "genero": "terror",
    },
    {
    "nombre": "SLUMDOG MILLIONAIRE",
    "genero": "Drama",
    },
    {
    "nombre": "DONNIE DARKO",
    "genero": "suspense",
    },
    {
    "nombre": "La morada del miedo ",
    "genero": "terror",
    }

    
    var ulObjetivo = document.jquerySelector('#pelis');
    for (var i = 0 ; i < pelis.lengt ; i ++0) {
    	var li = document.createElement ("li");
    	li.textConten = pelis [i].Nombre;
    	var img = document.createElement("img");
    	img.width=50;
    	img.alt = 60; 

    } if (pelis[i].genero == "Animación") {
    	img.src = "https://cdn.icon-icons.com/icons2/515/PNG/256/Animated-Movies_icon-icons.com_51062.png";
    	img.alt="animacion";
    }else if (pelis[i].genero == "terror") {
    	img.src = "https://cdn.icon-icons.com/icons2/515/PNG/128/Horror-Movies_icon-icons.com_51050.png";
    	img.alt = "terror";
 
    } else if (pelis[i].genero == "suspense") {
    	img.src = "https://cdn.icon-icons.com/icons2/515/PNG/128/Thriller-Movies_icon-icons.com_51039.png";
    	img.alt= "suspense";
     }else if(pelis[i].genero == "ficcion"); {
     	img.src= "https://cdn.icon-icons.com/icons2/1450/PNG/512/scienceandfiction-be_99214.png";
     	img.alt= "ficcion";
     }else if ( pelis[i].genero == "Aventuras"); {
     	img.src= "https://cdn.icon-icons.com/icons2/38/PNG/128/adventuremap_aventuras_4645.png";
     	img.alt= "Aventuras";
     }
     li.appendChild(img);
     ulObjetivo.appendChild (li);
     {
 