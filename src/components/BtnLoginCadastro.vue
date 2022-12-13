<template>
  <section class="content__btn__login ">
    <b-row>
      <b-col cols="6">
        <b-button
          variant="primary"
          pill
          block
        >
          Login
        </b-button>
      </b-col>
      
      <b-col cols="6">
        <b-button
          variant="outline-primary"
          pill
          block
        >
          Cadastrar
        </b-button>
      </b-col>
    </b-row>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class BtnLoginCadastro extends Vue {

}
</script>

<style scoped>
.content__btn__login {
  width: 100%;
  margin-top: 2vh;
}

.b-button {
  color: white;
}

</style>