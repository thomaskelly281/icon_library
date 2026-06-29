import { mdiStomach } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Stomach(props: IconComponentProps) {
  return <Icon path={mdiStomach} {...props} />;
}

export { mdiStomach as path };
