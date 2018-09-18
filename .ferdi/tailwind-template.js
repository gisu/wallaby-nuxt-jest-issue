/*
* Tailwind Custom Component <%= moduleName.replace('-', '_') %>
*
<% if (authors.length) { -%>
<% if (typeof authors == 'object') { -%>
<% for (var i=0; i < authors.length; i++) { -%>
<% if (typeof authors[i] == 'object') { -%>
* @author <%= authors[i].name %> [<%= authors[i].email %>]
<% } else { -%>
* <%= authors[i] -%>
<% } -%>
<% } %>
<% } else { %>
* <%= authors %>
<% } -%>
<% } %>
*/

module.exports = function(options) {
  return function({ addComponents }) {
    addComponents({
      '<%= moduleName %>': {

      }
    });
  };
};
