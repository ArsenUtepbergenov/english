import {COUNT_VERBS, verbs} from './verbs.js'

const irregularVerbs = JSON.parse(verbs)

createTableVerbs(irregularVerbs)

function createTableVerbs(verbs) {
  const container = document.getElementById('container')
  const table = document.createElement('table')

  createTableHead(table, verbs)
  createTableBody(table, verbs)

  container.appendChild(table)
}

function createTableNode(parent, nodeName, textContent = '') {
  const node = document.createElement(nodeName)
  node.textContent = textContent
  parent.appendChild(node)
}

function createTableHead(parent, verbs) {
  const thead = document.createElement('thead')

  for (const typeVerb of Object.keys(verbs)) {
    createTableNode(thead, 'th', typeVerb)
  }

  parent.appendChild(thead)
}

function createTableBody(parent, verbs) {
  const tbody = document.createElement('tbody')

  for (let i = 0; i < COUNT_VERBS; i++) {
    const tr = document.createElement('tr')
    for (const listVerbs of Object.values(verbs)) {
      createTableNode(tr, 'td', listVerbs[i])
    }
    tbody.appendChild(tr)
  }

  return parent.appendChild(tbody)
}