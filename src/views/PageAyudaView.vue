<template>
    <div class="todo">
        <HeaderComponent/>
        <section class="container-fluid d-flex flex-wrap justify-content-evenly dx">
            <article class="o col-xl-4 col-md-4 col-12 text-center ">
                <h4 class="titulo"><router-link class="sj" to="/vistaGuia">Videos Guia</router-link></h4>
                <h4 class="titulo o"><router-link class="sj" to="/vistaInicio">Nosotros</router-link></h4>
            </article>
            <article class="o col-xl-4 col-md-4 col-12 text-center ">
                <h4 class="titulo">PREGUNTAS FRECUENTES</h4>
                <div class="from-c dropdown-item">
                    ¿De donde vienen los productos?
                </div>
                <div class="from-c dropdown-item">
                    ¿Como es la forma de pago?
                </div>
                <div class="from-c dropdown-item">
                    ¿Algun tutorial que pueda ayudarnos?
                </div>
                <div class="from-c dropdown-item">
                    ¿Hay envios al norte del pais?
                </div>
            </article>
            <article class="o col-xl-4 col-md-4 col-12 text-center accordion " role="tablist">
                <h4 class="titulo">COMENTARIOS</h4>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header"  role="tab">
                        <b-button block v-b-toggle.accordion-1 class="pad dropdown-item" variant=" ">comentario 1</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <b-card-text>{{ text }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header"  role="tab">
                        <b-button block v-b-toggle.accordion-2 class="pad dropdown-item" variant=" ">comentario 2</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <b-card-text>{{ text }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header"  role="tab">
                        <b-button block v-b-toggle.accordion-3 class="pad dropdown-item" variant=" ">comentario 3</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <b-card-text>{{ text }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header"  role="tab">
                        <b-button block v-b-toggle.accordion-4 class="pad dropdown-item" variant=" ">comentario 4</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <b-card-text>{{ text }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </article>
        </section>
        <FooterComponent class="fot"/>
  </div>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'PageAyudaView',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
      return {
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
      }
    }
}
</script>

<style scoped>
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
.pad{
    padding-inline: 37%;
}
.dx{
    margin-top: 8%;
}
.fot{
    margin-top: 8%;
}
.sj{
     list-style: none;
     text-decoration: none;
     color: #ffff;
}
</style>