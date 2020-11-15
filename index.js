class App extends React.Component {
    render(){
        return(
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <Education />
                    <Work />
                    <Contact />
                </main>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#application-root'))