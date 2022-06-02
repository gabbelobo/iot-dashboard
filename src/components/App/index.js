import React, { useEffect, useState } from 'react'
import { Dashboard } from '../Dashboard'
import Topbar from '../Topbar'
import styles from './App.module.scss'

const App = () => {
    const [data, setData] = useState(null)
    const [last, setLast] = useState(null)


    useEffect(() => {
        console.log('rendered');
        fetch("https://iot.lofgren.com.br/ttn")
            .then(res => res.json())
            .then(res => {
                setData(res)
                setLast(res[res.length - 1])
            })
    }, [])

    return  (
        <div className={styles.app}>
            <Topbar />
            <Dashboard data={data} last={last}/>
        </div>
    )
}

export default App