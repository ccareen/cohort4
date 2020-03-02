import syntax from './syntax'

test('check if number', () => {
	expect(syntax.checkNum(2)).toBe(3);
	expect(syntax.checkString("js")).toBe("Welcome to js!");
	expect(syntax.checkBoolean(true)).toBe(true);
	expect(syntax.checkDict(37)).toBe(37);
	expect(syntax.unDef()).toBe(true);
	expect(syntax.ifElse(4)).toBe(true);
	expect(syntax.funcExample(1)).toBe(true);
	expect(syntax.paramExample(1,2)).toBe(3);
	expect(syntax.returnExample(1)).toBe(1);
	expect(syntax.arrayFront(1)).toBe(1);
	expect(syntax.arrayEnd(1)).toBe(1);
	expect(syntax.arrayUpdate(1)).toBe(1);
	expect(syntax.forLoop()).toBe('Apricot');
	expect(syntax.forInLoop()).toBe('Orange');
	expect(syntax.whileLoop(1)).toBe(2);
	expect(syntax.doWhile(1)).toBe(10);
	expect(syntax.makeObject("white")).toBe("white");
	
});


	
