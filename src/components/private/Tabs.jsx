import { NavLink } from "react-router-dom";
import './Tabs.css'

export default function Tabs() {
    return (
        <nav id="tab-main" className="navbar fixed-bottom">
            <div className="container-fluid justify-content-center">
                <ul className="nav nav-pills text-center">   
                    <NavLink
                        className="nav-link"
                        aria-current="page"
                        aria-label="Prestamos de libros"
                        to="/home"
                    >
                        <i class="fa-solid fa-book-open-reader fa-xl"></i>
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        aria-label="Gestion Usuarios"
                        to="/pr/usuarios"
                        >
                            <i class="fa-solid fa-people-group fa-xl"></i>
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        aria-label="Gestion de Libro"
                        to="/pr/libros"
                    >
                        <i class="fa-solid fa-book-open fa-xl"></i>
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        aria-label="Gestion de Autores"
                        to="/pr/autores"
                    >
                        <i class="fa-solid fa-address-book fa-xl"></i>
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        aria-label="Gestrion de Editoriales"
                        to="/pr/editoriales"
                    >
                        <i class="fa-solid fa-book-atlas fa-xl"></i>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
