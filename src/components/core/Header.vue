<template>
  <div class="Home-Header" :id="headerId">
    <div class="container-fluid bg">
        <carousel :data="srcs" :interval="3000" :autoplay="false" indicator-type="disc" indicator-trigger="hover" indicators="hover"></carousel>
      <div class="row header-text">
        <div class="offset-1 col-8 header-conatiner">
          <h1> {{ header }}</h1>
          <h4> {{ subHeader }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    headerId: {
      type: String,
      default: () => "headerData"
    },
    description: {
      type: String,
      default: () =>
        "I am a proffesional xyz asjhdksahd kdhsufh dsf sdhfuhsd fuh"
    },
    header: {
      type: String,
      default: () => "Hey, I'm Sumit"
    },
    subHeader: {
      type: String,
      default: () =>
        "I am a professional wedding and lifestyle photographer, though I love to take pet pictures"
    },
    srcs: {
      type: Array,
      default: () => [{
          message: 'I used Nikon D850 and 10-20mm wide angle lens',
          content(createElement, content) {
            return createElement('div', {
              class: 'slider-container',
            }, [
              createElement('span',{ class: 'slider-container-span'}, [`${content.message}`],),
              createElement('img', {
                class: 'slider-container-img',
                attrs: { src: 'http://hdwpro.com/wp-content/uploads/2017/02/Natural-Cheetah-Wallpaper.jpg'},
              }),
            ]);
          },
        },
        {
          message: 'I took this one while visiting Kerala',
          content(createElement, content) {
            return createElement('div', {
              class: 'slider-container',
            }, [
              createElement('span',{ class: 'slider-container-span'}, [`${content.message}`],),
              createElement('img', {
                class: ['slider-container-img', 'img-fluid'],
                attrs: { src: 'https://cn.pling.com/img/5/3/a/d/5c1f9e4747b7414eb6dec1cc8ead1b358d98.jpg'},
              }),
            ]);
          },
        }
      ],
    }
  },
};
</script>

<style lang="scss">
.Home-Header {
  height: 500px;
  overflow: hidden;
  margin-bottom: 50px;
  position: relative;
  top: 0;
  left: 0;

  .bg {
    padding: 0;

    .slider-container {
       height: 500px;
      position: relative;

      &-span{
        display: block;
        position: absolute;
        color: white;
        bottom: 5%;
        right: 3%;
      }
    }
  }

  .header-text {
    position: absolute;
    top: 50%;
    height: 20rem;
    margin-top: -10rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);  
    z-index: 10;

    .header-conatiner {
      text-align: left;
      padding-top: 10%;
      h1, h4{
        color: white;
      }
    }
  }


}
</style>
