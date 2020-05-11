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
      v-bind:src="source"
      v-bind:alt="altText"
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
      v-bind:title="card.title.snappy"
      v-bind:description="card.description.snappy"
      v-bind:source="card.source.snappy"
      v-bind:altText="card.altText.snappy"
      ></section-two-card>

      <section-two-card 
      v-bind:title="card.title.affordable"
      v-bind:description="card.description.affordable"
      v-bind:source="card.source.affordable"
      v-bind:altText="card.altText.affordable"
      ></section-two-card>

      <section-two-card 
      v-bind:title="card.title.people"
      v-bind:description="card.description.people"
      v-bind:source="card.source.people"
      v-bind:altText="card.altText.people"
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
      v-bind:src="image.source"
      v-bind:alt="image.alt"
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
      <a v-bind:href="link.path" class="nav-bar__nav-link__hyper">
        <span>{{ link.text[0] }}</span>
      </a>
    </li>
    <li class="nav-bar__nav-link">
      <a v-bind:href="link.path" class="nav-bar__nav-link__hyper">
        <span>{{ link.text[1] }}</span>
      </a>
    </li>
    <li class="nav-bar__nav-link">
      <a v-bind:href="link.path" class="nav-bar__nav-link__hyper">
        <span>{{ link.text[2] }}</span>
      </a>
    </li>
    <li class="nav-bar__nav-link">
      <a 
      v-bind:href="link.path" 
      class="nav-bar__nav-link__hyper" 
      v-bind:class="activeClass">
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
    <img v-bind:src="logo.source" v-bind:alt="logo.alt" />
    <a class="nav-bar__btn" role="button" tabindex="0">
      <div class="nav-bar__burger"></div>
    </a>
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

  // code from css-tricks
  const showMenu = () => {
    navMobile.classList.add('open');
    navBtn.classList.add('active');
    const scrollY = document.documentElement.style.getPropertyValue(
      '--scroll-y'
    );
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
  };

  // code from css-tricks
  const closeMenu = () => {
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    navMobile.classList.remove('open');
    navBtn.classList.remove('active');
  };

  // code from css-tricks
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty(
      '--scroll-y',
      `${window.scrollY}px`
    );
  });

  navBtn.addEventListener('click', (e) => {
    if (!isDropdownPressed) {
      showMenu();
      isDropdownPressed = true;
    } else if (isDropdownPressed) {
      closeMenu();
      isDropdownPressed = false;
    }
  });
})();
