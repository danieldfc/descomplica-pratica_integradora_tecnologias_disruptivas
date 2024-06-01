import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import logo from '../assets/logo.svg'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img style={styleLogo} src={logo} alt="Gerenciador de projetos" />
          <Typography
            style={style}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Gerenciamento de projetos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const style = {
  lineHeight: '1'
}

const styleLogo = {
  width: '32px',
  marginRight: '16px'
}

export default Header
