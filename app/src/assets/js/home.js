import React from "react"
import Ul from "./ul.js"

class Home extends React.Component {
    render(){
        const ulLinks = [
            {
                link: '/',
                text: 'Enter',
                className: 'itemMainMenu'
            },
            {
                link: '/home',
                text: 'Home',
                className: 'itemMainMenu'
            },
            {
                link: '/workflow',
                text: 'Workflow',
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


