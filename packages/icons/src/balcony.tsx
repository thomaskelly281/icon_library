import { mdiBalcony } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Balcony(props: IconComponentProps) {
  return <Icon path={mdiBalcony} {...props} />;
}

export { mdiBalcony as path };
