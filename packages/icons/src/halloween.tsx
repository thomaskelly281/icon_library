import { mdiHalloween } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Halloween(props: IconComponentProps) {
  return <Icon path={mdiHalloween} {...props} />;
}

export { mdiHalloween as path };
