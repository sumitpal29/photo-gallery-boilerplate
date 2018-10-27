<template>
  <div class="Home-Header" :id="headerId">
    <div class="container-fluid bg">
        <carousel :data="srcs" interval="3000" :autoplay="false" indicator-type="disc" indicator-trigger="hover" indicators="hover"></carousel>
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
      default: () => "This is header text"
    },
    subHeader: {
      type: String,
      default: () =>
        "This is sub header text describing the context of the website"
    },
    srcs: {
      type: Array,
      default: () => [{
          id: 1,
          message: 'I took this',
          content(createElement, content) {
            return createElement('div', {
              class: 'slider-container',
            }, [
              createElement('span',{ class: 'slider-container-span'}, [`${content.message} ${content.id}`],),
              createElement('img', {
                class: 'slider-container-img',
                attrs: { src: 'http://hdwpro.com/wp-content/uploads/2017/02/Natural-Cheetah-Wallpaper.jpg'},
              }),
            ]);
          },
        },
        {
          id: 1,
          message: 'I took this shot at delhi airport',
          content(createElement, content) {
            return createElement('div', {
              class: 'slider-container',
            }, [
              createElement('span',{ class: 'slider-container-span'}, [`${content.message} ${content.id}`],),
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
      &-img{

      }
      &-span{
        display: block;
        position: absolute;
        color: white;
        top: 5%;
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
