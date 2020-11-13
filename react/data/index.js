import logo from '../src/assets/imgs/logo.png';
import coverImg from '../src/assets/imgs/cover-img.png';
import brand1 from '../src/assets/imgs/brands/1.png';
import brand2 from '../src/assets/imgs/brands/2.png';
import brand3 from '../src/assets/imgs/brands/3.png';
import brand4 from '../src/assets/imgs/brands/4.png';

const appData = {
    'headerData':{
        logo,
        'title':'Millennium',
        'menuItems':[
            {'name':'Home','link':'#'},
            {'name':'Mega Menu','link':'#'},
            {'name':'About','link':'#'},
            {'name':'Blog','link':'#'},
            {'name':'Contact','link':'#'},
        ],
        'btnName':'Get Webify Today',
        'btnUrl':'#'
    },
    'coverData':{
        coverImg,
        'title':`Build it Beautiful.<br/> & Unparalleled.`,
        'desc':`Webify is the all-in-one WordPress theme to build <br/> a beautiful online presence for you.`,
        'btnText':`Take 1-min Tour`,
        'btnUrl':`#`,
        'brands':[
            {'name':'brand name', 'url':brand1},
            {'name':'brand name', 'url':brand2},
            {'name':'brand name', 'url':brand3},
            {'name':'brand name', 'url':brand4}],
    },
    'featureData':{
        'title':`Build websites with Webify.<br/> Any niche. In minutes.`,
        'desc':`<p>Webify is the all-in-one WordPress theme to build a beautiful online presence for you. Our team discussed every single detail to make sure Webify is the most versatile and unique theme created so far.</p><p>It’s more then a WordPress theme. It’s like a design tool that let’s you create websites of any niche, easily. Each and every block is created with AB testing and UX research. Take a look at all the pages and elements and see how beautiful your webiste will become. No coding required, ofcourse!</p>`,
        'btnText':'Take 1-min Tour',
        'btnUrl':'#',
        'features':[
            {
                'color':'blue',
                'icon':'weekend',
                'title':`Super Creative`,
                'desc':`Digital transformation describes an organisation making a fundamental change from its current state.`,
            },
            {
                'color':'green',
                'icon':'timer',
                'title':`Avant Garde`,
                'desc':`We can change the way your business thinks and behaves long-term in order to combat the threat of digital disruption.`,
            },
            {
                'color':'purple',
                'icon':'watch',
                'title':`Feature-driven`,
                'desc':`It’s also a cultural change, a shift in mindset where the whole company supports a new way of thinking.`,
            },
            {
                'color':'red',
                'icon':'local_pizza',
                'title':`Fox in the Box`,
                'desc':`We will work with you as the business transforms into one that is efficient, customer-centric.`,
            },
        ],
    }
}
export default appData;