//Example 1
var numbers = [1,2,3];
var doubledNumbers = [];

for(var i = 0; i < numbers.length; i++){
	doubledNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map(function(number){
	return number * 2;
})

doubled;
doubledNumbers;

//Example 2
var cars  =  [
	{model : 'Toyota', price: 'Cheap'}.
	{model: 'Corvette', price: 'Expensive'}
];

var prices = car.map(function(car){
	return car.price;
});

prices;

//Coding Challenge 1 
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function (image){
    
    return image.height;
    
});

var height = images.map(function(image){
    return images.height;
});

//Coding Challenge 2
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(calSpeed);


function calSpeed(trip){
    
   return trip.distance/trip.time; 
    
}

var speed = trips.map(function(trips){
    return trip.speed;
}) 
