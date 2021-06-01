import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

class ContentMetaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'form',
      newLibraryName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveLibrary = this.saveLibrary.bind(this);
  }

  // form validation rule
  componentDidMount() {
    ValidatorForm.addValidationRule('isLibraryNameUnique', (value) =>
      this.props.contents.every(
        ({ libraryName }) => libraryName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  //saving form data
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // show emoji picker
  showEmojiPicker = () => {
    this.setState({ stage: 'emoji' });
  };

  //saving new library
  saveLibrary = (emoji) => {
    const newLibrary = {
      libraryName: this.state.newLibraryName,
      emoji: emoji.native,
    };
    this.props.handleSave(newLibrary);
  };

  render() {
    const { newLibraryName, stage } = this.state;
    const { hideForm } = this.props;
    return (
      <div>
        <Dialog open={stage === 'emoji'} onClose={hideForm}>
          <Picker title='Pick your emoji' onSelect={this.saveLibrary} />
        </Dialog>
        <Dialog
          open={stage === 'form'}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
          onClose={hideForm}
        >
          <DialogTitle id='form-dialog-title'>
            Choose A Library Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please eneter a name for you library. Make sure it's unique
              </DialogContentText>

              <TextValidator
                label='Library Name'
                value={newLibraryName}
                name='newLibraryName'
                fullWidth
                margin='normal'
                onChange={this.handleChange}
                validators={['required', 'isLibraryNameUnique']}
                errorMessages={[
                  'Librray Name is Required',
                  'Name is already being used',
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color='primary'>
                Cancel
              </Button>
              <Button variant='contained' color='secondary' type='submit'>
                Save Library
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default ContentMetaForm;
