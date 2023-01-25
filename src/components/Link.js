const Link = ({ className, href, children }) => {
  const onClick = (evt) => {
    if (evt.metaKey || evt.ctrlKey) {
      return;
    }

    evt.preventDefault();
    window.history.pushState({}, "", href);

    const navEvt = new PopStateEvent("popstate");
    window.dispatchEvent(navEvt);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
