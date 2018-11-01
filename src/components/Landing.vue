<template>
    <div class="landing-page">
        <PrimaryNavigation />
        <Header id="headerData"/>
        <Gallery :items="firstGallery.items" :header="firstGallery.header" id="firstGallery"/>
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
    data: () => ({
        // All image urls will be ./images
        firstGallery: {
            header: "Go Green",
            subHeader: "I love forests, these are some of clips",
            items: [{
                src: "./images/1.jpeg",
                title: "Card title that wraps to a new line",
                description:
                    "This is a longer card with This content is a little bit longer.",
                w: 400,
                h: 600
            }],
        }
    })
}
</script>