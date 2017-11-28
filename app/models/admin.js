import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  correo: DS.attr('string'),
  privilegio: DS.attr('string'),

  salones: DS.hasMany('salon')
});
