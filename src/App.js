const App = () => {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Welcome to Claudissimo Pizza!')
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));