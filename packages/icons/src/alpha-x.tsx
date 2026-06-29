import { mdiAlphaX } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaX(props: IconComponentProps) {
  return <Icon path={mdiAlphaX} {...props} />;
}

export { mdiAlphaX as path };
