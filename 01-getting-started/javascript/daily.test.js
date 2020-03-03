import functions from './daily.js' 

test(' do they work', () => {
	expect(functions.convToFahr(0)).toBe(32);
});
