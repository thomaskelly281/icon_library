import { mdiSetRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SetRight(props: IconComponentProps) {
  return <Icon path={mdiSetRight} {...props} />;
}

export { mdiSetRight as path };
