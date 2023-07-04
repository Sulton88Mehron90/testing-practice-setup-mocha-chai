# testing-practice-setup-mocha-chai

## Set up:
1. `clone` down the repo
2. `cd` into the repo's root directory
3. run `npm install`
4. run `npm test` to run tests


## Checks for Understanding
1. Difference between Mocha and Chai:

Mocha and Chai are both testing libraries in JavaScript, but they serve different purposes.

Mocha is a test runner. It provides the structure and functions to write tests (like describe, it, etc.), run them, and report the results. It provides the hooks (like before, after, beforeEach, afterEach) that help set up preconditions and clean up after your tests.

Chai is an assertion library. It provides functions to assert that things are (or aren't) what you expect them to be. It offers a more human-readable style of writing assertions. It is typically used with a test runner like Mocha. You can use Mocha without Chai (using Node's built-in assert module, for example), but you wouldn't use Chai without a test runner.

Mocha is like a supervisor. It sets up how tests should run, keeps track of them, and gives you a report at the end.

Chai is like a judge. It checks if your code's result matches your expected result.

2. Structure of a test:

In Mocha, a test is structured in a way that is readable and provides context. Here's a simple example:
```
describe('My function', function() {
  it('should do something', function() {
    // setup
    let expected = 'expected result';
    
    // execution
    let result = myFunction();

    // assertion
    expect(result).to.equal(expected);
  });
});
```
A test in Mocha typically consists of a describe block that groups related tests together, and one or more it blocks that each contain a single test. Each test usually follows the setup -> execute -> assert pattern:

- Setup: Set up the initial conditions for your test.
- Execute: Call the function you're testing.
- Assert: Use an assertion to check that the result of calling your function is what you expected.

3. What makes a test good:

A good test is like a good experiment. It tests one thing at a time, doesn't interfere with other tests, is clear about what it's testing, and can be run over and over again with the same setup.

4. What makes a function easy or difficult to test:

Functions are easy to test when they always give the same output when given the same input, and they don't rely on or change anything outside of them. If a function interacts with something outside like a database or a file, or if it does many things at once, it can be harder to test.


