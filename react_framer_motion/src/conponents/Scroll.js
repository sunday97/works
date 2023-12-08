import { motion, useScroll } from "framer-motion";
import "./Scroll.css";

export function Scroll() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);

  return (
    <>
      <div className="container">
        <motion.div
          className="bar"
          style={{ scaleX: scrollYProgress }}
        ></motion.div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum
            cursus porta. Ut egestas magna in molestie volutpat. Integer quis
            est justo. Morbi bibendum placerat risus id maximus. Vivamus
            facilisis ullamcorper facilisis. Mauris vitae augue vel orci
            faucibus pulvinar et eleifend est. Nulla feugiat ante sed mauris
            tristique, sed accumsan dui pellentesque. Vivamus hendrerit elit a
            diam pellentesque, et molestie ligula ultrices. Quisque faucibus
            feugiat leo ut accumsan. Fusce et lectus vitae leo venenatis luctus
            eu ut ligula. Sed non dolor nec mauris luctus congue a eget lorem.
            Morbi ante mauris, egestas in tincidunt ac, interdum ac est.
            Praesent convallis nunc non orci eleifend, at dapibus justo egestas.
            Aenean nibh lacus, rutrum et erat non, semper sagittis risus. Nam
            tincidunt fermentum tellus rhoncus interdum. Integer eros enim,
            malesuada et pellentesque scelerisque, interdum vel arcu.Z
          </p>
          <p>
            Duis nunc felis, feugiat id accumsan sed, euismod id dolor. Morbi
            posuere nulla ac sem vulputate, vel scelerisque eros mattis. Proin
            efficitur aliquet tellus, auctor placerat leo molestie nec. Nunc
            ornare id enim quis suscipit. Donec commodo vestibulum cursus. Nam
            condimentum pretium orci vitae vulputate. Mauris massa leo,
            tincidunt ut justo vitae, vestibulum fringilla risus. Proin
            imperdiet consequat ex, vitae sodales nunc interdum sed. Suspendisse
            ultrices nisi vitae molestie ullamcorper. Suspendisse nec tellus ac
            lacus ullamcorper suscipit in eget nisl. Pellentesque aliquet vel
            dui in rhoncus. Cras volutpat ultricies elementum. Vestibulum mattis
            vulputate lacus at tincidunt. Aliquam tempor augue ut quam molestie,
            ac pharetra quam suscipit.
          </p>
          <p>
            Donec a arcu nec lectus pharetra condimentum. Proin ornare sapien in
            molestie molestie. Phasellus justo sapien, dapibus vel accumsan eu,
            pharetra vitae libero. Vivamus nec rutrum nibh. In luctus, mauris
            quis posuere condimentum, erat augue lobortis quam, in porta eros
            dolor et magna. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Morbi euismod ipsum at cursus consequat. Quisque magna velit,
            ultricies sed tortor eget, finibus dapibus odio. Phasellus a
            eleifend eros. Nulla congue vestibulum mi, aliquam imperdiet lectus
            mattis id. Nullam dictum, orci quis ornare ultricies, odio justo
            blandit purus, et dictum elit orci in nisi. Morbi ultricies risus
            eleifend sem fermentum pretium. Nullam maximus arcu metus, id varius
            mi hendrerit et. Proin iaculis tincidunt massa, eu rhoncus metus
            varius nec.
          </p>
          <p>
            Proin non risus commodo, pulvinar tellus molestie, sagittis velit.
            Vivamus aliquet bibendum tempus. Pellentesque venenatis facilisis
            arcu, mollis blandit tellus semper quis. Donec vel arcu porttitor,
            egestas mi quis, laoreet sem. Vestibulum tincidunt accumsan
            tincidunt. Pellentesque et congue libero. Vestibulum non elit non
            nisl rutrum venenatis. Suspendisse eu mi dignissim, ultrices orci
            id, elementum enim. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
          <p>
            Vestibulum ut tellus vitae enim semper ullamcorper. Duis vehicula
            elit eu libero facilisis, vitae porta risus vulputate. Aliquam erat
            volutpat. Aliquam mauris sapien, facilisis non turpis et, aliquam
            fringilla lacus. Morbi pellentesque enim sed nisi consectetur, eu
            sodales tortor maximus. Quisque bibendum orci non vehicula lobortis.
            Donec non sem metus. Aliquam imperdiet efficitur ullamcorper. Nunc
            interdum tincidunt euismod. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aenean tortor ligula, rutrum sit amet
            tortor non, luctus tempor diam. Phasellus congue, arcu at interdum
            pretium, nibh libero laoreet nisi, et malesuada mauris enim ac
            tortor. Aliquam tincidunt ligula a efficitur faucibus. Nulla posuere
            tristique mi vitae ultrices.
          </p>
          <p>
            Duis consectetur turpis congue, efficitur sem vel, blandit leo. Sed
            auctor, tortor nec aliquam viverra, nulla elit laoreet ante, eu
            aliquet nulla dui ut purus. Praesent quis sem eros. Donec eu
            elementum turpis. Quisque imperdiet elit id pretium facilisis. Proin
            porta ex at dolor sodales, sed tempor felis scelerisque. Suspendisse
            eget ultrices massa. Aenean purus libero, facilisis et rhoncus in,
            bibendum a ligula. Pellentesque ut augue augue. Duis in scelerisque
            lacus. In iaculis finibus ultrices.
          </p>
        </div>
      </div>
    </>
  );
}
