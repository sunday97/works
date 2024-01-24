import styles from "./BuddyFindSet.module.css"

function BuddyFindSet() {
    return (
        <>
            <form className={styles.container}>
                <div>닉네임<br/><input/><br/></div>
                <div>종목<br/><input/><br/></div>
                <div>시간<br/><input/><br/></div>
                <div>장소<br/><input/><br/></div>
                <div>한줄소개<br/><input/><br/></div>
                <button className={styles.btn}>버디</button>
            </form>
        </>
    )
}

export default BuddyFindSet