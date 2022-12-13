import { Component, Vue } from 'vue-property-decorator';
import HeaderImg from '@/components/HeaderImg.vue';
import BtnLoginCadastro from '@/components/BtnLoginCadastro.vue';
import InputLogin from '@/components/InputLogin.vue';

@Component({
  components: {
    HeaderImg,
    BtnLoginCadastro,
    InputLogin
}
})
export default class LoginApp extends Vue {
  IMG_HEADER = "https://st.depositphotos.com/1064024/4809/i/600/depositphotos_48097329-stock-photo-coffee-beans-and-green-leaves.jpg";

}
