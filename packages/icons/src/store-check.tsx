import { mdiStoreCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreCheck(props: IconComponentProps) {
  return <Icon path={mdiStoreCheck} {...props} />;
}

export { mdiStoreCheck as path };
