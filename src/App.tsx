
import { PageHeader } from "./components/PageHeader";
//import { SearchBar } from "./components/SearchBar";
import { NameDisplay } from "./components/NameDisplay";
import { PageFooter } from "./components/PageFooter";

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      {/* <SearchBar /> */}
      <NameDisplay />
      <PageFooter/>
    </>
  )
}
export default App;
