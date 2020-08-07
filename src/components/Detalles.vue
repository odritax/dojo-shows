<template>
  <div>
    <br><br>
    <router-link :to="{path:'/'}" class="atras">Atrás</router-link>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h3>Detalle de la serie {{this.titulo}}</h3>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <label for="">Título:</label> 
            <span class="">{{this.titulo}}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <label for="">Canal:</label> 
            <span class="badge badge-primary badge-pill">{{this.canal}}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <label>Temporadas:</label>
            <span class="badge badge-primary badge-pill">{{this.temporadas}}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <label>Vigencia:</label>
            <span class="">{{this.vigencia}}</span>
          </li>
           <li class="list-group-item d-flex justify-content-between align-items-center">
            <label>Géneros:</label>
            <span v-for="(genero, i) in this.generos" :key="i">{{ genero }} </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {db} from '@/firebase';
export default {
  name:'Detalles',
  data(){
    return{
      titulo:'',
      canal:'',
      temporadas:0,
      vigencia:'',
      generos:[]
    }
  },
  mounted() {
    db.collection("shows").doc(this.$route.params.id).get()
    .then(datos => {
      // acá capturamos los datos de mi mascota, entonces los podemos asociar al objeto data
      const series = datos.data();
      console.log(series)
      this.titulo=series.titulo;
      this.canal=series.canal;
      this.temporadas=series.temporadas;
      this.vigencia=series.vigencia;
      this.generos=series.generos;
    });
  }
}
</script>
<style>
.atras{
margin-left: 20%;
}
</style>