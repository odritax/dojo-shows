<template>
<div>
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Series</a>
  </nav>
  <br><br>
  <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-6">
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>Título</th>
          <th>Canal</th>
          <th>Temporadas</th>
          <th>Vigencia</th>
          <th>Géneros</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="show in shows" :key="show.id">
          <td><router-link :to="{path:'/detalles/' + show.id}">{{ show.titulo }}</router-link></td>
          <td>{{ show.canal }}</td>
          <td>{{ show.temporadas }}</td>
          <td>{{show.vigencia=='true'?'Sí':'No'}}</td>
          <td><span v-for="(genero, i) in show.generos" :key="i">{{ genero }}</span></td>
          <td><router-link :to="{path:'/editar/' + show.id}">Editar</router-link><a href="#" v-on:click="eliminar(show.id)" > Eliminar</a></td>
        </tr>
      </tbody>
      </table>
      </div>
      <div class="col-md-3">
        <h2>Agregar un Show</h2>
        <form action="">
        <label for="">Título</label><input type="text" class="form-control" name="" id="" v-model="titulo">
        <label for="">Canal</label> <input type="text" class="form-control" name="" id="" v-model="canal">
        <label for="">N° Temporadas</label><input type="number" class="form-control" name="" id="" v-model="temporadas"><br>
        <label for="">Vigencia </label>&nbsp;&nbsp;&nbsp;Sí&nbsp;&nbsp;&nbsp;<input type="radio" name="vigencia" value="true" v-model="vigencia" id="">
        No <input type="radio" name="vigencia" value="false" v-model="vigencia" id=""><br>
        <label for="">Géneros</label><input type="text" class="form-control" v-model="generos" name="" id=""><br>
        <button class="btn btn-dark" v-on:click="agregar">Agregar</button>
        </form>
      </div>
  </div>
</div>
</template>
<script>
import { db } from '@/firebase';

export default {
  name: 'TablaBd',
  data() {
    return {
      shows: [],
      titulo: "",
      canal: "",
      temporadas:0,
      vigencia:"",
      generos:""
    }
  },
  firestore() {
    return {
      shows: db.collection('shows')
    }
  },
    methods: {
    agregar(ev) {
      // add item to db
      ev.preventDefault();
      db.collection("shows").add({
        titulo: this.titulo,
        canal: this.canal,
        temporadas:parseInt(this.temporadas),
        vigencia:this.vigencia,
        generos:this.generos.split(" ")
      });
      // reset values
      this.titulo = "";
      this.canal = "";
      this.temporadas=0;
      this.vigencia=""
      this.generos=[]
    },
    eliminar(id){
      console.log(this.titulo);
      const pregunta=confirm(`Desea eliminar la serie?`)
      if(pregunta==true){
        db.collection("shows").doc(id).delete();
      }
    }
  },  
  mounted() {
    console.log(this.shows)
  }
}
</script>
<style >
body{
  font-family: 'Ubuntu', sans-serif;
  background-color:#E8E4E3;
}
h2,label{
  font-weight: bolder;
}
tbody{
  background-color: white;
}
</style>