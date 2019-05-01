import Route from '@ember/routing/route';
import {inject as service } from '@ember/service'
import AuthService from 'shlack/services/auth';

export default class LoginRoute extends Route {
    /**
     * 
     * @type {AuthService}
     */
    @service auth

    // Use route hook to GUARD routes
    // route's life cycle hook to validate entry into this route
    // gets a 'transition' object as arg
    async beforeModel(transition){
        // do the default Ember stuff in beforeModel
        await super.beforeModel(transition); 

        // if no current user, go to the Login screen
        if (this.auth.currentUserId) { 
            this.transitionTo('teams')
        }
    }
}
