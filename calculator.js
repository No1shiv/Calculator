
// Function to clear the screen:

function allclear(){
    document.getElementById('output').value=''
}

// Function to display the keys and operators:

function showkey(data){
    document.getElementById('output').value+=data
    return data
}

// Function to evaluate the operation

function result(){
    let input = document.getElementById('output').value
    let ans = eval(input);

    document.getElementById('output').value = ans

    return ans
}
