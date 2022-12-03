import react from "react";
import styles from "./styles.module.css"

class TypeCards extends react.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>
                            Type
                        </div>
                        <div className={styles.actualType}>
                            {this.props.type}
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>
                            Length
                        </div>
                        <div className={styles.actualLength}>
                            {this.props.length} minutes
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TypeCards