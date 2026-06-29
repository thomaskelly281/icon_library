import { mdiAt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function At(props: IconComponentProps) {
  return <Icon path={mdiAt} {...props} />;
}

export { mdiAt as path };
