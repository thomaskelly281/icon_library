import { mdiAlphaIBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaIBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaIBox} {...props} />;
}

export { mdiAlphaIBox as path };
