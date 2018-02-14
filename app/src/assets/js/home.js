import React from "react"
import Ul from "./ul.js"

class Home extends React.Component {
    render(){
        const ulLinks = [

            {
                link: '/home',
                text: 'Home',
                className: 'itemMainMenu'
            },
            {
                link: '/workflow',
                text: 'Workflow',
                className: 'itemMainMenu'
            },
            {
                link: '/statistics',
                text: 'Statistics',
                className: 'itemMainMenu'
            },
            {
                link: '/calendar',
                text: 'Calendar',
                className: 'itemMainMenu'
            },
            {
                link: '/users',
                text: 'Users',
                className: 'itemMainMenu'
            },
            {
                link: '/settings',
                text: 'Settings',
                className: 'itemMainMenu'
            }
        ];
        return (
            <div>
                <Ul ololo={ulLinks} />
            </div>
        )
    }
}
export default Home;


