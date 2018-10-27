
<template>
  <div class='gallery-container mb-5'>
    <div class="container">
      <div class="row">
        <div class='gallery-header mb-sm-2'>
          <h2 :id="itemId"> {{ header }} </h2>
        </div>
      </div>
      <div class="row">
        <div class='gallery-image-container'>
          <div class="card-columns">
            <div :class="['card', index%2 === 0 ? 'pb-xs-1 pb-sm-2' : 'pb-xs-1']" v-for="(img, index) in items" :key="index">
              <img class="card-img-top img-anchor" itemprop="contentUrl" :data-size=" + img.w + 'x' + img.h"  :src="img.src"/>
              <div class="card-body">
                <h5 v-if="img.title" class="card-title">{{ img.title }}</h5>
                <p v-if="img.description" class="card-text">{{ img.description }}</p>
                <p v-if="img.muted" class="card-text"><small class="text-muted">{{ img.muted }}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">

          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

            <span class="rotation-wrapper">
              <i class="material-icons" v-if="options.rotationOn" @click="rotate(-90)">rotate_left</i>
              <i class="material-icons" v-if="options.rotationOn" @click="rotate(90)">rotate_right</i>
            </span>

            <!-- <button class="pswp__button pswp__button--share" title="Share"></button> -->
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" @click='resetAngle'>
          </button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)" @click='resetAngle'>
          </button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoSwipe from "photoswipe/dist/photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

export default {
  name: "gallery",
  props: {
    _images: {
      type: Array,
      default: () => []
    },
    _options: {
      type: Object,
      default: () => {}
    },
    options: {
      default: () => ({}),
      type: Object
    },
    header: {
      type: String,
      default: () => "All About Cats"
    },
    itemId: {
      type: String,
      default: () => ''
    },
    items: {
      type: Array,
      default: () => [
        {
          src: "http://placekitten.com/300/600",
          title: "Card title that wraps to a new line",
          description:
            "This is a longer card with This content is a little bit longer.",
          w: 400,
          h: 600
        },
        {
          src: "http://placekitten.com/505/800",
          muted: "Last updated 3 mins ago",
          w: 500,
          h: 800
        },
        {
          src: "http://placekitten.com/600/600",
          title: "Card title that wraps to a new line",
          w: 600,
          h: 600
        },
        {
          src: "http://placekitten.com/501/400",
          w: 500,
          h: 400
        },
        {
          src: "http://placekitten.com/800/600",
          title: "Landscape",
          w: 800,
          h: 600
        },
        {
          src: "http://placekitten.com/801/800",
          title: "Card title that wraps to a new line",
          w: 600,
          h: 800
        },
        {
          src: "http://placekitten.com/600/900",
          title: "Card title that wraps",
          w: 600,
          h: 900
        },
        {
          src: "http://placekitten.com/601/800",
          w: 600,
          h: 800
        },
        {
          src: "http://placekitten.com/600/300",
          thumbnail: "http://placekitten.com/100/100",
          w: 600,
          h: 300
        }
      ]
    }
  },
  components: {},
  data() {
    return {
      angle: 0
    };
  },
  mounted() {
    let that = this;
    let initPhotoSwipeFromDOM = function(gallerySelector) {
      // parse slide data (url, title, size ...) from DOM elements
      // (children of gallerySelector)
      let parseThumbnailElements = function(el) {
        let thumbElements = el.childNodes,
          numNodes = thumbElements.length,
          items = [],
          figureEl,
          linkEl,
          size,
          item;
        for (let i = 0; i < numNodes; i++) {
          figureEl = thumbElements[i]; // <figure> element
          // include only element nodes
          if (figureEl.nodeType !== 1 || figureEl.className === "card-body") {
            continue;
          }
          linkEl = figureEl || figureEl.getElementsByClassName("img-anchor")[0]; // figureEl.children[0]; // <a> element
          size =
            linkEl.getAttribute("data-size") &&
            linkEl.getAttribute("data-size").split("x");
          // create slide object
          item = {
            src: linkEl.getAttribute("src") || linkEl.getAttribute("href"),
            w: parseInt(size[0], 10) ? parseInt(size[0], 10) : 800,
            h: parseInt(size[1], 10) ? parseInt(size[1], 10) : 800
          };
          if (figureEl.children.length > 1) {
            // <figcaption> content
            item.title =
              linkEl.getAttribute("title") || figureEl.children[1].innerHTML;
          }
          if (linkEl.children.length > 0) {
            // <img> thumbnail element, retrieving thumbnail url
            item.msrc = linkEl.children[0].getAttribute("src");
          } else {
            item.msrc = linkEl.getAttribute("src");
          }
          item.el = figureEl; // save link to element for getThumbBoundsFn
          items.push(item);
        }
        return items;
      };
      // find nearest parent element
      let closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
      };
      // triggers when user clicks on thumbnail
      let onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        let eTarget = e.target || e.srcElement;
        // find root element of slide
        let clickedListItem = closest(eTarget, function(el) {
          // custom edit FIGURE
          return el.tagName && el.tagName.toUpperCase() === "IMG";
        });
        if (!clickedListItem) {
          return;
        }
        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        let clickedGallery = clickedListItem.parentNode,
          childNodes = clickedListItem.parentNode.childNodes,
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index;
        for (let i = 0; i < numChildNodes; i++) {
          if (childNodes[i].nodeType !== 1) {
            continue;
          }
          if (childNodes[i] === clickedListItem) {
            index = nodeIndex;
            break;
          }
          nodeIndex++;
        }
        if (index >= 0) {
          // open PhotoSwipe if valid index found
          openPhotoSwipe(index, clickedGallery);
        }
        return false;
      };
      // parse picture index and gallery index from URL (#&pid=1&gid=2)
      let photoswipeParseHash = function() {
        let hash = window.location.hash.substring(1),
          params = {};
        if (hash.length < 5) {
          return params;
        }
        let vars = hash.split("&");
        for (let i = 0; i < vars.length; i++) {
          if (!vars[i]) {
            continue;
          }
          let pair = vars[i].split("=");
          if (pair.length < 2) {
            continue;
          }
          params[pair[0]] = pair[1];
        }
        if (params.gid) {
          params.gid = parseInt(params.gid, 10);
        }
        return params;
      };
      let openPhotoSwipe = function(
        index,
        galleryElement,
        disableAnimation,
        fromURL
      ) {
        let pswpElement = document.querySelectorAll(".pswp")[0],
          gallery,
          options,
          items;
        items = parseThumbnailElements(galleryElement);
        // define options (if needed)
        options = {
          // define gallery index (for URL)
          galleryUID: galleryElement.getAttribute("data-pswp-uid"),
          getThumbBoundsFn: function(index) {
            // See Options -> getThumbBoundsFn section of documentation for more info
            let thumbnail = items[index].el, // items[index].el.getElementsByTagName("img")[0], // find thumbnail
              pageYScroll =
                window.pageYOffset || document.documentElement.scrollTop,
              rect = thumbnail.getBoundingClientRect();
            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
          }
        };
        // PhotoSwipe opened from URL
        if (fromURL) {
          if (options.galleryPIDs) {
            // parse real index when custom PIDs are used
            // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
            for (let j = 0; j < items.length; j++) {
              if (items[j].pid == index) {
                options.index = j;
                break;
              }
            }
          } else {
            // in URL indexes start from 1
            options.index = parseInt(index, 10) - 1;
          }
        } else {
          options.index = parseInt(index, 10);
        }
        // exit if index not found
        if (isNaN(options.index)) {
          return;
        }
        if (disableAnimation) {
          options.showAnimationDuration = 0;
        }
        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(
          pswpElement,
          PhotoSwipeUI_Default,
          items,
          Object.assign(options, that.options)
        );
        gallery.init();
      };
      // loop through all gallery elements and bind events
      let galleryElements = document.querySelectorAll(gallerySelector);
      for (let i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute("data-pswp-uid", i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
      }
      // Parse URL and open gallery if it contains #&pid=3&gid=1
      let hashData = photoswipeParseHash();
      if (hashData.pid && hashData.gid) {
        openPhotoSwipe(
          hashData.pid,
          galleryElements[hashData.gid - 1],
          true,
          true
        );
      }
    };
    // custom change
    initPhotoSwipeFromDOM(".gallery-image-container");
  },
  methods: {
    rotate: function(newAngle) {
      this.angle = this.angle + newAngle;
      this.$el
        .querySelectorAll(".pswp__img")
        .forEach(i => (i.style.transform = `rotate(${this.angle}deg)`));
    },
    resetAngle: function() {
      this.angle = 0;
      this.$el
        .querySelectorAll(".pswp__img")
        .forEach(i => (i.style.transform = `rotate(${this.angle}deg)`));
    }
  }
};
</script>

<style lang="scss" scoped>
.pswp__top-bar {
  text-align: right;
}
.rotation-wrapper {
  color: white;
  position: relative;
  top: 10px;
}
.gallery-image-container {
  max-width: 1170px;
  width: 100%;
  overflow-y: auto;
  margin-bottom: 70px;
  margin: 0 auto;
}

.card {
  border: none;
}

@media only screen and (max-width: 576px) {
    .gallery-header, .gallery-image-container {
      padding: 0 20px;
    }
    
    .card-body{
      padding-top: 1rem;
      padding-bottom: 1rem;
      .card-title{
        margin-bottom: 1rem;
      }
    }
}

@media only screen and (min-width: 768px) {
    .card{
      margin-bottom: 0;
      .card-body{
        padding-bottom: 0;
        .card-title {
          margin-bottom: 1rem;
        }
      }
    }
}
</style>
