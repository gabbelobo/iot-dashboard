import React, { useMemo } from 'react'
import Card from '../Card'
import clear from '../../images/clear.jpg'
import styles from './Temperature.module.scss'
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, Text } from 'recharts';
import { FaCompressArrowsAlt, FaMagnet } from 'react-icons/fa'
import { MdOutlineWaterDrop, MdLocationPin } from 'react-icons/md'

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.tooltip}>
                <p className="label">{`${label}`}</p>
                <p>{`${payload[0].value}°C`}</p>
            </div>
        );
    }

    return null;
};


const Temperature = ({ data, last }) => {

    const chartData = useMemo(() => {
        
        let iterations = Math.max(Math.floor(Math.min(6, data.length/4)), 1)
        let filteredData = []
        for(let i = 0; i < iterations; i++){
            let index = data.length - 1 - (i*4)
            let item = data[index]
            let dia = new Date(item.timestamp)
            filteredData.push({
                name: `${String(dia.getHours()).padStart(2, '0')}:${String(dia.getMinutes()).padStart(2, '0')}`,
                Temp: item.temperature
            })
        }
        
        return filteredData
    }, [data])

    return (
        <Card size={'big'} bg={'#C4E2FF'} image={clear}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <div className={styles.location}>
                        <div className={styles.local}>
                            <MdLocationPin /><p>Richard's place</p>
                        </div>
                        <div className={styles.time}>
                            <p>{`Hoje ${new Date().toLocaleTimeString('pt-BR').slice(0,5)}`}</p>
                        </div>
                    </div>
                    <div className={styles.main}>
                        <h1>{last.temperature}°</h1>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.row}>
                            <FaCompressArrowsAlt /><p>{last.pressure}hPa</p>
                        </div>
                        <div className={styles.row}>
                            <MdOutlineWaterDrop /><p>{last.humidity}%</p>
                        </div>
                        <div className={styles.row}>
                            <FaMagnet /><p>{last.magnometer}T</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        <ResponsiveContainer>
                            <LineChart width={400} height={400} data={chartData}
                                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                            >
                                <Text>Temperatura</Text>
                                <Tooltip content={CustomTooltip} />
                                <Line type="monotone" dataKey="Temp" stroke="#24609B" dot={{ stroke: '#24609B', strokeWidth: 2 }}/>
                                <XAxis
                                    dataKey={'name'}
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{
                                        fontSize: 12
                                    }}
                                    // allowDataOverflow
                                    interval={0}
                                    padding={{ left: 10, right: 10 }}
                                />
                                <YAxis type="number" domain={[0, 40]} hide/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </Card>
    )
}

export default Temperature