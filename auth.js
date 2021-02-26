$('.message a').click(function() {
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });
 
// saves user input in mongoDB
 const mongoose = require('mongoose');
 const userSchema = new mongoose.schema ({
     username: {
         type: String,
         required: [true, 'Username cannot be blank']
     },
     password: {
         type: String,
         required: [true, 'Password cannot be blank']
     }
 })

 module.exports = mongoose.model('User', userSchema);

 const bcrypt = require('bcrypt');

 userSchema.statics.findandValidate = async function(username, password) {
     const foundUser = await this.findOne({ username });
     const isValid = await bcrypt.comapre(password, foundUser.password)
     return isValid ? foundUser: false;
 }

 userSchema.pre('save', async function(next) {
     if(this.isModified('password')) return next();
     this.password = await brcypt.hash(this.password, 12);
     next();
 })

    //saves user input in the browser
        
    const storageInput = document.getElementById('.storage').value;
    const button = document.getElementById('.button').value;
    
    storageInput.addEventListener('input', data => {
        storageInput.textContent = data.target.value 
      })
    
    const saveTolocalStorage = () => {
        localStorage.setItem('textinput', text.textContent)
    }
    
    storageInput.addEventListener('click', saveTolocalStorage)
    
    function Login(){
        const log1 = {}
        window.localStorage.setItem("user", JSON.stringify(log1))
       const ans = JSON.parse(window.localStorage.getItem("user"))
       console.log(ans)
    }
    Login()
    
    
    
    a=JSON.parse((localStorage.getItem("user")));
    alert("USER IS LOGGIN IN");