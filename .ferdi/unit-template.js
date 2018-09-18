// and the component you want to test
import { shallow, mount } from '@vue/test-utils';
import <%= moduleName.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }) %> from '@/<%= moduleName.replace('-', '_') %>';

describe('Test <%= moduleName %>', () => {
  const wrapper = mount(<%= moduleName.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }) %>);

  it('a test', () => {

  });
});
