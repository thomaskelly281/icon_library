import { mdiShoeSneaker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShoeSneaker(props: IconComponentProps) {
  return <Icon path={mdiShoeSneaker} {...props} />;
}

export { mdiShoeSneaker as path };
