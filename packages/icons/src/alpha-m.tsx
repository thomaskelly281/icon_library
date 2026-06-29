import { mdiAlphaM } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaM(props: IconComponentProps) {
  return <Icon path={mdiAlphaM} {...props} />;
}

export { mdiAlphaM as path };
