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
  it('Clicking on inloggen while not logged in emits login', async () => {
    wrapper.setProps({
      loginStatus: false
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('login')).not.toEqual([[]]);
    const loginButton = wrapper.find('#login');
    loginButton.trigger('click');
    expect(wrapper.emitted('login')).toEqual([[]]);
  });
  it('Clicking on uitloggen while not logged out emits logout', async () => {
    wrapper.setProps({
      loginStatus: true
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('logout')).not.toEqual([[]]);
    const logoutButton = wrapper.find('#logout');
    logoutButton.trigger('click');
    expect(wrapper.emitted('logout')).toEqual([[]]);
  });
  it('Clicking on registreren button emits register', async () => {
    wrapper.setProps({
      loginStatus: false
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('register')).not.toEqual([[]]);
    const registerButton = wrapper.find('#register');
    registerButton.trigger('click');
    expect(wrapper.emitted('register')).toEqual([[]]);
  });
});
