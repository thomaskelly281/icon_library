import { mdiKeg } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Keg(props: IconComponentProps) {
  return <Icon path={mdiKeg} {...props} />;
}

export { mdiKeg as path };
