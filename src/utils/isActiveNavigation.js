export const isActiveNavigation = (path, data) => {
  return data.children?.some((item) =>
    item.path === path.replace(/\/\d+$/, "") ||
    item.children?.some(
      (item2) => item2.path === path.replace(/\/\d+$/, "")
    )
  );
};
