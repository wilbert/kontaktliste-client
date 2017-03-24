import { test } from 'qunit';
import moduleForAcceptance from 'kontaktliste-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list contacts');

test('visiting /contacts', function(assert) {
  visit('/contacts');

  andThen(function() {
    assert.equal(currentURL(), '/contacts');
  });
});

test('should redirect to contacts route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/contacts', 'should redirect automatically');
  });
});

test('should list available contacts.', function (assert) {
  visit('/contacts');
  andThen(function() {
    assert.equal(find('div.contact').length, 59, 'should see 59 contacts');
  });
});
