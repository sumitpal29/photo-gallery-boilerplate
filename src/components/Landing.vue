<template>
    <div class="landing-page">
        <PrimaryNavigation />
        <Header id="headerData"/>
        <Gallery id="firstGallery"/>
        <PrimaryFooter id="contact"/>
    </div>
</template>

<script>
import PrimaryFooter from './core/PrimaryFooter';
import PrimaryNavigation from './core/PrimaryNavigation';
import Gallery from './core/Gallery';
import Header from './core/Header';

export default {
    name: "Landing-Page",
    components: {
        PrimaryFooter,
        PrimaryNavigation,
        Gallery,
        Header,
    },
    data: {
        headerData: {},
    }
}
</script>