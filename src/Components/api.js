import axios from "axios";

export const getArticles = (topic) => {
    console.log(topic , 'TOPIC IN API')
    if(topic === undefined){
        return axios
        .get(`https://nc-news-project-l3od.onrender.com/api/articles`)
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else if(topic !== undefined){
        return axios
        .get(`https://nc-news-project-l3od.onrender.com/api/articles${topic}`)
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
};

export const getArticle = (article_id) => {
    return axios
    .get(`https://nc-news-project-l3od.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        return response.data.article
    })
    .catch((err) => {
        console.log(err)
    })
}

export const getComments = (article_id) => {
    return axios
    .get(`https://nc-news-project-l3od.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments
    })
    .catch((err) => {
        console.log(err)
    })
}

export const editVotes = (article_id , reqbody) => {
    return axios
    .patch(`https://nc-news-project-l3od.onrender.com/api/articles/${article_id}` , reqbody)
    .then((response) => {
        return response
    })
    .catch((err) => {
        console.log(err , 'ERROR')
    })
}

export const postComment = (article_id , reqbody) => {
    if(reqbody){
        return axios
        .post(`https://nc-news-project-l3od.onrender.com/api/articles/${article_id}/comments` , reqbody)
        .then((response) => {
            return response
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const deleteComment = (comment_id) => {
    return axios
        .delete(`https://nc-news-project-l3od.onrender.com/api/comments/${comment_id}`)
        .then((response) => {
            return response
        })
        .catch((err) => {
            console.log(err , 'ERROR')
        })
}

export const getTopics = () => {
    return axios
        .get(`https://nc-news-project-l3od.onrender.com/api/topics`)
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            console.log(err , 'ERROR')
        })
}