Vue.component('nav-bar', {
  template: `
  <div class="nav-bar"> 
    <div class="nav-bar__logo">
      <img :src="logo.source" :alt="logo.alt" />
    </div>
    <div class="nav-bar__dropdown">
      <button class="nav-bar__btn" type="button">Menu</button>
      <nav>
        <nav-link :text="link.text[0]"></nav-link>
        <nav-link :text="link.text[1]"></nav-link>
        <nav-link :text="link.text[2]"></nav-link>
        <nav-link :text="link.text[3]" :class="activeClass"></nav-link>
      </nav>
    </div>
  </div>`,
  data() {
    return {
      link: {
        text: ['how we work', 'blog', 'account', 'view plans'],
        path: '#',
      },
      logo: {
        source: './src/images/logo.svg',
        alt: 'logo',
      },
      activeClass: 'nav-bar__nav-link--active',
    };
  },
});

Vue.component('nav-link', {
  props: {
    text: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
      default: '#',
    },
  },
  template: `
  <div class="nav-bar__nav-link">
    <a :href="path" class="nav-bar__nav-link__hyper">
      <span>{{ text }}</span>
    </a>
  </div>`,
  data() {
    return {};
  },
});

const app = new Vue({
  el: '#app',
  data: {},
});

let isDropdownPressed = false;
const navMenu = document.querySelector('nav');
document.body.addEventListener('click', (e) => {
  if (e.target.className == 'nav-bar__btn') {
    if (!isDropdownPressed) {
      navMenu.style.height = '450px';
      isDropdownPressed = true;
    }
  } else if (isDropdownPressed) {
    navMenu.style.height = '0%';
    isDropdownPressed = false;
  }
});
