<template>
    <b-navbar toggleable="md" class="primary-navbar" fixed="top" sticky-top :sticky="true" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">
        <!-- Place Your name here -->
        Sumit Photographer
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#headerData">Info</b-nav-item>
            <b-nav-item href="#firstGallery" @click="scrollIntoView">Gallery</b-nav-item>
            <b-nav-item href="#contact" @click="scrollIntoView">Contact Me</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: "PrimaryNavigation",
  methods: {
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.scrollTo(document.documentElement, el.offsetTop - 70, 1250)
      }
    },
    scrollTo: (element, to, duration) => {
      var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

      Math.easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      var animateScroll = function() {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    }
  }
};
</script>

<style lang="scss">
.primary-navbar {
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
}
</style>
