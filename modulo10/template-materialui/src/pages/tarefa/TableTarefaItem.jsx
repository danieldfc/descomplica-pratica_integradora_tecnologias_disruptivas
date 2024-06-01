import { useCallback } from 'react'
import { Button, TableCell, TableRow } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

export default function TableTarefaItem({
  tarefa,
  setTarefas,
  setOpenEditar,
  setTarefaSelecionada,
  ...rest
}) {
  const toggleModalEditarTarefa = useCallback(() => {
    setOpenEditar()
    setTarefaSelecionada(tarefa)
  }, [setTarefaSelecionada, tarefa, setOpenEditar])

  const handleDeletar = useCallback(() => {
    setTarefas(tarefas => tarefas.filter(t => t.idTarefa !== tarefa.idTarefa))
  }, [tarefa.idTarefa, setTarefas])

  return (
    <>
      <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        {...rest}
      >
        <TableCell component="th" scope="row">
          {tarefa.idTarefa}
        </TableCell>
        <TableCell component="th" scope="row">
          {tarefa.tituloTarefa}
        </TableCell>
        <TableCell align="right">{tarefa.descricaoTarefa}</TableCell>
        <TableCell align="right">{tarefa.inicioTarefa}</TableCell>
        <TableCell align="right">{tarefa.fimTarefa}</TableCell>
        <TableCell align="right">{tarefa.statusTarefa}</TableCell>
        <TableCell align="right">{tarefa.recursoTarefa}</TableCell>
        <TableCell align="center">
          <Button
            variant="contained"
            color="success"
            onClick={toggleModalEditarTarefa}
          >
            <EditIcon fontSize="small" />
          </Button>
        </TableCell>
        <TableCell align="center">
          <Button variant="contained" color="error" onClick={handleDeletar}>
            <DeleteIcon fontSize="small" />
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}
