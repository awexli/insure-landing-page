Vue.component('footer-bottom', {
  template: `
  <div class="footer-bot">
    <div class="footer-bot__section">
      <p class="footer-bot__section-title">Our company</p>
      <a href="#" class="footer-bot__link" v-for="link in company">{{link}}</a>
    </div>
    <div class="footer-bot__section">
      <p class="footer-bot__section-title">Help me</p>
      <a href="#" class="footer-bot__link" v-for="link in help">{{link}}</a>
    </div>
    <div class="footer-bot__section">
      <p class="footer-bot__section-title">Contact</p>
      <a href="#" class="footer-bot__link" v-for="link in contact">{{link}}</a>
    </div>
    <div class="footer-bot__section">
      <p class="footer-bot__section-title">Others</p>
      <a href="#" class="footer-bot__link" v-for="link in others">{{link}}</a>
    </div>
  </div>
  `,
  data() {
    return {
      company: ['How we work', 'Why insure?', 'View Plans', 'Reviews'],
      help: ['FAQ', 'Terms of use', 'Privacy policy', 'Cookies'],
      contact: ['Sales', 'Support', 'Live chat'],
      others: ['Careers', 'Press', 'Licenses'],
    };
  },
});

Vue.component('footer-top', {
  template: `
  <div class="footer-top">
    <img
      src="./src/images/logo.svg"
      alt="Insure Logo"
      class="footer-top__logo"
    />
    <div class="footer-top__icon-container">
      <img 
      v-bind:src="social.source" 
      v-bind:alt="social.alt"
      class="footer-top__icon"
      v-for="social in socials"
      />
    </div>
  </div>
  `,
  data() {
    return {
      socials: [
        { source: './src/images/icon-facebook.svg', alt: 'Facebook icon' },
        { source: './src/images/icon-twitter.svg', alt: 'Twitter icon' },
        { source: './src/images/icon-pinterest.svg', alt: 'Pinterest icon' },
        { source: './src/images/icon-instagram.svg', alt: 'Instagram icon' },
      ],
    };
  },
});

Vue.component('footer-content', {
  template: `
  <footer>
    <footer-top></footer-top>
    <footer-bottom></footer-bottom>
    <div class="attribution">
      CODED BY
      <a
        href="https://github.com/awexli/insure-landing-page"
        rel="noopener noreferrer"
        >Alex Li</a
      >
    </div>
  </footer>
  `,
  data() {
    return {};
  },
});

Vue.component('section-three', {
  template: `
  <section class="s3">
    <div class="s3__content-container">
      <h2 class="s3__title heading">{{ title }}</h2>
      <button class="s3__btn btn">{{ btnText }}</button>
    </div>
  </section>
  `,
  data() {
    return {
      title: 'Find out more about how we work',
      btnText: 'How we work',
    };
  },
});

Vue.component('section-two-card', {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
  },
  template: `
  <div class="s2__card">
    <img
      class="s2__card-icon"
      :src="source"
      :alt="altText"
    />
    <h3 class="s2__card-title heading">{{ title }}</h3>
    <p class="s2__card-description">{{ description }}</p>
  </div>
  `,
  data() {
    return {};
  },
});

Vue.component('section-two', {
  template: `
  <section class="s2">
    <h2 class="s2__title heading">{{ title }}</h2>
    <div class="s2__card-container">
      <section-two-card 
      :title="card.title.snappy"
      :description="card.description.snappy"
      :source="card.source.snappy"
      :altText="card.altText.snappy"
      ></section-two-card>

      <section-two-card 
      :title="card.title.affordable"
      :description="card.description.affordable"
      :source="card.source.affordable"
      :altText="card.altText.affordable"
      ></section-two-card>

      <section-two-card 
      :title="card.title.people"
      :description="card.description.people"
      :source="card.source.people"
      :altText="card.altText.people"
      ></section-two-card>
    </div>
  </section>
  `,
  data() {
    return {
      title: 'We’re different',
      card: {
        title: {
          snappy: 'Snappy Process',
          affordable: 'Affordable Prices',
          people: 'People First',
        },
        description: {
          snappy:
            'Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.',
          affordable:
            'We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.',
          people:
            'Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.',
        },
        source: {
          snappy: './src/images/icon-snappy-process.svg',
          affordable: './src/images/icon-affordable-prices.svg',
          people: './src/images/icon-people-first.svg',
        },
        altText: {
          snappy: 'Snappy process icon',
          affordable: 'Affordable prices icon',
          people: 'People first icon',
        },
      },
    };
  },
});

Vue.component('section-intro', {
  template: `
  <section class="intro">
    <div class="intro__container">
      <div class="intro__line"></div>
      <h2 class="intro__title heading">
        {{ title }}
        <span class="intro__title-break"> {{ titleBreak }}</span>
      </h2>
      <p class="intro__description">{{ description }}</p>
      <button class="btn intro__btn" type="button">{{ btnText }}</button>
    </div>
  </section>
  `,
  data() {
    return {
      title: 'Humanizing',
      titleBreak: 'your insurance',
      description:
        'Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.',
      btnText: 'View plans',
    };
  },
});

Vue.component('main-content', {
  template: `
  <main>
    <family-photo></family-photo>
    <section-intro></section-intro>
    <section-two></section-two>
    <section-three></section-three>
  </main>
  `,
  data() {
    return {};
  },
});

Vue.component('family-photo', {
  template: `
  <div class="img-container">
    <img
      class="img-container__family-img"
      :src="image.source"
      :alt="image.alt"
    />
  </div>`,
  data() {
    return {
      image: {
        source: './src/images/image-intro-mobile.jpg',
        alt: 'Family photo',
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
    <li class="nav-bar__nav-link">
      <a 
      :href="link.path" 
      class="nav-bar__nav-link__hyper" 
      :class="activeClass">
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

const app = new Vue({
  el: '#app',
  data: {},
});

(function () {
  let isDropdownPressed = false;
  const navMobile = document.querySelector('.nav-bar__nav-menu');
  const navBtn = document.querySelector('.nav-bar__btn');
  const body = document.body;

  navBtn.addEventListener('click', (e) => {
    if (!isDropdownPressed) {
      // prevent user from scrolling
      body.style.overflowY = 'hidden';
      navMobile.classList.add('open');
      document.querySelector('.open').ontouchend = (e) => {
        e.preventDefault();
      };
      navBtn.classList.add('active');
      isDropdownPressed = true;
    } else if (isDropdownPressed) {
      body.style.overflowY = '';
      navMobile.classList.remove('open');
      navBtn.classList.remove('active');
      isDropdownPressed = false;
    }
  });
})();
