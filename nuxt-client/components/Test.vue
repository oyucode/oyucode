<template>
  <div>
    <h1>{{ user.title }}</h1>
    <p>{{ user.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      user: {
        title: 'ByamB4',
        description: 'This is user description',
      },
    }
  },
}
</script>

<style scoped>
h1 {
  color: green;
}
p {
  color: blue;
}
</style>
