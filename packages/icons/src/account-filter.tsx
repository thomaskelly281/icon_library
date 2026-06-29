import { mdiAccountFilter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountFilter(props: IconComponentProps) {
  return <Icon path={mdiAccountFilter} {...props} />;
}

export { mdiAccountFilter as path };
