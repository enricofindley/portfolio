<template>
  <div>
    <h1>My Portfolio</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Project 1",
          description: "This is the first project in my portfolio.",
        },
        {
          id: 2,
          title: "Project 2",
          description: "This is the second project in my portfolio.",
        },
        {
          id: 3,
          title: "Project 3",
          description: "This is the third project in my portfolio.",
        },
      ],
    };
  },
};
</script>
