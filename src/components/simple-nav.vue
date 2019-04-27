<template>
  <div>
    <nav>
      <div class="left">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/dash">Profile</router-link>
        </li>
        <li>
          <router-link to="/rankings">Rankings</router-link>
        </li>
      </div>
      <div class="right">
        <form>
          <input type="text" name="search">
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default { name: "simple-nav" };
</script> <!-- Add "scoped" attribute to limit CSS to this component only --> <style scoped>
.right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
}
.left {
  display: flex;
  list-style-type: none;
  justify-content: flex-start;
  align-items: center;
}
a {
  color: #42b983;
  text-decoration: none;
  padding: 10px 20px;
}
li :hover {
  border-bottom: 2px solid #42b983;
}
nav {
  background: grey;
  display: flex;
  padding: 10px;
}
</style>
