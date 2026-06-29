import { mdiSummit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Summit(props: IconComponentProps) {
  return <Icon path={mdiSummit} {...props} />;
}

export { mdiSummit as path };
