<template>
  <!-- <span class="nav-link-icon d-md-none d-lg-inline-block" style="fill:currentColor"> -->
    <img :src="svgItem" :height="height" :width="width" fill="#929dab" style="color: #929dab" />
  <!-- </span> -->
</template>
  
<script lang="js">
import iconFactory from './iconFactory'
export default {
  name: 'app',
  props: {
    iconId: String,
    height: { type: String, default: "30" },
    width: { type: String, default: "30" },
  },
  mounted: function () {
    // console.log(iconFactory[this.iconId]);
  },
  data() {
    return {
      // iconFactory: iconFactory
      svgItem: iconFactory[this.iconId]
    }
  },
  methods: {

  },

}
</script>
  