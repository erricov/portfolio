<template>
  <div class="portfolio">
    <Jumbotron :title="title" :lead="lead"/>
    <b-container class="my-5">
      <b-row>
        <b-col cols="3">
          <div class="sidemenu">
            <Sidemenu />
          </div>
        </b-col>
        <b-col>
          <div class="main-content py-4 px-2 ">
            <b-row class="mb-5">
              <b-col cols="3" class="p-0" v-for="project in projects" :key="project.id">
                <b-img :src="project.img" fluid alt="Responsive image"></b-img>
                <h3>{{project.title}}</h3>
                <p>{{project.subtitle}}</p>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>

      <div class="container">
        <ContactForm></ContactForm>
      </div>  
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import Sidemenu from '@/components/common/Sidemenu.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'Portfolio',
  components: {
    Jumbotron,
    Sidemenu,
    ContactForm
  },
  data() {
    return {
      title: 'Portfolio',
      lead: 'Mira los trabajos que he hecho',
      projects: [
        {id: 1, title:'Progetto 1', subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: 'https://picsum.photos/180/180', btn: 'Vedi il progetto', modal: 'modal-1'},
        {id: 2, title:'Progetto 2', subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: 'https://picsum.photos/180/180', btn: 'Vedi il progetto', modal: 'modal-2'},
        {id: 3, title:'Progetto 3', subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: 'https://picsum.photos/180/180', btn: 'Vedi il progetto', modal: 'modal-3'},
        {id: 4, title:'Progetto 4', subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: 'https://picsum.photos/180/180', btn: 'Vedi il progetto', modal: 'modal-4'},
        {id: 5, title:'Progetto 5', subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: 'https://picsum.photos/180/180', btn: 'Vedi il progetto', modal: 'modal-5'},
        {id: 6, title:'Progetto 6', subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: 'https://picsum.photos/180/180', btn: 'Vedi il progetto', modal: 'modal-6'},
        {id: 7, title:'Progetto 7', subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: 'https://picsum.photos/180/180', btn: 'Vedi il progetto', modal: 'modal-7'},
        {id: 8, title:'Progetto 8', subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: 'https://picsum.photos/180/180', btn: 'Vedi il progetto', modal: 'modal-8'},
      ] 
    }
  }
}
</script>