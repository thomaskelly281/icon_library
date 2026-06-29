import { mdiFlowerTulip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlowerTulip(props: IconComponentProps) {
  return <Icon path={mdiFlowerTulip} {...props} />;
}

export { mdiFlowerTulip as path };
