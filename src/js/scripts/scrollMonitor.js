/**
 * ScrollMonitor
 */

import scrollMonitor from 'scrollmonitor';

const scrollMonitorScript = {
  cfg: {
    selectors: {
      waypoint: '[waypoint]',
      waypointTarget: '[waypoint-target]',
    },
    classes: {
      isInViewport: 'is-inViewport',
      isAnimated: 'is-animated',
    },
    els: {
      $waypoints: undefined,
      $waypointTargets: undefined,
    },
  },

  setElements() {
    this.cfg.els.$waypoints = [
      ...document.querySelectorAll(this.cfg.selectors.waypoint),
    ];
  },

  handleWaypoints(waypoints) {
    waypoints.forEach(waypoint => {
      // Create Watcher
      const elementWatcher = scrollMonitor.create(waypoint, -100);

      // Action when comes into viewport
      elementWatcher.enterViewport(() => {
        // Add class to the waypoint when comes into viewport
        waypoint.classList.add(this.cfg.classes.isInViewport);

        // Get all targets
        this.cfg.els.$waypointTargets = [
          ...waypoint.querySelectorAll(this.cfg.selectors.waypointTarget),
        ];

        console.log(waypoint);

        if (this.cfg.els.$waypointTargets.length > 0) {
          // Animate Targets if exits
          this.handleAnimateClasses(this.cfg.els.$waypointTargets);
        } else if (waypoint.hasAttribute('waypoint-target')) {
          // Animate the waypoint itself if no targets exists
          this.handleAnimateClasses([waypoint]);
        }
        // Do it just on time
        elementWatcher.destroy();
      });
    });
  },

  handleAnimateClasses(targets) {
    targets.forEach((target, index) => {
      const delay = 250 + 100 * index;
      console.log(target, index);

      if (!target.classList.contains('is-animated')) {
        setTimeout(() => {
          target.classList.add('is-animated');
        }, delay);
      }
    });
  },

  init() {
    // Set Elements
    this.setElements();

    // Handle Waypoints
    if (this.cfg.els.$waypoints) {
      this.handleWaypoints(this.cfg.els.$waypoints);
    }
  },
};

export default scrollMonitorScript;
