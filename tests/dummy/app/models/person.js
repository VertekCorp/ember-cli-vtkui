import EmberObject from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  firstName: {
    debounce: 300,
    validators: [
      validator('presence', true),
      validator('length', { min: 2 })
    ]
  },
  lastName: {
    debounce: 300,
    validators: [
      validator('presence', true),
      validator('length', { min: 2 })
    ]
  },
  bday: {
    debounce: 300,
    validators: [
      validator('presence', true)
    ]
  },
  robot: validator('presence', true),
  notes: validator('presence', true)
});


export default EmberObject.extend(Validations, {
  firstName: null,
  middleName: null,
  lastName: null,
  bday: null,
  robot: null,
  likesCats: null
});
