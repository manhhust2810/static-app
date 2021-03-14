import Display from "./Display";
import TodoList from "./TodoList";
import Color from "./Color";
import TranscriptCalculate from "./TranscriptCalculate";
// import Menu from "./views/Menu";
import UserManager from "./UserManager";
import Home from "./Home";
import NotFound from "./NotFound";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/display",
        exact: false,
        main: ({ match }) => <Display match={match} />
    },
    {
        path: "/list",
        exact: false,
        main: () => <TodoList />
    },
    {
        path: "/manage",
        exact: false,
        main: () => <UserManager />
    },
    {
        path: "/transcript",
        exact: false,
        main: () => <TranscriptCalculate />
    },
    {
        path: "/transcript",
        exact: false,
        main: () => <Home />
    },
    {
        path: "/color",
        exact: false,
        main: () => <Color />
    },
    {
        path: "/covid19",
        exact: false,
        main: () => <span></span>
    },
    {
        path: "/worldcup",
        exact: false,
        main: () => <span></span>
    },
    {
        path: "/blockchain",
        exact: false,
        main: () => <span></span>
    },
    {
        path: "/",
        exact: false,
        main: () => <NotFound/>
    },
];

export default routes;