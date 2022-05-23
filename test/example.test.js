// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderWorkshop } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="families-container"><h2>samples</h2><ul><li>House Butter</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderWorkshop({
        name: 'samples',
        participants: [{ name : 'House Butter' }],
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
