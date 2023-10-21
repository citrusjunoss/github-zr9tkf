import { getSomeThing } from '@/service';

export default defineNuxtPlugin((nuxtApp: any) => {
  console.log('fetch');
  getSomeThing();
});
