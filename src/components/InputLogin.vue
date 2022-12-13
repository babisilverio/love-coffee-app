<template>
  <section class="mt-4 input__login">
    <b-row>
      <b-col cols="12">
        <label class="label" for="email">Email</label>
        <b-form-input id="email" type="text" v-model="email" placeholder="example@email.com"></b-form-input>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="mt-2">
        <label class="label" for="senha">Senha</label>
        <b-form-input id="senha" type="password" v-model="senha" placeholder="Digite sua senha"></b-form-input>
      </b-col>
    </b-row>

    <b-row>
      <b-button class="link__btn" variant="link">
        Esqueci minha senha
      </b-button>
    </b-row>

    <b-row class="mt-4">
      <b-button variant="primary" block pill>
        Entrar
      </b-button>
    </b-row>
    
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class InputLogin extends Vue {
  email = "";
  senha = "";
}
</script>

<style scoped>
.label {
  text-align: left;
  width:100%;
}

.input__login {
  width: 80%;
  margin:auto;
}

.link__btn {
  text-align: right;
  width: 100%;
}

</style>
