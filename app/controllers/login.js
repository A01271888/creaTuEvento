import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    irCrearCuenta(){
      this.transitionToRoute('crearcuenta');
    },
    signIn(provider){
        //Còdigo para inicio de sesiòn
        switch (provider) {
          case 'email':
            console.log(this.get('email'),'/',this.get('password'));
            this.get('session').open('firebase', {
              provider: 'password',
              email: this.get('email'),
              password: this.get('password')
            }).then(()=>{
              console.log(this.get('email'));
              //return this.transitionToRoute('lista-eventos');
            });
            break;

        }
    },
  },
});
