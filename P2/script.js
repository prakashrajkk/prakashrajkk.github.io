const showLogin = () => {
    let str = `
        <div class='App-Container'>
            <h1>Login Form</h1>
            <p><input type="text" id="txtEmail" placeholder="Email"></p>
            <p><input type="password" id="txtPass" placeholder="Password"></p>
            <p><button onclick="showhome()">Log In</button></p>
            <p><button onclick='showRegister()'>Create Account</button></p>
        </div>
    `;
    root.innerHTML = str;
};

const showRegister = () => {
    let str = `
        <h1>Register Form</h1>
        <p><input type="text" id="txtName" placeholder="Name"></p>
        <p><input type="text" id="txtEmail" placeholder="Email"></p>
        <p><input type="password" id="txtPass" placeholder="Password"></p>
        <p><button onclick="showLogin()">Register</button></p>
        <p><button onclick="showhome()">Login</button></p>
    `;
    root.innerHTML = str;
};

const showhome = () => {
    let str = `
        <div class='App-Container'>
            <h1>WELCOME TO THE WEBSITE</h1>
            <p>You're now logged in!</p>
            <button onclick="showLogin()">Logout</button>
        </div>
    `;
    root.innerHTML = str;
};
