import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Paging from './Paging';
import PokeList from '../PokeList/PokeList';
import Search from './Search';
import './App.scss';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />

        <section className="search-options">
          <Search onSearch={this.handleSearch} />
          {/* <Paging
            page={page}
            onPrev={this.handlePrevPage}
            onNext={this.handleNextPage} /> */}
        </section>
        <main></main>
        <Footer />
      </div>
    );
  }

}

export default App;
