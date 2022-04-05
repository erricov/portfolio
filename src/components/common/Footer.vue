<template>
<!-- Footer -->
<footer class="page-footer font-small unique-color-dark">

  <div class="prefooter">
    <div class="container">

      <!-- Grid row-->
      <div class="row py-4 d-flex align-items-center">

        <!-- Grid column -->
        <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 class="mb-0">Get connected with us on social networks!</h6>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-6 col-lg-7 text-center text-md-right fs-18">

          <!-- Facebook -->
          <a class="fb-ic mr-3">
            <font-awesome-icon :icon="['fab', 'facebook-f']"  class="white-text"/>
          </a>
          <!-- Twitter -->
          <a class="tw-ic mr-3">
            <font-awesome-icon :icon="['fab', 'twitter']"  class="white-text"/>
          </a>
          <!-- Google +-->
          <!-- <a class="gplus-ic">
            <i class="fab fa-google-plus-g white-text mr-4"> </i>
          </a> -->
          <!--Linkedin -->
          <a class="li-ic mr-3">
            <font-awesome-icon :icon="['fab', 'linkedin-in']"  class="white-text"/>
          </a>
          <!--Instagram-->
          <a class="ins-ic mr-3">
            <font-awesome-icon :icon="['fab', 'instagram']"  class="white-text"/>
          </a>

        </div>
        <!-- Grid column -->

      </div>
      <!-- Grid row-->

    </div>
  </div>

  <!-- Footer Links -->
  <div class="container text-center text-md-left mt-5">

    <!-- Grid row -->
    <div class="row mt-3">

      <!-- Grid column -->
      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        <!-- Content -->
        <h6 class="text-uppercase font-weight-bold">E. Errico</h6>
        <hr class="light-blue accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Products</h6>
        <hr class="light-blue accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>
          <a href="#!">MDBootstrap</a>
        </p>
        <p>
          <a href="#!">MDWordPress</a>
        </p>
        <p>
          <a href="#!">BrandFlow</a>
        </p>
        <p>
          <a href="#!">Bootstrap Angular</a>
        </p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Useful links</h6>
        <hr class="light-blue accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>
          <a href="#!">Your Account</a>
        </p>
        <p>
          <a href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!">Shipping Rates</a>
        </p>
        <p>
          <a href="#!">Help</a>
        </p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Contact</h6>
        <hr class="light-blue accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>
            <font-awesome-icon icon="address-card" /> Sannicandro di Bari, BA 70028, IT</p>
        <p>
            <font-awesome-icon icon="mail-bulk" /> elyerrico@gmail.com</p>
        <p>
          <font-awesome-icon icon="phone-square" /> +39 392 523 8575</p>
        <p>
          <font-awesome-icon icon="phone-square" /> +39 392 523 8575</p>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.prefooter{
  background: rgb(0,234,241)!important;
  background: linear-gradient(90deg, rgba(0,234,241,1) 0%, rgba(0,32,81,1) 90%)!important;
}
.white-text{color:#fff!important;}
.unique-color-dark{background-color:#1c2331!important;}
:disabled{pointer-events:none!important;}
a{color:#007bff;text-decoration:none;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;}
a:hover{color:#0056b3;text-decoration:none;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;}
a:disabled:hover{color:#007bff;}
a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none;}
h6{font-weight:300;}
.font-small{font-size:.9rem;}
footer.page-footer{bottom:0;color:#fff;}
footer.page-footer .footer-copyright{overflow:hidden;color:rgba(255,255,255,0.6);background-color:rgba(0,0,0,0.2);}
footer.page-footer a{color:#fff;}
.fb-ic{color:#3b5998!important;}
.fb-ic:hover,.fb-ic:focus{color:#3b5998;}
.tw-ic{color:#55acee!important;}
.tw-ic:hover,.tw-ic:focus{color:#55acee;}
.gplus-ic{color:#dd4b39!important;}
.gplus-ic:hover,.gplus-ic:focus{color:#dd4b39;}
.li-ic{color:#0082ca!important;}
.li-ic:hover,.li-ic:focus{color:#0082ca;}
.ins-ic{color:#2e5e86!important;}
.ins-ic:hover,.ins-ic:focus{color:#2e5e86;}
.fixed-sn footer{padding-left:15rem;}
@media (max-width:1440px){
.fixed-sn footer{padding-left:0;}
}
.documentation footer{padding-left:0;}

/*! CSS Used from: Embedded */
.documentation footer{padding-left:0;}

.fs-18{
  font-size: 18px;
}
</style>