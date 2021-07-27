var a=0;
function signin(){
    if(a==1)
    {
        var b=`<form action="/login" method="POST">
        <h1 style="margin-top: 10%;">Sign in to Existing account</h1></br>
        <input class="feild" type="text" name="name" placeholder="  Username"></br></br>
        <input class="feild" type="password" name="pass" placeholder="  Password"></br></br>
        <a href=""><h3>Forgot Password?</h3></a>
        <button class="but" style="background-color : rgb(84, 184, 197); " type="submit" onclick="signin()">Sign In</button>
    </form>`;
        var c=` float: left;
        width : 67%;
        height : 100% ;
        background-color: whitesmoke;
        text-align: center;
        color: gray;`;
        document.getElementById("login").innerHTML=b;
        document.getElementById("login").style=c;
        var d=`<h1 style="margin-top: 40%;">Don't have an account</h1>
        <button class="but" style="background: transparent;" type="submit" onclick="signup()">Sign Up</button>`;
        var e=`float: right;
        width : 33%;
        height : 100% ;
        background-color:rgb(84, 184, 197);
        text-align: center;
        color: aliceblue;`;
        document.getElementById("signup").innerHTML=d;
        document.getElementById("signup").style=e;
    }
    a=0;
}
function signup(){
    if(a==0)
    {
        var b=`<h1  style="margin-top: 40%;">Already have an account</h1>
        <button class="but" style="background: transparent;" type="submit" onclick="signin()">Sign In</button>`;
        var c=`float: left;
        width : 33%;
        height : 100% ;
        background-color:rgb(84, 184, 197);
        text-align: center;
        color: aliceblue;`;
        document.getElementById("login").innerHTML=b;
        document.getElementById("login").style=c;
        var d=`<form action="/register" method="POST">
        <h1 style="margin-top: 10%;">Create Account</h1>
        </br></br>
        <input class="feild" type="text" name="fname" placeholder=" First Name" required>
        <input class="feild" type="text" name="lname" placeholder=" Last Name" required>
        </br></br>
        <input class="feild" type="text" name="uname" placeholder=" Username" required>
        <input class="feild" type="email" name="email" placeholder=" Email" required>
        </br></br>
        <input class="feild" type="password" name="pass" placeholder=" Password" required>
        <input class="feild" type="password" name="cpass" placeholder=" Confirm Password" required>
        </br></br></br>
        <button class="but" style="background-color : rgb(84, 184, 197); " type="submit" onclick="signup()">Sign Up</button>
    </form>`;
        var e=`float: right;
        width : 67%;
        height : 100% ;
        background-color:whitesmoke;
        text-align: center;
        color: gray;`;
        document.getElementById("signup").innerHTML=d;
        document.getElementById("signup").style=e;
    }
    a=1;
}