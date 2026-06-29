import { mdiOwl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Owl(props: IconComponentProps) {
  return <Icon path={mdiOwl} {...props} />;
}

export { mdiOwl as path };
