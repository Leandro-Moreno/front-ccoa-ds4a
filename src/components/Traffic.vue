<template>
  <div id="traffic-light">
    <div class="light red" :class="{active: current=='red'}"><span>{{ currentTime }}</span></div>
    <div class="light yellow" :class="{active: current=='yellow'}"></div>
    <div class="light green" :class="{active: current=='green'}"><span>{{ currentTime }}</span></div>
  </div>
</template>
<style>
#traffic-light {
  width: 70px;
  height: 240px;
  background: #222;
  border-radius: 8px;
  margin: auto;
  padding: 15px;
  position: relative;
}
.light {
  display: inline-block;
  border-radius: 100%;
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
  opacity: 0.2;
  transition: opacity 0.2s;
  position: relative;
}
.light span {
  transition: opacity 0.2s;
  color: #fff;
  font-size: 33px;
  position: absolute;
  right: 0;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  opacity: 0;
  visibility: hidden;
}
.light.active span {
  opacity: 1;
  visibility: visible;
}
.active {
  opacity: 1;
}

.red {
  background: red;
}
.yellow {
  background: yellow;
}
.green {
  background: green;
}
</style>
<script>
export default {
  name: 'Traffic',
  components: {
  },
  data() {
    return {
      current: 'red',
      currentTime: '',
    }
  },
  methods: {
    changeLight() {
      this.current = this.current == 'red' ? 'yellow' : 'red'
      this.currentTime = this.current == 'red' ? '5' : '10'
    },
    callId() {
      this.changeLight()
      setTimeout(() => {
        this.changeLight()
        setTimeout(() => {
          this.changeLight()
          setTimeout(() => {
            this.changeLight()
          }, 1000)
        }, 1000)
      }, 1000)
    }
  },
  //run mounted after the component is mounted
  mounted() {
    this.callId()
  },
}
</script>