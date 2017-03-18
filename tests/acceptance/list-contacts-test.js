import { test } from 'qunit';
import moduleForAcceptance from 'kontakliste-client/tests/helpers/module-for-acceptance';

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
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length, 16, 'should see 16 contacts');
  });
});
