<script>
  import '../globals.css';
  export let children;
</script>

<div class="container" style="max-width: 900px; margin: 0 auto; padding: 2rem 1rem;">
  <header style="margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 0.75rem;">
      <div style="background: var(--primary); padding: 0.4rem; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/><path d="M2 17h10"/><path d="M0 8h10"/></svg>
      </div>
      <h1 style="font-size: 1.5rem; background: linear-gradient(to right, #fff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0;">
        ArthaFlow v1.0
      </h1>
    </div>
    <p class="text-muted" style="font-size: 0.75rem; margin: 0;">Digital Finance Sawah & Gabah</p>
  </header>

  {@render children()}
</div>

<style>
  :global(body) {
    background-color: #020617;
    color: #f8fafc;
    min-height: 100vh;
  }
</style>
