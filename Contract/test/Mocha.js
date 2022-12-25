const { assert } = require("chai");

const mochaTest = artifacts.require("./Mocha.sol");
require("chai").use(require("chai-as-promised")).should;

contract(mochaTest, () => {
    let myContract; 
    before(async () => {
        myContract = await mochaTest.deployed();
    })

    describe("deployment", async () => {
        it("deployed successfully", async () => {
            const address = await myContract.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, "")
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it("correct name!", async () => {
            const name = await myContract.getName()
            assert.equal(name, "Sina")
        })
    })
})

