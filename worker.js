

function killBox() {
    let target = document.getElementById('mlbtv-stats-panel')
    if (target) {
    target.remove()
    }
}

window.setTimeout(_ => {killBox()}, 3000)

