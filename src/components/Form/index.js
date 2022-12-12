import React, { Component } from "react";
import './style.css'

class Form extends Component {
  state = {
    jobTitle: '',
    salary: '',
    activities: [],
    benefits: [],
    processSteps: [],
    skills: [],
    experienceRequired: '',
    jobSubmitted: false
  }

  render() {
    return (
      <div className="job-form">
        <h1>Formulário para nova vaga</h1>
        <form>
          <div class="form-group">
            <label for="job-title">Título do Cargo</label>
            <input type="text" class="form-control" id="job-title" placeholder="Exemplo: Auxiliar de Confeiteiro" />
          </div>
          <div class="form-group">
            <label for="job-salary">Salário</label>
            <input type="text" class="form-control" id="job-salary" placeholder="Exemplo: R$ 1800,00" />
          </div>
          <div class="form-group">
            <label for="job-activities">Atividades do cargo</label>
            <select multiple class="form-control" id="job-activities">
              <option>Atendimento ao público</option>
              <option>Monitorar estoques de ingredientes de panificação</option>
              <option>Preparar uma ampla variedade de produtos como bolos, cookies, tortas, pães, etc.</option>
              <option>Criar sobremesas novas e interessantes para renovar nossos cardápios e atrair o interesse dos clientes</option>
              <option>Decorar os doces usando diferentes glacês, coberturas, etc. para garantir uma apresentação bonita e estimulante</option>
              <option>Verificar a qualidade do material e a condição dos equipamentos e dispositivos usados na cozinha</option>
              <option>Orientar funcionários menos experientes</option>
              <option>Manter a organização da cozinha</option>
            </select>
          </div>
          <div class="form-group">
            <label for="job-benefits">Benefícios do Cargo</label>
            <select multiple class="form-control" id="job-benefits">
              <option>VA/VR</option>
              <option>Vale transporte</option>
              <option>Gympass</option>
              <option>Assistência médica</option>
              <option>Seguro de vida</option>
              <option>Day off no seu aniversário</option>
              <option>CLT</option>
              <option>PJ</option>
            </select>
          </div>
          <div class="form-group">
            <label for="process-step">Etapas da vaga</label>
            <select multiple class="form-control" id="process-step">
              <option>Análise do currículo</option>
              <option>Entrevista com o RH</option>
              <option>Entrevista com o gestor</option>
              <option>Teste</option>
              <option>Contratação</option>
            </select>
          </div>
          <div class="form-group">
            <label for="job-skills">Habilidades necessárias</label>
            <select multiple class="form-control" id="job-skills">
              <option>Criação de doces</option>
              <option>Criação de salgados</option>
              <option>Gestão de grupo</option>
              <option>Gestão de produtos</option>
              <option>Administração</option>
            </select>
          </div>
          <div class="form-group">
            <label for="job-experience">Experiência necessária</label>
            <input type="text" class="form-control" id="job-experience" placeholder="Exemplo: 1 ano" />
          </div>
          <div class="form-group">
            <label for="job-observations">Observações extras</label>
            <textarea class="form-control" id="job-observations" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-info">Enviar</button>
        </form>
      </ div>
    )
  }
}

export default Form