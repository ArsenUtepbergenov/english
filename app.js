import {COUNT_VERBS, VerbForms, irregularVerbs} from './verbs.js'

const verbs = JSON.parse(irregularVerbs)
const infinitiveForm = verbs[VerbForms.INFINITIVE]
const pastSimpleForm = verbs[VerbForms.PAST_SIMPLE]
const pastParticipleForm = verbs[VerbForms.PAST_PARTICIPLE]
let randomIndexVerb = Math.floor(Math.random() * COUNT_VERBS)
let answers = 0

const container = document.getElementById('container')
const containerTable = document.getElementById('containerTable')

createTextInput(container, {id: 'infinitive', placeholder: 'Infinitive...', value: infinitiveForm[randomIndexVerb], disabled: true})
createTextInput(container, {id: 'pastSimple', placeholder: 'The form...', autofocus: true})
createTextInput(container, {id: 'pastParticiple', placeholder: 'The form...'})

const infinitiveInput = document.getElementById('infinitive')
const pastSimpleInput = document.getElementById('pastSimple')
const pastParticipleInput = document.getElementById('pastParticiple')

let currentPastSimpleVerb = pastSimpleForm[randomIndexVerb]
let currentPastParticipleVerb = pastParticipleForm[randomIndexVerb]

nextVerbButton.addEventListener('click', generateRandomVerb)
toggleVerbsTableButton.addEventListener('click', toggleVerbsTable)

pastSimpleInput.addEventListener('input', event => { styleInput(currentPastSimpleVerb, event.target) })
pastParticipleInput.addEventListener('input', event => { styleInput(currentPastParticipleVerb, event.target) })
pastSimpleInput.addEventListener('paste', event => { event.preventDefault() })
pastParticipleInput.addEventListener('paste', event => { event.preventDefault() })

function resetTextInput(input) {
  input.style = ''
  input.disabled = false
  input.value = ''
}

function styleInput(value, target) {
  if (target.value === '') {
    target.style = ''
    return
  } else if (value !== target.value) {
    target.style = 'background: #ffb0aa; border-color: #f97e7e;'
  } else {
    target.style = 'background: #a7e45f; border-color: green;'
    target.disabled = true
    answers++
  }
}

setInterval(() => {
  if (answers >= 2) {
    generateRandomVerb()
  } 
}, 1000)

function createTextInput(parent, attributes) {
  const { id, placeholder, value, autofocus, disabled } = attributes
  const input = document.createElement('input')
  id && (input.id = id)
  input.type = 'text'
  value && (input.value = value)
  input.pattern = '^[a-zA-Z]+$'
  input.placeholder = placeholder || ''
  autofocus && (input.autofocus = autofocus)
  input.disabled = disabled || false
  parent.appendChild(input)
}

function generateRandomVerb() {
  randomIndexVerb = Math.floor(Math.random() * COUNT_VERBS)
  infinitiveInput.value = infinitiveForm[randomIndexVerb]
  resetTextInput(pastSimpleInput)
  resetTextInput(pastParticipleInput)
  currentPastSimpleVerb = pastSimpleForm[randomIndexVerb]
  currentPastParticipleVerb = pastParticipleForm[randomIndexVerb]
  answers = 0
}

function toggleVerbsTable() {
  const state = containerTable.style.visibility
  if (state === '' || state === 'hidden') {
    containerTable.style.visibility = 'visible'
  } else {
    containerTable.style.visibility = 'hidden'
  }
}

createTableVerbs(verbs)

function createTableVerbs(verbs) {
  const table = document.createElement('table')

  createTableHead(table, verbs)
  createTableBody(table, verbs)

  containerTable.appendChild(table)
  containerTable.style.visibility = 'hidden'
}

function createNode(parent, nodeName, textContent = '') {
  const node = document.createElement(nodeName)
  node.textContent = textContent
  parent.appendChild(node)
}

function createTableHead(parent, verbs) {
  const thead = document.createElement('thead')

  for (const typeVerb of Object.keys(verbs)) {
    createNode(thead, 'th', typeVerb)
  }

  parent.appendChild(thead)
}

function createTableBody(parent, verbs) {
  const tbody = document.createElement('tbody')

  for (let i = 0; i < COUNT_VERBS; i++) {
    const tr = document.createElement('tr')
    for (const listVerbs of Object.values(verbs)) {
      createNode(tr, 'td', listVerbs[i])
    }
    tbody.appendChild(tr)
  }

  return parent.appendChild(tbody)
}