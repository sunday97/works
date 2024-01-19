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
import "./SequentialMountains.css";

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

  useEffect(() => {
    const delay1 = 1900;
    const delay2 = 2300;
    const delay3 = 2700;

    const animateMountain = (mountainRef, delay) => {
      setTimeout(() => {
        mountainRef.current.classList.add("animate");
      }, delay);
    };

    animateMountain(mountain1Ref, delay1);
    animateMountain(mountain2Ref, delay2);
    animateMountain(mountain3Ref, delay3);
  }, []);

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
        <img />
        <span className={styles.span}>
          운동친구"버디"찾기 서비스 혼자 운동하는 친구들을 위해 주변 친구들 찾아
          운동하는 복합 커뮤니티
        </span>
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
        </ImgWraper>

        {/* <ImgWraper
          ref={mount1}
          className={classnames(
            styles.mountain,
            stepRef.current >= 1 ? styles.mountainLeft : ""
          )}
        >
          <img src={mountainLeft} />
        </ImgWraper> */}
        <ImgWraper ref={mountain1Ref} className={styles.mountainLeft}>
          <img src={mountainLeft} />
        </ImgWraper>

        <ImgWraper ref={mountain2Ref} className={styles.mountainRight}>
          <img src={mountainRight} />
        </ImgWraper>

        <ImgWraper ref={mountain3Ref} className={styles.mountainMiddle}>
          <img src={mountainMiddle} />
        </ImgWraper>

        {/* <ImgWraper className={styles.tree1}>
          <img src={tree1} />
        </ImgWraper>
        <ImgWraper className={styles.tree2}>
          <img src={tree2} />
        </ImgWraper>
        <ImgWraper className={styles.tree3}>
          <img src={tree3} />
        </ImgWraper>
        <ImgWraper className={styles.tree4}>
          <img src={tree4} />
        </ImgWraper>
        <ImgWraper className={styles.tree5}>
          <img src={tree5} />
        </ImgWraper>
        <ImgWraper className={styles.tree6}>
          <img src={tree6} />
        </ImgWraper>
        <ImgWraper className={styles.tree7}>
          <img src={tree4} />
        </ImgWraper>
        <ImgWraper className={styles.tree8}>
          <img src={tree8} />
        </ImgWraper>
        <ImgWraper className={styles.bannerChar1}>
          <img src={bannerChar1} />
        </ImgWraper> */}
      </div>
      {/* 큰이미지 끝 */}
      {/* Body 시작 */}
      <Container>
        <h2 className={styles.mapText}>내 주위 버디 보기</h2>
        {/* 시간에 따라 운동 필터링 보여주기? */}
        <div className={styles.map}>지도입니다.</div>
      </Container>

      {/* 커뮤니티 시작 */}
      <Container className={styles.community}>
        <Title>베스트 커뮤니티(자유, 운동팁, 물어봐요!)</Title>
        <ol className={styles.post}>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ol>
      </Container>
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
