import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl'
import { compose } from 'lodash/fp'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import Layout from '$comp/layout'

import contentFormStyle from '$styles/content-form'

const messages = defineMessages({
  pageTitle: {
    id: 'ads.new.pageTitle',
    defaultMessage: 'New Ad'
  },
  title: {
    id: 'ads.new.title',
    defaultMessage: 'Ad title'
  },
  titleHelp: {
    id: 'ads.new.titleHelp',
    defaultMessage: 'Create a short concise title describing the product.'
  },
  desc: {
    id: 'ads.new.desc',
    defaultMessage: 'Ad description'
  },
  descHelp: {
    id: 'ads.new.descHelp',
    defaultMessage: 'Describe the product in detail, with minus, if any. Be honest, people will like it.'
  }
})

const styles = theme => ({
  content: {
    ...contentFormStyle(theme),
    ...tw`flex flex-col`
  },
  help: {
    ...tw`flex justify-between`,
    '& > :first-child': tw`mr-3`
  }
})

const PasangIklanPage = ({ classes, intl }) => (
  <Layout>
    <div className={classes.content}>
      <div>
        <Typography variant='h4' gutterBottom>
          <FormattedMessage {...messages.pageTitle} />
        </Typography>
        <TextField
          label={intl.formatMessage(messages.title)}
          fullWidth
          margin='normal'
          helperText={intl.formatMessage(messages.titleHelp)}
        />
        <TextField
          label={intl.formatMessage(messages.desc)}
          multiline
          rows={5}
          rowsMax={20}
          fullWidth
          margin='normal'
          helperText={intl.formatMessage(messages.descHelp)}
        />
        <TextField
          label='test'
          fullWidth
          error
          helperText={
            <div className={classes.help}>
              <span>Help text </span>
              <span>100 / 160</span>
            </div>
          }
        />
      </div>
    </div>
  </Layout>
)

PasangIklanPage.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.func.isRequired,
}

export default compose(
  withStyles(styles),
  injectIntl
)(PasangIklanPage)