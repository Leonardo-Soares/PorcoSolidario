<template>
  <div class="menuWeb h-16 w-100">
    <div class="flex justify-between items-center container mx-auto h-full">
      <h1> Porco Solidário </h1>
      <ul class="flex gap-8">
        <li>
          <Link to="/sobre">
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/projetos">
            Projetos
          </Link>
        </li>
        <li>
          <Link to="/contato">
            Contato
          </Link>
        </li>
      </ul>
      <button> Donate </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .menuWeb {
    @apply bg-white;
    box-shadow: 0px 2px 4px rgba(#000, 8%), 0px 4px 24px rgba(#000, 8%);
    h1 {
      font-size: 36px;
      font-weight: bold;
      line-height: 52px;
      @apply text-primary;
    }
    ul {
      li {
        a {
          @apply text-paragraph;
          font-weight: 600;
        }
      }
    }
    button {
      border-radius: 16px;
      padding: 12px 40px; 
      font-weight: 700;
      transition: all 0.4s;
      transform: scale(1);
      @apply bg-secondary text-paragraph;

      &:hover {
        transform: scale(1.08);
        transition: all 0.4s;
        @apply bg-primary text-white;
      }
    }
  }
</style>