import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  colonia: DS.attr('string'),
  calle: DS.attr('string'),
  numero: DS.attr('number'),
  cp: DS.attr('number'),

  //ciudad - estado
  //capacidad
  administradores: DS.hasMany('admin'),
  inventario: DS.belongsTo('inventario'),
  eventos: DS.hasMany('registro-evento')
});
