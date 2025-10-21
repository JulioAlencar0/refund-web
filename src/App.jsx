import { useState } from "react";
import logo from "./assets/logo.svg";
import search from "./assets/search.svg";
import food from "./assets/food.svg";
import car from "./assets/car.svg";
import hotel from "./assets/hotel.svg";
import service from "./assets/service.svg";
import other from "./assets/other.svg";
import empty from "./assets/empty.svg";
import successIcon from "./assets/success.svg";
import alertIcon from "./assets/alert.svg";

function App() {
  const [refunds, setRefunds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [selectedRefund, setSelectedRefund] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 6;

  // estados do modal de criação
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");

  const icons = {
    Alimentação: food,
    Hospedagem: hotel,
    Transporte: car,
    Serviços: service,
    Outros: other,
  };

  // filtra as solicitações pelo nome
  const filteredRefunds = refunds.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRefunds.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRefunds = filteredRefunds.slice(startIndex, endIndex);

  const addRefund = () => {
    // validação
    if (!name.trim() || !category.trim() || !value.trim()) {
      alert("Preencha todos os campos antes de adicionar a solicitação!");
      return;
    }

    const newRefund = {
      id: Date.now(),
      name,
      category,
      value: parseFloat(value),
      icon: icons[category],
    };

    setRefunds([...refunds, newRefund]);
    setShowModal(false);
    setSuccessModal(true);
    setName("");
    setCategory("");
    setValue("");
  };

  const openRefundDetails = (refund) => {
    setSelectedRefund(refund);
    setViewModal(true);
  };

  const openConfirmModal = (refund) => {
    setSelectedRefund(refund);
    setConfirmModal(true);
  };

  const deleteRefund = () => {
    setRefunds(refunds.filter((r) => r.id !== selectedRefund.id));
    setConfirmModal(false);
    setViewModal(false);
    setSelectedRefund(null);
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
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reinicia a página ao pesquisar
          }}
        />
        <button className="search">
          <img src={search} alt="buscar" />
        </button>

        <div className="results">
          {currentRefunds.length === 0 ? (
            <div className="empty-state">
              <img src={empty} alt="" />
              <p className="emptyText">Nenhuma solicitação encontrada!</p>
              <p className="emptyText">
                Adicione uma nova solicitação para começar.
              </p>
            </div>
          ) : (
            currentRefunds.map((item) => (
              <div
                key={item.id}
                className="refund-item"
                onClick={() => openRefundDetails(item)}
              >
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

      {/* MODAL NOVA SOLICITAÇÃO */}
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

            <div className="modal-buttons column">
              <button onClick={addRefund}>Adicionar</button>
              <button onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE SUCESSO */}
      {successModal && (
        <div className="modal-backdrop">
          <div className="modal" style={{ backgroundColor: "#f7f7f7" }}>
            <img src={successIcon} alt="Sucesso" style={{ width: "60px" }} />
            <h2>Solicitação enviada com sucesso!</h2>
            <p>
              Agora é apenas aguardar. Sua solicitação será analisada e em breve
              o setor financeiro irá entrar em contato com você.
            </p>
            <div className="modal-buttons column">
              <button
                onClick={() => {
                  setSuccessModal(false);
                  setShowModal(true);
                }}
              >
                Nova solicitação
              </button>
              <button
                onClick={() => {
                  setSuccessModal(false);
                }}
              >
                Ver solicitações
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE DETALHES */}
      {viewModal && selectedRefund && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Detalhes da Solicitação</h2>
            <h5>Dados da despesa para reembolso.</h5>

            <p>NOME DA SOLICITAÇÃO</p>
            <input type="text" value={selectedRefund.name} disabled />

            <div className="row">
              <div className="field">
                <p>CATEGORIA</p>
                <select value={selectedRefund.category} disabled>
                  <option>{selectedRefund.category}</option>
                </select>
              </div>

              <div className="field">
                <p>VALOR</p>
                <input
                  type="text"
                  value={`R$ ${selectedRefund.value
                    .toFixed(2)
                    .replace(".", ",")}`}
                  disabled
                />
              </div>
            </div>

            <div className="modal-buttons column">
              <button
                className="delete"
                onClick={() => openConfirmModal(selectedRefund)}
              >
                Excluir solicitação
              </button>
              <button onClick={() => setViewModal(false)}>Fechar</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE CONFIRMAÇÃO */}
      {confirmModal && selectedRefund && (
        <div className="modal-backdrop">
          <div className="modal" style={{ backgroundColor: "#f7f7f7" }}>
            <img src={alertIcon} alt="Atenção" style={{ width: "60px" }} />
            <h2>Confirmação de exclusão</h2>
            <p>Tem certeza de que deseja excluir esta solicitação?</p>
            <div className="modal-buttons column">
              <button onClick={deleteRefund} className="delete">
                Excluir
              </button>
              <button onClick={() => setConfirmModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
