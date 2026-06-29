import { mdiEye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Eye(props: IconComponentProps) {
  return <Icon path={mdiEye} {...props} />;
}

export { mdiEye as path };
