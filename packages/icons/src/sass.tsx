import { mdiSass } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sass(props: IconComponentProps) {
  return <Icon path={mdiSass} {...props} />;
}

export { mdiSass as path };
