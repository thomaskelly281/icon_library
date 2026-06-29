import { mdiSmartCardReader } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmartCardReader(props: IconComponentProps) {
  return <Icon path={mdiSmartCardReader} {...props} />;
}

export { mdiSmartCardReader as path };
