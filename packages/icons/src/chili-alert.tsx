import { mdiChiliAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChiliAlert(props: IconComponentProps) {
  return <Icon path={mdiChiliAlert} {...props} />;
}

export { mdiChiliAlert as path };
