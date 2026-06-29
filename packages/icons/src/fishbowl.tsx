import { mdiFishbowl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fishbowl(props: IconComponentProps) {
  return <Icon path={mdiFishbowl} {...props} />;
}

export { mdiFishbowl as path };
