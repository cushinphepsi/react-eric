import React from "react";
import "./App.scss";
import Todo from "./Todo/Todo";
import Nav from "./Router/Nav";
import Home from "./Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
} from "react-router-dom";

class App extends React.Component {
    handleInput = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    render() {

        const TodoCustom = () => {
            const params = useParams();
            return <Todo id={params.id} />;
        }

        return (
            <Router>
                <div className="App-header">
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todo/:id" element={<TodoCustom />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
