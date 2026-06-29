import { mdiStoreOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreOff(props: IconComponentProps) {
  return <Icon path={mdiStoreOff} {...props} />;
}

export { mdiStoreOff as path };
