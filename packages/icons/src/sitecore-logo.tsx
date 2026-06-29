import { Icon, type IconComponentProps } from "./icon.js";

const path = "M12 2 2 7v10l10 5 10-5V7zm0 2.18 6.9 3.45-6.9 3.46-6.9-3.46zM4 8.82l7 3.5v6.98l-7-3.5zm9 10.48v-6.98l7-3.5v6.98z";

export function SitecoreLogo(props: IconComponentProps) {
  return <Icon path={path} {...props} />;
}

export { path };
