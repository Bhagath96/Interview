import { FETCH_NEWS, NEW_POST } from './types';



export const fetchNews = () => dispatch => {
  fetch("http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b55aa6f31716426ab49c0a1dbd51bfca")
    .then(res => res.json())
    .then(news =>
      dispatch({
        type: FETCH_NEWS,
        payload: news
      })
    );
};

// export const fetchNews = (id) => dispatch => {

//       dispatch({
//         type: FETCH_NEWS,
//         payload: news
//       })
    
// };
export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
