<script setup>
import { ref } from 'vue'


</script>

<template>
 <div class="body">
  <div class="card">
    <div class="header">
      <h1>Welcome</h1>
    </div>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" placeholder="Username">

      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Password">

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Email">

      
    </div>
    <div class="btn">
        <button>Sign in</button>
      </div>
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
  width: 100vw;
  height: 100vh;
  color: black;
  background-color: #ffffff;
  padding: 0%;
  margin: 0%;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 70%;
  background: linear-gradient(225deg, #00ffdd, #2b424a, #202b30);
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
  font-size: 1.5rem;
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
  width: 100%;
  height: 100%;
  margin: 20px;
  :hover {
      background:linear-gradient(45deg, #00ffdd, #2b424a, #202b30);
      border: 2px solid #279889;
      color: #ffffff;
    }
  button {
    padding: 10px 20px;
    margin: 10px;
    margin-top: 0;
   
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
    background:linear-gradient(225deg, #00ffdd, #2b424a, #202b30);
    border: 2px solid #279889;
     
    border-radius: 5px;
    cursor: pointer;

   
  }
}

  
</style>
