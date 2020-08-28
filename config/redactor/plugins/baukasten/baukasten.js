/* eslint-disable no-var,object-shorthand,func-names,no-undef,no-param-reassign */
(function($R) {
  $R.add('plugin', 'baukasten', {
    init: function(app) {
      this.app = app;
      this.toolbar = app.toolbar;
      this.selection = app.selection;

      this.styles = {
        marked: {
          title: 'Marked',
          api: 'module.inline.format',
          args: {
            tag: 'mark',
            class: 'rd-mark',
          },
        },
        variable: {
          title: 'Variable',
          api: 'module.inline.format',
          args: {
            tag: 'var',
            class: 'rd-var',
          },
        },
        shortcut: {
          title: 'Shortcut',
          api: 'module.inline.format',
          args: {
            tag: 'kbd',
            class: 'rd-kbd',
          },
        },
        superscript: {
          title: 'Superscript',
          api: 'module.inline.format',
          args: {
            tag: 'sup',
            class: 'rd-sup',
          },
        },
        subscript: {
          title: 'Subscript',
          api: 'module.inline.format',
          args: {
            tag: 'sub',
            class: 'rd-sub',
          },
        },
        deleted: {
          title: 'Deleted',
          api: 'module.inline.format',
          args: {
            tag: 'del',
            class: 'rd-del',
          },
        },
        smallPrint: {
          title: 'Small',
          api: 'module.inline.format',
          args: {
            tag: 'small',
            class: 'rd-small',
          },
        },
        favorite: {
          title: 'Favorite',
          api: 'module.inline.format',
          args: {
            tag: 'span',
            class: 'rd-favorite favorite',
            type: 'toggle',
          },
        },
        clearStyles: {
          title: 'Clear Styles',
          api: 'module.inline.clearformat',
        },
      };
    },

    start: function() {
      var dropdownData = {
        primary: {
          title: 'Link Primary',
          api: 'plugin.baukasten.togglePrimary',
        },
        secondary: {
          title: 'Link Secondary',
          api: 'plugin.baukasten.toggleSecondary',
        },
        outlined: {
          title: 'Link Outlined',
          api: 'plugin.baukasten.toggleOutlined',
        },
        lookslikeh2: {
          title: 'Looks like H2',
          api: 'plugin.baukasten.toogleHeadingsh2',
        },
        lookslikeh3: {
          title: 'Looks like H3',
          api: 'plugin.baukasten.toogleHeadingsh3',
        },
        lookslikeh4: {
          title: 'Looks like H4',
          api: 'plugin.baukasten.toogleHeadingsh4',
        },
        lookslikeh5: {
          title: 'Looks like H5',
          api: 'plugin.baukasten.toogleHeadingsh5',
        },
        lookslikeh6: {
          title: 'Looks like H6',
          api: 'plugin.baukasten.toogleHeadingsh6',
        },
      };

      for (var key in this.styles) {
        var style = this.styles[key];
        dropdownData[key] = {
          title: style.title,
          args: style.args,
          api: style.api,
        };
      }

      var btnData = {
        title: 'Styling',
      };

      // create the button
      var $button = this.toolbar.addButtonAfter('italic', 'baukasten', btnData);

      // set dropdown
      $button.setDropdown(dropdownData);
    },

    togglePrimary: function() {
      this.toggleLinkStyles('c-link--primary', 'a');
    },

    toggleSecondary: function() {
      this.toggleLinkStyles('c-link--secondary', 'a');
    },

    toggleOutlined: function() {
      this.toggleLinkStyles('c-link--outlined', 'a');
    },

    toogleHeadingsh2: function() {
      this.toggleHeadingStyles('c-headline--h2', [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h5',
      ]);
    },

    toogleHeadingsh3: function() {
      this.toggleHeadingStyles('c-headline--h3', [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h5',
      ]);
    },

    toogleHeadingsh4: function() {
      this.toggleHeadingStyles('c-headline--h4', [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h5',
      ]);
    },

    toogleHeadingsh5: function() {
      this.toggleHeadingStyles('c-headline--h5', [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h5',
      ]);
    },

    toogleHeadingsh6: function() {
      this.toggleHeadingStyles('c-headline--h6', [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h5',
      ]);
    },

    // Heading Styles
    toggleHeadingStyles: function(classToToggle, els) {
      var selectedHeadings = this.selection.getBlocks({
        first: true,
        tags: els,
      });

      selectedHeadings.forEach(function(heading) {
        if (heading.classList.contains(classToToggle)) {
          heading.classList.remove(classToToggle);
        } else {
          heading.classList = [classToToggle];
        }
      });
    },

    // Link Styles
    toggleLinkStyles: function(classToToggle, element) {
      var selectedLinks = this.selection.getInlines({
        all: true,
        tags: [element],
      });

      selectedLinks.forEach(function(element) {
        // Cross-browser toggle class
        if (element.classList) {
          if (element.classList.contains(classToToggle)) {
            element.classList.remove(classToToggle);
          } else {
            element.classList = [classToToggle];
          }
        }
      });
    },
  });
})(Redactor);
