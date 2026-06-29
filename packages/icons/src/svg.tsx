import { mdiSvg } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Svg(props: IconComponentProps) {
  return <Icon path={mdiSvg} {...props} />;
}

export { mdiSvg as path };
