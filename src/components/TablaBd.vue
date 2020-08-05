<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Canal</th>
          <th>Temporadas</th>
          <th>Vigencia</th>
          <th>Géneros</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="show in shows" :key="show.id">
          <td>{{ show.titulo }}</td>
          <td>{{ show.canal }}</td>
          <td>{{ show.temporadas }}</td>
          <td>{{ show.vigencia }}</td>
          <td><span v-for="(genero, i) in show.generos" :key="i">{{ genero }} </span></td>
        </tr>
      </tbody>
      </table>
  </div>
</template>
<script>
import { db } from '@/firebase';

export default {
  name: 'TablaBd',
  data() {
    return {
      shows: []
    }
  },
  firestore() {
    return {
      shows: db.collection('shows')
    }
  },
  mounted() {
    console.log(this.shows)
  }
}
</script>
<style scoped>
table,td,th{
  border:2px solid black;
}
  
</style>