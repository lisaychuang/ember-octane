import Component from '@glimmer/component';
import { inject as service } from '@ember/service'
import AuthService from 'shlack/services/auth';

export default class TeamSidebarComponent extends Component {
    
    /**
     * inject auth as a service in this component
     * @type { AuthService }
     */

    @service auth

}
