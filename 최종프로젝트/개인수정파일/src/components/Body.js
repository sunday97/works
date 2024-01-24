import styles from "./Body.module.css";
import Container from "./Container";
import Title from "./Title";
import cloud1 from "../assets/cloud1.svg";
import cloud2 from "../assets/cloud2.svg";
import cloud3 from "../assets/cloud3.svg";
import mountainLeft from "../assets/mountain-left.svg";
import mountainRight from "../assets/mountain-right.svg";
import mountainMiddle from "../assets/mountain-middle.svg";
import tree1 from "../assets/tree1.svg";
import tree2 from "../assets/tree2.svg";
import tree3 from "../assets/tree3.svg";
import tree4 from "../assets/tree4.svg";
import tree5 from "../assets/tree5.svg";
import tree6 from "../assets/tree6.svg";
import tree7 from "../assets/tree7.svg";
import tree8 from "../assets/tree8.svg";
import bannerChar1 from "../assets/main-banner-charicter1.svg";
// import "./SequentialMountains.css";

import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import classnames from "classnames";

function Body() {
  const ImgWraper = styled.div`
    display: flax;
    justify-content: center;
    align-items: center;
  `;

  const mountain1Ref = useRef(null);
  const mountain2Ref = useRef(null);
  const mountain3Ref = useRef(null);
  const tree1Ref = useRef(null);
  const tree2Ref = useRef(null);
  const tree3Ref = useRef(null);
  const tree4Ref = useRef(null);
  const tree5Ref = useRef(null);
  const tree6Ref = useRef(null);
  const tree7Ref = useRef(null);
  const tree8Ref = useRef(null);
  const mainChar = useRef(null);
  const title = useRef(null);

  // console.log(title);

  useEffect(() => {
    const delay1 = 1900;
    const delay2 = 2300;
    const delay3 = 2700;
    const delay4 = 2900;
    const delay5 = 3000;
    const delay6 = 3100;
    const delay7 = 3200;
    const main = 3300;

    const animateMountain = (ref, delay) => {
      const timerId = setTimeout(() => {
        ref.current.classList.add(styles.animete);
      }, delay);

      console.log(timerId);
      // setTimeout의 리턴 값, 즉 타이머 ID를 반환
      return timerId;
    };

    const timers = [
      animateMountain(mountain1Ref, delay1),
      animateMountain(mountain2Ref, delay2),
      animateMountain(mountain3Ref, delay3),
      animateMountain(tree1Ref, delay4),
      animateMountain(tree2Ref, delay5),
      animateMountain(tree3Ref, delay6),
      animateMountain(tree4Ref, delay7),
      animateMountain(tree5Ref, delay7),
      animateMountain(tree6Ref, delay6),
      animateMountain(tree7Ref, delay5),
      animateMountain(tree8Ref, delay4),
      animateMountain(mainChar, delay7),
      animateMountain(title, main),
    ];

    // cleanup 함수
    return () => {
      // 모든 타이머 ID를 사용하여 clearTimeout 호출
      timers.forEach((timerId) => clearTimeout(timerId));
    };
  }, []);

  const Container2 = styled(Container)`
    margin: 0 auto;
  `;

  return (
    <>
      {/* <div className="mountain-container">
        <div ref={mountain1Ref} className="mountain mountain1"></div>
        <div ref={mountain2Ref} className="mountain mountain2"></div>
        <div ref={mountain3Ref} className="mountain mountain3"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      {/* 큰이미지 시작 */}
      <div className={styles.big}>
        <span ref={title} className={styles.span}>
          운동친구 <span className={styles.inSpan}>버디찾기</span> 서비스 혼자
          운동하는 친구들을 위해 주변 친구들 찾아 운동하는 복합 커뮤니티
        </span>
        {/* 구름 */}
        <ImgWraper className={styles.cloudBox1}>
          <img src={cloud1} />
        </ImgWraper>
        <ImgWraper className={styles.cloudBox2}>
          <img src={cloud2} />
        </ImgWraper>
        <ImgWraper className={styles.cloudBox3}>
          <img src={cloud3} />
        </ImgWraper>
        <ImgWraper className={styles.cloudBox4}>
          <img src={cloud3} />
          {/* 산 */}
        </ImgWraper>
        <ImgWraper ref={mountain1Ref} className={styles.mountainLeft}>
          <img src={mountainLeft} />
        </ImgWraper>
        <ImgWraper ref={mountain2Ref} className={styles.mountainRight}>
          <img src={mountainRight} />
        </ImgWraper>
        <ImgWraper ref={mountain3Ref} className={styles.mountainMiddle}>
          <img src={mountainMiddle} />
        </ImgWraper>
        {/* 나무 */}
        <ImgWraper ref={tree1Ref} className={styles.tree1}>
          <img src={tree1} />
        </ImgWraper>
        <ImgWraper ref={tree2Ref} className={styles.tree2}>
          <img src={tree2} />
        </ImgWraper>
        <ImgWraper ref={tree3Ref} className={styles.tree3}>
          <img src={tree3} />
        </ImgWraper>
        <ImgWraper ref={tree4Ref} className={styles.tree4}>
          <img src={tree4} />
        </ImgWraper>
        <ImgWraper ref={tree5Ref} className={styles.tree5}>
          <img src={tree5} />
        </ImgWraper>
        <ImgWraper ref={tree6Ref} className={styles.tree6}>
          <img src={tree6} />
        </ImgWraper>
        <ImgWraper ref={tree7Ref} className={styles.tree7}>
          <img src={tree4} />
        </ImgWraper>
        <ImgWraper ref={tree8Ref} className={styles.tree8}>
          <img src={tree8} />
        </ImgWraper>
        {/* 캐릭터 */}
        <ImgWraper ref={mainChar} className={styles.bannerChar1}>
          <img src={bannerChar1} />
        </ImgWraper>
      </div>
      {/* 큰이미지 끝 */}
      {/* Body 시작 */}
      <Container>
        <h2 className={styles.mapText}>내 주위 버디 보기</h2>
        {/* 시간에 따라 운동 필터링 보여주기? */}
        <div className={styles.map}>지도입니다.</div>
      </Container>

      {/* 커뮤니티 시작 */}
      <section className={styles.communitySection}>
        <Container2 className={styles.community}>
          <Title>베스트 커뮤니티(자유, 운동팁, 물어봐요!)</Title>
          <ul className={styles.post}>
            <li className={styles.postItems}>lorem</li>
          </ul>
        </Container2>
      </section>
      {/* 커뮤니티 끝 */}

      {/* 스토어 랭킹 시작 */}
      <Container className={styles.store}>
        <Title>스토어 랭킹(식품~기구)</Title>
        <div className={styles.sort}>
          <div className={styles.item}>
            <div className={styles.box}></div>
            <h4>LOREM IPSUM</h4>
            <p className={styles.font}>LOREM IPSUM</p>
            <p className={styles.rating}>LOREM ★ 4.4</p>
          </div>

          <div className={styles.item}>
            <div className={styles.box}></div>
            <h4>LOREM IPSUM</h4>
            <p className={styles.font}>LOREM IPSUM</p>
            <p className={styles.rating}>LOREM ★ 4.4</p>
          </div>

          <div className={styles.item}>
            <div className={styles.box}></div>
            <h4>LOREM IPSUM</h4>
            <p className={styles.font}>LOREM IPSUM</p>
            <p className={styles.rating}>LOREM ★ 4.4</p>
          </div>

          <div className={styles.item}>
            <div className={styles.box}></div>
            <h4>LOREM IPSUM</h4>
            <p className={styles.font}>LOREM IPSUM</p>
            <p className={styles.rating}>LOREM ★ 4.4</p>
          </div>

          <div className={styles.item}>
            <div className={styles.box}></div>
            <h4>LOREM IPSUM</h4>
            <p className={styles.font}>LOREM IPSUM</p>
            <p className={styles.rating}>LOREM ★ 4.4</p>
          </div>

          <div className={styles.item}>
            <div className={styles.box}></div>
            <h4>LOREM IPSUM</h4>
            <p className={styles.font}>LOREM IPSUM</p>
            <p className={styles.rating}>LOREM ★ 4.4</p>
          </div>

          <div className={styles.item}>
            <div className={styles.box}></div>
            <h4>LOREM IPSUM</h4>
            <p className={styles.font}>LOREM IPSUM</p>
            <p className={styles.rating}>LOREM ★ 4.4</p>
          </div>
        </div>
      </Container>
      {/* 스토어 랭킹 끝 */}
      {/* Body 끝 */}
    </>
  );
}

export default Body;
