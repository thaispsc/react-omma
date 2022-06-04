import { useEffect, useState } from "react";
import risotoab from "../../assets/risotoab.png";
import bolo from "../../assets/bolo-banana.png";
import tabule from "../../assets/tabule.png";
import moqueca from "../../assets/moqueca.png";
import "./styles.css";

interface Recipes {
  id: number;
  nome: string;
  img: string;
}
const recipes: Recipes[] = [
  { id: 1, nome: "risoto de abobora", img: risotoab },
  { id: 2, nome: "bolo de banana", img: bolo },
  { id: 3, nome: "tabule tradicional", img: tabule },
  { id: 4, nome: "moqueca", img: moqueca },
];

const ContentList: React.FC = () => {
  const [recipesList, setRecipes] = useState<Recipes[]>(recipes);
//  useEffect(()=> {
//      api.get("/recipes").then(res => setRecipes(res.data))
//  }, [])
  const handleAddRecipe = () => {
    setRecipes((oldRecipeList) => [...oldRecipeList, {
        id: oldRecipeList.length + 1,
        nome: "Gororoba",
        img: tabule
    }]);
  };

  return (
    <main className="content-container">
      <h1>Todas as receitas</h1>
      <div className="grid-container">
        {recipesList.map((recipeUnit) => (
          <div key={recipeUnit.id} className="grid-item">
            <div className="card-container">
              <img src={recipeUnit.img} alt="risoto" />
              <span>{recipeUnit.nome}</span>
              <button>Conferir</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleAddRecipe}>Adicionar</button>
    </main>
  );
};

export default ContentList;
