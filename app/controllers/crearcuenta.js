import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  firebaseApp: Ember.inject.service(),

  //passwordVisibility: false,

  showError(message){
    this.set('errorMsg', message);
    setTimeout(()=>{ this.set('errorMsg', null) }, 5000); // 1000 == 1 seg
  },

  actions: {
    // togglePasswordVisibility(){
    //   this.toggleProperty('passwordVisibility');
    // },

    signup(){
      let email = this.get('email');
      let password = this.get('password');
      let confirmation = this.get('passwordConfirmation');
      let nombre = this.get('nombre');
      let apellidos = this.get('apellidos');
      let telefono = this.get('tel');

      if(password == confirmation){
        let registrationPromise = this.get('firebaseApp').auth().createUserWithEmailAndPassword(
          email,
          password
        );
        //console.log("cliente ", nombre, mail );
        registrationPromise.then((response)=>{
          this.transitionToRoute('profileC');
            // this.store.createRecord('cliente', {
            //   nombre: nombre,
            //   apellidos: apellidos,
            //   telefono: telefono,
            //   mail: email,
            //   id: response.uid
            // }).save().then(()=>{
            //    window.swal({
            //      title: 'Yuju!(:',
            //      text: 'Te registraste correctamente',
            //      confirmButtonText: 'Comencemos /,,/'
            //    }).then(()=>{
            //      this.transitionToRoute('profileC');
            //    });
            // });
        });

        registrationPromise.catch((error)=>{
          this.showError(error.message);
        });
      }else {
        this.showError("Password and confirmation don't match");
      }
    },

  }
});
