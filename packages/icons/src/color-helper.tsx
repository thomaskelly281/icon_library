import { mdiColorHelper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ColorHelper(props: IconComponentProps) {
  return <Icon path={mdiColorHelper} {...props} />;
}

export { mdiColorHelper as path };
