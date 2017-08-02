import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';

const styles = {
  fontSize: '2rem',
  fontWeight: '200',
  color: '#34495e'
}

const AddressSearch = props => (
  <Form>
    <FormGroup>
      <Label for="address" style={styles}>Address</Label>
      <Input type="text" name="address" value={props.addressValue}
        onChange={props.adressHandler} placeholder="ex. 123 Fake St Orlando" />
      <FormText color="muted">
          Please enter your street number and city separated by spaces as shown in the example above.
      </FormText>
    </FormGroup>
  </Form>
);

AddressSearch.propsTypes = {
  addressValue: PropTypes.string.isRequired,
  adressHandler: PropTypes.func.isRequired,
}

export default AddressSearch;