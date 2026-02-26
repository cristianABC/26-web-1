# Introducción a procesos async, useEffect, useRef, API navegador


## useEffect 

Este hook maneja los ciclos de vida de un componente. 

#### Pregunta de aprendizaje 

¿ Qué es ciclo de vida en componentes? 


Estructura use Effect
```typescript
useEffect(() => {
    //code 
  
    return () => {
      //clean code, delete, suscriptions, events, etc..
    }
  }, [dependencies])
```

#### Pregunta de aprendizaje 

¿El useEffect se utiliza en el cliente o en el servidor?


### Ejercicio 

1) Cree una nueva ruta tarea-async con su respectivo page.tsx
2) Cree una carpeta /tarea-async/components
3) Cree un componente (rafc en snippet) recuerde que los nombres van en mayúscula. NombreComponente y agreguelo al page.tsx
4) Cree dos estados (pista es un hook que ya vimos) uno para un título (string) y otro para página actual (number)
5) Por el momento van a tomar la plantilla del useEffect y van a remover el return 

```typescript
useEffect(() => {
    //code 
    }, [dependencies])
```

6) Vamos a ejecutar un console.log(nombre-variable) en la zona de //code del template
7) deje arreglo de dependencies vacío  []
8) Abra el inspector del navegador en la consola y refresque

#### Pregunta de aprendizaje

¿ Qué paso en la consola? ¿Queda claro que significa el arreglo vacío []

9) Ahora agregue un input como en la guía anterior y asociela al estado del título. 
10) dentro del return del jsx del component agregue ```<h1>{titulo} </h1>```
11) agregue título dentro del arreglo de dependencias 
12) Vuelva a revisar lo que paso en consola

#### Pregunta de aprendizaje 

¿ Cuál crees que es la diferencia entre poner una variable y no en el arreglo de dependencias?



## Consumir API (tareas asíncronas)


Para esto vamos a usar la API del navegador que es basada en promesas fetch
```typescript
fetch('<url>')
.then(res => res.json())
.then(console.log);

```
También es posible hacer este proceso de forma más moderna async/await o con la librería axios

```typescript
//axios
const data = await axios.get('<url>')

//fetch
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await response.json();
```

Para poder usar await siempre va con su amigo async
```typescript
const fetchData = async () => {
    const data = await axios.get('<url>')
}
```

### NOTA, USE EFFECT NO PUEDE TENER ASYNC POR REGLAS DE REACT
## Para llamar código asíncrono dentro del use Effect hay dos formas

1) Crear una función async afuera del use Effect y llamarla dentro
```typescript
useEffect(() => {
   fetchData()
  }, [dependencies])


const fetchData = async () => {
    const data = await axios.get('<url>')
    //lógica asociada a los datos
}
```

2) Crear la función async dentro del useEffect
```typescript
useEffect(() => {
   const fetchData = async () => {
    const data = await axios.get('<url>')
    //lógica asociada a los datos
    }   
    fetchData()

  }, [])
  ```

  me gusta más la opción 1 porque se lee mejor el código, es decisión personal
 
 # las peticiones asíncronas son la base del software moderno, este patrón se va repetir bastante


 # Ejercicio 
 
    Consuma alguna de estas API y muestre en consola los valores y muestre en el HTML un título que diga:
        SE ENCONTRARON {n} REGISTROS
    
    https://dummyjson.com/docs 
    https://jsonplaceholder.typicode.com/

#### Preguntas de aprendizaje

¿Qué pasa si falla la petición? 

```typescript
try{
//async code 
}
catch(){
 //error handling   
}
```

## useRef

usamos este hook para asociarlo directamente a elementos HTML

# prueben este código

```typescript
"use client";
import { useRef } from "react";

export default function InputFoco() {
  // Debe tener el mismo nombre
  const inputRef = useRef<HTMLInputElement>(null);

  const darFoco = () => {
    // Accedemos directamente al DOM "saltándonos" a React
    inputRef.current?.focus();
    //current accede a la referencia actual
    if (inputRef.current) {
      inputRef.current.style.border = "2px solid red";
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Escribe aquí..." />
      <button onClick={darFoco}>Enfocar y Resaltar</button>
    </div>
  );
}
```

#### Preguntas de aprendizaje 

¿Por qué se agregan tags a las funciones de useState, useRef en este ejemplo ```<HTMLInputElement>```?

¿Recuerdo completamente para que se usa el 'use client'?

### SCANNER SUELO MARCIANO

![alt text](robot-marciano.png){width=50px}

El equipo de marcianos SAS te solicita poder escanear con la cámara de sus computadores el terreno y poder seleccionar filtros a partir de una lista desplegable. 

1) Agregue una vista nueva app/scanner/page.tsx
2) Agregue un componente /app/scanner/components/ScannerView.tsx
```tsx
import ScannerView from "./components/ScannerView";

export default function ScannerPage() {
  return (
    <main style={{ backgroundColor: '#09090b', minHeight: '100vh' }}>
      <ScannerView />
    </main>
  );
}
```
3) Vamos a necesita el componente de shadcn Select 
4) El título de la misión marciana será el título del post número 17 de esta api https://jsonplaceholder.typicode.com/ 
** El título debe ser cargado desde el inicio
5) Vamos a manejar un valor que confirme que esta la cámara funcionando y su valor por defecto va ser 'Grabando' o 'Error'
6) Vamos a manejar los 3 valores de filtro por defecto es "none"
```typescript
const filtros: Record<string, string> = {
      NORMAL: "none",
      TERMICA: "invert(1) hue-rotate(90deg) contrast(1.5)",
      NOCTURNA: "sepia(1) saturate(10) hue-rotate(90deg) brightness(0.8)",
      RADAR: "grayscale(1) contrast(3) brightness(1.2)"
    };
```
7) La cámara debe estar funcionando desde el inicio asegurese de tener una referencia al tag de video de HTML
```typescript
//ayuda 
// Acceso a la Cámara
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) videoRef.current.srcObject = stream;

```

8) Asegurese de tener una función para cambiar el valor del filtro

```typescript
//asegurese de conectarlo al componente HTML del vídeo
style={{ filter: filtro }}
```

# Pseudo interfaz
```
Mision marciana <titulo>

Estado: <estado_camara>

|--------------------|
|  Tag Video         |    
|                    |   
|--------------------|

lista desplegable con filtros

```

