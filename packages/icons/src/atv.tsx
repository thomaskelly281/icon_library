import { mdiAtv } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Atv(props: IconComponentProps) {
  return <Icon path={mdiAtv} {...props} />;
}

export { mdiAtv as path };
