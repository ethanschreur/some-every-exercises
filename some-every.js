function hasOddNumber(arr) {
	return arr.some(function(value) {
		return value % 2 !== 0;
	});
}
console.log(hasOddNumber([ 1, 2, 2, 2, 2, 2, 2, 4 ]));
console.log(hasOddNumber([ 2, 2, 2, 2, 2, 2, 2, 2 ]));

function hasAZero(num) {
	return num.toString().split('').some(function(value) {
		return value === '0';
	});
}
console.log(hasAZero(33321232131012));
console.log(hasAZero(1212121));

function hasOnlyOddNumbers(arr) {
	return arr.every(function(value) {
		return value % 2 === 1;
	});
}
console.log(hasOnlyOddNumbers([ 1, 3, 5, 7 ]));
console.log(hasOnlyOddNumbers([ 1, 2, 3, 5, 7 ]));

function hasNoDuplicates(arr) {
	return arr.every(function(value, index) {
		return !arr.includes(value, index + 1);
	});
}
console.log(hasNoDuplicates([ 1, 2, 3, 1 ]));
console.log(hasNoDuplicates([ 1, 2, 3 ]));

function hasCertainKey(arr, key) {
	return arr.every(function(value) {
		return Object.keys(value).includes(key);
	});
}
let arr = [
	{ title: 'Instructor', first: 'Elie', last: 'Schoppik' },
	{ title: 'Instructor', first: 'Tim', last: 'Garcia', isCatOwner: true },
	{ title: 'Instructor', first: 'Matt', last: 'Lane' },
	{ title: 'Instructor', first: 'Colt', last: 'Steele', isCatOwner: true }
];
console.log(hasCertainKey(arr, 'first'));
console.log(hasCertainKey(arr, 'isCatOwner'));

function hasCertainValue(arr, key, searchValue) {
	return arr.every(function(value) {
		return value[key] === searchValue;
	});
}
