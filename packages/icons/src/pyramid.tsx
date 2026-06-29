import { mdiPyramid } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pyramid(props: IconComponentProps) {
  return <Icon path={mdiPyramid} {...props} />;
}

export { mdiPyramid as path };
