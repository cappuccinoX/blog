<template>
    <div id="blog-homepage">
        {{ msg }}
    </div>
</template>

<script>
    export default {
      name: 'homepage',
      data() {
        return {
          msg: 'This is my blog.'
        }
      }
    }
</script>
