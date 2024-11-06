import React from 'react'

export default function ListadoEmpleados() {
  return (
        
    <div className='container'> 
        <div className="container text-center" style={{marginTop: "30px"}}>
            <h3>Sistema de recursos humanos</h3>
        </div>
        <table className="table table-striped table-hover aling-middle">
  <thead className='table-dark'>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Empledos</th>
      <th scope="col">Departamento</th>
      <th scope="col">Sueldo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    
  </tbody>
</table>
    </div>    
  )
}
