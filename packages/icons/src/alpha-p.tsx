import { mdiAlphaP } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaP(props: IconComponentProps) {
  return <Icon path={mdiAlphaP} {...props} />;
}

export { mdiAlphaP as path };
