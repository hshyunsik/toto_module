import UpperBar from '../index.vue';
import { mount, Wrapper, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

describe('UpperBar.vue', () => {
  let wrapper: Wrapper<any>;
  let vuetify;
  const localVue = createLocalVue();
  localVue.use(VueRouter);

  const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'first'
      },
      {
        path: '/about',
        name: 'second'
      }
    ]
  });

  const actions = {
    toggleLeftMenu: jest.fn()
  };

  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(UpperBar, {
      localVue,
      router,
      vuetify
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it('Clicking on a link pushes it to the router', async () => {
    wrapper.setProps({
      navigationItems: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        }
      ]
    });
    await wrapper.vm.$nextTick();
    const homeElement = wrapper.findAll('button').at(1);
    homeElement.trigger('click');
    expect(wrapper.vm.$route.path).toBe('/about');
  });
  it('Clicking on a link with a section pushes the hash as well to the router', async () => {
    wrapper.setProps({
      navigationItems: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about',
          sectionId: 'firstSection'
        }
      ]
    });
    await wrapper.vm.$nextTick();
    const homeElement = wrapper.findAll('button').at(1);
    homeElement.trigger('click');
    expect(wrapper.vm.$route.hash).toBe('#firstSection');
  });
});
