import { mdiAlphaQ } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaQ(props: IconComponentProps) {
  return <Icon path={mdiAlphaQ} {...props} />;
}

export { mdiAlphaQ as path };
