<template>
    <div class="relleno">
        <HeaderComponent />
        <CarruselComponent />
      
        <div class="d-flex justify-content-center align-items-center col-xl-12 titulo ">
          <h3>GRANOS</h3>
        </div>
        
        <div class="contenido d-flex flex-wrap container-fluid">
      <div class="producto">
        <h4>Bulto de Cafe</h4>
        <img class="imagen" src="../assets/cafe.jpg" />
      <div>
        <b-button variant="success">$ 180.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
       
         <br>
      <b-button variant="success"><router-link class="sj" to="/vistaCafe">Detalles</router-link></b-button>
      </div>

      
      <div class="producto">
        <h4>Bulto de Lentejas</h4>
        <img class="imagen" src="../assets/lenteja.jpeg" />
       <div>
        <b-button variant="success">$ 50.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
       
         <br>
      <b-button variant="success"><router-link class="sj" to="/vistaLenteja">Detalles </router-link> </b-button>
      </div>

      <div class="producto">
        <h4>Bulto de Frijol negrito</h4>
        <img class="imagen" src="../assets/frijol camilo.png" />
       <div>
        <b-button variant="success">$ 25.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
       
         <br>
      <b-button variant="success">Detalle</b-button>
      </div>

      <div class="producto">
        <h4>Bulto de blanquillo</h4>
        <img class="imagen" src="../assets/blanquillofin.png" />
        <div>
        <b-button variant="success">$ 40.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
       
         <br>
     <b-button variant="success">Detalle</b-button>
      </div>

      <div class="producto">
        <h4>Bulto de Frijol Verde</h4>
        <img class="imagen" src="../assets/frijolv.jpg" />
        <div>
        <b-button variant="success">$ 35.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
   
         <br>
     <b-button variant="success"><router-link class="sj" to="/vistaFrijol">Detalles</router-link> </b-button>
      </div>
  
      <div class="producto">
        <h4>Bulto de frijol comun</h4>
        <img class="imagen" src="../assets/frijol.jpeg" />
       <div>
        <b-button variant="success">$ 35.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
       
         <br>
      <b-button variant="success">Detalle</b-button>
      </div>

      <div class="producto">
        <h4>Bulto de maiz</h4>
        <img class="imagen" src="../assets/maiz.png" />
      <div>
        <b-button variant="success">$ 60.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
         <br>
      <b-button variant="success">Detalle</b-button>
      </div>
      
      <div class="producto">
        <h4>Bulto de arroz</h4>
        <img class="imagen" src="../assets/arroz.png" />
       <div>
        <b-button variant="success">$ 120.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>

         <br>
      <b-button variant="success">Detalle</b-button>
      </div>

      <div class="producto">
        <h4>Bulto de garbanzo</h4>
        <img class="imagen" src="../assets/garbanso.png" />
       <div>
        <b-button variant="success">$ 30.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
  
         <br>
     <b-button variant="success">Detalle</b-button>
      </div>
      
      <div class="producto">
        <h4>Bulto de mani</h4>
        <img class="imagen" src="../assets/mani.png" />
       <div>
        <b-button variant="success">$ 55.000 </b-button>
      </div>
        <br>
         <h5 for="sb-inline">Cantidad Disponible  </h5>
          <h5 for="sb-inline"> 46 Kg </h5>
         <br>
     <b-button variant="success">Detalle</b-button>
      </div>
  </div>
    <FooterComponent />

      </div>




 
</template>


<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import CarruselComponent from '@/components/CarruselComponent.vue'

export default {
  name: 'GranosView',
  components: {
    HeaderComponent,
    FooterComponent,
    CarruselComponent
  }
}

</script>

<style scoped>
 .contenido {
 
  justify-content: space-evenly;
  margin-top: 30px;
  
} 

.producto {
  
  /* margin: 15px solid rgb(218, 128, 12); */
  padding: 2px 30px;
  text-align: center;
  border: 1px solid rgb(47, 136, 39);
  padding: 20px;
  
  /* box-shadow: 0 8px 16px 0 rgba(199, 123, 9, 0.2); */
  /* background-color: rgb(82, 134, 78); */
}

.producto:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border: 3px solid rgb(218, 128, 12); 
  
}

.producto img {
  width: 300px;
}

.ph {
  border: 1px solid rgb(218, 128, 12);
  background-color: white;
  margin-left: 50px;
  margin-right: 50px;
}

.sj{
     list-style: none;
     text-decoration: none;
     color: #ffff;
}
.imagen{
  width: 100;
  height: 50%;
}

/* .titulo{

  color: black;
  padding: 5px;
  background-color: rgb(73, 143, 64);
  border-radius: 15px;
  width: 200px;
  right: 200px;
 

} */
</style>