import { mdiAlphaZ } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaZ(props: IconComponentProps) {
  return <Icon path={mdiAlphaZ} {...props} />;
}

export { mdiAlphaZ as path };
