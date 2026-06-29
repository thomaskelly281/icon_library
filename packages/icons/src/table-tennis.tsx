import { mdiTableTennis } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableTennis(props: IconComponentProps) {
  return <Icon path={mdiTableTennis} {...props} />;
}

export { mdiTableTennis as path };
