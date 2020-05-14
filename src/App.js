import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {

  state = {
    view: "articles",
    mode: "light",
    articles: articles,
  }

  switchView = (event) => {
    console.log("SWITCH VIEW");
    if(this.state.view === "articles"){
      this.setState({view: "list"});
      event.target.innerText = "Switch to Articles View";
    }
    else{
      this.setState({view: "articles"});
      event.target.innerText = "Switch to List View";
    }
  }

  switchMode = (event) => {
    console.log("SWITCH MODE!!!!");
    if(this.state.mode === "light"){
      this.setState({mode: "dark"});
      event.target.innerText = "Switch to Light Mode";
    }
    else{
      this.setState({mode: "light"});
      event.target.innerText = "Switch to Dark Mode";
    }
  }

  renderArticles = () => {
    return this.state.articles.map(article => {
      return <ArticleCard 
              mode={this.state.mode}
              key={article.id} 
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              />
    })
  }

  renderList = () => {
    return this.state.articles.map(article => {
      return <ArticleItem
              mode={this.state.mode}
              key={article.id} 
              title={article.title}
              />
    })
  }

  render(){
    return (
      <div className={this.state.mode}>
        <button onClick={this.switchMode}>Switch to Dark Mode</button>
        <button onClick={this.switchView}>Switch to List View</button>
        <div className="cards">
          {this.state.view === "articles"
            ? this.renderArticles()
            : this.renderList()
          }
        </div>
      </div>
    );
  }
}

export default App;
