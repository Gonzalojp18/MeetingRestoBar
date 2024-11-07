// Metodos de la api

function response(ok, msg) {
  return { ok: ok, message: msg }
}

export const getDishes = () => {
  // Logica

  return response(true, 'todo fue exitoso')
}