import { mdiGentoo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gentoo(props: IconComponentProps) {
  return <Icon path={mdiGentoo} {...props} />;
}

export { mdiGentoo as path };
