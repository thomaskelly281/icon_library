import { mdiHiking } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hiking(props: IconComponentProps) {
  return <Icon path={mdiHiking} {...props} />;
}

export { mdiHiking as path };
