"use strict";
/* global describe */
/* global it */
/* global assert */
/* global SymbolBalancer */

let text = `
function sum(array) {
    let sum = 0;
    for (const num of array) {
        sum += num;
    }
    return sum;
}
function min(array) {
    if (array.length > 1) {
        let other = min(array.splice(1));
        if (other < array[0]) {
            return other;
        }   
    } 
    return array[0];
}
`;

let badText = `
function smallest(a, b) {
    if (a < b) {
        return a;
    else {
        return b;
    }
}
`;
let htmltags = ` 

<html>
<head>
    <title>Document</title>
</head>
<body>
    
</body>
</html>

`;

let badhtmltags = ` 

<html>
<head
    <title>Document</title>
</head>
<body>
    
</body>
</html>

`;




describe("SymbolBalancer", () => {
    let balancerA = undefined;
    let balancerB = undefined; 
    describe("constructor", () => {
        it("takes a string containing the text of a program and returns a SymbolBalancer", () => {
            balancerA = new SymbolBalancer(text);
            balancerB = new SymbolBalancer(badText);
            assert.equal(balancerA.constructor, SymbolBalancer);
            assert.equal(balancerB.constructor, SymbolBalancer);
        });
    });
    describe("isBalanced(delimiters)", () => {
        it("takes a string with delimiters and returns true if the text has these delimiters balanced", () => {
            assert.isTrue(balancerA.isBalanced("{}[]()"));
            assert.isFalse(balancerB.isBalanced("{}[]()"));
        });
    });
});

describe("SymbolBalancer for Html Tag", () => {
    let balancerC = undefined;
    let balancerD = undefined; 
    describe("constructor", () => {
        it("takes a string containing the text of a program and returns a SymbolBalancer", () => {
            balancerC = new SymbolBalancer(htmltags);
            balancerD = new SymbolBalancer(badhtmltags);
            assert.equal(balancerC.constructor, SymbolBalancer);
            assert.equal(balancerD.constructor, SymbolBalancer);
        });
    });
    describe("isBalanced(delimiters)", () => {
        it("takes a string with delimiters and returns true if the text has these delimiters balanced", () => {
            assert.isTrue(balancerC.isBalanced("<>"));
            assert.isFalse(balancerD.isBalanced("<>"));
        });
    });
});