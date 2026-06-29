import { mdiTrademark } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Trademark(props: IconComponentProps) {
  return <Icon path={mdiTrademark} {...props} />;
}

export { mdiTrademark as path };
