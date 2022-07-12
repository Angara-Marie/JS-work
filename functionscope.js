// function  foo  (){ 
//     if  (  true  ){ 
//     var  fruit1 =  'apple'  ;   //exist in function  scope 
//     const  fruit2 =  'banana'  ;   //exist in block  scope 
//     let  fruit3 =  'strawberry'  ;   //exist in block  scope 
//     } 
//     console.log(fruit1); 
//     console.log(fruit2); 
//     console.log(fruit3); 
// } 
// foo()

// function num (){// parent scope
//     var a = 2
//     function add(){ // child scope
//         var b = 3;
//         var c = a + b;
//         console.log(c);
//     }
//     add();
// }
// num()

let nums = [20,30,35,40,45]
    if (nums.length > 1){
        var left = 0;
        var end = nums.length -1;
    while (left < end){
        [nums[left],nums[end]]=
        [nums[end],nums[left]]
        ++left;
        --end;
    }
} console.log(nums);

