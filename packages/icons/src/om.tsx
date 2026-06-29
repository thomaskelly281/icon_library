import { mdiOm } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Om(props: IconComponentProps) {
  return <Icon path={mdiOm} {...props} />;
}

export { mdiOm as path };
