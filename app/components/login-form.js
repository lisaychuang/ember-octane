import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
    // func to log out userId
    loginAsUserWithId(val){
        console.log('UserId: ', val);
    }

    /**
     * @param {Event & {target: HTMLFormElement}} evt
    **/

    @action //action decorator binds 'this' to the component
    onLoginFormSubmit(evt) {
        const { target } = evt;
        const val = target.querySelector('select').value;
        evt.preventDefault();
        this.loginAsUserWithId(val);
    }
}
