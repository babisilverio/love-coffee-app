<template>
  <b-img 
    style="width: 100%"
    height="200"
    :src="srcImg">
  </b-img>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class HeaderImg   extends Vue {
  @Prop(String) srcImg: string | undefined;
}
</script>

