import InfoIcon from '@mui/icons-material/Info'

const NotFoundTarefa = () => {
  return (
    <div style={style}>
      <InfoIcon color="info" />
      <h3 style={style.title}>Não foram encontradas tarefas</h3>
    </div>
  )
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20
}

export default NotFoundTarefa
