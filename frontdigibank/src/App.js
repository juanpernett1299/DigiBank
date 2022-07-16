import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import Tabla from './components/Tabla/Tabla';
import { Modal, TextField, Button } from '@material-ui/core'
import { FilterList} from '@material-ui/icons'
import Filtros from './components/Filtros/Filtros';
import logo from './resources/2logo.png'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#35B639'
    },
    secondary: {
      main: '#8a958a'
    },
  },
});

function App() {
  const [tProd, setTprod] = useState('')
  const [seg, setSeg] = useState('')
  const [tBien, setTbien] = useState('')

  let url = `http://localhost:3002/productos?tprod=${tProd}&seg=${seg}&tBien=${tBien}`
  let urlput = "http://localhost:3002/productos/"

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([false])
  const [putModal, setPutModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [idProd, setIdProd] = useState();
  const [name, setName] = useState();

  const getData = async () => {
    await axios.get(url)
      .then(response => {
        setData(response.data)
      });
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const showPutModal = () => {
    setPutModal(!putModal);
  }

  const showFilterModal = () => {
    setFilterModal(!filterModal)
  }

  const modificarNombre = async () => {
    await axios.put(urlput + idProd, {
      nombreProd: name
    })
    getData()
    showPutModal()
  }

  const bodyModal = (
    <div className='modal'>
      <h3>Modificar nombre</h3>
      <TextField color='primary' className='textfield' label={"Nombre"} onChange={handleChange} />
      <div align="right">
        <Button color="primary" onClick={() => modificarNombre()}>Modificar</Button>
        <Button color="secondary" onClick={() => showPutModal()}>Cancelar</Button>
      </div>
    </div>
  )

  useEffect(() => {
    setIsLoading(true)
    getData();
    setIsLoading(false)
  }, [url])

  return (
    <div className="App">
      <div className='all-container'>
        <img className='logo' src={logo} alt="logo" />
        {isLoading ? (<h1>Cargando...</h1>) :
          <div className='tab-container'>
            <div className='filter-action'><h4>Filtrar</h4><FilterList onClick={() => showFilterModal()} /></div>
            <Tabla data={data} setModalState={showPutModal} setIdProd={setIdProd} />
          </div>
        }
      </div>
      <ThemeProvider theme={theme}>
        <Modal className='modal-container'
          open={putModal}
          onClose={showPutModal}
        >
          {bodyModal}
        </Modal>
        <Modal className='modal-container'
          open={filterModal}
          onClose={showFilterModal}
        >
          <Filtros
            data={data}
            tBien={tBien}
            seg={seg}
            tProd={tProd}
            setTprod={setTprod}
            setTbien={setTbien}
            setSeg={setSeg}
            showFilterModal={showFilterModal} />
        </Modal>
      </ThemeProvider>

    </div>
  );
}

export default App;
