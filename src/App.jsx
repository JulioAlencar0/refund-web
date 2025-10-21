import logo from "./assets/logo.svg";
import search from "./assets/search.svg";
import food from "./assets/food.svg"; 
import car from "./assets/car.svg";
import hotel from "./assets/hotel.svg";
import service from "./assets/service.svg";
import other from "./assets/other.svg";

function App() {
  const refunds = [
    { id: 1, name: "Rodrigo", category: "Alimentação", value: 34.78, icon: food },
    { id: 2, name: "Tamires", category: "Hospedagem", value: 1200, icon: hotel },
    { id: 3, name: "Lara", category: "Alimentação", value: 12.35, icon: food },
    { id: 4, name: "Elias", category: "Transporte", value: 47.65, icon: car },
    { id: 5, name: "Thiago", category: "Serviços", value: 99.9, icon: service },
    { id: 6, name: "Vinicius", category: "Outros", value: 25.89, icon: other },
  ];

  return (
    <div id="container">
      <div className="header">
        <img src={logo} alt="Logo" />
        <button className="btn1">Solicitações de reembolso</button>
        <button className="btn2">Nova solicitação</button>
      </div>

      <div className="content">
        <h1>Solicitações</h1>

      
          <input
            className="input"
            type="text"
            placeholder="Pesquisar pelo nome"
          />
          <button className="search">
            <img src={search} alt="buscar" />
          </button>
        

        <div className="results">
          {refunds.map((item) => (
            <div key={item.id} className="refund-item">
              <div className="left">
                <img src={item.icon} alt="" className="icon" />
                <div>
                  <p className="name">{item.name}</p>
                  <p className="category">{item.category}</p>
                </div>
              </div>
              <p className="value">
                R$ {item.value.toFixed(2).replace(".", ",")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
