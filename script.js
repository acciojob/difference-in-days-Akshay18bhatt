var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const d1= new Date(date1);
	const d2= new Date(date2);

	console.log(d1,d2);
	const instance1= (d1.getTime()/1000)/(24*60*60);
	const instance2= (d2.getTime()/1000)/(24*60*60);
	const diff=instance2-instance1;
	// console.log(diff);
	return diff;
	
	
	
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
