import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  telefono: DS.attr('string'),
  mail: DS.attr('string'),

  eventos: DS.hasMany('registro-evento')
});
