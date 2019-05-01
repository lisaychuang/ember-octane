import Service from '@ember/service';
import { inject as service } from '@ember/service';
import Router from '@ember/routing/router';
import { action } from '@ember/object';

const AUTH_KEY="shlack-userid";

export default class AuthService extends Service {
    /**
     * @type { Router }
     */

    // inject router as a service, so we get transitionTo fn
    @service router;

    // Get userId from local storage
    get currentUserId() {
        return window.localStorage.getItem(AUTH_KEY);
    }

    // trigger change in URL after user log in
    loginWithUserId(userId) {
        window.localStorage.setItem(AUTH_KEY, userId);
        this.router.transitionTo('teams')
    }

    // Logout and clear userId from localstorage
    @action
    logout(){
        window.localStorage.removeItem(AUTH_KEY);
        this.router.transitionTo('login');
    }

}
