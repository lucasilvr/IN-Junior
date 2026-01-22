import Card from "./components/Card";
import CardPrincipal from "./components/CardPrincipal";
import Header from "./components/Header";
import fotoThais from "./assets/thaisgomes.jpg";
import fotoRicardo from "./assets/ricardosiqueira.jpg";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <CardPrincipal />

        <div className="cardsContainer">
          <Card
            nome="Thaís Gomes"
            cargo="Designer"
            fotoPerfil={fotoThais}
            texto={
               <>
                <p>Lorem ipsum</p>
                <p>
                  dolor sit amet. Ex laboriosam dolorem non tempore earum et
                  voluptatem suscipit ut cupiditate nisi est odit voluptates.
                  Nam magni amet ut ipsam molestiae aut facilis minus et quia
                  reiciendis sed excepturi rerum ex consequatur minima! Ex rerum
                  sunt et incidunt officia et veritatis deserunt. Sit soluta
                  laboriosam et incidunt sequi et eius fugiat est temporibus
                  similique rem illum natus sit unde eveniet.
                </p>
                <p>
                  Non quos omnis ut autem labore nam vero consequatur est porro
                  similique ad adipisci quisquam!
                </p>
              </>
            }
          />
          <Card
            nome="Ricardo Siqueira"
            cargo="Dev Back-end"
            fotoPerfil={fotoRicardo}
            texto={
              <>
                <p>Lorem ipsum</p>
                <p>
                  dolor sit amet. Ex laboriosam dolorem non tempore earum et
                  voluptatem suscipit ut cupiditate nisi est odit voluptates.
                  Nam magni amet ut ipsam molestiae aut facilis minus et quia
                  reiciendis sed excepturi rerum ex consequatur minima! Ex rerum
                  sunt et incidunt officia et veritatis deserunt. Sit soluta
                  laboriosam et incidunt sequi et eius fugiat est temporibus
                  similique rem illum natus sit unde eveniet.
                </p>
                <p>
                  Non quos omnis ut autem labore nam vero consequatur est porro
                  similique ad adipisci quisquam!
                </p>
              </>
            }
          />
        </div>
      </div>
    </>
  );
}
