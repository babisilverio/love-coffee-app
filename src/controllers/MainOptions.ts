/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Vue } from 'vue-property-decorator';
import HeaderImg from '@/components/HeaderImg.vue'

@Component({
  components: {
    HeaderImg
  }
})
export default class MainOptions extends Vue {
  IMG_HEADER: string = "https://st.depositphotos.com/1064024/4809/i/600/depositphotos_48097329-stock-photo-coffee-beans-and-green-leaves.jpg"
}
