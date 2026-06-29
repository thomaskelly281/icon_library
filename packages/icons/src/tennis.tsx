import { mdiTennis } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tennis(props: IconComponentProps) {
  return <Icon path={mdiTennis} {...props} />;
}

export { mdiTennis as path };
