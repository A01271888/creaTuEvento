import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  apellidos: DS.attr('string'),
  telefono: DS.attr('string'),
  mail: DS.attr('string'),

  eventos: DS.hasMany('registro-evento'),

  nombreCompleto: computed('nombre', 'apellidos', function() {
    let nombre = this.get('nombre');
    let apellidos = this.get('apellidos');

    return `${nombre} ${apellidos}`;
  })
});
