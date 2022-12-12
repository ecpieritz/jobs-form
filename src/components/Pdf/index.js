import React from "react";
import PDF from 'react-to-pdf';
import './style.css'

const ref = React.createRef();

const Pdf = (props) => {
  return (
    <>
      <h3>Após preencher o formulário, clique abaixo para salvar em PDF</h3>
      <div className="Form pdf-form" ref={ref}>
        <p>Vaga: <span>{props.title}</span></p>
        <p>Salário: <span>{props.salary}</span></p>
        <p>Atividades: <span>{props.activities}</span></p>
        <p>Benefícios: <span>{props.benefits}</span></p>
        <p>Etapas do processo: <span>{props.processSteps}</span></p>
        <p>Habilidades Necessárias: <span>{props.skills}</span></p>
        <p>Experiência necessária: <span>{props.experienceRequired}</span></p>
        <p>Observações extras (se preciso):<span>{props.observations}</span></p>
      </div>

      <PDF targetRef={ref} filename={props.title}>
        {({ toPdf }) => <button onClick={toPdf} className="btn btn-info">Salvar como PDF</button>}
      </PDF>
    </>
  )
}

export default Pdf