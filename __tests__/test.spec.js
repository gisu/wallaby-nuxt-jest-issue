// Vue Testfile
import { mount } from '@vue/test-utils';
import TestComp from '@/components/testcomp.vue';

describe('Testing Testcomp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TestComp);
  });

  it('is vue instance', () => {
    expect(wrapper.name()).toBe('testcomp');
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

