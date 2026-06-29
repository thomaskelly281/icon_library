import { mdiPound } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pound(props: IconComponentProps) {
  return <Icon path={mdiPound} {...props} />;
}

export { mdiPound as path };
