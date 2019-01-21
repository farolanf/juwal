import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

import { API_HOST } from '$src/const'

const styles = () => ({
  buttonIcon: tw`text-xl mr-2` 
})

const LoginBox = ({ open, onClose, classes }) => {
  const [mode, setMode] = useState('login')
  const otherMode = mode === 'login' ? 'register' : 'login'  

  useEffect(() => {
    open && setMode('login')
  }, [open])

  function toggleMode () {
    setMode(otherMode)
  }

  function handleSubmit (e) {
    e.preventDefault()
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth='xs'>
      {mode === 'login' ? (
        <FormattedMessage id='login' defaultMessage='Login'>
          {text => <DialogTitle>{text}</DialogTitle>}
        </FormattedMessage>
      ) : (
        <FormattedMessage id='register' defaultMessage='Register'>
          {text => <DialogTitle>{text}</DialogTitle>}
        </FormattedMessage>
      )}
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <TextField label='Email' placeholder='Email address' fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label='Password' placeholder='Enter password' fullWidth margin='normal' />
            </Grid>
            {mode === 'register' && (
              <Grid item xs={12}>
                <TextField label='Password confirm' placeholder='Confirm password' fullWidth margin='normal' />
              </Grid>
            )}
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={12} style={tw`mt-6`}>
              <Typography variant='button'>
                <FormattedMessage
                  id='login.with'
                  defaultMessage='Or login with'
                />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant='contained'
                color='secondary'
                href={API_HOST + '/connect/facebook'}
              >
                <FontAwesomeIcon icon={faFacebook} className={classes.buttonIcon} />
                Facebook
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant='contained'
                color='secondary'
                href={API_HOST + '/connect/google'}
              >
                <FontAwesomeIcon icon={faGoogle} className={classes.buttonIcon} />
                Google
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={onClose}>
            <FormattedMessage id='cancel' defaultMessage='Cancel' />
          </Button>
          <Button color='primary' onClick={toggleMode}>
            {mode === 'login' ? (
              <FormattedMessage id='register' defaultMessage='Register' />
            ) : (
              <FormattedMessage id='login' defaultMessage='Login' />
            )}
          </Button>
          <Button variant='contained' color='primary' type='submit'>
            {mode === 'login' ? (
              <FormattedMessage id='login' defaultMessage='Login' />
            ) : (
              <FormattedMessage id='register' defaultMessage='Register' />
            )}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

LoginBox.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoginBox)