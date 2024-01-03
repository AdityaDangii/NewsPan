import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class news extends Component {
  static defaultProps={
    country:'in',
    pageSize:9,
    category: 'general'
    

  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

  }
  // articles= [
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CBS Sports"
  //     },
  //     "author": null,
  //     "title": "NFL odds, lines, picks, spreads, bets, predictions for Week 17, 2023: Model high on Seahawks, Eagles - CBS Sports",
  //     "description": "SportsLine's advanced model has locked in its Week 17 NFL picks for every game on the NFL schedule",
  //     "url": "https://www.cbssports.com/nfl/news/nfl-odds-lines-picks-spreads-bets-predictions-for-week-17-2023-model-high-on-seahawks-eagles/",
  //     "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/28/7d0637ac-6dd5-43cd-a845-d9f721aaf204/thumbnail/1200x675/e4ba5664662e782e4280f4809f88b88a/dk-metcalf-usatsi-cbs.jpg",
  //     "publishedAt": "2023-12-27T14:45:02Z",
  //     "content": "Double-digit NFL betting favorites can attract plenty of interest, and there are three Week 17 NFL spreads of at least 10.5 points. That's the line for Eagles vs. Cardinals (+10.5), while Bills vs. P… [+5107 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CBS Sports"
  //     },
  //     "author": "",
  //     "title": "2023 NFL playoff picture: Here are the 14 teams projected to make postseason with Cowboys in wild-card spot - CBS Sports",
  //     "description": "Does your team have a shot at the playoffs? How things stand entering Week 17",
  //     "url": "https://www.cbssports.com/nfl/news/2023-nfl-playoff-picture-here-are-the-14-teams-projected-to-make-postseason-with-cowboys-in-wild-card-spot/",
  //     "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/12/26/1fcb93f2-64a8-460c-9d7f-be973295a7be/thumbnail/1200x675/7d66b4ce0aec3795ff11c87f07180b2f/dak-us.jpg",
  //     "publishedAt": "2023-12-27T13:19:51Z",
  //     "content": "With just two weeks to play in the 2023 NFL season, there are still 24 teams in playoff contention. If that sounds like a high number, that's because it is. You almost never see that many teams still… [+1954 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "Melissa Alonso",
  //     "title": "University of Wisconsin – La Crosse chancellor sacked from post over pornographic films made with his wife, reports say - CNN",
  //     "description": "The Board of Regents of the University of Wisconsin system has terminated a 63-year-old university chancellor from his position after “discovering sexually explicit videos” he made with his wife, according to statements from officials and reporting from major…",
  //     "url": "https://www.cnn.com/2023/12/29/us/wisconsin-la-crosse-joe-gow-terminated/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231229070810-01-uw-la-crosse-chancellor-joe-gow-122723.jpg?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2023-12-29T14:35:00Z",
  //     "content": "The Board of Regents of the University of Wisconsin System has terminated a 63-year-old university chancellor from his position after discovering sexually explicit videos he made with his wife, accor… [+2530 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "NBCSports.com"
  //     },
  //     "author": "Mike Florio",
  //     "title": "Kevin Stefanski stakes claim to second coach of the year award - NBC Sports",
  //     "description": "Not long ago, the competition for coach of the year seemed to be wide open.",
  //     "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/kevin-stefanski-stakes-claim-to-second-coach-of-the-year-award",
  //     "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/ee6d217/2147483647/strip/true/crop/6990x3932+0+365/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F05%2F6c%2F1924fd0047008e3d3f3315580a5a%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1891536609",
  //     "publishedAt": "2023-12-29T14:21:40Z",
  //     "content": "Not long ago, the competition for coach of the year seemed to be wide open. Now, a clear favorite has emerged.\r\nBrowns coach Kevin Stefanski, who won it in 2020, might indeed have locked down a secon… [+1060 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Entertainment Tonight"
  //     },
  //     "author": "Anthony Dominic",
  //     "title": "Travis Kelce Reveals the Sweet Christmas Gift Taylor Swift's Brother Austin Swift Got Him - Entertainment Tonight",
  //     "description": "Austin's gift to Travis brought back a lot of nostalgia for the football star.",
  //     "url": "https://www.etonline.com/travis-kelce-reveals-the-sweet-christmas-gift-taylor-swifts-brother-austin-swift-got-him-217058",
  //     "urlToImage": "https://www.etonline.com/sites/default/files/styles/1280x720/public/images/2023-12/GettyImages-1882636591.jpg?h=c673cd1c",
  //     "publishedAt": "2023-12-29T14:01:00Z",
  //     "content": "Travis Kelce got the Swift family Christmas treatment this holiday season. \r\nIn a holiday-themed edition of the New Heights podcast on Friday, NFL stars Travis and his older brother, Jason Kelce, pro… [+2194 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Yahoo Entertainment"
  //     },
  //     "author": "Frank Schwab",
  //     "title": "Browns clinch playoffs with win over Jets, who turned losing Aaron Rodgers into an easy excuse - Yahoo Sports",
  //     "description": "The Browns didn't allow Deshaun Watson's injury to ruin their season.",
  //     "url": "https://sports.yahoo.com/browns-clinch-playoffs-with-win-over-jets-turned-losing-aaron-rodgers-into-an-easy-excuse-042208188.html",
  //     "urlToImage": "https://s.yimg.com/ny/api/res/1.2/_CNMu0A.UCk5bD6fpoLB9Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/dbff3780-a5f9-11ee-bf7f-51a2d041326b",
  //     "publishedAt": "2023-12-29T13:58:46Z",
  //     "content": "It's hard to recover when your starting quarterback goes down with a season-ending injury. That's why the New York Jets have mostly gotten a pass.\r\nMaybe we shouldn't give the Jets a pass. They could… [+4528 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //     },
  //     "author": "Ivan Lyubsyh-Kirdey, Yuliia Dysa, Tom Balmforth",
  //     "title": "Eighteen dead in one of Russia's biggest missile strikes of war, Kyiv says - Reuters",
  //     "description": "Russia fired one of its biggest missile barrages of the war at Ukraine on Friday, killing 31 civilians, wounding over 120 and hitting residential buildings in Kyiv, the south and west of the country and a maternity ward in the east, officials said.",
  //     "url": "https://www.reuters.com/world/europe/russia-launches-massive-air-attack-ukraine-least-10-dead-kyiv-2023-12-29/",
  //     "urlToImage": "https://www.reuters.com/resizer/lcOGIZg65FLWOJdPNtG2XpfJsj0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LJHC3YZD7FJUZMPOAJXYQXCXK4.jpg",
  //     "publishedAt": "2023-12-29T13:36:00Z",
  //     "content": "KYIV, Dec 29 (Reuters) - Russia fired one of its biggest missile barrages of the war at Ukraine on Friday, killing 31 civilians, wounding over 120 and hitting residential buildings in Kyiv, the south… [+4478 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "associated-press",
  //       "name": "Associated Press"
  //     },
  //     "author": "JIMMY GOLEN",
  //     "title": "Celtics send Detroit to NBA record-tying 28th straight loss, beating Pistons 128-122 in OT - The Associated Press",
  //     "description": "Hoping to avoid a 28th straight loss that would match the longest losing streak in NBA history, the Detroit Pistons forced overtime against the league-best Celtics before Boston recovered to win 128-122. Despite making it to overtime for the first time in the…",
  //     "url": "https://apnews.com/article/piston-celtics-score-losing-streak-799504cfa27dbe3ee8595d3ebe330154",
  //     "urlToImage": "https://dims.apnews.com/dims4/default/3fa8481/2147483647/strip/true/crop/3979x2238+0+207/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fdc%2Fa3%2Fb0816ed6aa9136f5e8e1ec41259f%2F909a331ca83e4649b663c35fa61c6b4b",
  //     "publishedAt": "2023-12-29T13:10:00Z",
  //     "content": "BOSTON (AP) The Pistons 28th loss in a row was unlike any of the many, many other defeats that came before it in what is now tied for the longest losing streak in NBA history.\r\nThe result was the sam… [+4193 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Sports Illustrated"
  //     },
  //     "author": "Michael Fabiano",
  //     "title": "Start ’Em, Sit ’Em Quarterbacks Fantasy Football Week 17: Dak Prescott Delivers on Saturday Night - Sports Illustrated",
  //     "description": "The Cowboys’ quarterback has a plus matchup at home vs. the Lions.",
  //     "url": "https://www.si.com/fantasy/2023/12/27/start-em-sit-em-week-17-quarterbacks-2023",
  //     "urlToImage": "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAzMTkxMDA1MzU5NjQ1ODc4/qb_startsit_video_week17.jpg",
  //     "publishedAt": "2023-12-27T12:58:00Z",
  //     "content": "Start ‘Em, Sit ‘Em is the ultimate look at the best and worst matchups based on a PPR scoring system in fantasy football. This column will not cover the elite players in the NFL like Patrick Mahomes,… [+5390 chars]"
  //   }
  // ]
  constructor(props){
    super(props);
    this.state={
      articles: [],
      loading: false,
      page:1
      

    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsPan` 
  }
capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9534f0a896ee43a582a84bb41e3e13c8&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData) ;
    this.setState({articles:parsedData.articles})

  }
  handlePrevClick= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9534f0a896ee43a582a84bb41e3e13c8&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData) ;
   this.setState({
    page:this.state.page-1,
    articles:parsedData.articles
   })
    

  }
  handleNextClick= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9534f0a896ee43a582a84bb41e3e13c8&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData) ;
   this.setState({
    page:this.state.page+1,
    articles:parsedData.articles
   })
    
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsPan-Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        <loading/>
        
      <div>
        <div className="row">
        {this.state.articles.map((element)=>{
          return  <div className="col-md-4 " key={element.url} >
          <NewsItem title={element.title} discription={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>



})}
             
  
        
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark " onClick={this.handlePrevClick}> &larr; Previous</button>
        <button type="button" class="btn btn-dark " onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
      </div>
      </div>
    )
  }
}

export default news
