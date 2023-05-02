import sha1 from 'crypto-js/sha1'


export function formatDate(timestamp, time = false) {

  let date = new Date(timestamp); // crea un objeto Date a partir del timestamp

  let year = date.getFullYear(); // obtiene el año
  let month = String(date.getMonth() + 1).padStart(2, '0'); // obtiene el mes y lo rellena con ceros a la izquierda si es necesario
  let day = String(date.getDate()).padStart(2, '0'); // obtiene el día y lo rellena con ceros a la izquierda si es necesario
  let hours = String(date.getHours()).padStart(2, '0'); // obtiene las horas y lo rellena con ceros a la izquierda si es necesario
  let minutes = String(date.getMinutes()).padStart(2, '0'); // obtiene los minutos y lo rellena con ceros a la izquierda si es necesario
  let seconds = String(date.getSeconds()).padStart(2, '0'); // obtiene los segundos y lo rellena con ceros a la izquierda si es necesario

  let formattedDate = ``

  time ? formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}` : formattedDate = `${year}-${month}-${day}`; // crea una cadena formateada en el formato deseado

  return formattedDate;
}

export function getPrivilegesSession() {
  // Esta funcion trae los privilegios de session leyendoles de la cookie.
  // Retorna un objeto Nombre de Usuario y Privilegio.
  const isAdmin = document.cookie
    .split(";")
    .find((row) => row.trim().startsWith("admin"))
    ?.split("=")[1]
  const userName = document.cookie
    .split(";")
    .find((row) => row.trim().startsWith("userName"))
    ?.split("=")[1]
  const token = document.cookie
    .split(";")
    .find((row) => row.trim().startsWith("token"))
    ?.split("=")[1]

  const admin = (sha1('true').toString() === isAdmin);

  return ({ userName: userName, admin: admin, token: token })

}



const utils = { formatDate, getPrivilegesSession }
export default utils