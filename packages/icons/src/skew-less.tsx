import { mdiSkewLess } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkewLess(props: IconComponentProps) {
  return <Icon path={mdiSkewLess} {...props} />;
}

export { mdiSkewLess as path };
