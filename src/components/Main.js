import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Css.module.css'

export default function Main(){
    return(
            <div>
                <div className={styles.mainNotice}>원하시는 항목을 클릭하세요</div>
                <Link to ="progress">
                <div className={`${styles.mainButton} ${styles.bgGreen}`}>진행검사</div>
                </Link>
                <Link to ="wating">
                <div className={`${styles.mainButton} ${styles.bgBlue}`}>대기실 현황</div>
                </Link>
                <Link to ="location">
                <div className={`${styles.mainButton} ${styles.bgRed}`}>검사실 위치</div>
                </Link>
            </div>
        );
}