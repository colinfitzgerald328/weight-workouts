import react from "react";
import styles from "./styles.module.css"

class TypeCards extends react.Component {
    render() {
        constructor
        return(
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>
                            Type
                        </div>
                        <div className={styles.actualType}>
                        Legs
                        </div>
                        </div>
                    </div>
                <div className={styles.right}>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>
                            Length
                        </div>
                        <div className={styles.actualLength}>
                            40m 
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}

export default TypeCards