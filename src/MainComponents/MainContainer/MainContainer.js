import React from 'react'
import styles from '../../styles/Main.module.scss'
import LeftComponents from '../LeftComponent'
import RightComponent from '../RightComponent'

const MainContainer = () => {
  return (
    <div className={styles.dropContainerInner}>
      <LeftComponents />
      <RightComponent />
    </div>
  )
}

export default MainContainer
