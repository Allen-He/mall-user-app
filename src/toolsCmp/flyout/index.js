import Vue from 'vue';
import cmp from './index.vue';

const FlyAnimate = Vue.extend(cmp);

export default function ({
  startX,
  startY,
  endX,
  endY,
  imgSrc,
  width,
  height,
}) {
  const flyApp = new FlyAnimate({
    el: document.createElement('div'),
    data() {
      return {
        moveX: startX,
        moveY: startY,
        sx: 1,
        sy: 1,
        opacity: 1,
        exist: true,
        imgSrc,
        width,
        height,
      };
    },
  });

  document.body.appendChild(flyApp.$el);

  setTimeout(() => {
    flyApp.moveX = endX;
    flyApp.moveY = endY;
    flyApp.sx = 0;
    flyApp.sy = 0;
    flyApp.opacity = 0;
  }, 0);

  setTimeout(() => {
    flyApp.exist = false;
  }, 1000);
}
