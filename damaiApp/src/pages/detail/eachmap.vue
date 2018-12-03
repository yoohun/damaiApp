<template>
  <div>
    <dingdanheader></dingdanheader>
    <div class="amap-page-container">
      <el-amap :zoom="zoom" :center="center" class="amap-demo" :plugin="plugin">
       <el-amap-marker :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" class="elamap"></el-amap-marker>
       </el-amap>
    </div>
  </div>
</template>

<script>
import dingdanheader from '../../components/dingdanheader'
export default {
  name: 'eachmap',
  components: {
    dingdanheader
  },
  data () {
    return {
      zoom: 15,
      center: 0,
      marker: {
        position: 0,
        events: {
          click: () => {
            if (this.mywindow.visible === true) {
              this.mywindow.visible = false
            } else {
              this.mywindow.visible = true
            }
          },
          dragend: (e) => {
            this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
          }
        },
        visible: true,
        draggable: false
      },
      plugin: {
        pName: 'Scale',
        events: {
          init (instance) {
            console.log(instance)
          }
        }
      }
    }
  },
  mounted () {
    this.center = this.$store.state.position
    this.marker.position = this.$store.state.position
  }
}
</script>

<style>
  body,html{
    height: 100%;
  }
  .amap-page-container {
    height:13rem;
  }
  .amap-demo {
    height: 100%;
  }
  .elamap{
    height: 100%;
  }
</style>
