import NavBar from '../../components/private/NavBar'
import { Route, Routes } from 'react-router-dom'
import Tabs from '../../components/private/Tabs'
import Home from '../../components/private/Home'
import NoFound from '../../components/public/NoFound'
import { useEffect, useState } from 'react'
import Usuarios from '../../components/private/User/Usuarios'
import Libros from '../../components/private/libros/Libros'
import Editoriales from '../../components/private/editoriales/Editoriales'
import Autores from '../../components/private/Autores/Autores'

const init = () => {
  return JSON.parse(sessionStorage.getItem('user'))
}

export default function BiblioRoutes() {
  const [user, setUser] = useState({
    nombre: ''
})

useEffect(() => {
    const usuario = init()
    if (usuario && usuario.logged) {
        setUser(usuario.user.gestorDB)
    }
}, [])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<NoFound />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/editoriales" element={<Editoriales />} />
        <Route path="/autores*" element={<Autores />} />
      </Routes>
      <Tabs />
    </>
  )
}
