<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
       
    </ul>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg:'Hello~虎牙商城',
      users:[]
    }
  },
  mounted() {
            this.getAllUsers();
        },
  methods: {
            getAllUsers() {
                this.axios.get('http://127.0.0.1:5500/index.json'

                    )
                    .then(response => {
                        this.users = response.data;
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            }
        }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
