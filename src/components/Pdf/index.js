import React from "react";
import PDF from 'react-to-pdf';
import './style.css'

const ref = React.createRef();

const Pdf = (props) => {
  return (
    <>
      <h3>Após preencher o formulário, clique abaixo para salvar em PDF</h3>
      <div className="Form pdf-form" ref={ref}>
        <h1>{props.title}</h1>
        <p>Salário: <br/><span>{props.salary}</span></p>
        <p>Atividades: <br/><span>{props.activities}</span></p>
        <p>Benefícios: <br/><span>{props.benefits}</span></p>
        <p>Etapas do processo: <br/><span>{props.processSteps}</span></p>
        <p>Habilidades Necessárias: <br/><span>{props.skills}</span></p>
        <p>Experiência necessária: <br/><span>{props.experienceRequired}</span></p>
        <p>Observações extras (se preciso):<br/><span>{props.observations}</span></p>
      </div>

      <PDF targetRef={ref} filename={props.title}>
        {({ toPdf }) => <button onClick={toPdf} className="btn btn-info">Salvar como PDF</button>}
      </PDF>
    </>
  )
}

export default Pdf