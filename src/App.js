import React, {useState} from 'react'
import axios from 'axios'
import './index.css'

export const App = () => {
  const [newsData,setnewsData]=useState([]);
  // const [refreshBtn,setRefreshBtn]=useState([]);
  const [showNews, setShowNews]= useState(false)
  const getNews=()=>{
    // axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=e11fc917afb84178b88e129a14b2166f")
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e11fc917afb84178b88e129a14b2166f")
    .then((response)=>{
       console.log(response,'respppppppp');

       setnewsData(response.data.articles)
       setShowNews(true)

       console.log(newsData,'setData');
    })
    .catch((error) => {
      console.error('Error fetching news:', error);
    });

  }
  const hideNews = ()=>{
    setShowNews(false)
  };
  // const refreshBtn = ()=>{
  //   newsData()
  // }


  return (
    <> <div className="container d-flex justify-content-between align-items-center">
      {!showNews &&(
        <button className="btn btn-primary" onClick={getNews}>Fetch News</button>

      )}
      {showNews && (
        <><button className="btn btn-primary" onClick={hideNews}>
          Hide News
        </button><button className="btn btn-primary" onClick={getNews}>
            Refresh News
          </button></>
      )}
      </div>

      {showNews && (
        <div className="container">
          <div className='row'>
            {newsData.map((value, index) => (
              <div className='col-md-3' key={index}>
                <div className="card">
                  <img src={value.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title twoLine">{value.title}</h5>
                    <p className="card-text fourLine">{value.description}</p>
                    <a href={value.url} className="btn btn-primary">Main News Source</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
 </>
  );
}


export default App;
