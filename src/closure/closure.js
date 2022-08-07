function greeting() {
    let username = 'Francisco';

    function displayUserName() {
        return `Hello ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g());