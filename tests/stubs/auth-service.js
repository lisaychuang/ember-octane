import Service from "@ember/service";
import { inject as service } from '@ember/service';
import Router from '@ember/routing/router';

export default class MockAuthService extends Service {
    currentUserId= null;

    /**
     * @type { Router }
     */

    // inject router as a service, so we get transitionTo fn
    @service router;

    loginWithUserId(userId) {
        this.currentUserId = userId;
        this.router.transitionTo('teams')
    }
}