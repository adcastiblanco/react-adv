import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

// const Lazy1 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyLoad1" */ "../01-lazyload/pages/LazyPage1")
// );
// const Lazy2 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyLoad2" */ "../01-lazyload/pages/LazyPage2")
// );
// const Lazy3 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyLoad3" */ "../01-lazyload/pages/LazyPage3")
// );

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);
export const routes: Route[] = [
  {
    to: "/lazyload",
    path: "lazyload",
    Component: LazyLayout,
    name: "LazyLayout Nested",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy Loading",
  },
];
