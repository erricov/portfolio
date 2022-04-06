<template>
  <div class="contact">
    <Jumbotron title="Contact me" lead="No tengas miedo a contactarme"/>
    <b-container class="my-5">
      <b-row>
        <b-col cols="3">
          <div class="sidemenu">
            <Sidemenu />
          </div>
        </b-col>
        <b-col>
          <div class="main-content py-4 px-2">
            <b-form @submit="onSubmit" @reset="onReset">
            <b-row v-if="show">
              <b-col cols="12">
                <p v-if="!form.name && !form.lastname">Hey!👋 What's your name?</p>
                <p v-if="form.name || form.lastname">Hi, {{form.name}} {{form.lastname}} </p>
              </b-col>
              <b-col cols="6">
                <b-form-group id="input-group-2" label="First Name:" label-for="input-2">
                  <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
                </b-form-group>
              </b-col>
            
              <b-col cols="6">
                <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                  <b-form-input id="input-2" v-model="form.lastname" required placeholder="Enter name"></b-form-input>
                </b-form-group>
              </b-col>
              <div class="mx-auto my-5">
                <b-button @click="nextStep" variant="primary">Next</b-button>
              </div>
            </b-row>
            <b-row v-if="show2">
              <b-col class="mx-auto" cols="5">
                <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else." >
                  <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
                </b-form-group>
                <div class="my-5">
                  <b-button @click="nextStepNote" variant="primary">Next</b-button>
                </div>
              </b-col>
            </b-row>
            <b-row v-if="show3">
              <b-col class="mx-auto" cols="8">
                <b-form-textarea
                  id="textarea"
                  v-model="form.note"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
                <b-button type="submit" variant="primary">Submit</b-button>
                <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
              </b-col>
            </b-row>
            
            <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="form.food"
                :options="foods"
                required
              ></b-form-select>
            </b-form-group> -->

            <!-- <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group> -->

            
          </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import Sidemenu from '@/components/common/Sidemenu.vue'

export default {
  name: 'Contact',
  components: {
    Jumbotron,
    Sidemenu
  },
  data() {
      return {
        form: {
          email: '',
          name: '',
          lastname: '',
          note: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
        show2: false,
        show3: false
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      nextStep() {
        this.show = false
        this.show2 = true
      },
      nextStepNote() {
        this.show2 = false
        this.show3 = true
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>