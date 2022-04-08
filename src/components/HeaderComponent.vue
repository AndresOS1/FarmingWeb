<template>
  <div class="hello">
    <header>
      <div>
        <b-navbar class="ver" toggleable="sm" type="dark">
          <img src="../assets/logoWeb.png" alt="" />

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>



          <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav>
              <b-nav-item ><router-link class="js" to="/vistaInicio"> INICIO</router-link> </b-nav-item>
              </b-navbar-nav>
            

            <b-navbar-nav variant="success" class="ml-4">
              <b-nav-item-dropdown text="CATALOGO">
                <b-button class="frut btn btn-outline-success my-1"><router-link class="sj" to="/vistaFrutas">Frutas</router-link></b-button>
                <b-button class="frut btn btn-outline-success my-1"
                  ><router-link class="sj" to="/vistaVerduras"> Verduras </router-link>
                </b-button>
                <b-button class="frut btn btn-outline-success my-1"><router-link class="sj" to="/vistaGranos">Granos</router-link></b-button>
              </b-nav-item-dropdown>
              <b-navbar-nav>
              <b-nav-item ><b-link v-b-toggle.sidebar-border class="js">INICIAR SESION</b-link></b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav>
            <b-nav-item href="#"><router-link class="js" to="/vistaPerfil">PERFIL</router-link></b-nav-item>
            </b-navbar-nav>


              <!-- <b-nav-item-dropdown text="PERFIL">
                <b-button class="frut btn btn-outline-success my-1"
                  >Perfil
                </b-button>
                <b-button class="frut btn btn-outline-success my-1"
                  >Cerar sesion
                </b-button>
                <b-button class="frut btn btn-outline-success my-1"
                  >Ayuda
                </b-button>
                <b-button class="frut btn btn-outline-success my-1"
                  >
                  <router-link to="../views/InicioSesionView.vue">IniciarSesion</router-link>
                  <b-link v-b-toggle.sidebar-border>IniciarSesion</b-link>
                </b-button>
              </b-nav-item-dropdown> -->
            </b-navbar-nav>
          </b-collapse>
          <b-nav-form>
            <form class="conteiner-fluid">
              <input
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                Buscar
              </button>
            </form>
          </b-nav-form>
        </b-navbar>
      </div>
      <br />
      <b-sidebar id="sidebar-border" sidebar-class="border-right border-danger">
      <b-card
        header-bg-variant="success"
        text-variant="white"
        header="INICIAR SESION"
        class="text-center"
      >
        <b-card-text>
          <form class="formulario">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Correo</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text formulario">
                No compartas tus datos con nadie.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Contraseña</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Recuerdame</label
              >
            </div>

            <div class="botonesIS">
              <b-button
                pill
                variant
                type="submit"
                class="boton1 btn-primary d-grid gap-2 col-6 mx-auto"
                >Ingresar</b-button
              >
            </div>

            <hr />

            <div>
              <b-button
                pill
                variant
                type="submit"
                class="boton2 btn-primary d-grid gap-2 col-6 mx-auto"
                router-link
                to="/vistaRegistro"
                >Registrarme</b-button
              >
            </div>
          </form>
        </b-card-text>
      </b-card>
    </b-sidebar>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.ver {
  background-color: rgb(73, 143, 64);
}
h3 {
  margin: 40px 0 0;
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
.hello {
  color: #42b983;
}
.frut {
  background-color: rgb(255, 255, 255);
}

.inve {
  display: flex;
}
.inicio {
  margin-top: 5%;
  /* border: 3px solid #2E86C1; */
  /* border-radius: 50px; */
  padding: 20px;
}

.formulario {
  color: black;
}

.boton1 {
  background-color: #198754;
}

.boton2 {
  background-color: #761212c1;
}

.js{
  list-style: none;
  text-decoration: none;
  color:rgba(255, 255, 255, 0.55);;
}
.sj{
     list-style: none;
     text-decoration: none;
}

</style>