import { mdiSetLeftRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SetLeftRight(props: IconComponentProps) {
  return <Icon path={mdiSetLeftRight} {...props} />;
}

export { mdiSetLeftRight as path };
