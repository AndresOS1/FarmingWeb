<template>
  <div>
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
                to="/registro"
                >Registrarme</b-button
              >
            </div>
          </form>
        </b-card-text>
      </b-card>
    </b-sidebar>
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'InicioSesion',
  components: {
    // HelloWorld
  },
};
</script>

<style scoped>
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
</style>