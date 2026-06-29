import { mdiListStatus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ListStatus(props: IconComponentProps) {
  return <Icon path={mdiListStatus} {...props} />;
}

export { mdiListStatus as path };
