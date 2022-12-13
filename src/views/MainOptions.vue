<template>
  <main>
    <HeaderImg :srcImg="IMG_HEADER" />

    <section>
      <p> Seja bem-vindo ao LOVE COFFEE!</p>
      <p> O que você deseja fazer?</p>

      <div class="container__opt">
        <b-button
          variant="primary"
          pill
          block
        >
          Ver Cardapio
        </b-button>

        <b-button
          variant="primary"
          pill
          block
        >
          Ver Fotos
        </b-button>

        <b-button
          variant="primary"
          pill
          block
        >
          Ver Agenda
        </b-button>
      </div>
      
    </section>
  
  </main>
</template>

<script lang="ts" src="../controllers/MainOptions.ts"></script>

<style lang="scss" scoped>

  main {
    height: 100vh;
  }

  section {
    height: calc(100vh - 200px);
  }

  p:first-child {
    padding-top: 2vh;
  }

  p {
  margin: 0 0 0 4vw;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0.005em;
  text-align: left;
  }

  .container__opt{
    width:90%;
    margin: 8vh auto;
  }

  button {
    color: #FFF;
    height: 60px !important;
    margin-bottom: 4vh;
  }
</style>