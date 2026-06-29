import { mdiPiano } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Piano(props: IconComponentProps) {
  return <Icon path={mdiPiano} {...props} />;
}

export { mdiPiano as path };
