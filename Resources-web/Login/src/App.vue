<script setup>
import { ref } from 'vue'


</script>

<template>
 <div class="body">
  <div class="card">
    <div class="header">
      <h1>Welcome Back</h1>
    </div>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" placeholder="Username">

      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Password">
      
    </div>
    <div class="btn">
        <button>Sign in</button>
    </div>
    <p>Or</p>
    <button><i class="fa-brands fa-google"></i> Continue with google</button>
    <button><i class="fa-brands fa-github"></i> Continue with github</button>

  </div>
 </div>

 
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
  padding: 0;
  margin: 0;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 90%;
  background: linear-gradient(225deg, #00ffdd, #2b424a, #202b30, #202b30);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  
  margin: 20px 20px 0 20px;
  color: rgb(255, 255, 255);
  font-size: 1.2rem;
  font-weight: bold;

}
.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding:10px 20px;


  label {
    margin: 10px 10px 0 0;
    font-size: 1.2rem;
    color: rgb(255, 255, 255);
    font-weight: bold;
    text-align: left;
  }
  input{
    
    padding: 10px ;
    font-size: 1.05rem;
    border-radius: 5px;
    background: transparent;
    color: rgb(255, 255, 255);
    border: 2px solid #ccc;
    border-radius: 10px;
    outline: none;

    ::focus{
      outline: none;
      border: 1px solid #279889;
    }

  }

}
.btn{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
  border-radius: 10px;
  /* margin: 20px; */
  :hover {
      background:linear-gradient(45deg, #00ffdd, #2b424a, #202b30);
      border: 2px solid #ffffff;
      color: #ffffff;
    }
  button {
    padding: 10px 20px;
    margin: 0;
    margin-top: 10px;
   
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
    background:linear-gradient(225deg, #00ffdd, #2b424a, #202b30);
    border: 2px solid #279889;
     
    border-radius: 10px;
    cursor: pointer;

   
  }
}
button {
    padding: 10px 20px;
    margin: 0;
    margin-top: 0;
    width: 90%;
   
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
    background:linear-gradient(225deg, #00ffdd, #2b424a, #202b30);
    border: 2px solid #279889;
    border-radius: 10px;
    cursor: pointer;

    i{
      margin-right: 20px;
      font-size: 1.5rem;
      
    }
   
}
button:hover {
  background:linear-gradient(45deg, #00ffdd, #2b424a, #202b30);
  border: 2px solid #ffffff;
  color: #ffffff;
}
p{
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 10px;
}
  
</style>
