<script lang="ts">
  import Global from "./Global.svelte";
  import Footer from "./lib/Componets/Footer.svelte";
  import NavBar from "./lib/Componets/NavBar.svelte";
  import ProducDetail from "./lib/Componets/ProductDetail.svelte";
  import { Router, Route } from "svelte-routing";
  import Home from "./lib/Pages/Home.svelte";
  import { crossfade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  
  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
      };
    },
  });
</script>

<Global />
<Router>
  <NavBar />
  <Route path="/">
    <Home {receive} {send} />
  </Route>
  <Route path="about">
    <ProducDetail {receive} {send} />
  </Route>
  <Footer />
</Router>
