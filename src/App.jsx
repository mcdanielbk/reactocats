import React, { Component } from 'react'
import { Footer } from './Footer';
import { Header } from './Header';

class Octocat extends Component {
  render() {
    return (
      <article>
      <figure>
        <a href={this.props.link}>
           <img
            src={this.props.image}
            width="400"
            height="400"
            alt= {this.props.name}
          />
        </a>
      </figure>
      <ul>
        <li>
          #{this.props.number}
          <a href={this.props.link}>
            <strong>{this.props.name}</strong>
            </a>
          
        </li>
        <li>
          <a href={this.props.authorlink}
            ><img
              src={this.props.authorpic}
              width="24"
              height="24"
              alt= {this.props.authorname}
            />
          </a>
        </li>
      </ul>
    </article>
        
      
    );
  }
}


class App extends Component {
  render() {
    return(
  <>
      <Header/>
​
  <main>
    <Octocat name = "Terracottocat" 
             link ="https://octodex.github.com//terracottocat/"
             image = "https://octodex.github.com//images/Terracottocat_Single.png" 
             number= "149"
             authorlink= "https://github.com/chubbmo"
             authorpic = "https://github.com/chubbmo.png"
             authorname = "chubbmo"  />

    
    <Octocat name = "Octogatos" 
             link ="https://octodex.github.com//octogatos/"
             image = "https://octodex.github.com//images/Octogatos.png" 
             number= "143"
             authorlink= "https://github.com/cameronfoxly"
             authorpic = "https://github.com/cameronfoxly.png"
             authorname = "cameronfoxly"  />     

    <Octocat name = "Sentrytocat" 
             link ="https://octodex.github.com//sentrytocat/"
             image ="https://octodex.github.com//images/Sentrytocat_octodex.jpg" 
             number= "143"
             authorlink= "https://github.com/cameronmcefee"
             authorpic = "https://github.com/cameronmcefee.png"
             authorname = "cameronmcefee"  />        
​   
​    <Octocat name = "Boxercat" 
             link = "https://octodex.github.com//boxertocat/"
             image ="https://octodex.github.com//images/boxertocat_octodex.jpg"
             number= "141"
             authorlink= "https://github.com/rubyjazzy"
             authorpic = "https://github.com/rubyjazzy.png"
             authorname = "rubyjazzy"  />   

    
    
    <Octocat name = "Dinotocat" 
             link = "https://octodex.github.com//dinotocat/"
             image ="https://octodex.github.com//images/dinotocat.png"
             number= "138"
             authorlink= "https://github.com/heyhayhay"
             authorpic = "https://github.com/heyhayhay.png"
             authorname = "heyhayhay"  />    


    <Octocat name = "Spidertocat" 
             link = "https://octodex.github.com//spidertocat/"
             image ="https://octodex.github.com//images/spidertocat.png"
             number= "88"
             authorlink= "https://github.com/jeejkang"
             authorpic = "https://github.com/jeejkang.png"
             authorname = "jeejkang"  />    

    <Octocat name = "Terracottocat" 
             link ="https://octodex.github.com//terracottocat/"
             image = "https://octodex.github.com//images/Terracottocat_Single.png" 
             number= "149"
             authorlink= "https://github.com/chubbmo"
             authorpic = "https://github.com/chubbmo.png"
             authorname = "chubbmo"  />

    <Octocat name = "Octogatos" 
             link ="https://octodex.github.com//octogatos/"
             image = "https://octodex.github.com//images/Octogatos.png" 
             number= "143"
             authorlink= "https://github.com/cameronfoxly"
             authorpic = "https://github.com/cameronfoxly.png"
             authorname = "cameronfoxly"  />    
    
   
  </main>
  <Footer/>
  </>
   );
  }
}

export default App
