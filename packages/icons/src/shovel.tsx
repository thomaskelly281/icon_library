import { mdiShovel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Shovel(props: IconComponentProps) {
  return <Icon path={mdiShovel} {...props} />;
}

export { mdiShovel as path };
