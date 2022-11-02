import CustomNavbar from "./components/navbar"
import CustomFooter from './components/footer'
import DataTable from 'react-data-table-component';
import InstallModal from "./modals/install-modal";
import React from "react";
import { Container, Badge } from "react-bootstrap";

function Installation(){

  const [modal,setModal] = React.useState(false)
  const [installs, setInstalls] = React.useState([])
  const [install, setCurrentInstall] = React.useState()

  const columns = [
    {
      name: 'Id instalacion',
      selector: row => row.title,
    },
    {
      name: 'Trabajador asignado',
      selector: row => row.year,
    },
    {
      name: 'Fecha de instalacion',
      selector: row => '02/02/2022'
    },
    {
      name: 'Instalcion realizada',
      selector: row =><Badge variant={row.year ? "danger" : "success"} text="light">No programada</Badge> 
    },
    {
      name: 'Visualizar',
      selector: row => <button onClick={()=>{setModal(true)}} className="btn btn-info fa-solid fa-clipboard-list"/>
    },
  ];


  return (
    <div className="layout">
      <CustomNavbar/>
      <main>
        <InstallModal show={modal} onHide={()=>setModal(false)}/>
        <Container className="mt-5 mb-5">
          <div className="d-flex mb-4">
            <input className="form-control rounded-0" type="search" placeholder="Buscar instalaciones.." aria-label="Search"/>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input" id="instalaciones" type="checkbox"/>
            <label className="form-check-label" htmlFor="instalaciones">Instalaciones no realizadas</label>
          </div>
          <DataTable
            columns={columns}
            data={installs}
            pagination
            />
        </Container>
      </main>
      <CustomFooter/>
    </div>
  )
}

export default Installation
