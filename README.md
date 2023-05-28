# Lab 8 - Starter

Editor: Yuning Wen

1. I would fit my automated tests within a Github action that runs whenever code is pushed. Though I may also have some manual tests locally before push my codes, automated tests within a Github action helps testing in a more general environment, and others may also see the result from the action.
2. Yes if the returned value can only be checked in this way. So for testing a particular function independently it should be no.
3. Yes, at least part of the functions. But to the part of sending message from one user to another, it should be hard to test since unit test should be tested locally with no sending message actions included.
4. Yes, absolutely. It should be an easy unit test which should be considered when designing tests.