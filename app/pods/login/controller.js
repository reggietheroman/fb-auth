import Controller from '@ember/controller';
impor { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'passwor');
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
       this.set('errorMessage', reason.error || reason);
     });
    }
  }
});
