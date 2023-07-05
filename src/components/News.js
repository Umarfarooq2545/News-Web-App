import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "science",
  };

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      });
    
  };

  capitalizeFirstLetter= (str)=> {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  
    return capitalized;
  }

  static PropsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: "true",
      page: 1,
      totalResults:0,
    };
    document.title = "News-Monkey -"+this.capitalizeFirstLetter(this.props.category) 
  }

  // handleNextClick = async()=>{
  //   console.log("next");
  //   let url = `https://newsapi.org/v2/top-headlines?country=sa&apiKey=764b43ce71fb4c6583c5503a7cf6de8c&page${this.state.page+1}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     page: this.state.page+1,
  //     articles: parsedData.articles,
  //   })
  // }

  // handlePrevClick = async ()=>{
  //   console.log("pre");
  //   let url = `https://newsapi.org/v2/top-headlines?country=sa&apiKey=764b43ce71fb4c6583c5503a7cf6de8c&page${this.state.page-1}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     page: this.state.page-1,
  //     articles: parsedData.articles,
  //   })

  // }

  // async componentDidMount(){
  //   let url = "https://newsapi.org/v2/top-headlines?country=sa&apiKey=764b43ce71fb4c6583c5503a7cf6de8c&page=1";
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({articles: parsedData.articles})

  // }

  async updatenews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=764b43ce71fb4c6583c5503a7cf6de8c&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log("umar");
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading:false
    // })
    this.updatenews();
  }

  // handlePrevClick = async () => {
  //   // console.log("Previous");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=764b43ce71fb4c6583c5503a7cf6de8c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading:true})
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json()
  //   // console.log(parsedData);
  //   // this.setState({
  //   //     page: this.state.page - 1,
  //   //     articles: parsedData.articles,
  //   //     loading:false
  //   // })

  //   this.setState({ page: this.state.page - 1 });
  //   this.updatenews();
  // };

  // handleNextClick = async () => {
  //   // console.log("Next");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=764b43ce71fb4c6583c5503a7cf6de8c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading:true})
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json()
  //   // console.log(parsedData);
  //   // this.setState({
  //   //   page: this.state.page + 1,
  //   //   articles: parsedData.articles,
  //   //   loading:false
  //   // })
  //   this.setState({ page: this.state.page + 1 });
  //   this.updatenews();
  // };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px", marginTop:"90px" }}>
          News Monkey-Top {this.capitalizeFirstLetter(this.props.category)} Headlines 
        </h1>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container my-3">

        <div className="row">
          {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;