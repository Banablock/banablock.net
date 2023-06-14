<script>
    import { Router, Route } from "svelte-routing";

    import Home from "./pages/Home.svelte";

    import "bootstrap";

    import "./assets/scss/main.scss";

    export let url = "";
</script>

<Router url="{url}">
    <Route path="/">
        <Home />
    </Route>
</Router>
