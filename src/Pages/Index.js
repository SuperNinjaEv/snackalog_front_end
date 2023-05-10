import Snacks from "../Components/Snacks";
import Categories from '../Components/Categories';

function Index() {
  return (
    <div className="Index">
      <Categories />
      <h2>Snacks-A-Hoy!</h2>
      <Snacks />
    </div>
  );
}

export default Index;
