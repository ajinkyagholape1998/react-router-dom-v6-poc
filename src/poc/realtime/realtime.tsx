import React from 'react'
// const myWebsocket = new WebSocket("wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self")
const myWebsocket = new WebSocket("wss://socketsbay.com/wss/v2/2/demo/")
// const myWebsocket = new WebSocket("wss://chatting-with-group.herokuapp.com/socket.io/?EIO=4&transport=websocket&sid=-lUs5SmsiYSJJF-wAAAS")

function Realtime() {

    const [text, setText] = React.useState<any>([])

    React.useEffect(() => {
        try {

            myWebsocket.onopen = () => {
                console.log('connected')
            }

            myWebsocket.onmessage = (evt) => {
                // const message = JSON.parse(evt.data);
                setText([...text, evt.data])
                console.log('message => ', evt.data)
            }

            myWebsocket.onclose = () => {
                console.log('disconnected')
            }

        } catch (error) {
            console.error(error)
        }

    })
    return (
        <div>
            <p>Realtime</p>
            {
                text.map((t: string, tIdx: number) => {
                    return (
                        <div key={tIdx} >{t}</div>
                    )
                })
            }
        </div>
    )
}

export default Realtime