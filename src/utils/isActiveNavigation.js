export const isActiveNavigation = (path, data) => {
  const x = data.children?.some((item) =>
    item.path === path.replace(/\/\d+$/, "")
      ? true
      : item.children?.some(
          (item2) => item2.path === path.replace(/\/\d+$/, ""),
        ),
  );

  return x;
};
