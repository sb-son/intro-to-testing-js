// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("subtract", function(){
   it("should be a defined function", function(){
       expect(typeof subtract).toBe('function');
   });
   it("should return a number when passed two number arguments", function(){
      expect(typeof subtract(3,1)).toBe("number");
   });
    it("should return 75 when passed the arguments of 100 and 25", function() {
        expect(subtract(100,25)).toBe(75);
    });
   it("should return false when passed any argument that is not a number", function(){
       expect(subtract()).toBe(false);
       expect(subtract(2)).toBe(false);
       expect(subtract("Banana", 6)).toBe(false);
   });
   it("should return 34 when passed the arguments of 64 and 30", function() {
      expect(subtract(64,30)).toBe(34);
   });
    it("should return -7 when passed the arguments of 0 and -7", function() {
        expect(subtract(0,7)).toBe(-7);
    });
});

//Exercise 1-9 sayHello()
describe("sayHello", function (){
    it('should be a defined function', function (){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function (){
       expect(typeof sayHello()).toBe('string');
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should say "Hello" to the name we pass it', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should say "Hello" to the name we pass it', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should say "Hello" to the name we pass it', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should say "Hello, World!" when input is empty', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should say "Hello, World!" when input true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should say "Hello, World!" when input false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });

});

//Exercise 10 isFive()
describe("isFive", function(){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a number when passed number arguments', function () {
        expect(typeof isFive(5)).toBe('number');
    });
    it('should expect the argument of 5 to be equal to 5', function () {
        expect(isFive(5)).toBe(5);
    });
    it('should expect string values to be false', function () {
        expect(isFive("")).toBe(false);
    });
    it('should expect the argument of -5 to not be equal to 5', function () {
        expect(isFive(-5)).toBe(false);
    });
    it('should expect the argument of 3 to not be equal to 5', function () {
        expect(isFive(3)).toBe(false);
    });
    it('should expect the argument of 1 to not be equal to 5', function () {
        expect(isFive(1)).toBe(false);
    });
});
//Exercise 11 isEven()
describe("isEven", function (){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed the argument of 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed the argument of -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the argument of 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed the argument of banana', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed the argument of "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed the argument of Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with a boolean input like true or false', function () {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
});
//isVowel Exercise 12
describe("isVowel", function (){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true for the argument "a"', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return true for the argument "A"', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('should return false for the argument "y"', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('should return false for the argument 4', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false for the argument of booleans true or false', function () {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('should return false for the argument "banana"', function () {
        expect(isVowel("banana")).toBe(false)
    });
    it('should return false when function is passed without any arguments', function () {
        expect(isVowel()).toBe(false)
    });
});
//exercise 13 add function
describe("add", function(){
    it("should be a defined function", function(){
        expect(typeof add).toBe('function');
    });
    it("should return a number when passed two number arguments", function(){
        expect(typeof add(3,1)).toBe("number");
    });
    it("should return 5 when passed the arguments of 3 and 2", function() {
        expect(add(3,2)).toBe(5);
    });
    it("should return -12 when passed the arguments of -3 and -9", function() {
        expect(add(-3,-9)).toBe(-12);
    });
    it("should return 11 when passed the arguments of 6 and '5'", function() {
        expect(add('5',6)).toBe(11);
    });
    it("should return 6 when passed the arguments of '-4' and '10'", function() {
        expect(add('-4','10')).toBe(6);
    });
    it("should return NaN when passed the arguments of 'banana' and 'split'", function() {
        expect(add('banana','split')).toBe(isNaN);
    });
    it('should return NaN when passed the arguments 2 and "apples"', function () {
        expect(add(2,'apples')).toBe(isNaN);
    });
    it('should return NaN when arguments are empty', function () {
        expect(add()).toBe(isNaN);
    });
});