import React, { Component } from "react";
import './style.css'
import Pdf from '../Pdf'

class Form extends Component {
  state = {
    jobTitle: '',
    salary: '',
    activities: '',
    benefits: '',
    processSteps: '',
    skills: '',
    experienceRequired: '',
    observations: '',
    jobSubmitted: false
  }

  onChange = input => event => {
    this.setState({
      [input]: event.target.value,
    })
  }

  submitForm = (e) => {
    if (!this.state.jobTitle || !this.state.salary || !this.state.activities || !this.state.benefits || !this.state.processSteps || !this.state.skills ||
      !this.state.experienceRequired) {
      alert("Todos os campos obrigatórios precisam ser preenchidos!")
      e.preventDefault()
    } else {
      this.setState({
        jobSubmitted: true
      })
    }
  }

  render() {
    return (
      <div className="job-form">
        <h1>Formulário para nova vaga</h1>

        {!this.state.submitForm ?
          (
            <>
              <form>
                <div className="form-group">
                  <label htmlFor="job-title">Título do Cargo</label>
                  <input onChange={this.onChange('jobTitle')} type="text" className="form-control " id="job-title" placeholder="Exemplo: Auxiliar de Confeiteiro" required />
                </div>
                <div className="form-group">
                  <label htmlFor="job-salary">Salário</label>
                  <input onChange={this.onChange('salary')} type="text" className="form-control " id="job-salary" placeholder="Exemplo: R$ 1800,00" required />
                </div>
                <div className="form-group">
                  <label htmlFor="job-activities">Atividades que o cargo exerce</label>
                  <textarea onChange={this.onChange('activities')} className="form-control" id="job-activities" rows="3" required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="job-benefits">Benefícios do cargo</label>
                  <textarea onChange={this.onChange('benefits')} className="form-control" id="job-benefits" rows="3" required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="process-steps">Etapas do processo</label>
                  <textarea onChange={this.onChange('processSteps')} className="form-control" id="process-steps" rows="3" required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="job-skills">Habilidades Necessárias</label>
                  <textarea onChange={this.onChange('skills')} className="form-control" id="job-job-skills" rows="3" required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="job-experience">Experiência necessária</label>
                  <input onChange={this.onChange('experienceRequired')} type="text" className="form-control " id="job-experience" placeholder="Exemplo: 1 ano" required />
                </div>
                <div className="form-group">
                  <label htmlFor="job-observations">Observações extras</label>
                  <textarea onChange={this.onChange('observations')} className="form-control" id="job-observations" rows="3"></textarea>
                </div>
              </form>
              <Pdf title={this.state.jobTitle} 
                salary={this.state.salary}
                activities={this.state.activities}
                benefits={this.state.benefits}
                processSteps={this.state.processSteps}
                skills={this.state.skills}
                experienceRequired={this.state.experienceRequired}
                observations={this.state.observations} />
            </>
          ) : (
            <>
            </>
          )
        }
      </ div>
    )
  }
}

export default Form