import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Clock3,
  Flame,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Quote,
  Star,
  Utensils,
  X
} from 'lucide-react';
import './styles.css';
import logoImg from './assets/logo.png';
import heroSignImg from './assets/hero-sign.png';
import restaurantImg from './assets/restaurant.webp';

// Bundled locally (rather than linked to the emergentagent.com CDN they were
// originally generated on) so the site doesn't depend on a third-party host
// staying up.
const images = {
  logo: logoImg,
  sign: heroSignImg,
  restaurant: restaurantImg
};

// Vite's BASE_URL reflects the `base` set in vite.config.js. Locally that's '/',
// but on GitHub Pages project sites it's '/<repo-name>/', so every internal link
// and every route check needs to go through these two helpers instead of
// assuming the site lives at the domain root.
const BASE_URL = import.meta.env.BASE_URL;

function withBase(path) {
  if (path === '/') return BASE_URL;
  return BASE_URL + path.slice(1);
}

function getRoute() {
  const baseNoSlash = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  const pathname = window.location.pathname;
  if (pathname === baseNoSlash || pathname === BASE_URL) return '/';
  if (pathname.startsWith(BASE_URL)) return '/' + pathname.slice(BASE_URL.length);
  return pathname;
}

const tickerItems = [
  'Smoked BBQ Chicken',
  'Fresh Fried Catfish',
  'Homemade Mac & Cheese',
  'Fried Green Tomatoes',
  'Creamy Grits',
  'Buttermilk Pancakes',
  'Southern Hospitality'
];

const hours = [
  ['Monday', '5am-2pm'],
  ['Tuesday', '5am-8pm'],
  ['Wednesday', '5am-8pm'],
  ['Thursday', '5am-8pm'],
  ['Friday', '5am-8pm'],
  ['Saturday', '5am-8pm'],
  ['Sunday', 'Closed']
];

const googleReviewsUrl = 'https://www.google.com/maps/search/?api=1&query=Country+Sunrise+Grill+%26+BBQ+1023+W+St+James+St+Tarboro+NC+reviews';

const reviews = [
  {
    initial: 'R',
    name: 'Ronnie Woodard',
    time: 'a month ago',
    meta: 'Local Guide - 46 reviews - 55 photos',
    url: `${googleReviewsUrl}+Ronnie+Woodard`,
    text: 'We tried the lunch special today which was bbq chicken plate, it was cooked perfectly, found out it was smoked in a smoker which added great flavor and texture. I had slaw and fries while my wife had okra and cabbage. All the sides were fantastic.'
  },
  {
    initial: 'T',
    name: 'Tyler Manring',
    time: '2 months ago',
    meta: 'Local Guide - 37 reviews - 8 photos',
    url: `${googleReviewsUrl}+Tyler+Manring`,
    text: "Food was amazing and service was good ole southern hospitality. This is a place that you don't forget 100% recommend this place."
  },
  {
    initial: 'J',
    name: 'James Hong',
    time: '11 months ago',
    meta: 'Local Guide - 678 reviews - 706 photos',
    url: `${googleReviewsUrl}+James+Hong`,
    text: 'This small out of the way restaurant was truly a gem. The food was very very fresh and very tasty. The service was great, the guy who was manning the front was very attentive despite how busy the restaurant became.'
  }
];

const menuSections = [
  {
    title: 'Breakfast Menu',
    note: 'Served with the country breakfast staples folks come back for.',
    groups: [
      {
        title: 'Omelet Platter',
        items: [
          'Stuffed just the way you like it with onion, peppers, tomatoes and cheese',
          'Choice of sausage or bacon',
          'Served with grits or hash browns and toast or biscuit'
        ]
      },
      {
        title: 'Egg Platters',
        note: 'Served with grits or hash browns, toast or biscuit, and one choice of meat: link sausage, patty sausage, turkey sausage or bacon.',
        items: ['One Egg', 'Two Eggs', 'Three Eggs']
      },
      {
        title: 'French Toast or Pancake Platters',
        items: ['1 French Toast or Pancake', '2 French Toast or Pancakes', '3 French Toast or Pancakes']
      },
      {
        title: 'Stuffed Hash Brown',
        items: ['Cheese', 'Onion', 'Green Pepper', 'Tomato', 'Bacon or Sausage']
      },
      {
        title: 'Biscuits',
        items: [
          'Egg Sandwich or Biscuit',
          'Egg & Meat Sandwich',
          'Cheese Biscuit',
          'Cheese Biscuit & Egg',
          'Cheese Biscuit with Meat, No Cheese'
        ]
      },
      {
        title: 'Breakfast Side Orders',
        items: [
          'One Egg',
          'Hash Browns & Grits',
          'Large Grits',
          'Choice of Meat',
          'Link or patty sausage',
          'Turkey sausage or bacon',
          'Baked ham',
          'Boneless chicken breast',
          'Country ham',
          'Cheese',
          '1 Pancake'
        ]
      },
      {
        title: 'Country Ham Plate',
        note: 'Grits or hash browns, toast or biscuit.',
        items: ['1 piece of country ham or 2 pieces of baked ham or boneless chicken breast', '1 Egg', '2 Eggs']
      }
    ]
  },
  {
    title: 'Lunch Menu',
    note: 'All plates are cooked to order and served with two vegetables and your choice of bread.',
    groups: [
      {
        title: 'Plates',
        items: [
          '8 oz. Grilled Chicken Plate',
          '2 Piece Fried Chicken Plate',
          'BBQ & Fried Chicken Combo',
          'Hamburger Steak Plate',
          'Cold Cut Plate',
          'Regular BBQ Plate',
          'Large BBQ Plate',
          'Pork Chop Plate',
          'Vegetable Plate (3)',
          'Vegetable Plate (4)'
        ]
      },
      {
        title: 'Lunch Side Orders',
        items: [
          'One Pound of BBQ',
          'One Quart of Vegetables',
          'One Quart Chicken Salad',
          'One Pint of Chicken Salad',
          'One Pint of Vegetables',
          'One Dozen Hush Puppies',
          'One Whole Fried Chicken'
        ]
      },
      {
        title: 'Sandwiches',
        items: [
          'Chicken Salad',
          'Hot Dog (1)',
          'Hot Dog (2)',
          'BBQ Sandwich',
          'Double House Burger',
          'House Burger',
          'Chicken Sandwich',
          'BLT'
        ]
      },
      {
        title: 'Buffalo Wings',
        note: 'Sauces: hot, mild, barbecue, honey mustard, ranch.',
        items: ['10 Piece Wing Box']
      },
      {
        title: 'Large Garden Salads',
        items: ['Salad', 'With Chicken']
      }
    ]
  },
  {
    title: 'Dinner Favorites',
    groups: [
      {
        title: 'Bonanza Steaks',
        items: [
          'Rib-Eye - hand-cut and aged for tenderness, then lightly seasoned and grilled to your satisfaction',
          'Country Style Steak - onions & gravy'
        ]
      },
      {
        title: 'Seafood',
        note: 'All plates are served with two vegetables and your choice of bread.',
        items: [
          'Shrimp Feast - fresh shrimp, hand battered and fried to golden brown',
          'Gulf Oysters - hand selected Gulf oysters, prepared to your liking',
          'Flounder or Catfish - fresh filet of your choice, breaded and fried golden or grilled the Southern way',
          'Trout - fresh trout filet, hand breaded and fried golden or grilled the Southern way',
          'Sea Scallops - fresh sea scallops hand battered or grilled to your perfection',
          'Combinations'
        ]
      },
      {
        title: 'Country Vegetables',
        note: 'Each side order or vegetable. Ask your server about seasonal vegetables.',
        items: [
          'Coleslaw',
          'French Fries',
          'Green Beans',
          'Potato Salad',
          'Candied Yams',
          'Onion Rings',
          'Cream Potatoes',
          'Fried Green Tomatoes',
          'Tomatoes',
          'Mac & Cheese',
          'Fried Okra',
          'Butter Beans',
          'Small Salad',
          'Navy Beans',
          'Steamed Cabbage'
        ]
      },
      {
        title: 'Children & Senior Citizen Dinners',
        items: [
          'Small Shrimp Basket',
          'Hamburger or Cheeseburger Basket',
          'Chicken Nugget Basket',
          '4 oz. Rib-Eye Plate',
          '5 oz. Hamburger Steak Plate',
          'Pepsi, tea, or coffee only',
          'Ice cream - eat in only'
        ]
      },
      {
        title: 'Desserts',
        items: ['Homemade old-fashioned desserts', 'Pies', 'Cake']
      },
      {
        title: 'Beverages',
        note: 'Refills on coffee and tea are free. Refills on fountain drinks and lemonade are 50 cents.',
        items: ['Coffee - mountain grown beans', 'Orange Juice', 'Apple Juice', 'Tea', 'Fountain Drinks', 'Lemonade', '32 oz. Tea To Go']
      }
    ]
  }
];

function Nav() {
  const [open, setOpen] = React.useState(false);
  const route = getRoute();
  const isMenuPage = route === '/menu';
  const isLegalPage = route === '/privacy' || route === '/terms';
  const links = isMenuPage
    ? [
        ['Home', withBase('/')],
        ['Visit', withBase('/#visit')]
      ]
    : isLegalPage
    ? [
        ['Home', withBase('/')],
        ['Menu', withBase('/menu')],
        ['Visit', withBase('/#visit')]
      ]
    : [
        ['Menu', withBase('/menu')],
        ['Reviews', '#reviews'],
        ['Visit', '#visit']
      ];

  return (
    <header className="site-header">
      <a className="brand" href={withBase('/')} aria-label="Country Sunrise Grill & BBQ home">
        <img src={images.logo} alt="Country Sunrise Grill & BBQ logo" />
      </a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={21} /> : <MenuIcon size={21} />}
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="social-link" href="https://www.facebook.com/CountrySunriseGrill/" aria-label="Country Sunrise Grill Facebook page" target="_blank" rel="noreferrer">
          f
        </a>
        <a className="call-pill" href="tel:+12528237183">
          <Phone size={16} /> Call
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero grain" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="status"><span /> Open - Closes 8 PM</span>
          <h1>Authentic Southern <span>BBQ & Diner Classics</span></h1>
          <p>Smoked-low-and-slow barbecue, fresh fried catfish, and homemade sides served with good ole Southern hospitality. A small-town gem worth the drive.</p>
          <div className="hero-actions">
            <a className="btn navy" href="https://www.google.com/maps/search/?api=1&query=1023+W+St+James+St+Tarboro+NC+27886">
              Get Directions <ArrowRight size={18} />
            </a>
            <a className="btn brick call-desktop" href="https://www.google.com/maps/search/?api=1&query=1023+W+St+James+St+Tarboro+NC+27886">
              <Phone size={18} /> (252) 823-7183
            </a>
            <a className="btn brick call-mobile" href="tel:+12528237183">
              <Phone size={18} /> (252) 823-7183
            </a>
          </div>
          <div className="quick-facts">
            <span>Dine-in</span>
            <span>Takeout</span>
            <strong>Mon 5am-2pm</strong>
            <strong>Tue-Sat 5am-8pm</strong>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun-rays" />
          <img src={images.sign} alt="" />
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  return (
    <div className="ticker" aria-label="Restaurant highlights">
      <div className="ticker-track">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span key={`${item}-${index}`}><Utensils size={17} /> {item}</span>
        ))}
      </div>
    </div>
  );
}

function Story() {
  return (
    <section className="story section grain">
      <img src={images.restaurant} alt="Country Sunrise Grill & BBQ restaurant" />
      <div>
        <div className="section-heading compact">
          <span>Our Story</span>
          <h2>A Small Place With Big Flavor</h2>
        </div>
        <p>Tucked away on W St James Street in Tarboro, Country Sunrise Grill & BBQ is the kind of out-of-the-way spot folks talk about for years. Everything starts before sunrise: the smoker fired up, the griddle warming, sides prepped by hand.</p>
        <p>From smoked BBQ chicken to hand-breaded fried catfish and homemade sides like mac & cheese, fried green tomatoes, and coleslaw, we cook it the way it ought to be cooked. Down-home, honest, and always fresh.</p>
        <blockquote>"Down home feel from staff to the decor - great service and prices!"</blockquote>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section grain" id="reviews">
      <div className="reviews-head">
        <div className="section-heading compact">
          <span>Loved By Locals</span>
          <h2>What Folks Are Saying</h2>
        </div>
        <div className="rating">
          <strong>4.5</strong>
          <div>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={17} fill="#eda31d" />)}</div>
          <span>507 Google reviews</span>
        </div>
      </div>
      <div className="review-tags">
        <span>"Down home feel from staff to the decor, great service and prices!"</span>
        <span>"I ordered the fried catfish, coleslaw and Mac & cheese."</span>
        <span>"Fire food - wow, was blown away that this small place had such amazing flavor."</span>
      </div>
      <div className="review-grid">
        {reviews.map((review) => (
          <a className="review-card" key={review.name} href={review.url} target="_blank" rel="noreferrer" aria-label={`Read ${review.name}'s Google review`}>
            <Quote size={34} />
            <div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} fill="#eda31d" />)}</div>
            <p>{review.text}</p>
            <div className="reviewer">
              <b>{review.initial}</b>
              <span><strong>{review.name}</strong><small>{review.time}</small></span>
            </div>
            <small>{review.meta}</small>
          </a>
        ))}
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="visit grain" id="visit">
      <div className="visit-copy">
        <div className="section-heading light compact">
          <span>Come On By</span>
          <h2>Visit Us in Tarboro</h2>
        </div>
        <p><MapPin size={19} /> 1023 W St James St, Tarboro, NC 27886</p>
        <a href="tel:+12528237183"><Phone size={18} /> (252) 823-7183</a>
        {/* <p><Clock3 size={18} /> Open - Closes 8 PM</p> */}
        <div className="hours-card" aria-label="Restaurant hours">
          <h3><Clock3 size={19} /> Hours</h3>
          {hours.map(([day, time]) => (
            <div key={day}>
              <span>{day}</span>
              <strong>{time}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="map-card">
        <iframe
          title="Country Sunrise Grill & BBQ map"
          src="https://www.google.com/maps?q=1023%20W%20St%20James%20St%2C%20Tarboro%2C%20NC%2027886&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

function MenuPage() {
  return (
    <main className="menu-page grain">
      <section className="menu-hero">
        <span className="status"><span /> Country Sunrise Grill & BBQ</span>
        <h1>Full Menu</h1>
        <p>Breakfast, lunch plates, seafood, steaks, sides, vegetables, desserts, and drinks from the Country Sunrise menu.</p>
        <div className="hero-actions">
          <a className="btn navy" href={withBase('/')}>
            <ArrowRight size={18} /> Back Home
          </a>
          <a className="btn brick" href="tel:+12528237183">
            <Phone size={18} /> Call to Order
          </a>
        </div>
      </section>
      <section className="menu-board">
        {menuSections.map((section) => (
          <article className="menu-section-card" key={section.title}>
            <div className="menu-section-head">
              <Flame size={24} />
              <div>
                <h2>{section.title}</h2>
                {section.note && <p>{section.note}</p>}
              </div>
            </div>
            <div className="menu-category-grid">
              {section.groups.map((group) => (
                <div className="menu-category" key={group.title}>
                  <h3>{group.title}</h3>
                  {group.note && <p>{group.note}</p>}
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
      <p className="menu-disclaimer">Prices subject to change. Some item names and descriptions were transcribed from the provided menu photos.</p>
    </main>
  );
}

function PrivacyPage() {
  return (
    <main className="legal-page grain">
      <section className="legal-hero">
        <span className="status"><span /> Country Sunrise Grill & BBQ</span>
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: July 11, 2026</p>
        <p>
          This Privacy Policy explains what information Country Sunrise Grill & BBQ ("we," "our," "us") collects through this website, how it is
          used, and the choices available to you.
        </p>
        <div className="hero-actions">
          <a className="btn navy" href={withBase('/')}>
            <ArrowRight size={18} /> Back Home
          </a>
          <a className="btn brick" href={withBase('/terms')}>
            View Terms Of Service
          </a>
        </div>
      </section>
      <section className="legal-board">
        <article className="legal-card">
          <h2>Information We Collect</h2>
          <p>
            This website is an informational site for our restaurant. It does not have account creation, online ordering, payment processing, or
            newsletter sign-up forms, so we do not directly collect names, email addresses, or payment information through the site.
          </p>
          <p>
            Like most websites, our hosting provider automatically records standard technical information when the site is visited, such as
            browser type, device type, approximate location, and pages viewed. This information is used only to keep the site running smoothly
            and securely, and is not used to identify visitors personally.
          </p>
        </article>

        <article className="legal-card">
          <h2>Third-Party Services</h2>
          <p>
            Our site embeds a Google Maps view and links out to Google Reviews and our Facebook page. When you interact with these features,
            Google or Meta (Facebook) may collect information according to their own privacy policies, which we encourage you to review:
          </p>
          <ul>
            <li>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a>
            </li>
            <li>
              <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noreferrer">Facebook Privacy Policy</a>
            </li>
          </ul>
          <p>We do not control, and are not responsible for, the privacy practices of these third-party services.</p>
        </article>

        <article className="legal-card">
          <h2>Cookies</h2>
          <p>
            This website does not use its own tracking or advertising cookies. The embedded Google Map and any linked third-party pages may set
            their own cookies when used; those cookies are governed by the third party's policy, not ours.
          </p>
        </article>

        <article className="legal-card">
          <h2>How Contact Information Is Used</h2>
          <p>
            If you call the phone number listed on this site or message us on Facebook, we use whatever you share only to respond to you, take a
            to-go order, or answer questions about visiting the restaurant. We do not sell or rent contact information to third parties.
          </p>
        </article>

        <article className="legal-card">
          <h2>Children's Privacy</h2>
          <p>
            This website is intended for a general audience and is not directed at children under 13. We do not knowingly collect personal
            information from children through this site.
          </p>
        </article>

        <article className="legal-card">
          <h2>Data Security</h2>
          <p>
            We take reasonable measures to help protect this website, but no method of transmission over the internet is completely secure, and
            we cannot guarantee absolute security.
          </p>
        </article>

        <article className="legal-card">
          <h2>Changes To This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time as our website or business practices change. The "Last updated" date at the top
            of this page reflects the most recent revision.
          </p>
        </article>

        <article className="legal-card">
          <h2>Contact Us</h2>
          <p>Questions about this Privacy Policy can be directed to:</p>
          <p>
            Country Sunrise Grill & BBQ
            <br />
            1023 W St James St, Tarboro, NC 27886
            <br />
            <a href="tel:+12528237183">(252) 823-7183</a>
          </p>
        </article>
      </section>
    </main>
  );
}

function TermsPage() {
  return (
    <main className="legal-page grain">
      <section className="legal-hero">
        <span className="status"><span /> Country Sunrise Grill & BBQ</span>
        <h1>Terms Of Service</h1>
        <p className="updated">Last updated: July 11, 2026</p>
        <p>These Terms of Service ("Terms") govern use of this website. By using this site, you agree to these Terms.</p>
        <div className="hero-actions">
          <a className="btn navy" href={withBase('/')}>
            <ArrowRight size={18} /> Back Home
          </a>
          <a className="btn brick" href={withBase('/privacy')}>
            View Privacy Policy
          </a>
        </div>
      </section>
      <section className="legal-board">
        <article className="legal-card">
          <h2>Use Of This Website</h2>
          <p>
            This website is provided to share information about Country Sunrise Grill & BBQ, including our menu, hours, location, and reviews.
            You agree to use this site only for lawful purposes and not to copy, scrape, or otherwise misuse its content.
          </p>
        </article>

        <article className="legal-card">
          <h2>Menu, Pricing & Hours</h2>
          <p>
            Menu items, descriptions, prices, and hours listed on this site are provided for general information and are subject to change
            without notice. Please call ahead to confirm current availability, pricing, and hours, especially around holidays.
          </p>
        </article>

        <article className="legal-card">
          <h2>Food Safety Advisory</h2>
          <div className="advisory-box">
            <strong>Consumer Advisory</strong>
            <p>
              Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if
              you have certain medical conditions. Please inform your server of any food allergies before ordering.
            </p>
          </div>
        </article>

        <article className="legal-card">
          <h2>Orders & Reservations</h2>
          <p>
            This website does not process online orders, payments, or reservations. To place a to-go order or ask about seating, please call us
            directly at <a href="tel:+12528237183">(252) 823-7183</a>.
          </p>
        </article>

        <article className="legal-card">
          <h2>Intellectual Property</h2>
          <p>
            The Country Sunrise Grill & BBQ name, logo, and the text, photos, and design of this website are owned by us or used with permission,
            and may not be copied or reused without our consent.
          </p>
        </article>

        <article className="legal-card">
          <h2>Third-Party Links</h2>
          <p>
            This site links to third-party services such as Google Maps, Google Reviews, and Facebook. We are not responsible for the content,
            accuracy, or practices of those third-party sites.
          </p>
        </article>

        <article className="legal-card">
          <h2>Disclaimer & Limitation Of Liability</h2>
          <p>
            This website and its content are provided "as is," without warranties of any kind, express or implied. While we try to keep
            information accurate and current, we do not guarantee that all content is free of errors. To the fullest extent permitted by law,
            Country Sunrise Grill & BBQ is not liable for any damages arising from use of this site.
          </p>
        </article>

        <article className="legal-card">
          <h2>Governing Law</h2>
          <p>These Terms are governed by the laws of the State of North Carolina, without regard to conflict-of-law principles.</p>
        </article>

        <article className="legal-card">
          <h2>Changes To These Terms</h2>
          <p>
            We may revise these Terms at any time. Changes take effect once posted to this page, and the "Last updated" date above reflects the
            most recent revision.
          </p>
        </article>

        <article className="legal-card">
          <h2>Contact Us</h2>
          <p>Questions about these Terms can be directed to:</p>
          <p>
            Country Sunrise Grill & BBQ
            <br />
            1023 W St James St, Tarboro, NC 27886
            <br />
            <a href="tel:+12528237183">(252) 823-7183</a>
          </p>
        </article>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <img src={images.logo} alt="Country Sunrise Grill & BBQ" />
        <span>2026 Country Sunrise Grill & BBQ - Tarboro, NC</span>
        <span>Dine-in - Takeout</span>
        <nav className="footer-links" aria-label="Legal">
          <a href={withBase('/privacy')}>Privacy Policy</a>
          <a href={withBase('/terms')}>Terms of Service</a>
        </nav>
      </div>
      <p>The FDA advises consuming raw or undercooked meats, poultry, seafood or eggs increases your risk of foodborne illness.</p>
    </footer>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Story />
      <Reviews />
      <Visit />
    </main>
  );
}

function App() {
  const [route, setRoute] = React.useState(getRoute());

  // Back/forward navigation, and our own pushState calls below (which don't
  // fire popstate natively), both flow through this one listener.
  React.useEffect(() => {
    const onRouteChange = () => setRoute(getRoute());
    window.addEventListener('popstate', onRouteChange);
    return () => window.removeEventListener('popstate', onRouteChange);
  }, []);

  // Intercept clicks on in-app links so navigation is instant instead of a
  // full page reload. External links, tel: links, same-page hash anchors
  // (#reviews, #visit), new-tab clicks, and modifier-clicks are left alone.
  React.useEffect(() => {
    function onClick(event) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a');
      if (!link || link.target || link.hasAttribute('download')) return;
      const href = link.getAttribute('href');
      if (!href) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      event.preventDefault();
      window.history.pushState(null, '', url.pathname + url.search + url.hash);
      setRoute(getRoute());
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Full page loads let the browser jump to a #hash on its own; client-side
  // route changes need that handled manually once the new page has rendered.
  React.useEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [route]);

  let page = <HomePage />;
  if (route === '/menu') page = <MenuPage />;
  else if (route === '/privacy') page = <PrivacyPage />;
  else if (route === '/terms') page = <TermsPage />;

  return (
    <>
      <Nav />
      {page}
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
