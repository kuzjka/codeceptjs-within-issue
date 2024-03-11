import { within } from "codeceptjs";

Feature('within');

Scenario('test li within ul',  ({ I }) => {
    I.amOnPage('/');
    within('ul', () => {
        I.see('First');
        I.see('Second');
    });
});
