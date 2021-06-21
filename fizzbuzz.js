const FizzBuzz = (objs, num) => 
	[...Array(num).keys()].map(t => 
		objs.map(({mod, val}) => 
    	t % mod === 0 ? val : '').join('') || t
  );


const fizzes = [
	{mod: 3, val: 'Fizz'}, 
  {mod: 5, val: 'Buzz'},
	{mod: 7, val: 'Bizz'},
  {mod: 11, val: 'Fuzz'},
];

FizzBuzz(fizzes, 200).map(t => console.log(t));
