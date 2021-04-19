<script>
  import Gallery from "../Componets/Gallery.svelte";
  import ProductList from "../Componets/ProductList.svelte";
  import { expoInOut } from "svelte/easing";
  export let send,receive;
</script>

<Gallery receive={receive} send={send} />
<ProductList />
