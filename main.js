Vue.component('navbar', {
  template: `
  <div class="navbar"> 
    <div class="logo-wrapper">
      <img :src="logo.source" :alt="logo.alt" />
    </div>
    <div class="dropdown">
      <button class="dropdown-btn" type="button">
        Menu
      </button>
      <nav>
        <nav-link :linkText="linkA.text" :linkPath="linkA.path"></nav-link>
        <nav-link :linkText="linkB.text"></nav-link>
        <nav-link :linkText="linkC.text"></nav-link>
        <nav-link :linkText="linkD.text"></nav-link>
      </nav>
    </div>
  </div>`,
  data() {
    return {
      linkA: {
        text: 'how we work',
        path: 'https://vuejs.org/v2/guide/components-props.html',
      },
      linkB: {
        text: 'blog',
      },
      linkC: {
        text: 'account',
      },
      linkD: {
        text: 'view plans',
      },
      logo: {
        source: './src/images/logo.svg',
        alt: 'logo',
      },
    };
  },
});

Vue.component('nav-link', {
  props: {
    linkText: {
      type: String,
      required: true,
    },
    linkPath: {
      type: String,
      required: true,
      default: '#',
    },
  },
  template: `
  <div class="nav-link-wrapper">
    <a :href="linkPath" class="nav-link">
      <span>{{ linkText }}</span>
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
document.body.addEventListener('click', (e) => {
  if (e.target.className == 'dropdown-btn') {
    if (!isDropdownPressed) {
      document.querySelector('nav').style.height = '450px';
      isDropdownPressed = true;
    }
  } else if (isDropdownPressed) {
    document.querySelector('nav').style.height = '0%';
    isDropdownPressed = false;
  }
});
