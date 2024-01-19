import styles from "./Board-content.module.css"

function BoardContent() {
    return (
        <>
            <div className={styles.filter}>
                <div className={styles.btnContainer}>
                    <button className={styles.select}>조회순</button>
                    <button>최신순</button>
                </div>
                <div className={styles.search}>
                    <input />
                    <button className={styles.select}>검색</button>
                </div>
            </div>
            <div>게시판이 나오는 곳입니다</div>
            <div className={styles.write}>
                <button className={styles.select}>글쓰기</button>
            </div>
        </>
    )
}

export default BoardContent