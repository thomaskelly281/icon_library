import { mdiAlphaGBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaGBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaGBox} {...props} />;
}

export { mdiAlphaGBox as path };
