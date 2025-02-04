import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles= [
              {
                "source": {
                  "id": "espn-cric-info",
                  "name": "ESPN Cric Info"
                },
                "author": null,
                "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
                "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
                "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
                "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
                "publishedAt": "2020-04-27T11:41:47Z",
                "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
              },
              {
                "source": {
                  "id": "espn-cric-info",
                  "name": "ESPN Cric Info"
                },
                "author": null,
                "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
                "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
                "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
                "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
                "publishedAt": "2020-03-30T15:26:05Z",
                "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
              },
              {
                "source": {
                "id": "cbc-news",
                "name": "CBC News"
                },
                "author": "CBC News",
                "title": "Trump fans in border states support 'America First' — even at the expense of their northern neighbours | CBC News",
                "description": "Analysts are voicing alarm about Donald Trump's early moves turning the U.S. into a \"selfish superpower\" with his tariff and immigration threats. But grassroots supporters are 100 per cent OK with it.",
                "url": "http://www.cbc.ca/news/canada/manitoba/trump-border-states-america-first-1.7439925",
                "urlToImage": "https://i.cbc.ca/1.7439953.1737736500!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/joe-solmon.jpg?im=Resize%3D620",
                "publishedAt": "2025-01-26T05:07:25.5232776Z",
                "content": "Minnesota retiree Joe Solmon is spending his morning browsing The Trump Store, looking for a new MAGA hat to add to his vast collection of Donald Trump-inspired clothing.\r\n\"I do have 14 Trump hats. I… [+6824 chars]"
                },
                {
                "source": {
                "id": "nrk",
                "name": "NRK"
                },
                "author": "NRK",
                "title": "Trump: – Jeg tror vi får Grønland",
                "description": "Donald Trump sier han tror USA kommer til å få Grønland. Noe annet vil være en uvennlig handling fra dansk side, ifølge presidenten. Den seneste Grønland-uttalelsen fra Trump kom overfor journalister på presidentflyet Air Force One lørdag kveld, melder BBC. –…",
                "url": "https://www.nrk.no/nyheter/trump_-_-jeg-tror-vi-far-gronland-1.17222973",
                "urlToImage": "https://gfx.nrk.no/-kH-TnGLzZl5huCsU-QzuggGlZIYh8Py4kMNzkc-cslw.jpg",
                "publishedAt": "2025-01-26T05:00:18Z",
                "content": "Donald Trump sier han tror USA kommer til å få Grønland. Noe annet vil være en uvennlig handling fra dansk side, ifølge presidenten.\r\nDen seneste Grønland-uttalelsen fra Trump kom overfor journaliste… [+645 chars]"
                }
              
            ]
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:true,
            page:1
        }
    }
    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a58c1aeb52f4f50b34ceb5a070c37af&page=1&pageSize=10";
      let data= await fetch(url);
      let parsedData= await data.json()
      console.log(parsedData);
      this.setState({articles:parsedData.articles})
    }
    handlePrevClick= async()=>{
      console.log('previous')
      if(this.state.page > Math.ceil(this.state.totalResults/10)){

      }
      else{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a58c1aeb52f4f50b34ceb5a070c37af&page=${this.state.page-1}&pageSize=10`;
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({
          page: this.state.page - 1,
          articles:parsedData.articles
        })
      }
    }
    handleNextClick=async()=>{
      console.log('next')
      if(this.state.page+1 >Math.ceil(this.state.totalResults/10)){

      }
      else{
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a58c1aeb52f4f50b34ceb5a070c37af&page=${this.state.page+1}&pageSize=10`;
      let data= await fetch(url);
      let parsedData= await data.json()
      console.log(parsedData);
      this.setState({
        page:this.state.page+1,
        articles: parsedData.articles
      })
    }
    }

  render() {
    return (
      <>
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
             return <div className='col-md-4' style={{display: 'flex',  justifyContent: 'space-between'}} key={element.url}>
              <NewsItems title={element.title?element.title:""}  description={element.description?element.description:" "} imgurl={element.urlToImage}  alt="cricket" newsurl={element.url}/>
            </div>
          })}
        </div>
      </div>
      <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr;Previous</button>
        <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next&rarr;</button>
      </div>
      </>
    )
    
  }
}

export default News

