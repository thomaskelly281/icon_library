import { mdiMowerBag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MowerBag(props: IconComponentProps) {
  return <Icon path={mdiMowerBag} {...props} />;
}

export { mdiMowerBag as path };
