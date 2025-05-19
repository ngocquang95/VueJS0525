const logger = (message, type = 'log') => console[type](message);

function logger2(message, type = 'log') {
    console[type](message);
}

function logger3(message, type = 'log') {
    console[type](message);
}

export default logger;
export { logger2, logger3 };