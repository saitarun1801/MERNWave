
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import FilterSidebar from "./components/FilterSidebar";
import HeroSection from "./components/HeroSection";
import './App.css';

function App() {
  return (
    <>
      <Header />

      <main className="main-content">
        <HeroSection />

        <div className="filter-sort-row">
          <div className="left">
            <strong>3425 ITEMS</strong>
            <button className="toggle-filter">HIDE FILTER</button>
          </div>
          <div className="right">
            <select className="sort-dropdown">
              <option>RECOMMENDED</option>
              <option>NEWEST FIRST</option>
              <option>POPULAR</option>
              <option>PRICE : HIGH TO LOW</option>
              <option>PRICE : LOW TO HIGH</option>
            </select>
          </div>
        </div>

        <div className="page-content">
          <FilterSidebar />
          <ProductList />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
