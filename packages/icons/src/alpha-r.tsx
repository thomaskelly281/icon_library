import { mdiAlphaR } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaR(props: IconComponentProps) {
  return <Icon path={mdiAlphaR} {...props} />;
}

export { mdiAlphaR as path };
