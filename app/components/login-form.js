import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

export default class LoginFormComponent extends Component {
    // track when userId changes
    @tracked
    userId = null;

    /**
     * @type {AuthService}
     */
    @service auth

    get isDisabled() {
        return !this.userId;
    }

    // func to log out userId
    // loginAsUserWithId(val){
    //     console.log('UserId: ', val);
    // }

    /**
     * @param {Event & {target: HTMLFormElement}} evt
    **/

    @action //action decorator binds 'this' to the component
    onLoginFormSubmit(evt) {
        const { target } = evt;
        const val = target.querySelector('select').value;
        evt.preventDefault();
        this.auth.loginWithUserId(val);
    }

    /**
     * @param {Event & { target: HTMLSelectElement } } evt
    **/
    @action
    onSelectChanged(evt){
        this.userId = evt.target.value;
    }
}
