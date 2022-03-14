import PageHeader from "./components/PageHeader";
import SearchBar from "./components/SearchBar";
import NameDisplay from "./components/NameDisplay";
import nameArr from "./data/NameData";
import PageFooter from "./components/PageFooter";

const names = nameArr.map(NameDisplay);

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      {SearchBar}
      {names}
      <PageFooter />
    </>
  );
}
export default App;
