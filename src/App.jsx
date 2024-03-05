import styles from "./App.module.sass";
import Header from "./components/Header/Header";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Pricing />
    </div>
  );
}

export default App;
