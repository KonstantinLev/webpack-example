import React from 'react'
import $ from 'jquery'

export default class App extends React.Component {

    componentDidMount() {
        $('<h1>').text('jquery here!').css({color: 'green'}).appendTo($('header'));
        console.log('Header component')
    }

    render() {
        return (
            <React.Fragment>
                <header></header>
                <hr/>
                    <div className="box">
                        <h2 className="box-title">Box Title</h2>
                        <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque
                            debitis dolores
                            facere officiis quis repellat saepe tempore ut velit!</p>
                    </div>
            </React.Fragment>
        )
    }
}
