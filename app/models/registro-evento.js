import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  fecha: DS.attr('date'),
  horaInicio: DS.attr(), //verificar tipo de dato

  //Posibles modelos
  estado: DS.attr('string'),
  tipoEvento: DS.attr('string'),

  //quienGenero: DS.attr('string'),  //hacer un match

  titularEvento: DS.belongsTo('cliente'),
  detalleEvento: DS.belongsTo('detalle-evento'),
  salon: DS.belongsTo('salon')
});
