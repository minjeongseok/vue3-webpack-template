<template>
    <header>
        <template v-for="nav in navigations" :key="nav.name">
            <RouterLink :to="nav.href">
                {{ nav.name }}
            </RouterLink>
        </template>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navigations: [
                {
                    name: "Search",
                    href: "/",
                },
                {
                    name: "Movie",
                    href: "/movie",
                },
                {
                    name: "About",
                    href: "/about",
                },
            ],
        };
    },
};
</script>
