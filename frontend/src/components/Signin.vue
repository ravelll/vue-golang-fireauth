<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="Password" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signIn">Sign in</button>
    <p>
      You don't have an account yet?
      <router-link to="/signup">Create account Now !</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Signin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          res => {
            console.log(res.user.qa);
            localStorage.setItem("jwt", res.user.qa);
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );
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

.signin {
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
</style>
