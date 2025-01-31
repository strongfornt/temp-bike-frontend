export const findRouteName = (routes:any, targetPath:any) : string | undefined => {
  for (const route of routes) {
    if (route.label?.props?.to === targetPath) {
      return route.key;
    }

    if (route.children) {
      for (const child of route.children) {
        if (child.label?.props?.to === targetPath) {
          return child.key;
        }
      }
    }
  }

  return undefined; // Explicit return if no match is found

  };