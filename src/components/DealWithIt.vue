<template>
    <div :class="'deal-with-it' + (display ? ' show' : '')" :style="'width: ' + width + 'px; height: ' + height + 'px; left: ' + left + 'px; top: ' + top + 'px;'" @click="hide()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 260 50">
            <g class="shades">
                <rect width="260" height="10" class="black-block"/>
                <g class="left-glass">
                    <rect y="10" width="120" height="10" class="black-block"/>
                    <rect y="20" x="10" width="110" height="10" class="black-block"/>
                    <rect y="30" x="20" width="90" height="10" class="black-block"/>
                    <rect y="40" x="30" width="70" height="10" class="black-block"/>
                    <rect y="10" x="20" width="10" height="10" class="white-block"/>
                    <rect y="10" x="40" width="10" height="10" class="white-block"/>
                    <rect y="20" x="30" width="10" height="10" class="white-block"/>
                    <rect y="20" x="50" width="10" height="10" class="white-block"/>
                    <rect y="30" x="40" width="10" height="10" class="white-block"/>
                    <rect y="30" x="60" width="10" height="10" class="white-block"/>
                </g>

                <g class="right-glass">
                    <rect y="10" x="140" width="120" height="10" class="black-block"/>
                    <rect y="20" x="140" width="110" height="10" class="black-block"/>
                    <rect y="30" x="150" width="90" height="10" class="black-block"/>
                    <rect y="40" x="160" width="70" height="10" class="black-block"/>
                    <rect y="10" x="160" width="10" height="10" class="white-block"/>
                    <rect y="10" x="180" width="10" height="10" class="white-block"/>
                    <rect y="20" x="170" width="10" height="10" class="white-block"/>
                    <rect y="20" x="190" width="10" height="10" class="white-block"/>
                    <rect y="30" x="180" width="10" height="10" class="white-block"/>
                    <rect y="30" x="200" width="10" height="10" class="white-block"/>
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
const WIDTH = 260,
  HEIGHT = 50;
export default {
  name: "DealWithIt",
  data() {
    return {
      top: 0,
      left: 0,
      display: false
    };
  },
  props: {
    displayAt: {
      default: null,
      type: Object
    },
    sizePercentage: {
      default: 100,
      type: Number
    }
  },
  created() {
    this.top = -this.height;
  },
  computed: {
    width() {
      return (WIDTH * this.sizePercentage) / 100;
    },
    height() {
      return (HEIGHT * this.sizePercentage) / 100;
    }
  },
  watch: {
    displayAt(newValue) {
      if (
        !newValue ||
        newValue.top === undefined ||
        newValue.top === null ||
        newValue.left === undefined ||
        newValue.left === null
      ) {
        return;
      }
      this.top = newValue.top;
      this.left = newValue.left;
      this.display = true;
    }
  },
  methods: {
    hide() {
      this.display = false;
      this.top = -this.height;
    }
  }
};
</script>

<style>
.deal-with-it {
  position: absolute;
  z-index: 9000;
  transition: top 0s;
}
.deal-with-it.show {
  transition: top 2s;
}
.black-block {
  fill: #000;
}
.white-block {
  fill: #fff;
}
</style>
