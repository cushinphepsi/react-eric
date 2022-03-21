import React from "react";
import "./App.scss";
import Todo from "./Todo/Todo";
import Nav from "./Router/Nav";
import Home from "./Home";
import Wrapper from "./HOC/Wrapper"
import User from "./User/User";
import DetailUser from "./User/DetailUser";
import 'react-toastify/dist/ReactToastify.css';
import TodoRedux from "./TodoRedux/TodoRedux"

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import YoutubeSearch from "./YoutubeSearch/YoutubeSearch";
class App extends React.Component {
    handleInput = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    render() {
        return (
            <>
                <Router>
                    <div className="App-header">
                        <Nav />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/todo" element={<Todo />} />
                            <Route path="/user" element={<User />} />
                            <Route path="/user/:id" element={<DetailUser />} />
                            <Route path="/redux" element={<TodoRedux />} />
                            <Route path="/search" element={<YoutubeSearch />} />
                        </Routes>
                    </div>
                </Router>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* Same as */}
                <ToastContainer />
            </>
        );
    }
}

export default Wrapper(App)
