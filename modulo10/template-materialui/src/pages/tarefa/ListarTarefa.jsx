import { useState, useCallback } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'

import CriarTarefa from './CriarTarefa'
import TableTarefaItem from './TableTarefaItem'
import EditarTarefa from './EditarTarefa'
import NotFoundTarefa from './NotFoundTarefa'
import { enumRecursoTarefa, enumStatusTarefa } from './enums'

// A função abaixo é usada para criar o array contendo os dados iniciais da listagem de tarefas.
function createData(
  idTarefa,
  tituloTarefa,
  descricaoTarefa,
  inicioTarefa,
  fimTarefa,
  statusTarefa,
  recursoTarefa
) {
  return {
    idTarefa,
    tituloTarefa,
    descricaoTarefa,
    inicioTarefa,
    fimTarefa,
    statusTarefa,
    recursoTarefa
  }
}

const ListarTarefa = () => {
  const [open, setOpen] = useState(false)
  const [openEditar, setOpenEditar] = useState(false)
  const [tarefa, setTarefa] = useState(null)
  const [tarefas, setTarefas] = useState([
    createData(
      1,
      'Tarefa 1',
      'Descrição da Tarefa 1',
      '2022-01-01',
      '2022-01-02',
      enumStatusTarefa.concluded,
      enumRecursoTarefa.recurso1
    ),
    createData(
      2,
      'Tarefa 2',
      'Descrição da Tarefa 2',
      '2022-01-03',
      '2022-01-04',
      enumStatusTarefa.inProgress,
      enumRecursoTarefa.recurso2
    ),
    createData(
      3,
      'Tarefa 3',
      'Descrição da Tarefa 3',
      '2022-01-04',
      '2022-01-05',
      enumStatusTarefa.inProgress,
      enumRecursoTarefa.recurso3
    ),
    createData(
      4,
      'Tarefa 4',
      'Descrição da Tarefa 4',
      '2022-01-05',
      '2022-01-06',
      enumStatusTarefa.inProgress,
      enumRecursoTarefa.recurso1
    ),
    createData(
      5,
      'Tarefa 5',
      'Descrição da Tarefa 5',
      '2022-01-06',
      '2022-01-07',
      enumStatusTarefa.inProgress,
      enumRecursoTarefa.recurso2
    ),
    createData(
      6,
      'Tarefa 6',
      'Descrição da Tarefa 6',
      '2022-01-07',
      '2022-01-08',
      enumStatusTarefa.todo,
      enumRecursoTarefa.recurso3
    )
  ])
  const toggleModal = useCallback(() => setOpen(modalOpen => !modalOpen), [])
  const toggleModalEditar = useCallback(() => {
    setTarefa(null)
    setOpenEditar(modalOpen => !modalOpen)
  }, [])

  return (
    <>
      <Card>
        <CardHeader title="Tarefas" subheader="Listagem de Tarefas" />
        <CardActions>
          <Button size="small" variant="contained" onClick={toggleModal}>
            Criar Tarefa
          </Button>
        </CardActions>
        <CardContent>
          {tarefas.length !== 0 ? (
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Título</TableCell>
                    <TableCell align="right">Descrição</TableCell>
                    <TableCell align="right">Data de Início</TableCell>
                    <TableCell align="right">Data de Finalização</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Recurso</TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tarefas.map((row, indice) => (
                    <TableTarefaItem
                      key={indice}
                      tarefa={row}
                      setOpenEditar={toggleModalEditar}
                      setTarefaSelecionada={setTarefa}
                      setTarefas={setTarefas}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <NotFoundTarefa />
          )}
        </CardContent>
      </Card>
      <div>
        <Modal
          open={open}
          onClose={toggleModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <CriarTarefa
              handleClose={toggleModal}
              tarefas={tarefas}
              setTarefas={setTarefas}
            />
          </div>
        </Modal>
      </div>
      {!!tarefa && (
        <div>
          <Modal
            open={openEditar}
            onClose={toggleModalEditar}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <EditarTarefa
              handleCloseEditar={toggleModalEditar}
              tarefa={tarefa}
              setTarefas={setTarefas}
            />
          </Modal>
        </div>
      )}
    </>
  )
}

export default ListarTarefa
