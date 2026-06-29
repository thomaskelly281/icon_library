import { mdiWaze } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Waze(props: IconComponentProps) {
  return <Icon path={mdiWaze} {...props} />;
}

export { mdiWaze as path };
