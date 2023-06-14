<script>
    import { Router, Route } from "svelte-routing";

    import Home from "./pages/Home.svelte";

    import "bootstrap";

    import "./assets/scss/index.scss";

    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';

    export let url = "";
</script>

<div id="app" class="text-light d-flex flex-column h-100">
    <Header />
    <div class="tw-container tw-mx-auto">
        <Router url="{url}">
            <Route path="/">
                <Home />
            </Route>
        </Router>
    </div> 
    <Footer />
</div>
