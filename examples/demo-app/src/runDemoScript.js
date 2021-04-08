function findInstanceAndParser(root){
    if(!window.$__react_nip) throw new Error('not found react nip')
    const rootFiberNode = window.$__react_nip.findReactInstanceByRoot(root)
    if(!rootFiberNode) throw new Error('not found fiber node instance ')
    return window.$__react_nip.fiberNodeParser(rootFiberNode)
}

function runDemoScript(){
    window.onload = ()=>{
        const root = document.querySelector('#root')
        root.addEventListener('click', (e)=>{
            const fiberNode = findInstanceAndParser(e.target)
            console.log(fiberNode)
        })
    }
}

export default runDemoScript
