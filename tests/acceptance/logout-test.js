import { module, test } from 'qunit';
import { visit, currentURL, click, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logging out', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /teams and clicking "Logout" ', async function(assert) {
    await visit('/teams'); // Go to /teams url
    // await this.pauseTest();
    assert.equal(currentURL(), '/teams');

    await click('.team-sidebar__logout-button'); // Click on "Logout" button
    assert.equal(currentURL(), '/login');

  });
});
