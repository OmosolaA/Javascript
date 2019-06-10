//Introducing the forEach helper

var colors = ['orange', 'yellow', 'white'];

colors.forEach(function(color){
	console.log(color);
});

//Create an array of numbers 

var numbers = [1,2,3,4,5];

//Create a variable to hold the sum

var sum = 0;

function adder(number){
	sum+= number 
}

//Loop over the array, incrementing the sum variable,

numbers.forEach(function(number){
	sum += number;
});

numbers.forEach(adder);

//Print the sum
sum;

//Coding Exercise 1

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    
    posts.forEach(function(post){
        console.log(savePost(post));
    });
}

//Coding Exercise 2
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
var i=0
images.forEach(calculateArea);

function calculateArea(image){
    areas[i] = image.height *image.width;
    i++;
}

images.forEach(function(calculateArea){
    console.log(areas)
})

