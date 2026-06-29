import { mdiFileEye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileEye(props: IconComponentProps) {
  return <Icon path={mdiFileEye} {...props} />;
}

export { mdiFileEye as path };
