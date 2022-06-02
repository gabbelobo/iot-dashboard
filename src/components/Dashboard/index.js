import React, {useMemo} from 'react'
import Stat from '../Stat'
import Temperature from '../Temperature'
import styles from '../App/App.module.scss'
import ArcProgress from 'react-arc-progress';
import Arrow from '../Arrow'
import DigitalNumber from '../DigitalNumber'

export const Dashboard = ({data,last}) => {

    const rescale = (min, max, a, b, x) => {
        return ((b-a) * (x - min) / (max-min)) + a
    }

    const ARC_SIZE = 120
    const ARROW_HEIGHT = 50
    const ARROW_WIDTH = 40
    const ARC_STYLE = {
        position: 'absolute',
        left: `calc((100% - ${ARC_SIZE}px)/2)`,
        top: `calc((100% - ${ARC_SIZE}px)/2)`
    }
    const pressurePercentage = useMemo(() => last ? rescale(1000,1030,0,1,last.pressure) : 0, [last])
    const humidityPercentage = useMemo(() => last ? (last.humidity / 100) : 0, [last])

    

    return (data && last) ?
        <main>
            <div className={styles.row}>
                <Temperature data={data} last={last}/>
            </div>
            <div className={styles.row}>
                <Stat
                    title={'Pressure'}
                    description="Today pressure"
                    value={last.pressure}
                    unit='hPa'
                >
                    <div style={ARC_STYLE}>
                        <ArcProgress
                            progress={pressurePercentage}
                            arcStart={180}
                            arcEnd={360}
                            fillColor={'#76ACE2'}
                            emptyColor={'#CAE4FD'}
                            size={ARC_SIZE}
                            style={ARC_STYLE}
                        />
                    </div>
                    <Arrow value={pressurePercentage} width={ARROW_WIDTH} height={ARROW_HEIGHT} />
                </Stat>
                <Stat
                    title={'Humidity'}
                    description="Today humidity"
                    value={last.humidity}
                    unit='%'
                >
                    <div style={ARC_STYLE}>
                        <ArcProgress
                            progress={humidityPercentage}
                            fillColor={'#76ACE2'}
                            emptyColor={'#CAE4FD'}
                            size={ARC_SIZE}
                            style={ARC_STYLE}
                            arcStart={-90}
                            arcEnd={270}
                            text={`${last.humidity}%`}
                            textStyle={{
                                font: 'Montserrat'
                            }}
                        />
                    </div>
                </Stat>
            </div>
            <div className={styles.row}>
                <Stat
                    title={'Magnetic Field'}
                    description="Today magnetic field"
                    value={last.magnometer}
                    unit='T'
                >
                    <div>
                        <DigitalNumber
                            nums={Math.round(last.magnometer).toString()}
                            color={'#76ACE2'} // the active line color of number
                            unActiveColor={'transparent'} // the unactive line color of number
                            transform
                            transformDuration={600}
                        />
                    </div>

                </Stat>

            </div>
        </main> : null
}
