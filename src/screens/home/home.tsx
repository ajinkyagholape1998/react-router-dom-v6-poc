import React from 'react'
import { NavLink, Outlet, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()
    const params = useParams()
    const location = useLocation();
    const [searchQuery, setSearchQuery] = React.useState<any>(new URLSearchParams(location.search).get("query"));
    const [query, setQuery] = React.useState<any>("")
    React.useEffect(() => {
        console.log("PARAMS => ", params, new URLSearchParams(location.search).get("query"))
        setQuery(new URLSearchParams(location.search).get("query"))
    }, [searchQuery])
    return (
        <div>
            <div className='container'>
                <div className="left-panel">
                    <NavLink to={"/poc/react-testing-jest"}>
                        React Testing (Jest)
                    </NavLink>
                    <NavLink to={"/poc/react-testing-puppeteer"}>
                        React Testing (Puppeteer)
                    </NavLink>
                    <NavLink to={"/poc/react-realtime"}>
                        React Realtime
                    </NavLink>
                    <NavLink to={"/poc/table-grid"}>
                        Table Grid
                    </NavLink>
                    <NavLink to={"/poc/redux"}>
                        Redux
                    </NavLink>
                </div>
                <div className='content'>
                    <Outlet />
                </div>
            </div>
            {/*<div className='tab-container'>
                 <NavLink to={"/tab1"}>
                    Tab 1
                </NavLink>
                <NavLink to={"/tab2"}>
                    Tab 2
                </NavLink> 
            </div>*/}
            {/* <input
                type={"text"}
                value={searchQuery}
                onChange={(event) => {
                    navigate({
                        pathname: '/search', search: `query=${event?.target.value}&uppercase=${event?.target.value.toUpperCase()}`
                    })
                    setSearchQuery(event?.target.value)
                }
                } />
            <Outlet />
            <p>{query}</p>
            <p>{new URLSearchParams(location.search).get("uppercase")}</p> */}
        </div>
    )
}

export default Home