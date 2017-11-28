import DS from 'ember-data';

export default DS.Model.extend({
  totalPersonas: DS.attr('number'),
  noMesas: DS.attr('number'),
  noSillas: DS.attr('number'),
  colorMateles: DS.attr('string'),
  meseros: DS.attr('boolean'),
  noMeseros: DS.attr('number'),
  extras: DS.attr('array'), //Posible modelo
  especificaciones: DS.attr('string'),

  costo: DS.attr('number'), //computed

  registroEvento: DS.belongsTo('registro-evento')
});
