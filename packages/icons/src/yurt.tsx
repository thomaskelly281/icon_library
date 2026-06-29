import { mdiYurt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Yurt(props: IconComponentProps) {
  return <Icon path={mdiYurt} {...props} />;
}

export { mdiYurt as path };
