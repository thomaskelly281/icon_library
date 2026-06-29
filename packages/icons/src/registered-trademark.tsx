import { mdiRegisteredTrademark } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RegisteredTrademark(props: IconComponentProps) {
  return <Icon path={mdiRegisteredTrademark} {...props} />;
}

export { mdiRegisteredTrademark as path };
