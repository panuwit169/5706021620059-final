<template>
  <div class="hello">
    <div class="container">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Grade Calculate
            </h1>
            <h2 class="subtitle">
              for KMUTNB student
            </h2>
          </div>
        </div>
      </section>
      <table class="table">
        <thead>
          <tr>
            <td>#</td>
            <td>Subject Name</td>
            <td>Credit</td>
            <td>Grade</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r, index) in row">
            <td>{{ index + 1 }}</td>
            <td>
              <p class="control">
                <input class="input" type="text" v-model="subNameInput[index]">
              </p>
            </td>
            <td>
              <span class="select">
                <select v-model="credit[index]" placeholder="Normal input">
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                </select>
              </span>
            </td>
            <td>
              <span class="select">
                <select v-model="score[index]">
                  <option value='4'>A</option>
                  <option value='3.5'>B+</option>
                  <option value='3'>B</option>
                  <option value='2.5'>C+</option>
                  <option value='2'>C</option>
                  <option value='1.5'>D+</option>
                  <option value='1'>D</option>
                  <option value='0'>F</option>
                </select>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="columns">
        <div class="column">
          <div class="is-pulled-right">
            <button type="button" class="button" id="add" @click="add()">Add Subject</button>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="has-text-centered">
            <button type="button" class="button is-success" @click="calculate()">Calculate</button>
          </div>
        </div>
      </div>
      <h1 class="title has-text-centered" v-if="sum">
        Your grade average is {{ sum }}
      </h1>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      row: 1,
      allCredit: 0,
      subNameInput: [],
      credit: [],
      score: [],
      sum: '',
      sumCredit: 0.0
    }
  },
  methods: {
    add () {
      this.row = parseInt(this.row) + 1
      // localStorage.setItem('row', this.row)
    },
    calculate () {
      this.allCredit = 0.0
      this.sumCredit = 0.0
      for (let i = 0; i < this.row; i++) {
        this.allCredit = this.allCredit + parseFloat(this.credit[i])
        let t = parseFloat(this.credit[i]) * parseFloat(this.score[i])
        this.sumCredit = this.sumCredit + t
      }
      this.sum = this.sumCredit / this.allCredit
      this.sum = parseFloat(this.sum).toFixed(2)
      localStorage.setItem('subNameInput', JSON.stringify(this.subNameInput))
    }
  }
  // mounted () {
  //
  // }
//   computed: {
//     ...mapState({
//       subNameInput: state => state.subNameInput
//     }),
//     ...mapGetters([
//       'row',
//       'allCredit',
//       'subNameInput',
//       'credit',
//       'score',
//       'sum',
//       'sumCredit'
//     ]),
//     subNameInput () {
//       return this.$store.getters.subNameInput
//     }
//   },
//   methods: {
//     add () {
//       this.addRow()
//     },
//     cal () {
//       this.calculate()
//     },
//     updatesubNameInput (e) {
//       this.$store.commit('updatesubNameInput', e.target.value)
//     },
//     ...mapActions([
//       'addRow',
//       'calculate'
//     ])
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
