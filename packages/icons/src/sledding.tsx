import { mdiSledding } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sledding(props: IconComponentProps) {
  return <Icon path={mdiSledding} {...props} />;
}

export { mdiSledding as path };
