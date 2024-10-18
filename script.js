//Question-1
function AddTwoNumbers(){
    let A=5;
    let B=10;
    console.log(A+B);
}
AddTwoNumbers();

//Question-2
function Is_Valid(){
    let A=5;
    let B=3;
    if(A < 10 && A > B){
        console.log("true");
    }else{
        console.log("false");
    }
}
Is_Valid();

//Question-3
function Check(){
    let A=12;
    let B=20;
    if(A % 10 == 0 || B % 10 == 0){
        console.log("true");
    }else{
        console.log("false");
    }
}
Check();

//Question-4
function First_Digit(){
    let N="4567";
    console.log(N[0]);
}
First_Digit();

//Question-5
function Last_Digit(){
    let N="4567";
    console.log(N[3]);
}
Last_Digit();

//Question-6
function Find_the_remender(){
    let A=2;
    let B=9;
    console.log(B%A);
}
Find_the_remender();

//Question-7
function Multiply_two_number(){
    let A=2;
    let B=5;
    console.log(A*B);
}
Multiply_two_number();

//Question-8
function Sum(){
    let A=50;
    let B=20;
    let C=100;
    console.log(A+B+C);
}
Sum();
function Average(){
    let A=50;
    let B=20;
    let C=100;
    let sum=A+B+C;
    console.log(sum/3);
}
Average();