import { mdiBookRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookRefresh(props: IconComponentProps) {
  return <Icon path={mdiBookRefresh} {...props} />;
}

export { mdiBookRefresh as path };
