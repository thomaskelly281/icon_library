import { mdiLanPending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanPending(props: IconComponentProps) {
  return <Icon path={mdiLanPending} {...props} />;
}

export { mdiLanPending as path };
