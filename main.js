Vue.component('nav-bar', {
  template: `
  <div class="nav-bar"> 
    <img :src="logo.source" :alt="logo.alt" />
    <div class="nav-bar__btn" type="button">
      <div class="nav-bar__burger"></div>
    </div>
    <nav class="nav-bar__nav-menu">
      <nav-list></nav-list>
    </nav>
  </div>`,
  data() {
    return {
      logo: {
        source: './src/images/logo.svg',
        alt: 'logo',
      },
    };
  },
});

Vue.component('nav-list', {
  template: `
  <ul class="nav-bar__nav-list">
    <li class="nav-bar__nav-link">
      <a :href="link.path" class="nav-bar__nav-link__hyper">
        <span>{{ link.text[0] }}</span>
      </a>
    </li>
    <li class="nav-bar__nav-link">
      <a :href="link.path" class="nav-bar__nav-link__hyper">
        <span>{{ link.text[1] }}</span>
      </a>
    </li>
    <li class="nav-bar__nav-link">
      <a :href="link.path" class="nav-bar__nav-link__hyper">
        <span>{{ link.text[2] }}</span>
      </a>
    </li>
    <li class="nav-bar__nav-link" :class="activeClass">
      <a :href="link.path" class="nav-bar__nav-link__hyper">
        <span>{{ link.text[3] }}</span>
      </a>
    </li>
  </ul>`,
  data() {
    return {
      link: {
        text: ['how we work', 'blog', 'account', 'view plans'],
        path: '#',
      },
      activeClass: 'nav-bar__nav-link--active',
    };
  },
});

const app = new Vue({
  el: '#app',
  data: {},
});

let isDropdownPressed = false;
const navMobile = document.querySelector('.nav-bar__nav-menu');
const navBtn = document.querySelector('.nav-bar__btn');
const body = document.body;

navBtn.addEventListener('click', (e) => {
  if (!isDropdownPressed) {
    // prevent user from scrolling
    body.style.overflowY = 'hidden';
    navMobile.classList.add('open');
    navBtn.classList.add('open');
    isDropdownPressed = true;
  } else if (isDropdownPressed) {
    body.style.overflowY = 'unset';
    navMobile.classList.remove('open');
    navBtn.classList.remove('open');
    isDropdownPressed = false;
  }
});
