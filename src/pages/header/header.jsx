import { Link , Outlet } from 'react-router-dom'

const Header = () => {

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/articles'>Articles</Link>
                        </li>
                        <li>
                            <Link to='/ajouter-article'>Ajouter articles</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <section>
                <Outlet />
            </section>
        </div>
    )
}

export default Header