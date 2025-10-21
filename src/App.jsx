import { useState } from "react";
import logo from "./assets/logo.svg";
import search from "./assets/search.svg";
import food from "./assets/food.svg";
import car from "./assets/car.svg";
import hotel from "./assets/hotel.svg";
import service from "./assets/service.svg";
import other from "./assets/other.svg";
import empty from "./assets/empty.svg";

function App() {
  const [refunds, setRefunds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(refunds.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRefunds = refunds.slice(startIndex, endIndex);

  //estados do modal
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("0,00");

  const icons = {
    Alimentação: food,
    Hospedagem: hotel,
    Transporte: car,
    Serviços: service,
    Outros: other,
  };

  const addRefund = () => {
    if (!name || !value) return; 
    const newRefund = {
      id: Date.now(),
      name,
      category,
      value: parseFloat(value),
      icon: icons[category],
    };
    setRefunds([...refunds, newRefund]);
    setShowModal(false);
    setName("");
    setCategory("");
    setValue("0,00");
  };

  return (
    <div id="container">
      <div className="header">
        <img src={logo} alt="Logo" />
        <button className="btn1">Solicitações de reembolso</button>
        <button className="btn2" onClick={() => setShowModal(true)}>
          Nova solicitação
        </button>
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
          {currentRefunds.length === 0 ? (
            <div className="empty-state">
              <img src={empty} alt="" />
              <p className="emptyText"> Nenhuma solicitação encontrada!</p>
              <p className="emptyText"> Adicione uma nova solicitação para começar.</p>
            </div>
          ) : (
            currentRefunds.map((item) => (
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
            ))
          )}

          {totalPages > 1 && (
            <div className="pagination">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
              >
                ←
              </button>
              <span>
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Nova Solicitação de Reembolso</h2>
            <h5>Dados da despesa para solicitar reembolso.</h5>
            <p>NOME DA SOLICITAÇÃO</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            
            <div className="row">
              <div className="field">
                <p>CATEGORIA</p>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Selecione</option> 
                  <option value="Alimentação">Alimentação</option>
                  <option value="Hospedagem">Hospedagem</option>
                  <option value="Transporte">Transporte</option>
                  <option value="Serviços">Serviços</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div className="field">
                <p>VALOR</p>
                <input
                  type="number"
                  placeholder="0,00"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-buttons">
              <button onClick={addRefund}>Adicionar</button>
              <button onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
