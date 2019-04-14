<template>
  <div class="signup">
    <h2>Sign up</h2>
    <p class="error-message" v-if="isPasswordUnmatched">
      Password and Password Confirmation are not matched.
    </p>
    <input type="text" placeholder="Username" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <input
      type="password"
      placeholder="Password Confirmation"
      v-model="passwordConfirmation"
    />
    <button @click="signUp">Register</button>
    <p>
      Do you have an account?
      <router-link to="/signin">Sign in Now!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      passwordConfirmation: "",
      isPasswordUnmatched: false
    };
  },
  methods: {
    signUp: function() {
      if (this.password === this.passwordConfirmation) {
        this.isPasswordUnmatched = false;
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            console.log("Create account: ", user.email);
          })
          .catch(error => {
            console.log(error.message);
          });
      } else {
        this.isPasswordUnmatched = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
h1 h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.signup {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

input {
  margin: 10px 0;
  padding: 10px;
}

button {
  margin: 10px 0;
  padding: 10px;
}

.error-message {
  color: #f44243;
}
</style>
