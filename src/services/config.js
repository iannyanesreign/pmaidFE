export default {
    HOST: process.env.REACT_APP_MODE === 'development' ? 'http://localhost:1337' : 'http://api.staging.com'
}