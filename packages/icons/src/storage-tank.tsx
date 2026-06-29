import { mdiStorageTank } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StorageTank(props: IconComponentProps) {
  return <Icon path={mdiStorageTank} {...props} />;
}

export { mdiStorageTank as path };
