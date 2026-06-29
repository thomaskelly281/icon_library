import { mdiTire } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tire(props: IconComponentProps) {
  return <Icon path={mdiTire} {...props} />;
}

export { mdiTire as path };
