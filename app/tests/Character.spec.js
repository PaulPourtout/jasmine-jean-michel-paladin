const Character = require('../class/Character');

describe(`Check character's name`, function () {
	let character;
	beforeEach(function () {
		character = new Character("Jean-claude");
	});

	// Constructor
	it(`character.name === "Jean-claude"`, function () {
		expect(character.name).toEqual("Jean-claude");
	})
	it(`character.healthPoints === 100`, function () {
		expect(character.healthPoints).toEqual(100);
	})
	it(`character.isAlive === true`, function () {
		expect(character.isAlive).toEqual(true);
	})
	it(`character.damageTable.min === 1`, function () {
		expect(character.damageTable.min).toEqual(1);
	})
	it(`character.damageTable.max === 10`, function () {
		expect(character.damageTable.max).toEqual(10);
	})
	it(`character.damageTable.bonus === 0`, function () {
		expect(character.damageTable.bonus).toEqual(0);
	})

	// Methodes
	it(`character.toString() === "name : Jean-claude health : 100"`, function () {
		expect(character.toString()).toEqual("name : Jean-claude health : 100");
	})
	it(`character.toString() === "name : Jean-claude defeated`, function () {
		character.isAlive = false;
		expect(character.toString()).toEqual("name: Jean-claude defeated");
	})
	it(`character._calculateDamage(min,max,bonus)`, function () {
		const { min, max, bonus } = character.damageTable;
		expect(character._calculateDamage(min, max, bonus)).toBeGreaterThan(0);
		expect(character._calculateDamage(min, max, bonus)).toBeLessThan(11);
	})
	it(`character.healthPoints === 90`, function () {
		character._suffersAttack(10);
		expect(character.healthPoints).toEqual(90);
	})
	it(`character.isAlive === false`, function () {
		character._suffersAttack(150);
		expect(character.isAlive).toEqual(false);
	})



})

