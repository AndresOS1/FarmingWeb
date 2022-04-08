<template>
    <div class="todo w-100">
        <HeaderComponent/>
        <section class="container-fluid d-flex flex-wrap justify-content-evenly xd ">
            <article class="o col-xl-4 col-md-4 col-12 text-center from-c ">
                <b-icon icon="person"  class="border rounded-circle border-success p-2" variant="success" font-scale="4" ></b-icon>
                <article class="dropdown-item m-1 ">username</article>
                <article class="dropdown-item m-1">mail</article>
                <article class="dropdown-item m-1">password</article>
                <article class="dropdown-item m-1">contact</article>
            </article>
            <article class="o col-xl-4 col-md-4 col-12 text-center ">
                <h4 class="titulo">HISTORIA DE COMPRAS</h4>
                <div class="from-c dropdown-item">
                    Bulto de zanahoria... 80.000
                </div>
                <div class="from-c dropdown-item">
                    Bulto de papa... 80.000
                </div>
                <div class="from-c dropdown-item">
                    Bulto de cafe... 80.000
                </div>
                <div class="from-c dropdown-item">
                    Bulto de platano... 80.000
                </div>
            </article>
        </section>
        <FooterComponent class="fo"/>
  </div>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'


export default {
  name: 'PerfilView',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>

.xd{
    margin-top: 8%;
    
}
.titulo {
  color: aliceblue;
  padding: 5px;
  background-color: rgb(56, 165, 42);
  border-radius: 15px;
}
.o {
    margin-top: 20px;
    padding: 0.375rem 0.75rem;

}
.from-c{
    display: block;
    margin-top: 10px;
    padding: 0.375rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.30rem; 
}

.fo{
    margin-top: 20%;
}

</style>