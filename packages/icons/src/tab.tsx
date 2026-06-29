import { mdiTab } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tab(props: IconComponentProps) {
  return <Icon path={mdiTab} {...props} />;
}

export { mdiTab as path };
