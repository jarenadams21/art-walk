import styles from '@/styles/Home.module.css'

export default function Navbar() {

    return (
        <div className={styles.navigation}>

        <div className={styles.navBranding}>
        <h3>Art Walk</h3>
        </div>

        <div className={styles.navOptions}>
        <p>Profile</p>
        <p>Friends</p>
        <p>Explore</p>
        <p>Generate</p>
        <p>About</p>
        </div>

        </div>
    )
}