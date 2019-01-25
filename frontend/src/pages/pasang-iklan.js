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
  content: contentFormStyle(theme),
  help: {
    ...tw`flex justify-between`,
    '& > :first-child': tw`mr-3`
  }
})

const Help = withStyles(styles)(
  ({ classes, text, length, maxLength }) => (
    <span className={classes.help}>
      <span>{text}</span>
      <span>{length} / {maxLength}</span>
    </span>
  )
)

class PasangIklanPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      desc: '',
    }
  }

  onTitleChange = e => {
    this.setState({ title: e.target.value })
  }

  onDescChange = e => {
    this.setState({ desc: e.target.value })
  }

  render () {
    const { classes, intl } = this.props
    const { title, desc } = this.state
    return (
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
              inputProps={{ maxLength: 70 }}
              value={title}
              onChange={this.onTitleChange}
              helperText={
                <Help
                  text={intl.formatMessage(messages.titleHelp)}
                  length={title.length}
                  maxLength={70}
                />
              }
            />
            <TextField
              label={intl.formatMessage(messages.desc)}
              multiline
              rows={5}
              rowsMax={20}
              fullWidth
              margin='normal'
              inputProps={{ maxLength: 4000 }}
              value={desc}
              onChange={this.onDescChange}
              helperText={
                <Help
                  text={intl.formatMessage(messages.descHelp)}
                  length={desc.length}
                  maxLength={4000}
                />
              }
            />
          </div>
        </div>
      </Layout>
    )
  }
}

PasangIklanPage.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
}

export default compose(
  withStyles(styles),
  injectIntl
)(PasangIklanPage)