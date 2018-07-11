// clears the dom

const clear = (containerID)  => {
    const container = document.querySelector(containerID);
    while (container.firstElementChild) {
      container.removeChild(container.firstElementChild)
    };
  };

  module.exports = clear();