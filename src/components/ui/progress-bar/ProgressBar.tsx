import styles from './ProgressBar.module.scss'
const ProgressBar = () => {
  return (
    <div className={styles.progress}>
      <div className={styles.progress__bar}>
        <div className="progress w-full h-full bg-green-500 left-right"></div>
      </div>
    </div>
  )
}

export default ProgressBar
