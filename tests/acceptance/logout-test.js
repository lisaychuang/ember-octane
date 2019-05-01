import { module, test } from 'qunit';
import { visit, currentURL, click, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubs/auth-service';

module('Acceptance | logging out', function(hooks) {
  setupApplicationTest(hooks);

  // Using lifecycle hooks to set up before each test 
  hooks.beforeEach(function () {
    this.owner.register('service:auth', MockAuthService);
  })

  test('visiting /teams and clicking "Logout" ', async function(assert) {
    this.owner.lookup('service:auth').currentUserId = '1';

    await visit('/teams'); // Go to /teams url
    // await this.pauseTest();
    assert.equal(currentURL(), '/teams');

    await click('.team-sidebar__logout-button'); // Click on "Logout" button
    assert.equal(currentURL(), '/login');

  });
});
