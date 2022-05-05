<template>
  <div class="home">
    <section>
      <div class="banner-home pt-5">
        <div>
          <img
            src="https://media.giphy.com/media/gKxniC8PjCF3dhBmgF/giphy.gif"
            alt=""
            class="img-fluid mt-5"
          />
        </div>
        <div class="container text-center">
          <button type="button" class="btn btn-outline-light">
            <router-link :to="{ name: 'products' }" class="nav-link"
              >Ver Productos</router-link
            >
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

section {
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #ffbd59, #d454c3, #1fa2ff, #5ce1e6);
  background-size: 400% 400%;
  animation: gradient 8s ease infinite;
  position: relative;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #1fa2ff 0%,
    #12d8fa 51%,
    #1fa2ff 100%
  );
  width: 300px;
}
.btn-grad {
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
  background-image: linear-gradient(
    to right,
    #d454c3 0%,
    #f391e6 51%,
    #d454c3 100%
  );
}

.nav-link:hover {
  text-decoration: none !important;
  color: #083b9e !important;
}
</style>
