import React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './styles/ContentFormStyles';

class ContentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      desc: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  // Form validators
  componentDidMount() {
    ValidatorForm.addValidationRule('isContentNameUnique', (value) =>
      this.props.contents.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isContentImageUrlUnique', (value) =>
      this.props.contents.every(
        ({ imageUrl }) => imageUrl.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  //Saving Form Data
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  //submit
  submit = () => {
    const newContent = {
      name: this.state.name,
      imageUrl: this.state.imageUrl,
      desc: this.state.desc,
    };
    this.props.handleSubmit(newContent);
    this.setState({
      name: '',
      imageUrl: '',
      desc: '',
    });
  };

  render() {
    const { libraryFull, classes } = this.props;
    return (
      <div>
        <ValidatorForm
          ref='form'
          onSubmit={this.submit}
          className={classes.form}
        >
          <TextValidator
            className={classes.input}
            variant='filled'
            margin='normal'
            id='standard-secondary'
            label='Name'
            color='secondary'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            validators={['required', 'isContentNameUnique']}
            errorMessages={[
              'This field is required',
              'Content name should be unique',
            ]}
          />
          <TextValidator
            className={classes.input}
            variant='filled'
            margin='normal'
            id='standard-secondary'
            label='Image URL'
            color='secondary'
            name='imageUrl'
            onChange={this.handleChange}
            value={this.state.imageUrl}
            validators={['required', 'isContentImageUrlUnique']}
            errorMessages={[
              'This field is required',
              'Image Url should be unique',
            ]}
          />
          <TextValidator
            className={classes.input}
            variant='filled'
            margin='normal'
            id='standard-secondary'
            label='Description'
            color='secondary'
            name='desc'
            onChange={this.handleChange}
            value={this.state.desc}
          />
          <Button
            variant='contained'
            type='submit'
            disabled={libraryFull}
            color='primary'
            className={classes.addLibrary}
          >
            {libraryFull ? 'Library Full' : 'Add Content'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ContentForm);
