import DS from 'ember-data';

export default DS.Model.extend({
  mesas: DS.attr('number'),
  sillas: DS.attr('number'),
  meseros: DS.attr('number'),
  mateles: DS.attr('number'),
  coloresMateles: DS.attr('string'),
  extras: DS.attr('string'),

  salon: DS.belongsTo('salon')
});
