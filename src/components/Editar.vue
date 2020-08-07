<template>
<div>
  <br><br>
  <router-link :to="{path:'/'}" class="atras">Atrás</router-link>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
            <h2>Editar el Show {{this.titulo}}</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="editar">
          <label for="">Título</label><input class="form-control" type="text" name="" id="" v-model="titulo">
          <label for="">Canal</label> <input class="form-control" type="text" name="" id="" v-model="canal">
          <label for="">N° Temporadas</label><input class="form-control" type="number" name="" id="" v-model="temporadas"><br>
          <label for="">Vigencia</label>&nbsp;&nbsp;&nbsp;
          <input type="radio" name="vigencia" value="true" v-model="vigencia" id="">Sí&nbsp;&nbsp;&nbsp;
          <input type="radio" name="vigencia" value="false" v-model="vigencia" id="">No <br><br>
          <label for="">Géneros</label><input class="form-control" type="text" v-model="generos" name="" id=""><br>
          <button type="submit" class="btn btn-dark">Editar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { db } from '@/firebase';

export default {
  name:"Editar",
   data() {
    return {
      titulo: "",
      canal: "",
      temporadas:0,
      vigencia:"",
      generos:""
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
      this.generos=series.generos.join(' ');
    });
  },
  methods: {
    editar(){
      db.collection("shows").doc(this.$route.params.id).update({
        titulo: this.titulo,
        canal: this.canal,
        temporadas:parseInt(this.temporadas),
        vigencia:this.vigencia,
        generos:this.generos.split(' ')
      })
      .then(()=>{
        this.$router.push('/')
      })
    }
  },
}
</script>