import axios from 'axios'

export const getArticles = () => {
    return axios
    .get('https://nc-news-project-l3od.onrender.com/api/articles')
    .then((response) => {
        console.log(response , 'RESPONSE IN API.JS')
        return response.data
    })
    .catch((err) => {
        console.log(err)
    })
}