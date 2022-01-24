export const globalSearchToggleVariants = {
  initial: {
    transition: {
      duration: 0.5,
    },
  },
  expanded: {
    transition: {
      duration: 0.5,
    },
  },
};

export const globalSearchIconVariants = {
  initial: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  expanded: {
    opacity: 0,
    width: 0,
    height: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const globalSearchVariants = {
  initial: {
    width: 0,
    transition: {
      duration: 0.5,
    },
  },
  expanded: {
    width: 'auto',
    transition: {
      duration: 0.5,
    },
  },
};
