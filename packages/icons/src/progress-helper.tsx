import { mdiProgressHelper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProgressHelper(props: IconComponentProps) {
  return <Icon path={mdiProgressHelper} {...props} />;
}

export { mdiProgressHelper as path };
