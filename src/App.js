import Header from './components/Header';
import { makeStyles } from "@mui/styles";
import ProductsList from './pages/ProductsList';
import Header2 from './components/Header2';
import Product from './pages/Product';

const useStyles = makeStyles({
  app: {
    background: '#E5E5E5'
  }
})
function App() {
  const classes= useStyles();
  return (
    <div className={classes.app}>
      <div style={{ paddingBottom: "40px" }}></div>
      {/* <Header /> */}
      <Header2 />
      <div style={{ paddingBottom: "40px" }}></div>
      <Product />
    </div>
  );
}

export default App;
