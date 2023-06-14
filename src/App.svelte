<script>
    import { Router, Route } from "svelte-routing";

    import Home from "./pages/Home.svelte";

    import "bootstrap";

    import "./assets/scss/index.scss";

    export let url = "";
</script>

<div id="app" class="text-light d-flex flex-column h-100">
    <Router url="{url}">
        <Route path="/">
            <Home />
        </Route>
    </Router>
</div>
