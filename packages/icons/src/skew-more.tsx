import { mdiSkewMore } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkewMore(props: IconComponentProps) {
  return <Icon path={mdiSkewMore} {...props} />;
}

export { mdiSkewMore as path };
